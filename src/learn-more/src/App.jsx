import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './home';
import { Other } from './other';

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/other' element={<Other/>}/>
      </Routes>
    </BrowserRouter>
  )

}

export default App
