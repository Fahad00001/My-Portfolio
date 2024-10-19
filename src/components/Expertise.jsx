import bannerBackground from "../assets/banner_wallpaper.svg";

const Expertise = () => {
  return (
    <>
      <div className="mt-2">
        <h1 className="mb-16 text-5xl font-bold underline text-center">
          My Expertise
        </h1>

        {/* Box Section */}
        <div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
          className="box-container items-center flex flex-col lg:flex-row py-16 bg-cover"
        >
          {/* Text Container */}
          <div className="flex text-white justify-center lg:w-1/2 mb-10 lg:mb-0">
            <div className="w-4/5 text-center space-y-4">
              <h1 className="text-4xl font-bold">I love these technologies</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                autem facere molestias libero eaque praesentium, dignissimos
                dolores, cum nisi rerum, modi corporis eligendi harum. Ut
                provident saepe in et ipsum.
              </p>
              <button className="text-2xl px-4 py-2 bg-orange-500 rounded-full shadow-lg hover:bg-orange-600 transition">
                Hire Me
              </button>
            </div>
          </div>

          {/* Skills Container */}
          <div className="flex justify-center lg:w-1/2">
            <div className="flex flex-wrap justify-center w-4/5 h-fit gap-4">
              <p className="bg-gray-300 px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer transition">
                Javascript
              </p>
              <p className="bg-gray-300 px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer transition">
                ReactJS
              </p>
              <p className="bg-gray-300 px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer transition">
                Tailwind CSS
              </p>
              <p className="bg-gray-300 px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer transition">
                NextJS
              </p>
              <p className="bg-gray-300 px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer transition">
                Data Structure Algorithm
              </p>
              <p className="bg-gray-300 px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer transition">
                Git & GitHub
              </p>
              <p className="bg-gray-300 px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer transition">
                JIRA
              </p>
              <p className="bg-gray-300 px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer transition">
                Node.js
              </p>
              <p className="bg-gray-300 px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer transition">
                Bootstrap
              </p>
              <p className="bg-gray-300 px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer transition">
                MySQL Database
              </p>
              <p className="bg-gray-300 px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer transition">
                Fullstack Project
              </p>
              <p className="bg-gray-300 px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer transition">
                MongoDB
              </p>
              <p className="bg-gray-300 px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer transition">
                Deploying on Cloud
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
