const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-14 py-9 mr-28">
      <img
        className="md:hidden xxs:hidden"
        src="/public/menu.svg"
        width={20}
        height={20}
        alt="menu"
      />
      <div className="md:block sm:hidden w-full flex justify-end items-center px-4 text-gray-600">
        <ul className="text-center lg:text-xl md:text-md font-light flex justify-end flex-row items-center space-x-10">
          <li>
            <a href="">درباره اسنپ</a>
          </li>
          <li>
            <a href="">بلاگ</a>
          </li>
          <li>
            <a href="">پنل سازمانی</a>
          </li>
          <li>
            <a href="">باشگاه رانندگان</a>
          </li>
          <li>
            <a href="">ثبت نام راننده اسنپ</a>
          </li>
          <li>
            <a href="">سوپراپ اسنپ</a>
          </li>
        </ul>
      </div>
      <a href="/">
        <img src="/public/logo.svg" alt="logo" />
      </a>
    </div>

    // <div className="flex justify-between items-center py-8 px-8">
    //   <div className="w-full flex justify-end items-center">
    //     <img src="/public/menu.svg" width={20} height={20} alt="menu" />
    //     <ul className="font-light flex justify-end flex-row items-center space-x-6">
    //       <li>
    //         <a href="">درباره اسنپ</a>
    //       </li>
    //       <li>
    //         <a href="">بلاگ</a>
    //       </li>
    //       <li>
    //         <a href="">پنل سازمانی</a>
    //       </li>
    //       <li>
    //         <a href="">باشگاه رانندگان</a>
    //       </li>
    //       <li>
    //         <a href="">ثبت نام راننده اسنپ</a>
    //       </li>
    //       <li>
    //         <a href="">سوپر اپ اسنپ</a>
    //       </li>
    //     </ul>
    //   </div>
    //   <a href="">
    //     <img src="/public/logo.svg" alt="logo" />
    //   </a>
    // </div>
  );
};
export default Navbar;
