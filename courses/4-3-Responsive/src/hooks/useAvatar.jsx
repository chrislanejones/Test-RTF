import { useMobile } from "../hooks/useMobile";

export function Avatar(props) {
  // ...

  const scrollData = useScroll();
  const lastScroll = useRef(0);
  const { isMobile } = useMobile();

  useFrame(() => {
    const scrollDelta = scrollData.offset - lastScroll.current;
    let rotationTarget = 0;
    if (Math.abs(scrollDelta) > 0.00001) {
      setAnimation("Walking");
      if (scrollDelta > 0) {
        rotationTarget = isMobile ? Math.PI / 2 : 0;
      } else {
        rotationTarget = isMobile ? -Math.PI / 2 : Math.PI;
      }
    } else {
      setAnimation("Idle");
    }
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      rotationTarget,
      0.1
    );
    lastScroll.current = scrollData.offset;
  });

  // ...
}
// ...
