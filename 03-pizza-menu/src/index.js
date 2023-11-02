import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = { color: "red", fontSize: "32px", textTransform: "uppercase" };
  return (
    <>
      <header className="header">
        <h1 className="header">Fast React Pizza Co.</h1>
      </header>
    </>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  // const pizzas = null;
  // const numPizzas = 0;

  // return (
  //   <main className="menu">
  //     <h2>Our Menu</h2>
  //     {/* {pizzas && ( // As empty array is not a false value, it will try to render the list */}
  //     {numPizzas && ( // Here it will show 0 because now result of operation becomes 0.
  //       // Hence we should never use numeric results here and use true/false nature operations while usign short circuiting
  //       <ul className="pizzas">
  //         {pizzas.map((pizza) => (
  //           <Pizza pizzaObject={pizza} key={pizza.name} />
  //         ))}
  //         {/* Using anything else here except map will not work becuase it will need a new array which react does */}
  //       </ul>
  //     )}
  //   </main>
  // );

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our store oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObject={pizza} key={pizza.name} />
            ))}
          </ul>
        </> // This is known as react fragment,
      ) : (
        //if we have used any div or anything else instead, that would have disturbed our styling
        <p>We are still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObject }) {
  //This is known as props destructuring
  console.log(pizzaData);
  //Always decrate the component functions at the top level

  // if (pizzaObject.soldOut) return null;
  //Each function can resturn only one result hence if the condiotn is satisfied, the content below will not be returned

  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        {/* {pizzaObject.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObject.price}</span>
        )} */}
        {/* Instead of rendering entire span like above method, we can reder only text inside span, which looks cleaner  */}
        <span>{pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 20;
  const closeHour = 23;

  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  //   if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  //   else alert("Sorry! We're closed!");

  return (
    // <footer className="footer">
    //   {/* {new Date().toLocaleTimeString()}. We're currently open! */}
    //   {isOpen && (
    //     <div className="order">
    //       <p>We're open until {closeHour}:00. Come visit us or order online</p>
    //       <button className="btn">Order</button>
    //     </div>
    //   )}
    // </footer>

    <footer className="footer">
      {/* {new Date().toLocaleTimeString()}. We're currently open! */}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
  //   return React.createElement("footer", null, "We're currently open!");
}

function Order({ closeHour, openHour }) {
  //This is known as props destructuring
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 until {closeHour}:00. Come visit us or
        order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// const Test = () => {

// }

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode> //Strict mode will render each components twice to check for bugs or outdated dependency use
  //It's optional but recommended
);

// // React before 18
// React.render(<App/>, document.getElementById("root"));
