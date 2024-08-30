import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialMedia from "./components/SocialMedia";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
function App() {
  return (
    <div className="overscroll-none">
      <NavBar/>
      <Home/>
      <SocialMedia/>
      <About/>
      <Portfolio/>
    </div>
  );
}

export default App;
