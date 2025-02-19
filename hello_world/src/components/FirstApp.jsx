import PropTyes from 'prop-types';

const FirstApp = ({title, sum}) => {
  return (
    <>
      <h1>{title}</h1>
      <span>{sum}</span>
    </>
  );
}

// FirstApp.propTypes = {
//   title : PropTyes.string.isRequired,
//   sum : PropTyes.number.isRequired
// }

FirstApp.defaultProps = {
  title: 'No hay titulo',
  sum: 300
}

export default FirstApp;