import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import noon from "../../Assets/Projects/noon-home.PNG";
import travelList from "../../Assets/Projects/travel-app.png";
import worldWise from "../../Assets/Projects/Worldwise.png";
import poopcorn from "../../Assets/Projects/usePopcorn.png";
import jsGame from "../../Assets/Projects/jsGame.PNG";
import Pizza from "../../Assets/Projects/Fast-React-Pizza-Co-.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"TMDB.png"}
              isBlog={false}
              title="Movie app "

              description="Responsive web application built with React, Redux, and Tailwind CSS, utilizing Axios to fetch movie data from the movies
            database
            Features an * add to favorites * functionality for users to save preferred movies, pagination to manage the display of
            movies, enhancing the user experience by efficiently navigating through the content, along with a search capability for
            effortless exploration of the movies collection"
              ghLink="https://github.com/MennaIsmail30/movie-app"
              demoLink="https://movie-pp.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"FURNITURE-STUDIO-LOGIN.png"}
              isBlog={false}
              title="Furniture Studio Ecommerce"

              description="  HTML, CSS, JavaScript, Firebase 
● Responsive web application developed using vanilla HTML, CSS, and JavaScript, with Firebase integration. 
● Supports CRUD (Create, Read, Update, Delete) operations, allowing admins to manage furniture products effectively within 
the platform. "
              ghLink="https://github.com/MennaIsmail30/Furniture-Studio-Ecommerce"
              demoLink="https://furniture-store3.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={worldWise}
              isBlog={false}
              title="World Wise"
              description="This website, built using React and Vite, offers a dynamic and interactive interface for managing cities. 
              It utilizes React Hooks like useState, useEffect, useReducer, useNavigation, 
              and useContext to manage state and navigation efficiently
              City Management: Users can create, display, and delete cities through a context-based system.
              Authentication: Fake user authentication is handled through a dedicated context.
              Map Integration: The site includes a map powered by the Leaflet library, allowing users to view city markers and adjust the map position using geolocation.
              Form Functionality: The site fetches and submits city data for dynamic updates."
              ghLink="https://github.com/MennaIsmail30/World-wise"
              demoLink="world-wise22.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noon}
              isBlog={false}
              title="Noon Clone "
              description="Next.js, Angular, React Native, JavaScript, TypeScript, Tailwind CSS, Auth.js, MongoDB 
● Implemented authentication, wishlist management, cart functionality, order placement, and profile editing features for 
both the main website and mobile application. 
● Developed search capabilities, order tracking, localization support, user rating options, and integrated seamless payment 
processing via Stripe. 
● Created an admin panel with CRUD operations for efficient management of products, orders, and customer data, ensuring 
a seamless user experience and streamlined administrative processes."
              ghLink="https://github.com/MennaIsmail30/Noon-clone"
              demoLink="https://github.com/MennaIsmail30/Noon-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travelList}
              isBlog={false}
              title="Travel List "
              description="This website, built using React, provides a streamlined packing list manager for traveler,key components like Logo, Form, PackingList, and Stats, 
              leveraging the useState hook for efficient state management  ........................
              ● Key Features:

Add Items: Users can easily add items to their packing list.
Manage Items: Items can be deleted, toggled as packed/unpacked, and sorted by input, description, or stats.
Clear List: Users can clear all items from the list with a single action."
              ghLink="https://github.com/MennaIsmail30/travel-list"
              demoLink=" https://travel-list-22.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={poopcorn}
              isBlog={false}
              title="PopcornPal"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/MennaIsmail30/PopcornPal"
              demoLink="https://poopcorn-app.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jsGame}
              isBlog={false}
              title="Dice Game"
              description="This is a fast and intuitive pizza ordering app built using React and Vite. It features a user-friendly interface with a seamless menu, cart, and ordering process."
              ghLink="https://github.com/MennaIsmail30/Dice-Game"
              demoLink="dice-gamee1.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pizza}
              isBlog={false}
              title="FAST PIZZA CO."
              description="This is a fast and intuitive pizza ordering app built using React and Vite. It features a user-friendly interface with a seamless menu, cart, and ordering process."
              ghLink="hhttps://github.com/MennaIsmail30/PizzeriaHub"
              demoLink="https://fast-pizza-app-33.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
