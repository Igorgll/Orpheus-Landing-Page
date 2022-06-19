import './Global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import SectionOne from '../src/components/firstSection/sectionOne';
import SecondSection from '../src/components/secondSection/secondSection';

class App extends Component {
  render() {
    return (
      <>
      <Navbar />
      <SectionOne />
      <SecondSection />
      </>
    );
  }
}

export default App;
