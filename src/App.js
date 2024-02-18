import './index.css';
import Top from './components/pages/Top';
import Users from './components/pages/Users';
import { Route, Routes } from 'react-router-dom';
//import { RouterProvider } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Top />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
