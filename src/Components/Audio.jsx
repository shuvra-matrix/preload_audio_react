import React, { useEffect, useRef, useState } from "react";

const audioData = [
  {
    id: 380797,
    title: "2-Minute-Timer.mp3",
    author: "jtkeyva",
    duration: "2:10",
    link: "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3",
  },
  {
    id: 360368,
    title: "Doggy Style Sex Sounds Young Couple.ogg",
    author: "petercrowther",
    duration: "6:17",
    link: "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3",
  },
  {
    id: 326893,
    title: "Female screaming for help",
    author: "AmeAngelofSin",
    duration: "0:22",
    link: "https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg",
  },
];

const AudioPlayer = () => {
  const audioElementsRef = useRef({});
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  useEffect(() => {
    audioData.forEach(({ id, link }) => {
      const audio = new Audio(link);
      audioElementsRef.current[id] = audio;
    });
  }, []);

  const handleDivClick = (id) => {
    if (currentlyPlaying !== null) {
      const currentAudio = audioElementsRef.current[currentlyPlaying];
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
    }

    const newAudio = audioElementsRef.current[id];
    if (newAudio) {
      newAudio.currentTime = 0;
      newAudio.play();
      setCurrentlyPlaying(id);
    }
  };

  return (
    <div>
      {audioData.map(({ id, title }) => (
        <div
          key={id}
          onClick={() => handleDivClick(id)}
          style={{
            cursor: "pointer",
            margin: "10px",
            padding: "10px",
            border: "1px solid black",
          }}
        >
          Play {title}
        </div>
      ))}
    </div>
  );
};

export default AudioPlayer;
