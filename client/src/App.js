import './App.css';
import Nav from './component/Nav/Nav'
import Detail from "./Views/Detail/Detail";
import Form from "./Views/Form/Form";
import Home from './Views/Home/Home'
import Landing from './Views/Landing/Landing'
import {Route, useLocation} from "react-router-dom";
import About from "./Views/About/About";

function App() {

    const location = useLocation()

    return (
        <div className="App">
           <div className="nav"> {location.pathname !== '/' && <Nav/>}</div>
            <Route path='/home' component = { Home } />
            <Route exact path='/' render={ ()=> <Landing /> } />
            <Route path='/form' component={Form} />
            <Route path='/detail/:id' component={Detail} />
            <Route path='/about' component={About} />
        </div>
    );
}

export default App;
