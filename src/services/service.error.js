import Swal from 'sweetalert2';

const treatError = (history) => {

  Swal.fire({
    icon: 'error',
    title: 'Oops',
    text: 'Parece que algo deu errado 😔'
  });
  history.push('/');
};

export default treatError;