import { useState } from "react";

const Services = () => {
  useState([
    {
      id: "",
      title: "",
      description: "",
      actionButton: {
        title: "",
        link: "",
      },
    },
  ]);
  
  return (
    <>
      <div className="main-container py-14">
        <h1 className="text-5xl font-bold text-center underline">My Services</h1>
        
        {/* Services container */}
        <div className="services-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-2 md:px-10">
          {/* Service 1 */}
          <div className="cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-4">
            <i className="text-5xl fa-brands fa-aws"></i>
            <h1 className="text-4xl">Web Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              veniam eius optio? Eveniet facilis dolorum quis exercitationem,
              repudiandae sed dolores.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>

          {/* Service 2 */}
          <div className="cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-4">
            <i className="text-5xl fa-solid fa-mobile"></i>
            <h1 className="text-4xl">Android Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              veniam eius optio? Eveniet facilis dolorum quis exercitationem,
              repudiandae sed dolores.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>

          {/* Service 3 */}
          <div className="cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-4">
            <i className="text-5xl fa-solid fa-server"></i>
            <h1 className="text-4xl">Backend Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              veniam eius optio? Eveniet facilis dolorum quis exercitationem,
              repudiandae sed dolores.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
