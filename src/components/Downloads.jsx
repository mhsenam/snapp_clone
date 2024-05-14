const Downloads = () => {
  return (
    <section className="sm:hidden md:block mb-20">
      <div className="flex flex-row justify-center space-x-16 items-center mt-20">
        <a href="">
          <img
            src="/public/dl_android.png"
            height={90}
            width={180}
            alt="download"
          />
        </a>

        <a href="">
          <img
            src="/public/dl_bazzar.png"
            height={90}
            width={180}
            alt="download"
          />
        </a>

        <a href="">
          <img
            src="/public/dl_myket.png"
            height={90}
            width={180}
            alt="download"
          />
        </a>

        <a href="">
          <img
            src="/public/dl_web.png"
            height={90}
            width={180}
            alt="download"
          />
        </a>
      </div>
    </section>
  );
};
export default Downloads;
