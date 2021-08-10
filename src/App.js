import { useMediaQuery } from 'react-responsive';
// PAGES
import Home from './pages/Home';
// COMPONENTS
import Navbar from './components/general/Navbar/Navbar';

function App() {
  const isSmallMobile = useMediaQuery({
    query: "(min-width: 300px)",
  });

  const isStandardMobile = useMediaQuery({
    query: "min-width: 480px"
  });

  const isTablet = useMediaQuery({
    query: "min-width: 768px"
  });

  const isLaptop = useMediaQuery({
    query: "min-width: 1024px"
  });

  const isDesktop = useMediaQuery({
    query: "min-width: 1200px"
  });

  const isLargeScreen = useMediaQuery({
    query: "min-width: 1201px"
  });

  return (
    <>
    <Navbar />
    <Home />
    </>
  );
}

export default App;
