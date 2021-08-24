import slash from '../images/index.png';
import homeImg from '../images/homepage-image.png';

const Landing = () => {
  return (
    <div className="mx-auto py-10 relative lg:py-20">
      <div className="z-10 relative">
        <p className="text-sm uppercase tracking-widest text-center text-gray-500 font-bold">
          Best online store of the year
        </p>
        <p className="text-4xl font-bold leading-normal mx-auto w-72 text-center my-2 md:text-5xl md:w-96 md:leading-relaxed">
          We don't do fashion, we are fashion
        </p>
        <img src={slash} alt="" className="hidden" />
        <button className="px-16 py-5 bg-gray-900 text-white mx-auto block my-8 text-3xl rounded-full font-bold transform hover:scale-110 transition duration-300">
          Shop Now
        </button>
      </div>
      <div className="w-full">
        <img
          src={homeImg}
          alt=""
          className="absolute top-0 z-0 opacity-40 md:w-full lg:-top-12"
        />
      </div>
    </div>
  );
};

export default Landing;
