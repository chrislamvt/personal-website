import React from "react";

const Contact = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // Ensure the text is stacked vertically
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
        textAlign: "center", // Center the text horizontally
      }}
    >
      <h1>Contact Me</h1>
      <p style={{ fontSize: "18px", color: "#999ea2" }}>
        If you think I am a good fit for your company after reviewing my
        profile, I look forward to the opportunity to discuss how my background,
        skills, and enthusiasm can contribute to the success of your team and/or
        company. Please feel free to contact me any time at my mobile number:{" "}
        <a
          href="tel:+17036270500"
          style={{ color: "#33BBFF", textDecoration: "none" }}
        >
          (703) 627-0500
        </a>
        , or via email at{" "}
        <a
          href="mailto:chrisla0604@gmail.com"
          style={{ color: "#33BBFF", textDecoration: "none" }}
        >
          chrisla0604@gmail.com
        </a>{" "}
        to schedule an interview. In addition, I am based in the Fairfax, Virginia area and am open to meet in person if needed.
      </p>
    </div>
  );
};

export default Contact;
