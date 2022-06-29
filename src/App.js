import './Global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import SectionOne from '../src/components/firstSection/sectionOne';
import SecondSection from '../src/components/secondSection/secondSection';
import ThirdSection from '../src/components/thirdSection/statuePack';
import FourthSection from '../src/components/fourthSection/statueAvatars';
import Footer from '../src/components/footer/footer';

class App extends Component {
  render() {
    return (
      <>
      <Navbar />
      <SectionOne />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
      </>
    );
  }
}

export default App;
