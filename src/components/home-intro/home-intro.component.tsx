import css from './home-intro.module.css';

const HomeIntro = () => {
  return (
    <div className={css['home-intro']}>
      Here to provide <span className="em">high-quality</span> skincare products, while also being <span className="em">environmentally responsible</span>.
    </div>
  )
}

export default HomeIntro;