import { AbsoluteFill, Composition, useCurrentFrame, interpolate } from 'remotion';

const MainVideo: React.FC = () => {
  const frame = useCurrentFrame();

  const databaseOpacity = interpolate(frame, [0, 25], [0, 1], { extrapolateRight: 'clamp' });
  const databaseScale = interpolate(frame, [0, 30], [0.6, 1], { extrapolateRight: 'clamp' });

  const lockOpacity = interpolate(frame, [30, 50], [0, 1], { extrapolateRight: 'clamp' });
  const lockY = interpolate(frame, [30, 50], [-100, 0], { extrapolateRight: 'clamp' });
  const lockScale = interpolate(frame, [30, 50], [0.5, 1], { extrapolateRight: 'clamp' });

  const lockShake = frame >= 80 && frame < 100 ? Math.sin(frame * 2) * 10 : 0;
  const lockBreakScale = interpolate(frame, [100, 110], [1, 1.3], { extrapolateRight: 'clamp' });
  const lockBreakOpacity = interpolate(frame, [100, 115], [1, 0], { extrapolateRight: 'clamp' });

  const crackOpacity = interpolate(frame, [100, 110], [0, 1], { extrapolateRight: 'clamp' });

  const lockPiece1X = interpolate(frame, [100, 130], [0, -200], { extrapolateRight: 'clamp' });
  const lockPiece1Y = interpolate(frame, [100, 130], [0, -150], { extrapolateRight: 'clamp' });
  const lockPiece1Rotate = interpolate(frame, [100, 130], [0, -180], { extrapolateRight: 'clamp' });

  const lockPiece2X = interpolate(frame, [100, 130], [0, 200], { extrapolateRight: 'clamp' });
  const lockPiece2Y = interpolate(frame, [100, 130], [0, -120], { extrapolateRight: 'clamp' });
  const lockPiece2Rotate = interpolate(frame, [100, 130], [0, 180], { extrapolateRight: 'clamp' });

  const lockPiece3Y = interpolate(frame, [100, 130], [0, 200], { extrapolateRight: 'clamp' });

  const lockPiecesOpacity = interpolate(frame, [100, 110, 130, 145], [0, 1, 1, 0], { extrapolateRight: 'clamp' });

  const passwordsOpacity = interpolate(frame, [115, 135], [0, 1], { extrapolateRight: 'clamp' });
  const passwordScrollSpeed = interpolate(frame, [115, 300], [0, 3000], { extrapolateRight: 'clamp' });

  const zoomOut = interpolate(frame, [0, 150, 300], [1, 1, 0.85], { extrapolateRight: 'clamp' });

  const shakeX = frame >= 100 && frame < 180 ? Math.sin(frame * 0.5) * (interpolate(frame, [100, 180], [15, 3], { extrapolateRight: 'clamp' })) : 0;
  const shakeY = frame >= 100 && frame < 180 ? Math.cos(frame * 0.7) * (interpolate(frame, [100, 180], [12, 2], { extrapolateRight: 'clamp' })) : 0;

  const redFlash1 = interpolate(frame, [100, 105, 110], [0, 0.7, 0], { extrapolateRight: 'clamp' });
  const redFlash2 = interpolate(frame, [120, 125, 130], [0, 0.6, 0], { extrapolateRight: 'clamp' });
  const redFlash3 = interpolate(frame, [140, 145, 150], [0, 0.5, 0], { extrapolateRight: 'clamp' });

  const alertPulse = frame >= 160 ? Math.sin(frame * 0.3) * 0.3 + 0.7 : 0;

  const warningTextOpacity = interpolate(frame, [160, 190], [0, 1], { extrapolateRight: 'clamp' });
  const warningTextScale = interpolate(frame, [160, 190, 210, 230], [0.6, 1.2, 1, 1.1], { extrapolateRight: 'clamp' });
  const warningTextY = interpolate(frame, [160, 190], [200, 0], { extrapolateRight: 'clamp' });

  const passwords = [
    'password123', 'admin@2024', 'qwerty789', 'letmein456', 'welcome2024', 'dragon999',
    'monkey555', 'abc123xyz', 'master2024', 'Password1!', 'iloveyou88', '12345678',
    'sunshine23', 'princess77', 'football99', 'shadow2024', 'batman456', 'trustno1',
    'killer666', 'superman1', 'password1', 'starwars99', 'freedom2024', 'whatever33',
    'matrix123', 'jordan23', 'harley123', 'ranger99', 'buster456', 'hello2024',
  ];

  const databasePulse = Math.sin(frame * 0.1) * 0.2 + 0.8;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#050505',
        transform: `scale(${zoomOut}) translate(${shakeX}px, ${shakeY}px)`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse at center, rgba(139, 0, 0, 0.2) 0%, transparent 60%)',
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
          opacity: Math.max(redFlash1, redFlash2, redFlash3),
          mixBlendMode: 'screen',
        }}
      />

      {frame >= 160 && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#ff0000',
            opacity: alertPulse * 0.15,
            mixBlendMode: 'screen',
          }}
        />
      )}

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) scale(${databaseScale})`,
          opacity: databaseOpacity,
          zIndex: 2,
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '800px',
            height: '600px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((block) => (
            <div
              key={block}
              style={{
                width: '100%',
                height: '180px',
                background: `linear-gradient(135deg, rgba(30, 30, 50, ${databasePulse}) 0%, rgba(20, 20, 40, ${databasePulse * 0.9}) 100%)`,
                border: `3px solid rgba(100, 100, 150, ${databasePulse * 0.6})`,
                borderRadius: '15px',
                boxShadow: `0 0 30px rgba(100, 100, 200, ${databasePulse * 0.4})`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
              }}
            >
              <div
                style={{
                  fontSize: '60px',
                  filter: `drop-shadow(0 0 15px rgba(100, 150, 255, ${databasePulse}))`,
                }}
              >
                💾
              </div>
              <div
                style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: `rgba(150, 150, 255, ${databasePulse})`,
                  fontFamily: 'monospace',
                }}
              >
                DATABASE_{block}
              </div>
            </div>
          ))}
        </div>
      </div>

      {frame < 115 && (
        <div
          style={{
            position: 'absolute',
            top: '600px',
            left: '50%',
            transform: `translate(-50%, -50%) translateY(${lockY}px) translateX(${lockShake}px) scale(${lockScale * lockBreakScale})`,
            opacity: lockOpacity * lockBreakOpacity,
            zIndex: 3,
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '300px',
              height: '350px',
            }}
          >
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '250px',
                height: '200px',
                background: 'linear-gradient(180deg, rgba(255, 215, 0, 0.95) 0%, rgba(218, 165, 32, 0.9) 100%)',
                borderRadius: '40px',
                border: '6px solid rgba(255, 200, 0, 0.8)',
                boxShadow: '0 0 50px rgba(255, 215, 0, 0.6), inset 0 0 30px rgba(255, 255, 255, 0.3)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'rgba(0, 0, 0, 0.7)',
                  border: '4px solid rgba(255, 215, 0, 0.8)',
                }}
              />
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '200px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '120px',
                height: '180px',
                border: '25px solid rgba(255, 215, 0, 0.95)',
                borderBottom: 'none',
                borderRadius: '100px 100px 0 0',
                boxShadow: '0 0 40px rgba(255, 215, 0, 0.6)',
              }}
            />
          </div>
        </div>
      )}

      {frame >= 100 && frame < 145 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: '600px',
              left: '50%',
              transform: `translate(calc(-50% + ${lockPiece1X}px), calc(-50% + ${lockPiece1Y}px)) rotate(${lockPiece1Rotate}deg)`,
              opacity: lockPiecesOpacity,
              zIndex: 4,
            }}
          >
            <div
              style={{
                width: '120px',
                height: '90px',
                border: '25px solid rgba(255, 215, 0, 0.95)',
                borderBottom: 'none',
                borderRadius: '100px 100px 0 0',
                boxShadow: '0 0 40px rgba(255, 215, 0, 0.8)',
              }}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              top: '600px',
              left: '50%',
              transform: `translate(calc(-50% + ${lockPiece2X}px), calc(-50% + ${lockPiece2Y}px)) rotate(${lockPiece2Rotate}deg)`,
              opacity: lockPiecesOpacity,
              zIndex: 4,
            }}
          >
            <div
              style={{
                width: '125px',
                height: '100px',
                background: 'linear-gradient(180deg, rgba(255, 215, 0, 0.95) 0%, rgba(218, 165, 32, 0.9) 100%)',
                borderRadius: '20px 20px 40px 0',
                border: '6px solid rgba(255, 200, 0, 0.8)',
                boxShadow: '0 0 50px rgba(255, 215, 0, 0.6)',
              }}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              top: '600px',
              left: '50%',
              transform: `translate(-50%, calc(-50% + ${lockPiece3Y}px))`,
              opacity: lockPiecesOpacity,
              zIndex: 4,
            }}
          >
            <div
              style={{
                width: '125px',
                height: '100px',
                background: 'linear-gradient(180deg, rgba(255, 215, 0, 0.95) 0%, rgba(218, 165, 32, 0.9) 100%)',
                borderRadius: '0 40px 40px 20px',
                border: '6px solid rgba(255, 200, 0, 0.8)',
                boxShadow: '0 0 50px rgba(255, 215, 0, 0.6)',
              }}
            />
          </div>
        </>
      )}

      {frame >= 100 && frame < 130 && (
        <div
          style={{
            position: 'absolute',
            top: '600px',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: crackOpacity,
            zIndex: 3,
          }}
        >
          <svg width="500" height="400" viewBox="0 0 500 400">
            <line x1="250" y1="200" x2="100" y2="100" stroke="#ff0000" strokeWidth="6" />
            <line x1="250" y1="200" x2="400" y2="100" stroke="#ff0000" strokeWidth="6" />
            <line x1="250" y1="200" x2="150" y2="300" stroke="#ff0000" strokeWidth="5" />
            <line x1="250" y1="200" x2="350" y2="300" stroke="#ff0000" strokeWidth="5" />
            <line x1="250" y1="200" x2="50" y2="200" stroke="#ff0000" strokeWidth="5" />
            <line x1="250" y1="200" x2="450" y2="200" stroke="#ff0000" strokeWidth="5" />
            <line x1="100" y1="100" x2="50" y2="50" stroke="#ff0000" strokeWidth="4" />
            <line x1="400" y1="100" x2="450" y2="50" stroke="#ff0000" strokeWidth="4" />
          </svg>
        </div>
      )}

      {frame >= 115 && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: passwordsOpacity,
            overflow: 'hidden',
            zIndex: 5,
          }}
        >
          {[0, 1, 2, 3, 4].map((col) => (
            <div
              key={col}
              style={{
                position: 'absolute',
                left: `${col * 216}px`,
                top: `-${passwordScrollSpeed % 2000}px`,
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              {[...passwords, ...passwords, ...passwords, ...passwords].map((pass, idx) => (
                <div
                  key={`${col}-${idx}`}
                  style={{
                    fontSize: '28px',
                    fontWeight: '700',
                    color: idx % 3 === 0 ? '#ff0000' : idx % 3 === 1 ? '#ff6b6b' : '#fca5a5',
                    fontFamily: 'monospace',
                    textShadow: '0 0 15px rgba(255, 0, 0, 0.8)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {pass}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {frame >= 160 && (
        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10,
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '1400px',
              height: '1400px',
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(220, 38, 38, ${alertPulse * 0.4}) 0%, transparent 70%)`,
              filter: `blur(${alertPulse * 130}px)`,
            }}
          />
          <div
            style={{
              textAlign: 'center',
              padding: '0 50px',
              opacity: warningTextOpacity,
              transform: `translateY(${warningTextY}px) scale(${warningTextScale})`,
            }}
          >
            <div
              style={{
                display: 'inline-block',
                padding: '55px 75px',
                background: 'rgba(0, 0, 0, 0.95)',
                border: `7px solid rgba(220, 38, 38, ${alertPulse})`,
                borderRadius: '50px',
                boxShadow: `0 0 90px rgba(220, 38, 38, ${alertPulse}), inset 0 0 60px rgba(220, 38, 38, 0.2)`,
              }}
            >
              <div
                style={{
                  fontSize: '70px',
                  fontWeight: '900',
                  color: '#ff0000',
                  margin: '0 0 15px 0',
                  textShadow: `0 0 50px rgba(255, 0, 0, ${alertPulse})`,
                }}
              >
                ⚠️ ALERT ⚠️
              </div>
              <h1
                style={{
                  fontSize: '80px',
                  fontWeight: '900',
                  color: '#ffffff',
                  margin: '20px 0',
                  lineHeight: '1.1',
                  textShadow: `0 0 70px rgba(220, 38, 38, ${alertPulse}), 0 0 50px rgba(220, 38, 38, 0.9)`,
                  letterSpacing: '-1px',
                  textTransform: 'uppercase',
                }}
              >
                MILLIONS OF
              </h1>
              <h1
                style={{
                  fontSize: '80px',
                  fontWeight: '900',
                  color: '#dc2626',
                  margin: 0,
                  lineHeight: '1.1',
                  textShadow: `0 0 80px rgba(220, 38, 38, ${alertPulse}), 0 0 60px rgba(220, 38, 38, 1)`,
                  letterSpacing: '-1px',
                  textTransform: 'uppercase',
                }}
              >
                PASSWORDS LEAKED
              </h1>
            </div>
          </div>
        </AbsoluteFill>
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
