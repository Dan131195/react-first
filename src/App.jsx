// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import FunctionalComponent from "./components/FunctionalComponents";
import ClassComponent from "./components/ClassComponent";
import SayHello from "./components/SayHello";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <FunctionalComponent></FunctionalComponent>
      <hr />
      <ClassComponent></ClassComponent>
      <hr />
      <SayHello personName="Daniele"></SayHello>
      <hr />
      <hr />
      <h2>ESERCIZIO 1</h2>
      <ButtonComponent buttonNumber="Button 1"></ButtonComponent>
      <ButtonComponent buttonNumber="Button 2"></ButtonComponent>
      <ButtonComponent buttonNumber="Button 3"></ButtonComponent>
      <hr />
      <hr />
      <h2>ESERCIZIO 2</h2>
      <ImageComponent
        src="https://cdn.wallpapersafari.com/64/77/S1giRy.jpg"
        alt="Bahamas beach"
      ></ImageComponent>
      <ImageComponent
        src="https://i0.wp.com/whitecoatsoftheroundtable.com/wp-content/uploads/2023/03/hd-wallpaper-nature-wallpaper-hills-2836301.jpg?resize=800%2C600&ssl=1"
        alt="Plains"
      ></ImageComponent>
      <ImageComponent
        src="https://www.martulliviaggi.com/wp-content/uploads/2024/07/big-ticket-image-65ef1da4cba4a626865154-cropped600-400.png"
        alt="Dolomiti Sunset"
      ></ImageComponent>

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
