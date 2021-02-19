import "./app.scss";

import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import FAQ from "./components/FAQ/Faq";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <div className="App">
        <Home />
        <Gallery />
        <FAQ />
        <Footer />
      </div>
      <div className="mobile">Coming Soon!</div>
    </>
  );
}

export default App;
