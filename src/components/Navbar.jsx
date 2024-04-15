const Navbar = () => {
  return (
    <div className="py-8 mr-48">
      <ul className="font-light flex justify-end flex-row items-center space-x-6">
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
          <a href="">سوپر اپ اسنپ</a>
        </li>
        <li>
          <a href="">
            <img src="/public/logo.svg" alt="logo" />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
