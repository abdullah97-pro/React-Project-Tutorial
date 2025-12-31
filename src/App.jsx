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
// import UserList from "./components/UserList";
import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";
import FruitList from "./components/FruitList";
import Message from "./components/Message";
import Button from "./components/Button";
import Header from "./components/Header";

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
      {/* <PreviousValue /> */}
      {/* <UserList /> */}
      {/* <ControlledForm/>
      <UncontrolledForm /> */}
      {/* <FruitList />
      <Message isLoggedIn = "" /> */}
      {/* <Button/> */}
      {/* <Header>
        <h1>Composition Pattern </h1>
      </Header> */}
      <Header header="Header" content="Dashboard" />
    </>
  );
}


// import { useState, useCallback, memo } from "react";

// const TaskButton = memo(({ onAdd }) => {
//   return <button onClick={onAdd}>Add Task</button>;
// });

// function App() {
//   const [tasks, setTasks] = useState([]);

//   const addTask = useCallback(() => {
//     setTasks(prev => [...prev, `Task ${prev.length + 1}`]);
//   }, []);

//   return (
//     <>
//       <TaskButton onAdd={addTask} />
//       <ul>
//         {tasks.map((task, i) => <li key={i}>{task}</li>)}
//       </ul>
//     </>
//   );
// }



// import { memo, useState } from "react";

// const Button = memo(({ onClick }) => {
//   console.log("Button rendered");
//   return <button onClick={onClick}>Click</button>;
// });

// function App() {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     console.log("Clicked");
//   }, []);

//   return (
//     <>
//       <p>{count}</p>
//       <Button onClick={handleClick} />
//       <button onClick={() => setCount(count + 1)}>Update Count</button>
//     </>
//   );
// }


// import { useState, useCallback } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const increment = useCallback(() => {
//     setCount(prev => prev + 1);
//   }, []);

//   return (
//     <>
//     <p>{count}</p>
//       <button onClick={increment}>Increase</button>
//     </>
//   );
// }









// import { useMemo, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   // const total = slowCalculation(count);

//   const total = useMemo(() => {
//     return slowCalculation(count);
//   },[count]);

//   return (
//     <>
//       <p>Total: {total}</p>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </>
//   );
// }

// function slowCalculation(num) {
//   console.log('calculating...');

//   let result = 0;
//   for (let i = 0; i < num * 10; i++) {
//     result += Math.random();
//   }

//   return result;
  
// }






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
