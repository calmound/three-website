import React from "react";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "'Inter', sans-serif",
        color: "#333",
        textAlign: "center",
      }}
    >
      {/* Header Section */}
      <h1
        style={{
          fontSize: "3.5rem",
          fontWeight: "700",
          color: "#3f51b5",
          marginBottom: "1rem",
        }}
      >
        三木
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          marginBottom: "2rem",
          maxWidth: "600px",
          lineHeight: "1.6",
          color: "#555",
        }}
      >
        分享技术栈、开发经验与实践，希望我的经历能为你带来启发。
      </p>

      {/* Buttons Section */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <a
          href="https://github.com/calmound"
          target="_blank"
          rel="noreferrer"
          style={{
            padding: "12px 24px",
            backgroundColor: "#3f51b5",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "500",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          查看我的 GitHub
        </a>
        <a
          href="https://space.bilibili.com/101706573"
          target="_blank"
          rel="noreferrer"
          style={{
            padding: "12px 24px",
            backgroundColor: "#ff5722",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "500",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          查看我的 B 站
        </a>
        <div
          // href="javascript:void;"
          target="_blank"
          rel="noreferrer"
          style={{
            padding: "12px 24px",
            backgroundColor: "#ff5722",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "500",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          微信：sanmu1598
        </div>
      </div>
    </div>
  );
};

export default Home;
