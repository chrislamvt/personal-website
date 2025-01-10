import React from "react";
import vtImage from "./vtech.jpg";
import vsaImage from "./vtvsa.jpg";
import pickleImage from "./pickleball.jpeg";
import accaImage from "./acca.jpg";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        color: "#e0e0e0",
        minHeight: "100vh",
      }}
    >
      <div style={{ display: "flex", width: "100%", maxWidth: "1200px" }}>
        <div style={{ flex: 1, paddingRight: "20px" }}>
          <h1 style={{ color: "#00FF7F", textAlign: "left" }}>About Me</h1>
          <p style={{ fontSize: "18px", color: "#999ea2", textAlign: "left" }}>
          My name is Chris Lam, and I graduated with a Bachelor of Science in Computer Science from Virginia Tech. During my three years at Virginia Tech, I developed various technical skills, gained valuable experience collaborating on projects, and built a strong foundation in software development. My academic coursework included technical topics such as Object-Oriented Programming, Data Structures, and Computer Systems, as well as other essential areas like Human-Computer Interaction and Professionalism in Computing.

Currently, I am a Technical Support Engineer at QNAP Systems, where I deliver expert technical support for NAS/NVR systems. In this role, I diagnose and resolve hardware and software issues, troubleshoot complex network connectivity problems, and configure RAID storage systems. I also manage network setups, including routers and switches, while implementing and supporting backup, restoration, and disaster recovery systems to ensure data integrity and system reliability.

I am a highly motivated engineer, with strengths in creativity, communication, and time management. If you believe I am a good fit for your company after reviewing my profile, I would welcome the opportunity to discuss how my background, skills, and enthusiasm can contribute to the success of your team. Please feel free to contact me anytime via my mobile number or email.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={vtImage}
              alt="Virginia Tech"
              style={{ width: "600px", height: "300px" }}
            />
          </div>
          <h2 style={{ color: "#00FF7F", textAlign: "left" }}>
            Hobbies and Interests
          </h2>
          <ul style={{ fontSize: "18px", color: "#999ea2" }}>
            <li>
              I like to be active and love playing many different sports. Some
              of my current favorites are pickleball, soccer, running, and
              working out.
            </li>
            <li>
              I recently started getting more into movies and tv shows, with my
              favorite movie being Interstellar and my favorite show being
              Breaking Bad.
            </li>
            <li>
              At home, I enjoy playing video games with my friends and listening
              to music.
            </li>
            <li>
              I love going to church on the weekends and enjoy spending time
              with the community at my local church.
            </li>
          </ul>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={pickleImage}
              alt="Pickleball"
              style={{ width: "600px", height: "300px" }}
            />
          </div>
        </div>
        <div style={{ flex: 1, paddingLeft: "20px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={vsaImage}
              alt="VSA Event"
              style={{
                marginTop: "25px",
                width: "300px",
                height: "300px",
                borderRadius: "50%",
              }}
            />
          </div>
          <h2 style={{ color: "#00FF7F", textAlign: "left" }}>Leadership</h2>
          <div style={{ flex: 1, paddingRight: "20px" }}>
            <p
              style={{ fontSize: "18px", color: "#999ea2", textAlign: "left" }}
            >
              As a person who is very proud of my culture and background, I
              always strive to be active in leadership positions within the
              community to spread . For three years in high school, I co-founded
              and was president of the Vietnamese Student Association at Woodson
              High School, where I was able to leave a lasting impact after I
              left as the club continues to flourish today. Once I got to
              college, I spent my sophmore year as a member of the officer board
              at Virginia Tech's Vietnamese Student Association, where I was
              able to continue leading and influencing the community at my
              college. This translates directly to how I am in a working
              environment, as I often like to take charge and lead others when
              it comes to work and projects, as I am a strong communicator,
              planner, and organizer.
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={accaImage}
                alt="ACCA Food Pantry"
                style={{ width: "600px", height: "300px" }}
              />
            </div>
            <h2 style={{ color: "#00FF7F", textAlign: "left" }}>
              Volunteer Work
            </h2>
            <p
              style={{ fontSize: "18px", color: "#999ea2", textAlign: "left" }}
            >
              As a former boy scout of over 10 years, there were many
              opportunities for me to actively help my community and volunteer.
              I spent multiple Thanksgivings volunteering at a local soup
              kitchen along with be a part of canned food drives with my boy
              scout troop. In addition to this, I would consistently volunteer
              at the ACCA food pantry in my city back in high school. As I got
              to college, I would participate in service events hosted by the
              Vietnamese Student Association such as canned food drives, both as
              a board member and as a volunteer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
