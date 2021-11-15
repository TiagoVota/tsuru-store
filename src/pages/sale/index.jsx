/* eslint-disable react/prop-types */
import Header from '../Shared/Header';
import Sidebar from '../Shared/Sidebar';
import styled from 'styled-components';
import Content from './content';
import { useParams } from 'react-router';

const Sale = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <PageContainer>
        <Sidebar />
        <Content id={id} />
      </PageContainer>
    </>
  );
};



const PageContainer = styled.main`
  display: flex;
  margin-top: 70px;
  height: calc(100vh - 70px);
`;

export default Sale;