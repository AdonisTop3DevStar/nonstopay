import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './src/page/HomePage';
import Layout from './src/components/layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<HomePage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
