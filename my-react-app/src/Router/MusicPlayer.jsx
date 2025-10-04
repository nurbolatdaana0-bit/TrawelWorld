import { useRef, useState } from "react";

function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
      <button onClick={toggleMusic} style={{
        background: "#38bdf8",
        color: "#0f172a",
        border: "none",
        padding: "10px 20px",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "600"
      }}>
        {playing ? "⏸ Пауза" : "▶️ Включить музыку"}
      </button>
      <audio ref={audioRef} loop>
        <source src="/music/travel.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default MusicPlayer;