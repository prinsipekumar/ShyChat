const keyStrokeSounds = [
  new Audio("/sounds/01.mp3"),
  new Audio("/sounds/02.mp3"),
  new Audio("/sounds/03.mp3"),
  new Audio("/sounds/04.mp3"),
];

function useKeyboardSound() {
  const playRandomKeyStrokeSound = () => {
    const randomSound =
      keyStrokeSounds[Math.floor(Math.random() * keyStrokeSounds.length)];

    randomSound.currentTime = 0;
    randomSound
      .play()
      .catch((error) => console.log("Audio play failed:", error));
  };

  return { playRandomKeyStrokeSound };
}

export default useKeyboardSound;
