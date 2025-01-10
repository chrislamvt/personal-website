import React from "react";
import resume from "./ChrisLamResume2025.pdf";

const Resume = () => {
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
            <h1 style={{ color: "#00FF7F", textAlign: "center" }}>Resume</h1>
            <embed src={resume} width="80%" height="80%" />
        </div>
    );
};

export default Resume;
