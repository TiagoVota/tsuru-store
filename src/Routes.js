import {
  useContext,
  useState,
  useEffect,
} from 'react';
import {
  Switch,
  Route,
  useLocation,
  useHistory,
} from 'react-router-dom';

import SignIn from './pages/SignIn/index';
import SignUp from './pages/SignUp/index';
import Products from './pages/Products/index';
import ProductsByCategories from './pages/ProductsByCategory/index';
import Cart from './pages/Cart/index';
import SingleProduct from './pages/SingleProduct/index';
import History from './pages/History';
import Sale from './pages/sale';


function Routes() {
  const token = localStorage.getItem('token');
  const location = useLocation();
  const history = useHistory();

  const redirectUserPage = () => {
    const { pathname } = location;
    const havePermission = ['/', '/sign-up'].includes(pathname) || token;

    if (!havePermission) return history.push('/');
  };

  useEffect(redirectUserPage, [location, token]);

  return (
    <Switch>
      <Route exact path='/' component={SignIn}/>
      <Route exact path='/sign-up' component={SignUp}/>
      <Route exact path='/products' component={Products}/>
      <Route exact path='/categories/:id' component={ProductsByCategories} />
      <Route exact path='/product/:id' component={SingleProduct} />
      <Route exact path='/cart' component={Cart}/>
      <Route exact path='/history' component={History}/>
      <Route exact path='/history/:id' component={Sale} />
    </Switch>
  );
}

export default Routes;