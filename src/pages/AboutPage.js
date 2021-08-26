const AboutPage = () => {
  return (
    <div className="w-full md:w-5/6 mx-auto mt-16 gap-6 lg:pb-96 pb-40 md:pb-60 animate-show max-w-2xl 2xl:max-w-4xl animate-show">
      <div className="flex justify-around flex-wrap">
        <a
          href="www.google.com"
          className="transform hover:-translate-y-4 transition"
        >
          <span className="ib mdi-github"></span>
        </a>
        <a
          href="www.google.com"
          className="transform hover:-translate-y-4 transition"
        >
          <span className="ib fa-facebook"></span>
        </a>
        <a
          href="www.google.com"
          className="transform hover:-translate-y-4 transition"
        >
          <span className="ib bi-twitter"></span>
        </a>
        <a
          href="www.google.com"
          className="transform hover:-translate-y-4 transition"
        >
          <span className="ib la-instagram"></span>
        </a>
        <a
          href="www.google.com"
          className="transform hover:-translate-y-4 transition"
        >
          <span className="ib mdi-linkedin"></span>
        </a>
      </div>
      <div className="w-full mx-auto text-center text-2xl font-bold mt-20">
        <p className="">Fake Store</p>
        <p className="mt-4">Fake Address</p>
        <p className="mt-4">Fake Number</p>
      </div>
      <div className="w-full mx-auto ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26081603.294420466!2d-95.677068!3d37.06250000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1629822027972!5m2!1sen!2sus"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="mx-auto mt-20 w-full "
        ></iframe>
      </div>
    </div>
  );
};

export default AboutPage;
