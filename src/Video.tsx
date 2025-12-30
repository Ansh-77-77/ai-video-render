import {Composition, AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';
import React from 'react';

export const Video: React.FC = () => {
  return (
    <>
      <Composition
        id="Video"
        component={Main}
        durationInFrames={150}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};

const Main: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#0f172a',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: 70,
        fontWeight: 'bold',
        opacity
      }}
    >
      HOW HACKERS  
      <br />
      STEAL PASSWORDS
    </AbsoluteFill>
  );
};
