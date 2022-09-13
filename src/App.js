
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Parmernent from './Components/Parmernent'
import Login from './Components/Login'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/infos' element={<Parmernent/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
