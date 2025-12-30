import { AbsoluteFill, Composition, useCurrentFrame, interpolate } from 'remotion';

const MainVideo: React.FC = () => {
  const frame = useCurrentFrame();

  const passwordBoxOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });
  const passwordBoxY = interpolate(frame, [0, 25], [150, 0], { extrapolateRight: 'clamp' });
  const passwordBoxScale = interpolate(frame, [0, 25], [0.7, 1], { extrapolateRight: 'clamp' });

  const attackStartFrame = 30;
  const attackActive = frame >= attackStartFrame && frame < 180;

  const attempts = [
    'password', '12345678', 'qwerty', 'abc123', 'letmein', 'welcome', 'monkey', 'dragon',
    'master', 'admin', 'login', 'pass123', 'hello', 'sunshine', 'princess', 'football',
    'shadow', 'batman', 'trustno1', 'killer', 'superman', 'starwars', 'freedom', 'whatever',
    'matrix', 'jordan', 'harley', 'ranger', 'buster', 'charlie', 'donald', 'bailey',
  ];

  const currentAttemptIndex = Math.floor((frame - attackStartFrame) / 3) % attempts.length;
  const currentAttempt = attackActive ? attempts[currentAttemptIndex] : '';

  const progressBarProgress = interpolate(frame, [30, 180], [0, 100], { extrapolateRight: 'clamp' });

  const progressBarColor = progressBarProgress < 30 ? '#3b82f6' : progressBarProgress < 70 ? '#fb923c' : '#dc2626';

  const hackerOpacity = interpolate(frame, [35, 55], [0, 0.85], { extrapolateRight: 'clamp' });
  const hackerScale = interpolate(frame, [35, 55], [1.3, 1], { extrapolateRight: 'clamp' });
  const hackerGlow = Math.sin(frame * 0.2) * 0.4 + 0.6;

  const attemptCounterOpacity = interpolate(frame, [40, 60], [0, 1], { extrapolateRight: 'clamp' });
  const attemptCount = Math.floor(interpolate(frame, [30, 180], [0, 999999], { extrapolateRight: 'clamp' }));

  const crackedOpacity = interpolate(frame, [180, 195], [0, 1], { extrapolateRight: 'clamp' });
  const crackedScale = interpolate(frame, [180, 195, 205, 215], [0.5, 1.3, 1, 1.1], { extrapolateRight: 'clamp' });

  const warningTextOpacity = interpolate(frame, [150, 175], [0, 1], { extrapolateRight: 'clamp' });
  const warningTextScale = interpolate(frame, [150, 175, 190, 210], [0.6, 1.15, 1, 1.08], { extrapolateRight: 'clamp' });
  const warningTextY = interpolate(frame, [150, 175], [200, 0], { extrapolateRight: 'clamp' });

  const warningPulse = Math.sin(frame * 0.25) * 0.35 + 0.65;

  const flashOpacity = frame >= 180 && frame <= 190 ? interpolate(frame, [180, 185, 190], [0, 0.8, 0], { extrapolateRight: 'clamp' }) : 0;

  const backgroundGradient = interpolate(frame, [0, 240], [0, 360], { extrapolateRight: 'clamp' });

  const timerSeconds = Math.max(0, Math.floor(interpolate(frame, [30, 180], [5, 0], { extrapolateRight: 'clamp' })));
  const timerMillis = Math.floor(interpolate(frame, [30, 180], [99, 0], { extrapolateRight: 'clamp' }) % 100);

  const glitchActive = attackActive && Math.random() > 0.85;
  const glitchOffsetX = glitchActive ? (Math.random() - 0.5) * 10 : 0;
  const glitchOffsetY = glitchActive ? (Math.random() - 0.5) * 8 : 0;

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(${backgroundGradient}deg, #0a0a0f 0%, #0f0a0f 50%, #0a0a0f 100%)`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse at center, rgba(220, 38, 38, 0.15) 0%, transparent 65%)',
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
          opacity: flashOpacity,
          mixBlendMode: 'screen',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '400px',
          left: '50%',
          transform: `translate(-50%, -50%) translateY(${passwordBoxY}px) scale(${passwordBoxScale})`,
          opacity: passwordBoxOpacity,
          zIndex: 3,
        }}
      >
        <div
          style={{
            width: '850px',
            background: 'linear-gradient(135deg, rgba(30, 30, 45, 0.95) 0%, rgba(20, 20, 35, 0.9) 100%)',
            borderRadius: '25px',
            padding: '60px',
            border: '4px solid rgba(59, 130, 246, 0.5)',
            boxShadow: '0 20px 80px rgba(0, 0, 0, 0.6), 0 0 40px rgba(59, 130, 246, 0.3)',
          }}
        >
          <div
            style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#94a3b8',
              marginBottom: '25px',
              textAlign: 'center',
            }}
          >
            SECURE LOGIN
          </div>
          <div
            style={{
              background: 'rgba(15, 15, 25, 0.8)',
              border: '3px solid rgba(100, 100, 150, 0.6)',
              borderRadius: '15px',
              padding: '30px',
              fontSize: '36px',
              fontFamily: 'monospace',
              color: attackActive ? '#ff0000' : '#ffffff',
              textAlign: 'center',
              minHeight: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textShadow: attackActive ? '0 0 15px rgba(255, 0, 0, 0.8)' : 'none',
              transform: `translate(${glitchOffsetX}px, ${glitchOffsetY}px)`,
            }}
          >
            {attackActive ? currentAttempt : '••••••••'}
          </div>
        </div>
      </div>

      {frame >= 40 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: '700px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '850px',
              opacity: attemptCounterOpacity,
              zIndex: 3,
            }}
          >
            <div
              style={{
                background: 'rgba(0, 0, 0, 0.7)',
                borderRadius: '20px',
                padding: '35px 50px',
                border: '3px solid rgba(220, 38, 38, 0.6)',
                boxShadow: '0 0 40px rgba(220, 38, 38, 0.4)',
              }}
            >
              <div
                style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  color: '#fca5a5',
                  marginBottom: '20px',
                  textAlign: 'center',
                  fontFamily: 'monospace',
                }}
              >
                BRUTE FORCE ATTACK
              </div>
              <div
                style={{
                  width: '100%',
                  height: '50px',
                  background: 'rgba(30, 30, 40, 0.9)',
                  borderRadius: '25px',
                  overflow: 'hidden',
                  border: '3px solid rgba(100, 100, 120, 0.5)',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    width: `${progressBarProgress}%`,
                    height: '100%',
                    background: `linear-gradient(90deg, ${progressBarColor} 0%, ${progressBarColor}dd 100%)`,
                    boxShadow: `0 0 30px ${progressBarColor}`,
                    transition: 'width 0.1s linear',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '28px',
                    fontWeight: '900',
                    color: '#ffffff',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
                  }}
                >
                  {Math.floor(progressBarProgress)}%
                </div>
              </div>
              <div
                style={{
                  marginTop: '25px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: '32px',
                    fontWeight: '800',
                    color: '#dc2626',
                    fontFamily: 'monospace',
                    textShadow: '0 0 20px rgba(220, 38, 38, 0.8)',
                  }}
                >
                  ATTEMPTS: {attemptCount.toLocaleString()}
                </div>
                <div
                  style={{
                    fontSize: '40px',
                    fontWeight: '900',
                    color: timerSeconds <= 2 ? '#ff0000' : '#fb923c',
                    fontFamily: 'monospace',
                    textShadow: `0 0 25px ${timerSeconds <= 2 ? 'rgba(255, 0, 0, 1)' : 'rgba(251, 146, 60, 0.8)'}`,
                  }}
                >
                  {timerSeconds}.{timerMillis.toString().padStart(2, '0')}s
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '550px',
              right: '100px',
              opacity: hackerOpacity,
              transform: `scale(${hackerScale})`,
              zIndex: 2,
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '280px',
                height: '420px',
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
                  borderLeft: '90px solid transparent',
                  borderRight: '90px solid transparent',
                  borderBottom: `180px solid rgba(139, 0, 139, ${hackerGlow * 0.9})`,
                  filter: `drop-shadow(0 0 25px rgba(139, 0, 139, ${hackerGlow}))`,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '180px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '130px',
                  height: '160px',
                  background: `linear-gradient(180deg, rgba(139, 0, 139, ${hackerGlow * 0.95}) 0%, rgba(100, 0, 100, ${hackerGlow * 0.85}) 100%)`,
                  borderRadius: '70px 70px 0 0',
                  filter: `drop-shadow(0 0 20px rgba(139, 0, 139, ${hackerGlow}))`,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '300px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '110px',
                  height: '110px',
                  borderRadius: '50%',
                  background: `radial-gradient(circle, rgba(139, 0, 139, ${hackerGlow}) 0%, rgba(100, 0, 100, ${hackerGlow * 0.9}) 100%)`,
                  filter: `drop-shadow(0 0 25px rgba(139, 0, 139, ${hackerGlow}))`,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '330px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: '50px',
                  filter: `drop-shadow(0 0 15px rgba(139, 0, 139, ${hackerGlow}))`,
                }}
              >
                💻
              </div>
            </div>
          </div>
        </>
      )}

      {frame >= 180 && (
        <div
          style={{
            position: 'absolute',
            top: '400px',
            left: '50%',
            transform: `translate(-50%, -50%) scale(${crackedScale})`,
            opacity: crackedOpacity,
            zIndex: 5,
          }}
        >
          <div
            style={{
              fontSize: '120px',
              textAlign: 'center',
              filter: 'drop-shadow(0 0 40px rgba(34, 197, 94, 1))',
            }}
          >
            ✓
          </div>
          <div
            style={{
              fontSize: '48px',
              fontWeight: '900',
              color: '#22c55e',
              textAlign: 'center',
              marginTop: '20px',
              textShadow: '0 0 40px rgba(34, 197, 94, 1)',
              textTransform: 'uppercase',
            }}
          >
            PASSWORD CRACKED
          </div>
        </div>
      )}

      {frame >= 150 && (
        <AbsoluteFill
          style={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingBottom: '150px',
            zIndex: 10,
          }}
        >
          <div
            style={{
              position: 'absolute',
              bottom: '250px',
              left: '50%',
              transform: 'translate(-50%, 0)',
              width: '1500px',
              height: '1500px',
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(251, 146, 60, ${warningPulse * 0.35}) 0%, transparent 70%)`,
              filter: `blur(${warningPulse * 140}px)`,
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
                padding: '50px 70px',
                background: 'rgba(0, 0, 0, 0.93)',
                border: `6px solid rgba(251, 146, 60, ${warningPulse})`,
                borderRadius: '45px',
                boxShadow: `0 0 85px rgba(251, 146, 60, ${warningPulse}), inset 0 0 55px rgba(251, 146, 60, 0.2)`,
              }}
            >
              <h1
                style={{
                  fontSize: '75px',
                  fontWeight: '900',
                  color: '#ffffff',
                  margin: 0,
                  lineHeight: '1.1',
                  textShadow: `0 0 60px rgba(251, 146, 60, ${warningPulse}), 0 0 40px rgba(251, 146, 60, 0.9)`,
                  letterSpacing: '-1px',
                  textTransform: 'uppercase',
                }}
              >
                WEAK PASSWORD
              </h1>
              <div
                style={{
                  fontSize: '90px',
                  fontWeight: '900',
                  margin: '20px 0',
                  color: '#fb923c',
                  textShadow: `0 0 70px rgba(251, 146, 60, ${warningPulse})`,
                }}
              >
                =
              </div>
              <h1
                style={{
                  fontSize: '75px',
                  fontWeight: '900',
                  color: '#dc2626',
                  margin: 0,
                  lineHeight: '1.1',
                  textShadow: `0 0 70px rgba(220, 38, 38, ${warningPulse}), 0 0 50px rgba(220, 38, 38, 1)`,
                  letterSpacing: '-1px',
                  textTransform: 'uppercase',
                }}
              >
                EASY HACK
              </h1>
            </div>
          </div>
        </AbsoluteFill>
      )}

      {attackActive && (
        <>
          <div
            style={{
              position: 'absolute',
              top: '120px',
              left: '50px',
              fontSize: '24px',
              fontWeight: '700',
              color: '#22c55e',
              fontFamily: 'monospace',
              textShadow: '0 0 10px rgba(34, 197, 94, 0.8)',
              opacity: attemptCounterOpacity,
            }}
          >
            {`> ATTACKING...`}
          </div>
          <div
            style={{
              position: 'absolute',
              top: '180px',
              right: '50px',
              fontSize: '24px',
              fontWeight: '700',
              color: '#22c55e',
              fontFamily: 'monospace',
              textShadow: '0 0 10px rgba(34, 197, 94, 0.8)',
              opacity: attemptCounterOpacity,
            }}
          >
            {`> CRACKING...`}
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
      durationInFrames={240}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
