const ServiceCard = ({ title, description, num }) => {
  return (
    <div className="p-4  rounded-lg border border-gray-200  relative overflow-hidden shadow-lg ">
      <div className="space-y-7 relative my-5">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900 ">
          {title}
        </h2>
        <p className="text-gray-700 ">{description}</p>
      </div>
    </div>
  );
};
const services = [
  {
    id: 1,
    title: "Easily Customizable",
    description:
      "Our resume template is easily customizable allowing for seamless customization.",
    num: "1",
  },
  {
    id: 2,
    title: "Standard Template",
    description:
      "Standard resume template from our collection tailored to various industries and career levels",
    num: "2",
  },
  {
    id: 3,
    title: "PDF Downloadable",
    description:
      "Download in PDF format using  button ready for printing or digital sharing",
    num: "3",
  },
];
const Services = () => {
  return (
    <>
      <section className="courier-prime-regular bg-[#F7F7F7]  py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col items-start gap-10 mb-10 xl:gap-14">
          <div className=" max-w-3xl mx-auto space-y-4">
            <h1 className="text-gray-900  font-semibold  text-4xl">
              Our Special Features
            </h1>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>
      <section className="courier-prime-regular max-w-7xl mx-auto p-5 bg-yellow-100 rounded-3xl lg:pl-14 my-10">
        <div>
          <h1 className="text-4xl text-gray-900  font-semibold mb-10 pt-5">
            Resources
          </h1>
          <div className="h-14">
            <li>
              Cambridge Guide{" "}
              <a
                className=" bg-slate-400/50 ml-8 text-black px-7 py-2 underline border h-12 rounded-3xl"
                href="https://www.careers.cam.ac.uk/files/cambridgecvsandapplications.pdf"
              >
                view
              </a>{" "}
            </li>
          </div>
          <div className="h-14">
            <li>
              Sample Resume 1{" "}
              <a
                className=" bg-slate-400/50 ml-8 text-black px-7 py-2 underline border h-12 rounded-3xl"
                href="https://drive.google.com/file/d/1QZA_U5fJu0eQWFdG4ZCd-dmo6Q1wzgXX/view?usp=drive_link"
              >
                view
              </a>{" "}
            </li>
          </div>
          <div className="h-14">
            <li>
              Sample Resume 2{" "}
              <a
                className=" bg-slate-400/50 ml-8 text-black px-7 py-2 underline border h-12 rounded-3xl"
                href="https://drive.google.com/file/d/1QZMwKps8IZYVuoSoPb1_FyZvfIU-_rbY/view?usp=drive_link"
              >
                view
              </a>{" "}
            </li>
          </div>
          <div className="h-14">
            <li>
              Sample Resume 3{" "}
              <a
                className=" bg-slate-400/50 ml-8 text-black px-7 py-2 underline border h-12 rounded-3xl"
                href="https://drive.google.com/file/d/1Qg7oGKxQb2btTlPtQf5mlUKMu2uXMEZJ/view?usp=sharing"
              >
                view
              </a>{" "}
            </li>
          </div>
        </div>
      </section>
      <section className="courier-prime-regular max-w-7xl mx-auto p-5 bg-indigo-200/90 rounded-3xl lg:pl-14 mb-10">
        <h1 className="text-4xl text-gray-900  font-semibold mb-10 pt-5">
          Testimonial
        </h1>
        <div class="flex flex-col items-center justify-center gap-8">
          <p class=" text-gray-900  leading-relaxed  text-justify">
            "The resume created through this platform proved instrumental in
            securing an interview with PTC Company, eliciting positive feedback
            from the interviewer regarding standard of resume."
          </p>
          <div class="flex items-center gap-4">
            -
            <div class="flex flex-col tracking-wider">
              <label class="text-gray-600 font-bold text-base">Ujjwal T</label>
              <label class="text-gray-400 font-normal text-sm">Student</label>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
