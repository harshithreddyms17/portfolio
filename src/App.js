import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialMedia from "./components/SocialMedia";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
function App() {
  return (
    <div className="overscroll-none">
      <NavBar/>
      <Home/>
      <SocialMedia/>
      <About/>
      <Portfolio/>
      <Experience/>
    </div>
  );
}

export default App;
