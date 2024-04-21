import React, { useEffect } from "react";
import Aos from "aos";
function Portofolio() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 100,
      easing: "ease-in-sine",
      delay: 80,
    });
    Aos.refresh();
  }, []);
  const projects = [
    {
      project_Name: "BlogWebiste Landing responsive Page",
      pic: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/awqnouxukwefdkaqt5iq.jpg",
      codeLink: "https://github.com/Lalithkumar-19/BlogWebsite_Landing_page",
      liveLink: "https://lalithkumar-19.github.io/BlogWebsite_Landing_page/",
      Description:
        "This is the landing page of a simple Blog website ,build by taking task from frontendmentor.com to leverage my frontend skills.Built with Semantic HTML5 marku ,CSS custom properties,Flexbox, CSS Grid ,Mobile-first workflow",
      domain: "Frontend",
    },
    {
      project_Name: "React Weather App",
      pic: "https://i.ibb.co/FxBh9Yw/Screenshot-2024-02-27-221611.png",
      codeLink: "https://github.com/Lalithkumar-19/React-Weather-App",
      liveLink: "https://weather-forecast-website-lalith.netlify.app/",
      Description:
        "React Weather App, a user-friendly and feature-rich application designed to keep you updated on global weather conditions and forecasts. Powered by React, this app leverages the OpenWeather API, React-Accordion for data organization, and an intuitive autocomplete search bar to make accessing weather information a breeze.Weather Information: Get real-time weather updates, including temperature, humidity, wind speed, and more.ech Stack: React - For the front-end user interface. OpenWeather API - Providing real-time weather data. React-Accordion - Organizing weather data into collapsible sections. Autocomplete Search Bar - Enhancing user experience in searching for cities.",
      domain: "API",
    },
    {
      project_Name: "Responsive css page",
      pic: "https://github.com/Lalithkumar-19/responsive_css_page/raw/main/design/desktop-preview.jpg",
      codeLink:
        "https://github.com/Lalithkumar-19/responsive_css_page?tab=readme-ov-file",
      liveLink: "https://lalithkumar-19.github.io/responsive_css_page/",
      Description:
        "This is the small project i had worked on in my initial days of learning web ,task was taken from frontend mentor website .",
      domain: "Frontend",
    },
    {
      project_Name: "Space-x CLone mirror website",
      pic: "https://github.com/Lalithkumar-19/spacexclone/raw/main/img/screen.jpg",
      codeLink: "https://github.com/Lalithkumar-19/spacexclone",
      liveLink: "https://lalithkumar-19.github.io/spacexclone/",
      Description:
        "SpaceX Clone, a web application designed to mirror the official SpaceX website using HTML, CSS, and JavaScript. Immerse yourself in the world of space exploration and innovation, just like on the official SpaceX site.",
      domain: "Frontend",
    },
    {
      project_Name: "Blogging Fullsatck website",
      pic: "https://i.ibb.co/mbw6cwr/Screenshot-2024-02-27-221937.png",
      codeLink: "https://github.com/Lalithkumar-19/BlogWebsite-Frontend-",
      liveLink: "https://blogin-web.netlify.app/",
      Description:
        "React Blogging Website, a full-stack web application designed to empower bloggers and content creators. This project showcases a comprehensive set of features, including user registration, authentication, blog post creation, editing, and image uploading. Built with a modern tech stack comprising Axios, Mongoose, Node.js, Express.js, and Multer,",
      domain: "Fullstack",
    },
    {
      project_Name: "Fullstack todo App",
      pic: "https://media.geeksforgeeks.org/wp-content/uploads/20230606125727/gfg.png",
      codeLink: "https://github.com/Lalithkumar-19/fullstacktodo-frontend",
      liveLink: "https://lalithfullstacktodo.netlify.app/",
      Description:
        "This is fullstack app ,I learned MONGODB CRUD operations with node js and express js by building this project alone.",
      domain: "Fullstack",
    },
    {
      project_Name: "Edudev Website Fullstack",
      pic: "https://camo.githubusercontent.com/47f40771ec388e120f05672d5f4b90e3ed92dcc59fbd1105dd00cb5e4a345ea5/68747470733a2f2f692e696d6775722e636f6d2f766555787374382e706e67",
      codeLink: "https://github.com/Lalithkumar-19/Edudev-Frontend",
      liveLink: "https://edudevwebonline.netlify.app/",
      Description:
        "EduDev is an innovative online course platform designed to revolutionize the way users engage with educational content. Unlike a mere clone, EduDev offers a unique blend of features tailored to enhance the learning experience for both instructors and students alike",
      domain: "Fullstack",
    },
    {
      project_Name: "To-Do application using Reactjs & Redux js",
      pic: "https://i.imgur.com/5AzgCNl.png",
      codeLink: "https://github.com/Lalithkumar-19/TodoApplication",
      liveLink: "https://todoapplalith.netlify.app/",
      Description:
        "A basic To-Do application using ReactJS that allows users to add, view, and delete tasks. This application should showcase my understanding of HTML, CSS, JavaScript, React components, hooks, and state management using Redux.",
      domain: "React and Redux state management",
    },
  ];
  return (
    <div className="flex flex-col w-full text-[white] p-4" id="portofolio">
      <h2 className="text-[blue] font-mono text-3xl text-center w-full mt-2 mb-2 underline underline-offset-4 ">
        Projects
      </h2>
      <div className="flex w-full flex-wrap  items-center justify-center gap-7 mt-3">
        {projects.map((item, i) => {
          return (
            <div
              key={i}
              className="flex w-[350px] flex-col hover:border p-3 rounded-md cursor-pointer h-[600px]"
              data-aos="slide-left"
            >
              <img
                src={item.pic}
                alt="portofolio"
                className="w-full h-[200px] rounded-lg"
              />
              <div className="flex flex-col w-full">
                <h2 className="mt-2 p-2 text-justify text-[green] font-bold w-full h-12">
                  {item.project_Name}
                </h2>
                <h1 className="p-2 text-[red]">Domain: {item.domain}</h1>
                <p className="p-2 mt-2 h-[200px] overflow-scroll no-scrollbar ">
                  {item.Description}
                </p>
                <div className="w-full flex items-center justify-center gap-2 mt-2 bg-slate-800 rounded-md">
                  <a
                    role="button"
                    className="bg-white text-black text-2xl p-2 rounded-md hover:bg-[#00df9a] hover:text-black"
                    href={item.codeLink}
                  >
                    Code
                  </a>
                  <a
                    role="button"
                    className="bg-white text-black text-2xl p-2 rounded-md hover:bg-[#00df9a] hover:text-black"
                    href={item.liveLink}
                  >
                    See live
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <a
        role="button"
        className="bg-white text-2xl p-2 rounded-md hover:bg-[#00df9a] hover:text-black text-center text-cyan-800 w-[80%] mt-6 mx-auto"
        href={"https://github.com/Lalithkumar-19"}
      >
        SEE ALL ON GITHUB
      </a>
    </div>
  );
}

export default Portofolio;
