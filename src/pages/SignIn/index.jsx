import styled from 'styled-components';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { postSignIn } from '../../services/service.auth';
import { errorModal, successModal } from '../../factories/modalsFactory';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();


  const handleSubmit = (event) => {
    event.preventDefault();

    const body = {
      email,
      password,
    };

    postSignIn(body)
      .then((res) => {
        localStorage.setItem('token', `${res.data.token}`);
        successModal('Login realizado!');
        history.push('/products');
        clearInputs();
      })
      .catch(({ request: { status }}) => handleFailRegister(status));
  };

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const handleFailRegister = (status) => {
    if (status === 400) return errorModal('Campo(s) inválido(s)!');
    if (status === 401) return errorModal('E-mail ou senha incorretos!');
    if (status === 500) return errorModal('Erro nosso, tente novamente mais tarde por favor 🥺');
  };
  

  return (
    <Container>

      <H1>Tsuru Store</H1>

      <form onSubmit={handleSubmit}>

        <Label htmlFor='E-mail'>E-mail:</Label>
        <Input
          id='E-mail'
          placeholder='Ex: meulindoemail@email.com'
          type='email'
          onChange={({ target: { value }}) => setEmail(value)}
          value={email}
          required
        />

        <Label htmlFor='Senha'>Senha:</Label>
        <Input
          id='Senha'
          placeholder='Ex: Senha!123'
          type='password'
          onChange={({ target: { value }}) => setPassword(value)}
          value={password}
          required
        />

        <Button type='submit'>
					Entrar
        </Button>
      </form>

      <Link to='/sign-up'>
        <P>Primeira vez? Cadastre-se!</P>
      </Link>

    </Container>
  );
};


export default SignIn;


const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #8C11BE;
  background-image: linear-gradient(315deg, #5c077e 0%, #8C11BE 50%, #af3fdb 100%);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const H1 = styled.h1`
	margin-bottom: 10px;
	font-family: 'Merienda', cursive;
  font-weight: 700;
	font-size: 40px;
	font-style: normal;
	line-height: 50px;
	color: #FFFFFF;
`;

const Label = styled.label`
  margin-left: 25%;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 24px;
	color: #FFFFFF;

  @media (max-width: 600px){
    margin-left: 5%;
  }
`;

const Input = styled.input`
	width: 50%;
	height: 58px;
	margin-left: 25%;
	margin-bottom: 3px;
	padding-left: 13px;
	font-size: 20px;
	background: #FFFFFF;
	border-radius: 5px;
	border-width: 0px;

	::placeholder {
		color: #575757;
	}

	:focus {
		color: #000000;
		outline: none;
	}

  @media (max-width: 600px){
    width: 90%;
    margin-left: 5%;
  }
`;

const Button = styled.button`
	width: 50%;
	height: 46px;
  margin: 15px 0 20px 25%;
	background: #A328D6;
	border-radius: 5px;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 23px;
	color: #FFFFFF;

  @media (max-width: 600px){
    width: 90%;
    margin-left: 5%;
  }
`;

const P = styled.p`
	font-style: normal;
	font-weight: bold;
	font-size: 15px;
	line-height: 18px;
	color: #FFFFFF;
`;
