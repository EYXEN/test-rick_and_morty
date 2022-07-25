
import './App.css';
import { Provider } from 'react-redux'
import redux from './redux'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'




function App() {
  return (
    
    <Provider store={redux}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Details/:Id" element={<Details/>} />
        </Routes>
      </BrowserRouter>
    </Provider>

    
  );
}

export default App;
