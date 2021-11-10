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

import UserContext from './contexts/UserContext';

import SignIn from './pages/SignIn/index';
import SignUp from './pages/SignUp/index';
import Products from './pages/Products/index';
import ProductsByCategories from './pages/ProductsByCategory';
import Cart from './pages/Cart/index';
import SingleProduct from './pages/Single_product';


function Routes() {
  const { userInfo: { token } } = useContext(UserContext);
  const location = useLocation();
  const history = useHistory();

  const redirectUserPage = () => {
    const { pathname } = location;
    const havePermission = ['/', '/sign-up'].includes(pathname) || token;

    if (!havePermission) return history.push('/');
  };

  // TODO: Ativar este useEffect e ver se não precisa melhorar nada dele
  // useEffect(redirectUserPage, [location, token]);

  return (
    <Switch>
      <Route exact path='/' component={SignIn}/>
      <Route exact path='/sign-up' component={SignUp}/>
      <Route exact path='/products' component={Products}/>
      <Route exact path='/categories/:id' component={ProductsByCategories} />
      <Route exact path='/product/:id' component={SingleProduct} />
      <Route exact path='/cart' component={Cart}/>
    </Switch>
  );
}

export default Routes;