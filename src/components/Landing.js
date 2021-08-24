import slash from '../images/index.png';
import homeImg from '../images/homepage-image.png';

const Landing = () => {
  return (
    <div className="mx-auto py-10 relative lg:py-20 lg:grid lg:w-4/5 lg:grid-cols-2 lg:z-20 lg:mt-12 lg:pb-40">
      <div className="z-10 relative text-center lg:text-left">
        <p className="text-sm uppercase tracking-widest text-gray-500 font-bold 2xl:text-lg">
          Best online store of the year
        </p>
        <p className="text-4xl font-bold leading-normal mx-auto w-72 my-2 md:text-5xl md:w-96 md:leading-relaxed lg:text-5xl lg:leading-relaxed lg:mx-0 2xl:text-7xl">
          We don't do fashion, we are fashion
        </p>
        <img src={slash} alt="" className="hidden lg:block w-5/12" />
        <button className="px-16 py-5 bg-gray-900 text-white mx-auto block my-8 text-3xl rounded-full font-bold transform hover:scale-110 transition duration-300 lg:mx-0">
          Shop Now
        </button>
      </div>
      <div className="w-full">
        <img
          src={homeImg}
          alt=""
          className="absolute top-0 z-0 opacity-40 md:w-full lg:-top-12 lg:static lg:opacity-100 "
        />
      </div>
    </div>
  );
};

export default Landing;
