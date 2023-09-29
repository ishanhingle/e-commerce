import Header from './components/layouts/header.jsx'
import Footer from './components/layouts/Footer/Footer.jsx'
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
function App() {
  return (
    <div className="App">
         <Header/>
         <Routes>
         <Route  path='/' component={Home}></Route>
         </Routes>
         <Footer/>
    </div>
  );
}

export default App;
