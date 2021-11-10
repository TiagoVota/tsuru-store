import { useHistory } from 'react-router';
import Swal from 'sweetalert2';

const treatError = () => {
  const history = useHistory();

  Swal.fire({
    icon: 'error',
    tittle: 'Oops',
    text: 'Parece que algo deu errado 😔'
  });
  history.push('/products');
};

export default treatError;