const ServiceItem = () => {
  return (
    <div>
      <div className="mx-4 my-4 bg-white rounded-2xl flex flex-row justify-end items-center py-4 px-4">
        <div className="flex flex-col justify- text-right mr-3">
          <h3 className="font-semibold">پیک موتوری</h3>
          <h4 className="text-[#a9a9a9] font-normal text-xs">
            حمل و نقل با اسنپ
          </h4>
        </div>
        <img src="/public/bike.svg" alt="" />
      </div>
    </div>
  );
};
export default ServiceItem;
