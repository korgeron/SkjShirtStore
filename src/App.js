import {Navbar} from "./components/Navbar";
import {AllShirts} from "./components/AllShirts";
import {HomePage} from "./components/HomePage";
import './App.css';

function App() {
    let content
    switch (window.location.pathname){
        case "/": content = <HomePage />
            break;
        case "/shop": content = <AllShirts />
            break;


    }
  return (
    <div>
        <Navbar/>
        {content}
    </div>
  );
}

export default App;
