import React from "react";
import logo from "./logo.svg";
// import './App.css';
import "./assets/styles.css";

function App() {
  const HorizontalScrll = () => (
    <div class="grid grid-flow-col gap-2 bg-white h-full overflow-x-scroll ">
      <div
        className="bg-red-600 "
        style={{ minHeight: "150px", minWidth: "200px" }}
      >
        j
      </div>
      <div
        className="bg-red-600 "
        style={{ minHeight: "150px", minWidth: "200px" }}
      >
        j
      </div>
      <div
        className="bg-red-600 "
        style={{ minHeight: "150px", minWidth: "200px" }}
      >
        j
      </div>
      <div
        className="bg-red-600 "
        style={{ minHeight: "150px", minWidth: "200px" }}
      >
        j
      </div>
      <div
        className="bg-red-600 "
        style={{ minHeight: "150px", minWidth: "200px" }}
      >
        j
      </div>
      <div
        className="bg-red-600 "
        style={{ minHeight: "150px", minWidth: "200px" }}
      >
        j
      </div>
      {/* {[...Array(20)].map((data, i) => (
        <div
          className="bg-red-600 "
          style={{ minHeight: "150px", minWidth: "200px" }}
        >
          {i}
        </div>
      ))} */}
    </div>
  );

  const VerticalScroll = () => (
    <div class="grid grid-cols-1  bg-white rounded-lg p-5 mb-5 sm:grid-cols-2 md:grid-cols-3 gap-2   overflow-y-auto overflow-hidden">
      {[...Array(20)].map((data, i) => (
        <div className="bg-red-600  " style={{ minHeight: "150px" }}>
          {i}
        </div>
      ))}
    </div>
  );

  const MainView = () => (
    <div className=" h-full flex flex-col justify-between ">
      {/* Video view */}
      {/* <div className="h-full flex flex-1 flex-col bg-white rounded-lg p-5 mb-5 justify-between">
        <div className="flex h-full">hi</div>
        <HorizontalScrll />
      </div> */}

      <VerticalScroll />

      {/* Video View  */}
      <div className=" bg-white rounded-lg p-5">bottom menu</div>
    </div>
  );
  return (
    <div className="bg-gray-300 w-screen h-screen">
      <div class="flex  h-full justify-between">
        <div class="fixed inset-0 w-full md:w-2/3  p-5">
          <MainView />
        </div>
        <div class=" absolute   md:fixed md:right-0 md:w-1/3 md:bottom-0 md:top-0  p-5   sm:min-w-300 ">
          <div className="h-full flex flex-1 flex-col bg-white rounded-lg p-5   justify-between">
            side bar
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
