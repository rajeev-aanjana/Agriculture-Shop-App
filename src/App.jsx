// import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// import { Outlet } from "react-router-dom";
import Content from "./components/content/Content";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <div className="full-page">
        <div>
          <Header />
          <main>
            <Content />
          </main>
          <Footer />
        </div>
        <Helmet>
          <script src="../index.js"></script>
        </Helmet>
      </div>
    </>
  );
}

export default App;
