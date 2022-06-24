import "../css/homepage.css";

import Navbar from "../components/Navbar";
import CardProperty from "../components/CardProperty";
import Filter from "../components/Filter";
import Promo from "../components/Promo";

import Footer from "../components/Footer";

function Home() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Promo />
      <Filter />
      <CardProperty />
      <Footer />
    </div>
  );
}

export default Home;
