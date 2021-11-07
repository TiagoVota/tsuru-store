import {
  useState,
  useEffect,
} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';

import UserContext from './contexts/UserContext';

import Routes from './Routes';


const App = () => {
  const [userInfo, setUserInfo] = useState({});
  const userInfoStorage = JSON.parse(localStorage.getItem('userInfo'));

  useEffect(() => {
    if (userInfoStorage) setUserInfo(userInfoStorage);
  }, [userInfo.token]);

  return (
    <UserContext.Provider value={{userInfo, setUserInfo}}>
      <Router>
        <GlobalStyle />

        {/* TODO: Tirar esse comentário!!!
          Coloquei essa parte de routes porque ela era necessária para
          tornar as rotas privadas. Pois precisava do hook useLocation()
          e ele só podia ser chamado dentro do Router (pelo que entendi)
        */}
        <Routes />
      </Router>
    </UserContext.Provider>
  );
};


export default App;
