import { forwardRef } from "react";

export const Hero = forwardRef(({}, ref) => {
  return (
    <section className="hero" id="hero" ref={ref}>
      <div className="hero__body">
        <h1 className="hero__body__title">3D Web Creative Agency </h1>
        <p className="hero__body__subtitle">
          We build 3D web and mobile applications
        </p>
      </div>
    </section>
  );
});
