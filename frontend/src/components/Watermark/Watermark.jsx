import React, { useState, useEffect } from 'react';
import './Watermark.css';

const Watermark = ({ children }) => {
  const [watermarkText, setWatermarkText] = useState('');

  useEffect(() => {
    let generatedText = '';
    for (let j = 90; j >= 0; j--) {
      if (j % 2 === 0) { generatedText += ' \n '; continue; }
      generatedText += (j % 4 === 1 ? "          " : '');
      generatedText += `    *    ${children}`.repeat(90);
      generatedText += '\n';
    }
    setWatermarkText(generatedText);
  }, [children]);

  return (
    <div className='w-full h-full absolute top-0 left-0 overflow-hidden'>
      <div className="watermark-container">
        <div className="watermark-text bg-white text-black/60 dark:text-black/50 dark:bg-gray-500/40">
          {watermarkText.split('\n').map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Watermark;
