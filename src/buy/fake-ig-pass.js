import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import { useRef } from "react";

const SuccessPageFake = () => {
  const location = useLocation();
  const { name } = location.state || { name: "Matthew Hayes" }; // Use fallback in case name isn't passed

  const cardRef = useRef(null);

  const downloadCard = () => {
    if (cardRef.current) {
      html2canvas(cardRef.current, { backgroundColor: null }).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = `${name || "ElitePass"}-Card.png`;
        link.click();
      });
    }
  };

  return (
    <div style={styles.container}>
      <div ref={cardRef} style={styles.card}>
        <h1 style={styles.title}>Power. Respect. Legacy. Welcome, {name}.</h1>
        <p style={styles.subtext}>
          <b>Money can be lost.</b> <br />
          <b>Power can be taken.</b> <br />
          But <b>respect?</b> That stays. <br />
          And now, {name}, it’s yours.
        </p>

        <div style={styles.divider}></div>

        {/* OpulenX with User ID */}
        <div style={styles.opulenX}>
          <b>OpulenX</b>
          <p style={styles.userId}>ID: 297128</p> {/* Display User ID */}
        </div>

        <div style={styles.goldGlow}></div>
      </div>

      <button style={styles.button} onClick={downloadCard}>
        Download Card
      </button>
    </div>
  );
};

const styles = {
  container: {
    background: "linear-gradient(135deg, #000 20%, #0c0c0c 100%)",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    padding: "20px",
    fontFamily: "'Cinzel', serif",
    flexDirection: "column",
  },
  card: {
    background: "rgba(15, 15, 15, 0.96)",
    padding: "60px",
    borderRadius: "15px",
    boxShadow: "0 0 60px rgba(255, 215, 0, 0.2)",
    textAlign: "center",
    width: "90%",
    maxWidth: "550px",
    backdropFilter: "blur(10px)",
    border: "3px solid rgba(255, 215, 0, 0.3)",
    position: "relative",
    overflow: "hidden",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#d4af37",
    fontFamily: "'Old Standard TT', serif",
    textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    marginBottom: "25px",
  },
  subtext: {
    fontSize: "1rem",
    opacity: "0.9",
    marginBottom: "30px",
    fontFamily: "'Playfair Display', serif",
    fontStyle: "italic",
    lineHeight: "1.7",
  },
  divider: {
    width: "80%",
    height: "2px",
    background: "rgba(255, 215, 0, 0.4)",
    margin: "30px auto",
  },
  opulenX: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    marginTop: "15px",
    fontFamily: "'Cinzel', serif",
  },
  userId: {
    fontSize: "1.2rem",
    fontWeight: "400",
    marginTop: "5px",
    opacity: "0.8",
    fontFamily: "'Poppins', sans-serif",
  },
  button: {
    marginTop: "20px",
    padding: "12px 24px",
    fontSize: "1.2rem",
    backgroundColor: "#d4af37",
    color: "#000",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    textTransform: "uppercase",
    boxShadow: "0 0 15px rgba(255, 215, 0, 0.5)",
  },
};

export default SuccessPageFake;
