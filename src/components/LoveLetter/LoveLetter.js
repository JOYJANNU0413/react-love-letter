import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './Perfect.mp3';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };

  return (
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
       My Dear Chelsie Angeleena 💜,<br />
       Happy 2nd Anniversary Sweetheart 💐<br />
       I want to express how deeply I cherish every moment with you 🤗.<br /> 
       Our journey together has been filled with love, laughter, and endless joy 🥰.<br /> 
       I look forward to many more years of creating memories and sharing our dreams.<br />
       With all my love, i love youuu neyy 💖, I'm always yours 💝<br />
       -BAKKI
      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
  );
};

export default LoveLetter;
