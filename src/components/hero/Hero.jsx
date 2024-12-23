import React from 'react';

const Hero = () => {
  return (
    <div style={{  position: 'relative', width: '100%', height: '100vh' }}>
      {/* Video Section */}
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <video
          src="/hero.mp4" // Path to your video in the public folder
          autoPlay
          loop
          muted
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            zIndex: 0,
          }}
        />

        {/* Text Section */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            color: 'white',
            fontSize: '3rem',
            fontWeight: 'bold',
            backgroundColor: 'rgba(0, 0, 0, 0)', // Semi-transparent background for better readability
            padding: '1rem',
            borderRadius: '8px',
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
        >
          Kokan Welfare Society
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '-15%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            color: 'white',
            fontSize: '3rem',
            fontWeight: 'bold',
            padding: '1rem',
            borderRadius: '8px',
            textAlign: 'center',
            textTransform: 'uppercase',
         
            
          }}
        >
         Together we will Rebuilt our future 
        </div>
      </div>
    </div>
  );
};

export default Hero;
