import React, { useState } from "react";

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_URL = "https://api.reve.com/v1/image/create";
  const API_KEY = import.meta.env.VITE_REVE_API_KEY; 

  const generateImage = async () => {
    if (!prompt.trim()) {
      alert("Please enter a prompt first!");
      return;
    }

    setLoading(true);
    setError("");
    setImageUrl("");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          prompt: prompt,
          aspect_ratio: "16:9",
          version: "latest"
        })
      });

      if (!res.ok) throw new Error(`HTTP Error ${res.status}`);

      const data = await res.json();
      console.log("Full Response:", data);

      if (data.image) {
        const base64Image = `data:image/png;base64,${data.image}`;
        console.log("base64Image",base64Image);
        
        setImageUrl(base64Image);
      } else {
        throw new Error("Image not found in API response");
      }

    } catch (err) {
      console.error("Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2> AI Image Generator</h2>

      <input
        type="text"
        placeholder="Describe your image..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{
          width: "60%",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "10px"
        }}
      />
      <br />

      <button
        onClick={generateImage}
        disabled={loading}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        {loading ? "Generating..." : "Generate Image"}
      </button>

      {error && <p style={{ color: "red", marginTop: "10px" }}>⚠️ {error}</p>}

      {imageUrl && (
        <div style={{ marginTop: "30px" }}>
          <h3>Result:</h3>
          <img
            src={imageUrl}
            alt="Generated AI"
            style={{
              maxWidth: "80%",
              borderRadius: "12px",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)"
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;
