import { useRemote } from "../hooks/useRemote";

export function Remote() {
  const { setMode } = useRemote();

  return (
    <div className="remote">
      <div className="remote__top">SONU</div>
      <div className="remote__controls">
        <div className="remote__controls__button" onClick={() => setMode("tv")}>
          TV
        </div>
        <div
          className="remote__controls__button"
          onClick={() => setMode("corner")}
        >
          CORNER
        </div>
        <div
          className="remote__controls__button"
          onClick={() => setMode("top")}
        >
          TOP
        </div>
        <div
          className="remote__controls__button"
          onClick={() => setMode("front")}
        >
          FRONT
        </div>
      </div>
    </div>
  );
}
