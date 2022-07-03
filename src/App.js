import React from "react";
// import logo from "./logo.svg";
import "./App.css";


function App() {
  const persons = [{ name: "SM. Zahurul Islam", age: 26 }];
  const persons1 = [{ name: "Nadira Islam", age: 23 }];

  const products = [
    { name: "Photoshop", price: "$60.70" },
    { name: "PDF Reader", price: "$6.70" },
    { name: "illustrator", price: "$10.20" },
    { name: "Windows-11", price: "$300.20" },
    { name: "Windows-10", price: "$200.20" },
  ];
  const friend = [{ name: "Rana", age: "33", job: "business" }];
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>
          <p>Iam a React Person</p>
          <p>Learn React JS</p>
          <div>
            <FriendsName friend={friend[0]}></FriendsName>
          </div>
          <div>
            <Product
              name={products[0].name}
              price={products[0].price}
            ></Product>
            <Product
              name={products[1].name}
              price={products[1].price}
            ></Product>
            <Product
              name={products[2].name}
              price={products[2].price}
            ></Product>
            <Product
              name={products[3].name}
              price={products[3].price}
            ></Product>
             <Product
              name={products[4].name}
              price={products[4].price}
            ></Product>
          </div>

          <div>
            <Person name={persons[0].name} age={persons[0].age}></Person>
            <Person name={persons1[0].name} age={persons1[0].age}></Person>
          </div>
        </div>
      </header>
    </div>
  );
}
// Componante
function FriendsName(props) {
  const friendsStyle = {
    color: "salmon",
    border: "1px solid grey",
    borderRadius: "10px",
    backgroundColor: "lightgrey",
    margin: "5px",
    height: "250px",
    width: "250px",
    float: "left",
  };
  const { age, job } = props.friend;
  return (
    <div style={friendsStyle}>
      <h4>Name :{props.friend.name} </h4>
      <h5>Age :{age} </h5>
      <h6>Job : {job}</h6>
    </div>
  );
}
// Componante :01
function Product(props) {
  const productStyle = {
    color: "salmon",
    border: "1px solid grey",
    borderRadius: "10px",
    backgroundColor: "lightgrey",
    margin: "5px",
    height: "250px",
    width: "250px",
    float: "left",
  };

  const buttonStyle = {
    color: "#000",
    backgroundColor: "#f79307",
    fontSize: "16px",
    fontWeight: "bolder",
    borderRadius: "10px",
    padding: "10px",
  };
  return (
    <div style={productStyle}>
      <h5>Name: {props.name}</h5>
      <h4>Price: {props.price}</h4>
      <button style={buttonStyle}>Bay Now</button>
    </div>
  );
}
// Componante:02
function Person(props) {
  const StyleCss = {
    color: "tomato",
    backgroundColor: "#454545",
    border: "5px solid gold",
    margin: "10px",
    boxSizing: "border-boxSizing",
    borderRadius: "10px",
    height: "200px",
    width: "300px",
    float: "left",
  };
  return (
    <div style={StyleCss}>
      <h5>Name : {props.name}</h5>
      <p style={{ color: "white" }}>Age : {props.age}</p>
    </div>
  );
}

export default App;
