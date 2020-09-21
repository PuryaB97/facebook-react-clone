import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
// import Widgets from "./Widgets";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login></Login>
      ) : (
        <>
          <Header></Header>
          <div className="app__body">
            <Sidebar></Sidebar>
            <Feed></Feed>
            {/* <Widgets></Widgets> */}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
