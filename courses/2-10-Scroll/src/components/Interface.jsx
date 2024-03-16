import { foodItems } from "../App";

export const Interface = () => {
  return (
    <>
      <section className="page">
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
