import NavBar from "./components/NavBar";
import Home from './components/Home';
import SocialLinks from "./components/SocialLinks";
import WorkExperience from "./components/WorkExperience";
import Portfolio from "./components/Portfolio";
import DataExperience from "./components/DataExperience";
import Skills from "./components/Skill";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Home></Home>
      <DataExperience></DataExperience>
      <Portfolio></Portfolio>
      <Skills></Skills>
      <SocialLinks></SocialLinks>
      <WorkExperience></WorkExperience>
    </div>
  );
}

export default App;
