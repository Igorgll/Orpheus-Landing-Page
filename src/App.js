import './Global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import SectionOne from '../src/components/firstSection/sectionOne';

class App extends Component {
  render() {
    return (
      <>
      <Navbar />
      <SectionOne />
      </>
    );
  }
}

export default App;
