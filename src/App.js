import Dze from './components/Dze';
import Dev from './components/Dev';
import Theme from './components/Theme';
import ThemeBN from './components/ThemeBN';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Theme>
        <Dze />
        <Dev />
        <Footer />
        <ThemeBN />
      </Theme>
    </>
  );
}

export default App;
