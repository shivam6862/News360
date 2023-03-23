import { AllRoutes } from "./AllRoutes";
import Navigation from "./components/navigation/Navigation";
import classes from "./App.module.css";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className={classes.App}>
      <Navigation />
      <AllRoutes />
      <Contact />
    </div>
  );
}

export default App;
