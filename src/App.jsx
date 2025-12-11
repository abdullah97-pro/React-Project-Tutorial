// function Greeting(props) {
//   return <h1>Welcome to {props.name}</h1>
// }

// function App() {
//   // const items = ["Apple","Mango","Graps"];
//   // return (
//   //   <>
//   //     <h1>Fruits</h1>
//   //     {/* <ul>
//   //       {items.map(fruit => <li>{fruit}</li>)}
//   //     </ul> */}
//   //     <ul>
//   //       {items.map(fruit => <li key={fruit}> {fruit}</li>)}
//   //     </ul>
//   //   </>
//   // )

//   return <Greeting name="React.js" />
// }

function Button({ onClick }) {
  return <button onClick={onClick}>Click Me</button>;
}

function App() {
  const handleClick = () => alert("Button clicked!");
  return <Button onClick={handleClick} />;
}


export default App;
