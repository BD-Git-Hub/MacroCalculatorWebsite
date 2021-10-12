import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navbar';
import Main from './components/pages';


function App() {
  return (
    <Router>
      <Navbar/>
      <Main/>
    </Router>
  );
}

export default App;
