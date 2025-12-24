import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import Form from "./components/Form";
import User from "./components/Users";
import Timer from "./components/Timer";
import WindowSize from "./components/WindowSize";
import FocusInput from "./components/FocusInput";
import RenderCounter from "./components/RenderCounter";
import PreviousValue from "./components/PreviousValue";

function App() {
  return (
    <>
      {/* <Welcome /> */}
      {/* <Counter /> */}
      {/* <Form /> */}
      {/* <User /> */}
      {/* <Timer /> */}
      {/* <WindowSize /> */}
      {/* <FocusInput /> */}
      {/* <RenderCounter /> */}
      <PreviousValue />
    </>
  );
}



// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Loginform from './components/LoginForm'

// function PageLayout({header,content,footer}) {
//   return (
//     <>
//       <header>{header}</header>
//       <main>{content}</main>
//       <footer>{footer}</footer>
//     </>
//   );
// }

// function Card({title, children}) {
//   return (
//     <div className="card">
//       <h1>{title}</h1>
//       {children}
//     </div>
//   );
// }

// function App() {
//   return (
//     <>
//       {/* <Header /> */}

//       {/* <Card title={"Profile"}>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis inventore suscipit adipisci accusamus recusandae veritatis quasi cupiditate praesentium illo? Debitis officia dolorum repellat vitae rerum in iusto illum tempora impedit.
//       </p>
//       </Card> */}


//       {/* <Footer /> */}

//       <PageLayout 
//       header={<h1>Dashboard</h1>} 
//       content={<Card title={"Profile"}>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis inventore suscipit adipisci accusamus recusandae veritatis quasi cupiditate praesentium illo? Debitis officia dolorum repellat vitae rerum in iusto illum tempora impedit.
//       </p>
//       </Card>}
//       footer={<small>&copy; 2025</small>}></PageLayout>
      
//     </>
//   );
// }


// import { useState } from 'react';
// import Loginform from './components/LoginForm'

// function Child ({value, onChange}) {
//   return <input value={value} onChange={e => onChange(e.target.value)} />
// }
// function App() {
//   const [text, setText] = useState("");
//   return (
//     // <Loginform />
//     <>
//       <h1>{text}</h1>

//       <Child value={text} onChange={setText} />
//     </>
//   )
// }


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

// function Button({ onClick }) {
//   return <button onClick={onClick}>Click Me</button>;
// }

// function App() {
//   const handleClick = () => alert("Button clicked!");
//   return <Button onClick={handleClick} />;
// }


// import { useState } from "react";

// function App(){
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <p>Clicked {count}</p>
//       <button onClick={() => setCount(count + 3)}>Increase</button>
//     </>
//   )
// }

// import { useState } from "react";

// function App() {

// }

export default App;
