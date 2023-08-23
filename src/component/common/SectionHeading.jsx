const SectionHeading = ({ title, subtitle }) => {
  return (
    <section className="py-2 my-4 ">
      <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold sm:text-3xl md:text-4xl xl:text-5xl">
          {title}
        </h2>
        <p className="hidden md:block max-w-md mx-auto mt-2 text-base text-gray-500 sm:text-lg md:mt-3 md:text-2xl md:max-w-3xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default SectionHeading;
