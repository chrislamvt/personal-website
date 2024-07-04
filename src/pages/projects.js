import React from "react";

const Projects = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1 style={{ color: "#00FF7F", textAlign: "center" }}>Projects</h1>
      <ul style={{ fontSize: "18px", color: "#999ea2" }}>
        <div>
          <h3>
            Twitter Collection | Senior Capstone Project | January 2024 - May
            2024
          </h3>
          <li>
            Collaborated with a team of 4 others and developed a way to convert,
            organize, and store 6 billion Twitter tweets collected by Dr. Andrea
            Kavanaugh for Virginia Tech research projects
          </li>
          <li>
            Developed python scripts to convert three different types of tweets
            into a singular JSON format
          </li>
          <li>
            Used a BERT machine learning model to classify tweets by events and
            a GloVe model to detect hate speech present in tweets
          </li>
          <li>
            This project was continued off a team that started the project in
            2021
          </li>
          <h3>BookFinder App | iOS Mobile Development | May 2024</h3>
          <li>
            Created an iOS mobile app that allows for users to find books and
            bookstores from their phone
          </li>
          <li>
            Utilized the Google Books API, Embedded Viewer API, and MapKit
          </li>
          <li>
            Functionalities included: searching books by author, title,
            publisher, keywords and many more, seeing book prices, locating
            nearby bookstores, previewing books and seeing book ratings/reviews,
            favoriting and saving books onto the app, and more
          </li>
          <h3>Personal Server | Computer Systems | Fall 2023</h3>
          <li>
          Built a personal web server that can serve files, stream MP4 videos, and provides a simple token-based authentication
          API
          </li>
          <li>
          Implemented persistent connections, multiple client support, and protocol independence
          </li>
          <h3>Memory Manager | Data Structures and Algorithms | Fall 2023</h3>
          <li>
          Built a system for managing seminar records, focused on efficient memory management and data retrieval
          </li>
          <li>
            Used a hash table for efficient access to records. Hash table used double hashing, was extensible, and supported basic operations
          </li>
          <li>
            Utilized a memory pool with a buddy system to manage memory space. Memory blocks were allocated and freed as needed, and also was extensible when required.
          </li>
          <h3>Threadpool | Computer Systems | Fall 2023</h3>
          <li>
          Implemented a fork/join thread pool for efficient parallel execution of divide and conquer algorithms
          </li>
          <li>
          Used work stealing for load balancing among threads, a helper mechanism to ensure efficient task completion, and utilized locks, condition variables, and queue system for task management
          </li>
          <li>
          Utilized a thread pool to manage multiple worker threads which each handled their own tasks in parallelism
          </li>
          <h3>Recipe App | iOS Mobile Development | March 2024</h3>
          <li>
            Created an iOS mobile app that allows for users to find popular
            recipes from their phone
          </li>
          <li>Utilized the edamam food database, nutrition, and recipe APIs</li>
          <li>
            Functionalities included: searching for recipes, seeing nutrition
            information, saving recipes onto the app, and more
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Projects;
