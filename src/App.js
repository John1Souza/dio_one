import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams,
  Routes
} from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Feed } from './pages/feed'
import { Teste } from "./pages";


function App() {
  return (
    <Router className="App">      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/teste" element={<Teste />} />
        </Routes>
    </Router>
  );
}

export default App;
