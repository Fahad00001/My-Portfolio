import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState("false");
  const [brandName, setBrandName] = useState("Fahad Iqbal");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      link: "/home",
      id: 1,
    },
    {
      title: "About",
      link: "/About",
      id: 2,
    },
    {
      title: "Skills",
      link: "/skills",
      id: 3,
    },
    {
      title: "Portfolio",
      link: "/portfolio",
      id: 4,
    },
    {
      title: "Contact",
      link: "/Contact",
      id: 4,
    },
    
   
    
  ]);

  const[actionbutton,setActionbutton]=useState({
    title:"Hire me",
    link:'/hire-me'

  })
  return (
    <>
      <div className="main flex h-20 items-center border justify-between px-6 md:px-16 bg-gray-100">
        {/* logo */}
        <div>
          <h1 className="text-xl md:text-2xl font-bold">{brandName}</h1>
        </div>

        {/* menu links */}
        <div className="hidden md:flex space-x-6">
        {menuLinks.map((link) => (
            <a key={link.id} href={link.link} className="hover:text-orange-600">
              {link.title}
            </a>
          ))}
        
        </div>

        {/* hamburger menu for small screens */}
        <div className="md:hidden">
          <button
            className="text-black text-2xl hover:text-orange-600 rounded"
            onClick={() => setOpen(!open)}
          >
            <RxHamburgerMenu />
          </button>
        </div>
        {/* buttons */}
        <a href={actionbutton.link} className=" hidden md:block px-4 py-2 bg-orange-600 rounded-full text-1xl shadow-lg">
              {actionbutton.title}
            </a>
      </div>
      {open && (
        <div className="md:hidden bg-gray-100 py-2 px-6 space-y-4">
         {menuLinks.map((link) => (
            <a key={link.id} href={link.link} className="hover:text-orange-600 flex flex-col">
              {link.title}
            </a>
          ))}
          <div className="flex justify-center items-center">
            <a href={actionbutton.link} className="px-4 py-2 bg-orange-600 rounded-full text-1xl shadow-lg">
              {actionbutton.title}
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
