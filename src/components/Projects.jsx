import React from 'react'
import { data } from '../data/data';

const Projects = () => {
  return (
    <div
      className="bg-[#0a192f]"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        background: "#0a192f",
        color: "white",
        flexDirection: "column",
        padding: "100px",
        boxSizing: "border-box",
        paddingTop:'30px'
      }}
    >
      <div
        className="Header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <h1 className="ProjectsHeaderText">PROJECTS</h1>
      </div>
      <div className="Projects">
        {data.map((item, i) => (
          <div
            className="Project"
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              width: "100%",
              flexDirection: "column",
              margin: "20px 0",
            }}
          >
            <span className="ProjectBgText">{item.name}</span>
            <span className="ProjectSmText">{item.Desc}</span>
            <div
              className="buttonCon"
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                width: "100%",
              }}
            >
              <div
                className="buttonProjects"
                style={{
                  padding: "5px",
                  border: "2px solid green",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                See Live
              </div>
              <div
                className="buttonProjects"
                style={{ padding: "8px", cursor: "pointer", fontSize: "14px" }}
              >
                <a href={item.github} target='blank' >
                Source Code
                </a>
                
              </div>
            </div>
            <div className="ProjectsImgCon" style={{ margin: "20px 0" }}>
              <img src={item.image} alt="" className="ProjectsImgCon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects
