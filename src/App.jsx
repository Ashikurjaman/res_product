import './App.css'
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
    
    <>
    <Header></Header>
    <Menu></Menu>
      <Footer></Footer>
    </>
  )
}

function Menu() {
  const pizzas = pizzaData;
  const numPizza =pizzas.length;

  return (
    <main className='menu'>   
    {
      numPizza > 0 ?(
        <>
          <p>Authentic Italian cuisine. 6 creative dishes to choose from. All
          from our stone oven, all organic, all delicious.</p>

          <ul className='pizzas'>
          {
            pizzas.map(pizza =>
              <Pizza pizzaObj ={pizza} key={pizza.name} ></Pizza>
              
              )
          }
          </ul>

        </>

      ) :(
        <p>We're still working on our menu. Please come back later :)</p>
      )
    }
    
    </main>
    
  )
}

function Pizza({pizzaObj}){
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
      <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price} </span>
      </div>
    </li>
  )
}

function Header(){
  return(
    <header className='header'>
    <h1>Fast React Pizza Co.</h1>
  </header>
  )
}

function Footer(){
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return(
    <>
    <footer className='footer'>
    {
      isOpen ?(
        <Order isOpen={openHour} closeHour={closeHour} ></Order>
      )
      : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
          </p>
      )
    }
    </footer>
    </>
  )
}

function Order(props){
  return(
    <>
      <p>We're open from {props.isOpen}:00 to {props.closeHour}:00. Come visit us or order
        online.</p>
        <button className='btn'>Order Now</button>
    </>
  )
}



export default App
