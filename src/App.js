import './Global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/navbar/navbar.jsx';
import SectionOne from '../src/components/firstSection/sectionOne';
import SecondSection from '../src/components/secondSection/secondSection';
import ThirdSection from '../src/components/thirdSection/statuePack';
import FourthSection from '../src/components/fourthSection/statueAvatars';
import Footer from '../src/components/footer/footer';
import { useContext } from 'react';
import { ThemeContext } from './theme';

function App() {
  const { theme } = useContext(ThemeContext)
  
  return(
    
        <div className={`App ${theme}`}>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Menu />
          <SectionOne />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <Footer />
        </div>
  );
}

export default App;
