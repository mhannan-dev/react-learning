import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import List from './pages/List/List';
import New from './pages/New/New';
import Single from './pages/Single/Single';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            {/* Users route group */}
            <Route path="users">
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />} />
              <Route path=':new' element={<New />} />
              
            </Route>
            {/* Products route group */}
            <Route path="products">
              <Route index element={<List />} />
              <Route path=':productId' element={<Single />} />
              <Route path=':new' element={<New />} />
            </Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
