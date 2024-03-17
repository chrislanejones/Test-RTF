import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { foodItems } from "../App";

export const Interface = () => {
  const introductionRef = useRef();
  const scrollData = useScroll();

  useFrame(() => {
    introductionRef.current.style.opacity = 1 - scrollData.range(0, 0.1);
  });
  return (
    <>
      <section className="page" ref={introductionRef}>
        <div className="introduction">
          <p className="introduction__label">
            Welcome to Panda Sushi, scroll down to discover our delicious
            dishes!
            <br />
            👇
          </p>
        </div>
      </section>
      {foodItems.map((foodItem, index) => (
        <section key={index} className="page">
          <div className="food">
            <h2 className="food__title">{foodItem.name}</h2>
            <p className="food__description">{foodItem.description}</p>
          </div>
        </section>
      ))}
    </>
  );
};
