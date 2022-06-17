import './Global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Navbar from './components/navbar';
import SectionOne from './components/sectionOne';

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
