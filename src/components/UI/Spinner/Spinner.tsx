import PuffLoader from 'react-spinners/PuffLoader';

function Spinner() {
  return (
    <PuffLoader color="white" cssOverride={{ margin: 'auto' }} size={40} />
  );
}

export default Spinner;
