import './App.css';
import Nav from './component/Nav/Nav'
import Detail from "./Views/Detail/Detail";
import Form from "./Views/Form/Form";
import Home from './Views/Home/Home'
import Landing from './Views/Landing/Landing'
import {Switch, Route, useLocation, useNavigate} from "react-router-dom";

function App() {

    const location = useLocation()

    return (
        <div className="App">
            {location.pathname !== '/' && <Nav/>}
            <Route path='/home' component = { Home } />
            <Route exact path='/' render={ ()=> <Landing /> } />
            <Route path='/form' component={Form} />
            <Route path='/detail/:id' component={Detail} />
        </div>
    );
}

export default App;
