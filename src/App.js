import { Component, Fragment } from 'react';
import './App.css';
import Body from './component/Body';
import Footer from './component/Footer';
import Header from './component/Header';
import About from './component/About';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import {Provider} from 'react-redux'
import store from './store';

class App extends Component {

  render(){

    return <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact render={(props)=>
            <Fragment>
            <div className="container">
                <Header></Header>
                <Body></Body>
                <Footer></Footer>
            </div>
            <Link className="link" to="/about">About</Link>
            </Fragment>
          } />
          <Route path="/about" exact component={About}/>
        </Switch>
      </Router>
    </Provider>;
  }
}
export default App;
