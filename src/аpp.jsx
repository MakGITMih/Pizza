import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { BrowserRouter,Route,Routes } from "react-router-dom";




function App() {

 

  
 
  return (
    <>
      <div className="wrapper">
        <Header></Header>
        <div className="content">
          <div className="container">
          <Routes>
            {/* <NotFound></NotFound> */}
            <Route path='/' element = {<Home></Home>}></Route>
            <Route path='/cart' element = {<Cart></Cart>}></Route>
            <Route path='*' element = {<NotFound></NotFound>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
