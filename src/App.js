import { Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
import Page from './Pages/Page';

function App() {
  return (
    <Routes>
      <Route element={<Page />} path="/" />
      <Route element={<Contact />} path="/contact" />
    </Routes>
  );
}

export default App;
