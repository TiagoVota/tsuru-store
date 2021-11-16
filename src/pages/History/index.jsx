import Header from '../Shared/Header';
import styled from 'styled-components';
import Sidebar from '../Shared/Sidebar';
import { getHistory } from '../../services/service.getHistory.js';
import { getToken } from '../../services/service.getToken';
import { useEffect, useState } from 'react';
import Content from './content.jsx';

const History = () => {
  const [sales, setSales] = useState([]);
  const [status, setStatus] = useState(404);
  const config = getToken();

  useEffect(() => {
    const promise = getHistory(config);
    promise.then((res) => {
      setSales(res.data);
      setStatus(res.status);
    }).catch((res) =>
      setStatus(res.data)
    );
  }, []);

  return (
    <>
      <Sidebar />
      <PageContainer>
        <Header />
        <HistoryContainer>
          {status === 200 ?
            <Content sales={sales}/>
            :
            <Empty>Parece que você não tem nenhuma compra</Empty>
          }
        </HistoryContainer>
      </PageContainer>
    </>
  );
};

const PageContainer = styled.main`
  display: flex;
  margin-top: 70px;
  height: calc(100vh - 70px);
`;

const HistoryContainer = styled.div`
  background-color: white;
  width: 80%;
  height: 80%;
  margin: auto;
  border-radius: 50px 0 0 0;
  box-shadow: 8px 8px 30px black;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: scroll;

  @media (max-width: 600px){
    margin-top: 15vh;
    width: 100%;
    border-radius: 0;
  }
`;

const SaleContainer = styled.div`
  border: 1px solid black;
`;

const Empty = styled.p`
  font-size: 24px;
  text-align: center;
`;

export default History;