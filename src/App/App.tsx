import React from "react";
import { Route, Routes } from "react-router-dom";

const Books: React.FC = ()=> <div>React!</div>;
const App: React.FC = () => {
  return <>
    <Routes>
      <Route path="/" element={<div>Hello, React!</div>} />
      <Route path="/books" element={<div>React!</div>} />
    </Routes>
  </>;
};

export { App };