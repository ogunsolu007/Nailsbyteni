import "./App.css";
import Gallery from "./component/gallery/Gallery";
import Header from "./component/header/Header";
import Services from "./component/services/Services";
import Whyus from "./component/whyus/Whyus";
import Contact from "./component/contact/Contact";
function App() {
  return (
    <div className="App">
      <Header />
      <Whyus />
      <Services />
      <Gallery/>
      <Contact />
    </div>
  );
}

export default App;
