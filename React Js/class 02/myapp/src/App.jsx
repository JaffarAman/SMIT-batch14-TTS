import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";

const App = () => {
  var num1 = 10;
  var num2 = 20;
  console.log(num1 + num2);

  return (
    <div>
      <Home />
      <About />
      <Contact />
    </div>
  );
};

export default App;
