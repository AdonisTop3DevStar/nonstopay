import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './src/page/HomePage';
import Layout from './src/components/layout';
import { LoginPage } from './src/page/LoginPage';
import { RegisterPage } from './src/page/RegisterPage';
import { ResetPage } from './src/page/ResetPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<HomePage/>}/>            
          </Route>
          {/* <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<RegisterPage/>}/>
          <Route path='/forgot-password' element={<ResetPage/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
