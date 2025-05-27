import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer";
import "./App.css";

console.log(Banner);
console.log(Header);

function App() {
  return (
    <>
      <Header />
      <main>
        <NavBar />
        <Banner />
        <ProductSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
