const Hero = () => {
  return (
    <section className="grid grid-cols-2">
      <div>
        <img className="scale-x-[-1]" src="/public/man.jpg" alt="" />
      </div>
      <div className="bg-[#21aa58] pr-24">
        <div className="mr-32 ml-10 relative">
          <h1 className="text-white font-bold text-4xl leading-normal my-8">
            تجربه‌ی زندگی راحت‌تر، سریع‌تر و به‌صرفه‌تر با سوپراپلیکیشن اسنپ!
          </h1>
          <p className="text-white font-light text-xl leading-snug my-8 text-justify">
            از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط سفر،
            رزرو هتل و... را میتوانید با اسنپ انجام دهید.
          </p>
          <div className="flex flex-row items-center space-x-4 justify-end">
            <button className="bg-white px-7 py-2 rounded-lg text-[#00d16f] font-semibold">
              ارسال لینک
            </button>
            <input
              className="text-right w-[50%] p-2 bg-transparent border-b-2 text-white placeholder:text-slate-300 focus:outline-none "
              type="text"
              placeholder="09151234567"
            />
          </div>
          <button className="hover:bg-[#7ebe9842] right-0 mt-8 absolute text-white border border-white px-6 py-2 rounded-lg font-bold text-lg">
            ورود به وب اپلیکیشن اسنپ
          </button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
