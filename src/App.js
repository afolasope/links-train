import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Contact from './Pages/Contact';
import Page from './Pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Page />} path="/" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
