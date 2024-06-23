import React from "react";
import "./Homepage.css";

function HomePage() {
  return (
    <div className="container-home">
      <div
        className="text-container"
        style={{ position: "relative", top: "15rem" }}
      >
        <h4 className="build-text" style={{ fontSize: "4rem" }}>
          MUDE SEU <span className="body-text">CORPO</span>
        </h4>
        <h3 className="middle-text">com ajuda profissional</h3>
        <p className="last-text">
          Tenha conselhos e dicas de especialistas para esculpir seu corpo e
          moldar sua paixão.<br></br> Junte-se a nós em um caminho transformador
          para construir seu corpo e desbloquear todo o seu potencial.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
