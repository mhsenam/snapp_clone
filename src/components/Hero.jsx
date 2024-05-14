const Hero = () => {
  return (
    <section className="hero grid md:grid-cols-2 sm:grid-cols-1">
      <div className="md:block sm:hidden">
        <img className="scale-x-[-1]" src="/public/man.jpg" alt="" />
      </div>
      <div className="bg-[#21aa58] sm:px-4 md:pr-24">
        <div className="flex flex-col items-end justify-center sm:mr-0 sm:ml-0 md:mr-32 md:ml-10 relative text-right">
          <h1 className="text-white font-bold sm:text-2xl text-4xl leading-normal sm:my-4">
            تجربه‌ی زندگی راحت‌تر، سریع‌تر و به‌صرفه‌تر با سوپراپلیکیشن اسنپ!
          </h1>
          <p className="text-white font-light sm:text-lg md:text-xl leading-snug sm:my-4 md:my-8">
            از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط سفر،
            رزرو هتل و... را میتوانید با اسنپ انجام دهید.
          </p>
          <div className=" sm:hidden md:block flex flex-row items-center space-x-4 justify-end">
            <button className="bg-white px-7 py-2 rounded-lg text-[#00d16f] font-semibold">
              ارسال لینک
            </button>
            <input
              className="text-right w-[50%] p-2 bg-transparent border-b-2 text-white placeholder:text-slate-300 focus:outline-none "
              type="text"
              placeholder="09151234567"
            />
          </div>
          <button className="sm:hidden md:block hover:bg-[#7ebe9842] text-white border border-white px-6 py-2 rounded-lg font-bold text-lg">
            ورود به وب اپلیکیشن اسنپ
          </button>

          <button className="sm:block md:hidden my-4 w-full text-black bg-white border border-white px-6 py-3 rounded-lg font-bold text-sm">
            دانلود اپلیکیشن اسنپ
          </button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
