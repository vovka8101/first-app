import preloaderImg from '../images/preloader.svg';

const Preloader = (props) => {
  return (
    <div>
      <img src={preloaderImg} alt="preloader"/>
    </div>
  );
}

export default Preloader;