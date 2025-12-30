import { AbsoluteFill, Composition, useCurrentFrame, interpolate } from 'remotion';

const MainVideo: React.FC = () => {
  const frame = useCurrentFrame();

  const uiSlideY = interpolate(frame, [0, 30], [1920, 0], { extrapolateRight: 'clamp' });
  const uiOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });

  const emailInputProgress = Math.min(Math.floor(interpolate(frame, [40, 80], [0, 20], { extrapolateRight: 'clamp' })), 20);
  const passwordInputProgress = Math.min(Math.floor(interpolate(frame, [85, 115], [0, 8], { extrapolateRight: 'clamp' })), 8);

  const cursorX = interpolate(frame, [120, 150], [540, 700], { extrapolateRight: 'clamp' });
  const cursorY = interpolate(frame, [120, 150], [1150, 1250], { extrapolateRight: 'clamp' });
  const cursorOpacity = interpolate(frame, [120, 150, 160], [1, 1, 0], { extrapolateRight: 'clamp' });

  const buttonClickScale = interpolate(frame, [150, 155, 160], [1, 0.95, 1], { extrapolateRight: 'clamp' });

  const hackerOpacity = interpolate(frame, [160, 180], [0, 0.9], { extrapolateRight: 'clamp' });
  const hackerScale = interpolate(frame, [160, 200], [1.2, 1], { extrapolateRight: 'clamp' });

  const overlayTextOpacity = interpolate(frame, [185, 205], [0, 1], { extrapolateRight: 'clamp' });
  const overlayTextScale = interpolate(frame, [185, 205, 220, 240], [0.8, 1.1, 1, 1.05], { extrapolateRight: 'clamp' });

  const backgroundZoom = interpolate(frame, [0, 300], [1, 1.15], { extrapolateRight: 'clamp' });

  const scanLine1Y = interpolate(frame, [0, 300], [0, 1920], { extrapolateRight: 'clamp' }) % 1920;
  const scanLine2Y = interpolate(frame, [0, 300], [640, 2560], { extrapolateRight: 'clamp' }) % 1920;
  const scanLine3Y = interpolate(frame, [0, 300], [1280, 3200], { extrapolateRight: 'clamp' }) % 1920;

  const redPulse = Math.sin(frame * 0.15) * 0.3 + 0.7;

  const glitchActive = frame >= 160 && frame <= 180 && Math.random() > 0.7;
  const glitchOffsetX = glitchActive ? (Math.random() - 0.5) * 15 : 0;

  const warningFlashOpacity = interpolate(frame, [150, 155, 160, 165], [0, 0.6, 0, 0.4], { extrapolateRight: 'clamp' });

  const dataStealOpacity = interpolate(frame, [210, 230], [0, 1], { extrapolateRight: 'clamp' });

  const emailCursorBlink = Math.floor(frame / 15) % 2 === 0 && frame >= 40 && frame < 85;
  const passwordCursorBlink = Math.floor(frame / 15) % 2 === 0 && frame >= 85 && frame < 120;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#0a0a0a',
        transform: `scale(${backgroundZoom})`,
        transformOrigin: 'center center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at center, rgba(30, 30, 40, 0.8) 0%, rgba(10, 10, 10, 1) 100%)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: `${scanLine1Y}px`,
          left: 0,
          right: 0,
          height: '3px',
          background: `rgba(255, 0, 0, ${redPulse * 0.6})`,
          boxShadow: `0 0 10px rgba(255, 0, 0, ${redPulse})`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: `${scanLine2Y}px`,
          left: 0,
          right: 0,
          height: '2px',
          background: `rgba(255, 0, 0, ${redPulse * 0.5})`,
          boxShadow: `0 0 8px rgba(255, 0, 0, ${redPulse * 0.8})`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: `${scanLine3Y}px`,
          left: 0,
          right: 0,
          height: '2px',
          background: `rgba(255, 0, 0, ${redPulse * 0.4})`,
          boxShadow: `0 0 6px rgba(255, 0, 0, ${redPulse * 0.6})`,
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
          opacity: warningFlashOpacity,
          mixBlendMode: 'screen',
        }}
      />

      {frame >= 160 && (
        <AbsoluteFill
          style={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            opacity: hackerOpacity,
            transform: `scale(${hackerScale})`,
            zIndex: 1,
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '600px',
              height: '900px',
              marginBottom: '-50px',
            }}
          >
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '0',
                height: '0',
                borderLeft: '150px solid transparent',
                borderRight: '150px solid transparent',
                borderBottom: '300px solid rgba(0, 0, 0, 0.9)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '300px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '200px',
                height: '250px',
                background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.85) 100%)',
                borderRadius: '100px 100px 0 0',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '480px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.85) 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '300px',
                left: '80px',
                width: '60px',
                height: '200px',
                background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 100%)',
                borderRadius: '30px',
                transform: 'rotate(20deg)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '300px',
                right: '80px',
                width: '60px',
                height: '200px',
                background: 'linear-gradient(270deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 100%)',
                borderRadius: '30px',
                transform: 'rotate(-20deg)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '550px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '120px',
                height: '40px',
                borderRadius: '20px',
                background: `rgba(255, 0, 0, ${redPulse})`,
                boxShadow: `0 0 30px rgba(255, 0, 0, ${redPulse})`,
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '100px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '140px',
                color: `rgba(255, 0, 0, ${redPulse})`,
                textShadow: `0 0 40px rgba(255, 0, 0, ${redPulse})`,
              }}
            >
              👤
            </div>
          </div>
        </AbsoluteFill>
      )}

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) translateY(${uiSlideY}px) translateX(${glitchOffsetX}px)`,
          opacity: uiOpacity,
          width: '900px',
          zIndex: 2,
        }}
      >
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 245, 245, 0.9) 100%)',
            borderRadius: '30px',
            padding: '60px',
            boxShadow: '0 20px 80px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(200, 200, 200, 0.3)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div
              style={{
                fontSize: '72px',
                fontWeight: '900',
                background: 'linear-gradient(90deg, #4285f4 0%, #34a853 25%, #fbbc05 50%, #ea4335 75%, #4285f4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-2px',
              }}
            >
              Google
            </div>
            <div
              style={{
                fontSize: '32px',
                fontWeight: '500',
                color: '#202124',
                marginTop: '20px',
              }}
            >
              Sign in to your account
            </div>
          </div>

          <div style={{ marginBottom: '35px' }}>
            <div
              style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#5f6368',
                marginBottom: '12px',
              }}
            >
              Email
            </div>
            <div
              style={{
                background: '#ffffff',
                border: '2px solid #dadce0',
                borderRadius: '8px',
                padding: '20px',
                fontSize: '24px',
                fontFamily: 'monospace',
                color: '#202124',
              }}
            >
              {'user@email.com'.substring(0, emailInputProgress)}
              {emailCursorBlink && emailInputProgress < 20 && (
                <span style={{ color: '#4285f4' }}>|</span>
              )}
            </div>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <div
              style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#5f6368',
                marginBottom: '12px',
              }}
            >
              Password
            </div>
            <div
              style={{
                background: '#ffffff',
                border: '2px solid #dadce0',
                borderRadius: '8px',
                padding: '20px',
                fontSize: '28px',
                fontFamily: 'monospace',
                color: '#202124',
                letterSpacing: '8px',
              }}
            >
              {'•'.repeat(passwordInputProgress)}
              {passwordCursorBlink && passwordInputProgress < 8 && (
                <span style={{ color: '#4285f4' }}>|</span>
              )}
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                display: 'inline-block',
                background: '#4285f4',
                color: '#ffffff',
                fontSize: '28px',
                fontWeight: '700',
                padding: '22px 80px',
                borderRadius: '12px',
                transform: `scale(${buttonClickScale})`,
                boxShadow: '0 4px 20px rgba(66, 133, 244, 0.4)',
                cursor: 'pointer',
              }}
            >
              Sign In
            </div>
          </div>
        </div>
      </div>

      {frame >= 120 && frame <= 160 && (
        <div
          style={{
            position: 'absolute',
            left: `${cursorX}px`,
            top: `${cursorY}px`,
            opacity: cursorOpacity,
            zIndex: 10,
          }}
        >
          <svg width="50" height="50" viewBox="0 0 24 24">
            <path
              d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"
              fill="#ffffff"
              stroke="#000000"
              strokeWidth="1"
            />
          </svg>
        </div>
      )}

      {frame >= 185 && (
        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 5,
          }}
        >
          <div
            style={{
              textAlign: 'center',
              opacity: overlayTextOpacity,
              transform: `scale(${overlayTextScale})`,
            }}
          >
            <div
              style={{
                display: 'inline-block',
                padding: '35px 70px',
                background: 'rgba(0, 0, 0, 0.85)',
                border: '5px solid #ff0000',
                borderRadius: '40px',
                boxShadow: `0 0 60px rgba(255, 0, 0, ${redPulse}), inset 0 0 30px rgba(255, 0, 0, 0.3)`,
              }}
            >
              <h1
                style={{
                  fontSize: '88px',
                  fontWeight: '900',
                  color: '#ff0000',
                  margin: 0,
                  textShadow: `0 0 50px rgba(255, 0, 0, ${redPulse}), 0 0 30px rgba(255, 0, 0, 0.8)`,
                  letterSpacing: '-2px',
                  textTransform: 'uppercase',
                }}
              >
                FAKE LOGIN PAGE
              </h1>
            </div>
          </div>
        </AbsoluteFill>
      )}

      {frame >= 210 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: '200px',
              left: '100px',
              opacity: dataStealOpacity,
              zIndex: 6,
            }}
          >
            <div
              style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#00ff00',
                fontFamily: 'monospace',
                textShadow: '0 0 10px #00ff00',
              }}
            >
              {'> STEALING DATA...'}
            </div>
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '300px',
              right: '100px',
              opacity: dataStealOpacity,
              zIndex: 6,
            }}
          >
            <div
              style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#00ff00',
                fontFamily: 'monospace',
                textShadow: '0 0 10px #00ff00',
              }}
            >
              {'> PASSWORD CAPTURED'}
            </div>
          </div>
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
      durationInFrames={300}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
