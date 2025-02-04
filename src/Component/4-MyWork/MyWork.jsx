import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./MyWork.css";
const MyWork = () => {
  const myProjects = [
    {
      projectTitle: "landing page",
      category: "react",
      imgPath: "./imgs/1.png",
    },
    {
      projectTitle: "landing page",
      category: "react",
      imgPath: "./imgs/2.png",
    },
    { projectTitle: "landing page", category: "css", imgPath: "./imgs/3.png" },
    {
      projectTitle: "landing page",
      category: "css",
      imgPath: "./imgs/PSD.png",
    },
    {
      projectTitle: "Landing Page",
      category: "react",
      imgPath: "./imgs/1.jpg",
    },
    {
      projectTitle: "Landing Page",
      category: "react",
      imgPath: "./imgs/3.jpg",
    },
    {
      projectTitle: "Landing Page",
      category: "react",
      imgPath: "./imgs/5.jpg",
    },
    {
      projectTitle: "Landing Page",
      category: "react",
      imgPath: "./imgs/6.jpg",
    },
    {
      projectTitle: "Landing Page",
      category: "react",
      imgPath: "./imgs/7.jpg",
    },
    {
      projectTitle: "Landing Page",
      category: "react",
      imgPath: "./imgs/8.jpg",
    },
    {
      projectTitle: "Landing Page",
      category: "react",
      imgPath: "./imgs/b.png",
    },
    {
      projectTitle: "Landing Page",
      category: "react",
      imgPath: "./imgs/q.png",
    },
  ];

  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);
    const newArr = myProjects.filter((item) => {
      return item.category === buttonCategory;
    });

    setArr(newArr);
  };

  return (
    <div className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>

      <main className="flex">
        <section className="left-section flex">
          <button
            onClick={() => {
              setcurrentActive("all");
              setArr(myProjects);
            }}
            className={currentActive === "all" ? "active" : null}>
            All Projects
          </button>

          <button
            onClick={() => {
              handleClick("react");
            }}
            className={currentActive === "react" ? "active" : null}>
            React
          </button>

          <button
            onClick={() => {
              handleClick("css");
            }}
            className={currentActive === "css" ? "active" : null}>
            HTML & CSS
          </button>
        </section>

        <section className="right-section flex">
          <AnimatePresence>
            {arr.map((item) => {
              return (
                <motion.article
                  layout
                  initial={{ transform: "scale:0" }}
                  animate={{ transform: "scale:1" }}
                  transition={{ type: "spring", damping: 8, stiffness: 50 }}
                  key={item.imgPath}
                  className="card">
                  <img style={{ width: "210px" }} src={item.imgPath} />

                  <div style={{ width: "210px" }} className="box">
                    <h1 className="title">{item.projectTitle}</h1>
                    <p className="sub-title">
                      The medical services landing page is designed for a smooth
                      user experience, offering easy navigation for booking
                      appointments and exploring services. Its clean, responsive
                      layout ensures accessibility across all devices for
                      optimal convenience.
                    </p>

                    <div className="icons flex">
                      <div style={{ gap: "11px" }} className="flex">
                        <div className="icon-link"></div>
                        <div className="icon-github"></div>
                      </div>
                      <a className="link flex" href="">
                        More
                        <span
                          style={{ alignSelf: "end" }}
                          className="icon-arrow-right"></span>
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </section>
      </main>
    </div>
  );
};

export default MyWork;
