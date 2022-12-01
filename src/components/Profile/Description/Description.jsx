import s from './Description.module.css';

const Description = () => {
  return (
    <div className={s.wrapper}>
      <div><img className={s.ava} src="https://picsum.photos/id/2/200/200" alt="Ava" /></div>
      <div className={s.description}>
        <h2>Name S.M.</h2>
        <p>Date of Birth: 31 february</p>
        <p>City: Mars</p>
        <p>Education: Hokwords</p>
        <p>Web Site: https://mysite.com</p>
      </div>
    </div>
  );
}

export default Description;