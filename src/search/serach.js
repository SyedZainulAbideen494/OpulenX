import { useState } from "react";
import axios from "axios";

const SearchElitePass = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Analyzing...");

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setLoadingText("Analyzing... 0%");
  
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 20) + 10;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
      }
      setLoadingText(`Analyzing... ${progress}%`);
    }, 400);
  
    try {
      const { data } = await axios.get(
        `https://srv594954.hstgr.cloud/search-elite-pass?query=${query}`
      );
  
      setTimeout(() => {
        setResult(data);
      }, 1500);
    } catch (error) {
      console.error("Error searching pass:", error);
      setTimeout(() => {
        setResult({ status: "Poor" });
      }, 1500);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  };
  

  return (
    <div style={styles.container}>
      <h1 style={styles.title} className="fadeIn">FIND THE ELITE</h1>
      <div style={styles.scanLine}></div>
      <p style={styles.subtitle}>
  Enter <strong>OpulenX ID, Email, or Phone Number</strong> to verify status.
</p>


      <div style={styles.searchBox}>
        <input
          type="text"
          placeholder="Enter OpulenX ID"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.button} disabled={loading}>
          {loading ? loadingText : "Find"}
        </button>
      </div>

      {result && (
        <div style={styles.resultBox}>
          {result.status === "Poor" ? (
            <h2 style={styles.poorText} className="fadeOut">
              NO STATUS FOUND.
            </h2>
          ) : (
            <div>
              <h2 style={styles.foundText}>ELITE VERIFIED</h2>
              <p style={styles.eliteId}>ID: {result.user_id}</p>
              <p style={styles.name} className="revealText">{result.name}</p>
              <p style={styles.joinDate}>
  Elite since:{" "}
  {result.created_at
    ? new Date(result.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown"}
</p>

            </div>
          )}
        </div>
      )}

      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .fadeIn {
            animation: fadeIn 1.2s ease-in-out;
          }

          @keyframes fadeOut {
            0% { opacity: 1; }
            100% { opacity: 0.4; filter: grayscale(80%); }
          }

          .fadeOut {
            animation: fadeOut 1.5s ease-in-out;
          }

          @keyframes reveal {
            0% { opacity: 0; letter-spacing: 10px; }
            100% { opacity: 1; letter-spacing: 2px; }
          }

          .revealText {
            display: inline-block;
            animation: reveal 1.5s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    background: "linear-gradient(135deg, #0c0c0c, #1a1a1a)",
    color: "#d4af37",
    textAlign: "center",
    minHeight: "100vh",
    padding: "40px",
    fontFamily: "'Cinzel', serif",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "crosshair",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#d4af37",
    textShadow: "0 0 12px rgba(212, 175, 55, 0.7)",
    letterSpacing: "2px",
  },
  scanLine: {
    width: "80%",
    height: "2px",
    background: "rgba(212, 175, 55, 0.6)",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "1.2rem",
    opacity: "0.8",
    marginBottom: "30px",
    fontStyle: "italic",
    color: "#c0c0c0",
  },
  searchBox: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "30px",
    flexWrap: "wrap",
  },
  input: {
    width: "280px",
    padding: "12px",
    fontSize: "1rem",
    borderRadius: "6px",
    border: "2px solid rgba(212, 175, 55, 0.6)",
    background: "rgba(0, 0, 0, 0.8)",
    color: "#fff",
    outline: "none",
  },
  button: {
    padding: "12px 25px",
    fontSize: "1rem",
    backgroundColor: "#1a1a1a",
    color: "#d4af37",
    border: "2px solid #d4af37",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",
    transition: "0.3s ease-in-out",
    boxShadow: "0 0 10px rgba(212, 175, 55, 0.5)",
  },
  resultBox: {
    marginTop: "30px",
    padding: "25px",
    borderRadius: "10px",
    background: "rgba(20, 20, 20, 0.95)",
    border: "2px solid rgba(212, 175, 55, 0.6)",
    display: "inline-block",
    textAlign: "center",
    maxWidth: "400px",
  },
  foundText: {
    fontSize: "1.8rem",
    color: "#d4af37",
    fontWeight: "bold",
    letterSpacing: "1px",
    textShadow: "0 0 10px rgba(212, 175, 55, 0.7)",
  },
  eliteId: {
    fontSize: "1.4rem",
    color: "#c0c0c0",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  name: {
    fontSize: "2.2rem",
    fontWeight: "bold",
    color: "#fff",
    textTransform: "uppercase",
    marginTop: "15px",
    letterSpacing: "1.5px",
    textShadow: "0 0 12px rgba(255, 255, 255, 0.7)",
  },
  joinDate: {
    fontSize: "1.2rem",
    color: "#c0c0c0",
    fontStyle: "italic",
    marginTop: "10px",
  },
  poorText: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#c0c0c0",
    textShadow: "0 0 10px rgba(192, 192, 192, 0.6)",
  },
};

export default SearchElitePass;
