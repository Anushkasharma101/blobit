import './App.css';
import Header from './components/Header/Header';
import HomePage from './layouts/HomePage';
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateForm from './layouts/CreateForm';
import BlogDetail from './layouts/BlogDetail';


function App() {
  return (
    <Router>
      <div className="App">
        <div className='parentDiv w-screen h-screen overflow-auto relative'>
          <Header/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create/:id" element={<CreateForm/>}/>
            <Route path="/blogs/:id" element={<BlogDetail />} />
          </Routes>
          <Footer/>
         
        </div>
      </div>
    </Router>
  );
}

export default App;
