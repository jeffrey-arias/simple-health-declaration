
// Standard imports
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {BrowserRouter as Router, Route} from 'react-router-dom'


// Custom components
import Navbar from './components/nav-bar.component';
import CreateHealthDeclaration from './components/create-health-declaration.component';
import EditHealthDeclaration from './components/edit-health-declaration.component';
import HealthDeclarationList from './components/health-declaration-list.component';
function App() {
  return (
    <Router>
       <Navbar/>
       <br/>
       <Route path ="/" exact component={HealthDeclarationList}/>
       <Route path ="/edit/:id" component={EditHealthDeclaration} />
       <Route path ="/create" component={CreateHealthDeclaration}/>
    </Router>
      );
}

export default App;

// touch commit
