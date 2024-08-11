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
      project_Name: "Collabrative Docs",
      pic: "https://i.ibb.co/QbnPbj1/Screenshot-2024-08-11-100859.png",
      codeLink: "https://github.com/Lalithkumar-19/Realtime-Docs-collab",
      liveLink:
        "https://collabeditor-fdf37nbam-lalithkumar-19s-projects.vercel.app/",
      Description:
        "A real-time collaborative document editing application built with Node.js, Socket.io, React.js (using Vite), and Quill.js. This app allows multiple users to edit a document simultaneously, with changes being reflected in real-time across all connected clients",
      domain: "Realtime-communication",
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
      project_Name: "React Weather App",
      pic: "https://i.ibb.co/FxBh9Yw/Screenshot-2024-02-27-221611.png",
      codeLink: "https://github.com/Lalithkumar-19/React-Weather-App",
      liveLink: "https://weather-forecast-website-lalith.netlify.app/",
      Description:
        "React Weather App, a user-friendly and feature-rich application designed to keep you updated on global weather conditions and forecasts. Powered by React, this app leverages the OpenWeather API, React-Accordion for data organization, and an intuitive autocomplete search bar to make accessing weather information a breeze.Weather Information: Get real-time weather updates, including temperature, humidity, wind speed, and more.ech Stack: React - For the front-end user interface. OpenWeather API - Providing real-time weather data. React-Accordion - Organizing weather data into collapsible sections. Autocomplete Search Bar - Enhancing user experience in searching for cities.",
      domain: "API",
    },
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
      project_Name: "To-Do application using Reactjs & Redux js",
      pic: "https://i.imgur.com/5AzgCNl.png",
      codeLink: "https://github.com/Lalithkumar-19/TodoApplication",
      liveLink: "https://todoapplalith.netlify.app/",
      Description:
        "A basic To-Do application using ReactJS that allows users to add, view, and delete tasks. This application should showcase my understanding of HTML, CSS, JavaScript, React components, hooks, and state management using Redux.",
      domain: "React and Redux state management",
    },
    {
      project_Name: "Evergreen ECE Web ",
      pic: "https://i.imgur.com/kj7bQdB.png",
      codeLink: "https://github.com/Lalithkumar-19/EVERGREEN-ece-website",
      liveLink: "https://evergreenece.w3spaces.com/",
      Description:
        "This is the website that i had build in my initial days .This website having my class PDF's subject to subject and lesson to lesson . I dedicated this to my class. ",
      domain: "Static Html,css ,js",
    },
    {
      project_Name: "Word Counter",
      pic: "https://i.imgur.com/jyRZ1wt.png",
      codeLink: "https://github.com/Lalithkumar-19/WORD-COUNTER",
      liveLink: "https://lalithwordcounter.netlify.app/",
      Description:
        "The Word counter is builded by using html and css and javascript in my initial days of practicing code.This simple tool is built with HTML, CSS, and JavaScript to help users count words and sentences in the text they input. It's designed for quick and easy word and sentence counting.",
      domain: "Front end and Javascript ",
    },
    {
      project_Name: "Simple Calculator",
      pic: "https://i.imgur.com/TXwsRxp.png",
      codeLink: "https://github.com/Lalithkumar-19/calculator-js",
      liveLink: "https://github.com/Lalithkumar-19/calculator-js",
      Description:
        "Simple Calculator, a user-friendly web application built with HTML, CSS, and JavaScript. This calculator is designed to perform basic arithmetic operations, making math calculations straightforward and convenient.",
      domain: "Frontend and Javascript",
    },
    {
      project_Name: "Node Mailer Server API ",
      pic: "https://form.io/wp-content/uploads/thumbnail-formio-backend-api-integration.webp",
      codeLink: "https://github.com/Lalithkumar-19/nodemailer_backend",
      liveLink: "https://github.com/Lalithkumar-19/nodemailer_backend",
      Description:
        "Node Mailer Server API for my portfolio contact form! This API empowers my portfolio website by allowing visitors to send you personal messages directly. Built with Node.js, Express.js, and Node Mailer, it provides a reliable and secure means for users to contact you and share their thoughts or inquiries",
      domain: "Backend API",
    },
    {
      project_Name: "Digital Watch",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX7iu7M6wtEMHBK2Z5wdXUPHiCpFm96A4_Bg&s",
      codeLink: "https://github.com/Lalithkumar-19/digital-watch",
      liveLink: "https://lalithkumar-19.github.io/digital-watch/",
      Description:
        "A simple digital watch build with Html ,css ,javascript  build in my initial days ",
      domain: "Static Html,css ,js",
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
