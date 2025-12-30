import { AbsoluteFill, Composition, useCurrentFrame, interpolate } from 'remotion';

const MainVideo: React.FC = () => {
  const frame = useCurrentFrame();

  const typingProgress = Math.min(Math.floor(interpolate(frame, [0, 60], [0, 8], { extrapolateRight: 'clamp' })), 8);
  const typingOpacity = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: 'clamp' });

  const glitchActive = frame >= 60 && frame <= 75;
  const glitchOffsetX = glitchActive ? (Math.random() - 0.5) * 20 : 0;
  const glitchOffsetY = glitchActive ? (Math.random() - 0.5) * 15 : 0;
  const glitchOpacity = glitchActive ? Math.random() : 1;

  const crackOpacity = interpolate(frame, [75, 78], [0, 1], { extrapolateRight: 'clamp' });
  const crackScale = interpolate(frame, [75, 85], [0.5, 1.5], { extrapolateRight: 'clamp' });

  const redFlashOpacity = interpolate(frame, [78, 82, 86], [0, 0.8, 0], { extrapolateRight: 'clamp' });

  const warningTextOpacity = interpolate(frame, [85, 95], [0, 1], { extrapolateRight: 'clamp' });
  const warningTextY = interpolate(frame, [85, 95], [100, 0], { extrapolateRight: 'clamp' });
  const warningTextScale = interpolate(frame, [85, 100, 105, 110], [0.8, 1.05, 0.98, 1.02], { extrapolateRight: 'clamp' });

  const shakeX = frame >= 85 ? Math.sin(frame * 0.8) * 8 : 0;
  const shakeY = frame >= 85 ? Math.cos(frame * 1.2) * 6 : 0;

  const backgroundGlitchIntensity = glitchActive ? Math.random() * 0.3 : 0;

  const splitGlitch1 = glitchActive && Math.random() > 0.5;
  const splitGlitch2 = glitchActive && Math.random() > 0.5;

  const cursorBlink = Math.floor(frame / 15) % 2 === 0 && frame < 75;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#000000',
        background: `linear-gradient(${frame * 2}deg, #000000 0%, #0a0a0a 50%, #050505 100%)`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at ${50 + Math.sin(frame * 0.1) * 20}% ${50 + Math.cos(frame * 0.1) * 20}%, rgba(20, 20, 30, ${backgroundGlitchIntensity}) 0%, transparent 60%)`,
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#ff0000',
          opacity: redFlashOpacity,
          mixBlendMode: 'screen',
        }}
      />

      {frame < 85 && (
        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            opacity: typingOpacity,
            transform: `translate(${glitchOffsetX + shakeX}px, ${glitchOffsetY + shakeY}px)`,
          }}
        >
          <div style={{ textAlign: 'center', position: 'relative' }}>
            {splitGlitch1 && (
              <div
                style={{
                  position: 'absolute',
                  top: '2px',
                  left: '-3px',
                  fontSize: '120px',
                  fontWeight: '700',
                  color: '#ff0000',
                  opacity: 0.6,
                  fontFamily: 'monospace',
                  letterSpacing: '12px',
                }}
              >
                {'•'.repeat(typingProgress)}
              </div>
            )}
            {splitGlitch2 && (
              <div
                style={{
                  position: 'absolute',
                  top: '-2px',
                  left: '3px',
                  fontSize: '120px',
                  fontWeight: '700',
                  color: '#00ff00',
                  opacity: 0.5,
                  fontFamily: 'monospace',
                  letterSpacing: '12px',
                }}
              >
                {'•'.repeat(typingProgress)}
              </div>
            )}
            <div
              style={{
                fontSize: '120px',
                fontWeight: '700',
                color: '#ffffff',
                fontFamily: 'monospace',
                letterSpacing: '12px',
                opacity: glitchOpacity,
                textShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
              }}
            >
              {'•'.repeat(typingProgress)}
              {cursorBlink && typingProgress < 8 && (
                <span style={{ color: '#00ff00', marginLeft: '10px' }}>|</span>
              )}
            </div>
          </div>

          {frame >= 75 && (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) scale(${crackScale})`,
                opacity: crackOpacity,
              }}
            >
              <svg width="800" height="200" viewBox="0 0 800 200" style={{ filter: 'drop-shadow(0 0 10px #ff0000)' }}>
                <line x1="400" y1="100" x2="100" y2="50" stroke="#ff0000" strokeWidth="4" />
                <line x1="400" y1="100" x2="700" y2="40" stroke="#ff0000" strokeWidth="4" />
                <line x1="400" y1="100" x2="200" y2="150" stroke="#ff0000" strokeWidth="3" />
                <line x1="400" y1="100" x2="600" y2="160" stroke="#ff0000" strokeWidth="3" />
                <line x1="400" y1="100" x2="50" y2="100" stroke="#ff0000" strokeWidth="3" />
                <line x1="400" y1="100" x2="750" y2="100" stroke="#ff0000" strokeWidth="3" />
                <line x1="200" y1="150" x2="100" y2="180" stroke="#ff0000" strokeWidth="2" />
                <line x1="600" y1="160" x2="700" y2="180" stroke="#ff0000" strokeWidth="2" />
                <line x1="100" y1="50" x2="50" y2="20" stroke="#ff0000" strokeWidth="2" />
                <line x1="700" y1="40" x2="750" y2="20" stroke="#ff0000" strokeWidth="2" />
              </svg>
            </div>
          )}
        </AbsoluteFill>
      )}

      {frame >= 85 && (
        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            transform: `translate(${shakeX}px, ${shakeY}px)`,
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '1000px',
              height: '1000px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 0, 0, 0.3) 0%, transparent 70%)',
              filter: 'blur(80px)',
              opacity: warningTextOpacity,
            }}
          />
          <div
            style={{
              textAlign: 'center',
              padding: '0 60px',
              opacity: warningTextOpacity,
              transform: `translateY(${warningTextY}px) scale(${warningTextScale})`,
            }}
          >
            <h1
              style={{
                fontSize: '92px',
                fontWeight: '900',
                color: '#ffffff',
                margin: 0,
                lineHeight: '1',
                textShadow: '0 0 80px rgba(255, 0, 0, 1), 0 0 50px rgba(255, 0, 0, 0.8), 0 0 30px rgba(255, 0, 0, 0.6), 0 4px 0 #ff0000',
                letterSpacing: '-3px',
                textTransform: 'uppercase',
              }}
            >
              YOUR PASSWORD
            </h1>
            <h1
              style={{
                fontSize: '92px',
                fontWeight: '900',
                color: '#ff0000',
                margin: '20px 0 0 0',
                lineHeight: '1',
                textShadow: '0 0 90px rgba(255, 0, 0, 1), 0 0 60px rgba(255, 0, 0, 0.9), 0 0 40px rgba(255, 0, 0, 0.7), 0 5px 0 #990000',
                letterSpacing: '-3px',
                textTransform: 'uppercase',
                animation: 'pulse 0.5s infinite',
              }}
            >
              IS NOT SAFE
            </h1>
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '250px',
              width: '100%',
              textAlign: 'center',
              opacity: warningTextOpacity,
            }}
          >
            <div
              style={{
                display: 'inline-block',
                padding: '20px 50px',
                border: '4px solid #ff0000',
                borderRadius: '50px',
                background: 'rgba(255, 0, 0, 0.2)',
                boxShadow: '0 0 40px rgba(255, 0, 0, 0.6), inset 0 0 20px rgba(255, 0, 0, 0.3)',
              }}
            >
              <span
                style={{
                  fontSize: '52px',
                  fontWeight: '900',
                  color: '#ff0000',
                  textShadow: '0 0 30px rgba(255, 0, 0, 1)',
                  letterSpacing: '2px',
                }}
              >
                ⚠ WARNING ⚠
              </span>
            </div>
          </div>
        </AbsoluteFill>
      )}

      {glitchActive && (
        <>
          <div
            style={{
              position: 'absolute',
              top: `${Math.random() * 1920}px`,
              left: 0,
              right: 0,
              height: '4px',
              background: '#ffffff',
              opacity: 0.8,
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: `${Math.random() * 1920}px`,
              left: 0,
              right: 0,
              height: '3px',
              background: '#ff0000',
              opacity: 0.6,
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: `${Math.random() * 1920}px`,
              left: 0,
              right: 0,
              height: '2px',
              background: '#00ff00',
              opacity: 0.5,
            }}
          />
        </>
      )}

      {frame >= 70 && frame < 90 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: `${150 + Math.random() * 50}px`,
              left: `${Math.random() * 1080}px`,
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#ff0000',
              opacity: 0.8,
              boxShadow: '0 0 15px #ff0000',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: `${1700 + Math.random() * 50}px`,
              left: `${Math.random() * 1080}px`,
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#ff0000',
              opacity: 0.8,
              boxShadow: '0 0 15px #ff0000',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: `${Math.random() * 1920}px`,
              left: `${100 + Math.random() * 50}px`,
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#ff0000',
              opacity: 0.8,
              boxShadow: '0 0 15px #ff0000',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: `${Math.random() * 1920}px`,
              left: `${930 + Math.random() * 50}px`,
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#ff0000',
              opacity: 0.8,
              boxShadow: '0 0 15px #ff0000',
            }}
          />
        </>
      )}
    </AbsoluteFill>
  );
};

export const Video: React.FC = () => {
  return (
    <Composition
      id="Video"
      component={MainVideo}
      durationInFrames={120}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
