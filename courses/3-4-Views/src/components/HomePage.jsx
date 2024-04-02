import { useEffect, useState } from "react";
import { Hero } from "./Hero";
import { Canvas } from "@react-three/fiber";

export const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [currentService, setCurrentService] = useState(0);

  return (
    <main>
      <Canvas
        className="canvas"
        camera={{ position: [0, 0, 1.5], fov: 30 }}
      ></Canvas>
      <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
        <div className="header__menu">
          <a href="#hero" className="header__menu__item">
            Home
          </a>
          <a href="#services" className="header__menu__item">
            Services
          </a>
          <a href="#team" className="header__menu__item">
            Team
          </a>
          <a href="#portfolio" className="header__menu__item">
            Portfolio
          </a>
          <a href="#contact" className="header__menu__item">
            Contact
          </a>
        </div>
      </header>

      <Hero />
      <section className="services" id="services">
        <h2 className="services__title">Our Services</h2>
        <div className="services__slider">
          <div className="services__slider__display"></div>
          <div className="services__slider__list">
            <div
              className={`services__slider__list__service ${
                currentService === 0
                  ? "services__slider__list__service--active"
                  : ""
              }`}
              onClick={() => setCurrentService(0)}
            >
              <h3 className="services__slider__list__service__title">
                Web/Mobile App Development
              </h3>
              <p className="services__slider__list__service__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quas, voluptate, voluptas quae quod
                quibusdam voluptatibus quia quos molestiae natus? Quisquam
                voluptatum, quas, voluptate, voluptas quae quod quibusdam
                voluptatibus quia quos molestiae natus?
              </p>
            </div>
            <div
              className={`services__slider__list__service ${
                currentService === 1
                  ? "services__slider__list__service--active"
                  : ""
              }`}
              onClick={() => setCurrentService(1)}
            >
              <h3 className="services__slider__list__service__title">
                VR/AR App Development
              </h3>
              <p className="services__slider__list__service__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quas, voluptate, voluptas quae quod
                quibusdam voluptatibus quia quos molestiae natus? Quisquam
                voluptatum, quas, voluptate, voluptas quae quod quibusdam
                voluptatibus quia quos molestiae natus?
              </p>
            </div>
            <div
              className={`services__slider__list__service ${
                currentService === 2
                  ? "services__slider__list__service--active"
                  : ""
              }`}
              onClick={() => setCurrentService(2)}
            >
              <h3 className="services__slider__list__service__title">
                Training
              </h3>
              <p className="services__slider__list__service__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quas, voluptate, voluptas quae quod
                quibusdam voluptatibus quia quos molestiae natus? Quisquam
                voluptatum, quas, voluptate, voluptas quae quod quibusdam
                voluptatibus quia quos molestiae natus?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="team" id="team">
        <h2 className="team__title">Our Team</h2>
        <p className="team__subtitle">
          We are a team of 3D web and mobile developers, designers and artists.
          Our goal is to build the best 3D experiences to make your business
          stand out.
        </p>
        <div className="team__member">
          <div className="team__member__body">
            <p className="team__member__body__name">John Doe</p>
            <p className="team__member__body__title">CEO</p>
            <p className="team__member__body__description">
              ‟Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quas, voluptate, voluptas quae quod quibusdam
              voluptatibus quia quos molestiae natus?”
            </p>
          </div>
          <div className="team__member__display team__member__display--blue"></div>
        </div>
        <div className="team__member team__member--reverse">
          <div className="team__member__body">
            <p className="team__member__body__name">Julia Doe</p>
            <p className="team__member__body__title">Lead Developer</p>
            <p className="team__member__body__description">
              ‟Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quas, voluptate, voluptas quae quod quibusdam
              voluptatibus quia quos molestiae natus?”
            </p>
          </div>
          <div className="team__member__display team__member__display--pink"></div>
        </div>
        <div className="team__member">
          <div className="team__member__body">
            <p className="team__member__body__name">Linda Doe</p>
            <p className="team__member__body__title">3D Artist</p>
            <p className="team__member__body__description">
              ‟Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quas, voluptate, voluptas quae quod quibusdam
              voluptatibus quia quos molestiae natus?”
            </p>
          </div>
          <div className="team__member__display team__member__display--orange"></div>
        </div>
      </section>
      <section className="portfolio" id="portfolio">
        <h2 className="portfolio__title">Our Portfolio</h2>
        <p className="portfolio__subtitle">
          We have worked on amazing projects for our clients. Here are some of
          them.
        </p>
        <div className="portfolio__display"></div>
      </section>
      <section className="contact" id="contact">
        <h2 className="contact__title">Contact Us</h2>
        <form className="contact__form">
          <div>
            <input
              className="contact__form__input"
              type="text"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              className="contact__form__input"
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <textarea
              className="contact__form__textarea"
              placeholder="Message"
            ></textarea>
          </div>
          <div>
            <button className="contact__form__button">Send</button>
          </div>
        </form>
      </section>
    </main>
  );
};
