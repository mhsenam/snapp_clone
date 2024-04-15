import ServiceItem from "./ServiceItem";

const Services = () => {
  let serviceItems = [];
  for (let i = 0; i < 12; i++) {
    serviceItems.push(<ServiceItem />);
  }
  return (
    <section className="bg-[#f2f5f8]">
      <div>
        <h1 className="text-center text-4xl py-10 mt-20 font-extrabold text-[#404040]">
          یک اپلیکیشن، برای تمام نیازها
        </h1>
        <div className="grid grid-cols-3 mx-[20%]">{serviceItems}</div>
      </div>
    </section>
  );
};
export default Services;
