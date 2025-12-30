import { AbsoluteFill, Composition, useCurrentFrame, interpolate } from 'remotion';

const MainVideo: React.FC = () => {
  const frame = useCurrentFrame();

  const backgroundTransition = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: 'clamp' });
  const backgroundColor = {
    r: interpolate(frame, [0, 30], [10, 240], { extrapolateRight: 'clamp' }),
    g: interpolate(frame, [0, 30], [10, 245], { extrapolateRight: 'clamp' }),
    b: interpolate(frame, [0, 30], [15, 250], { extrapolateRight: 'clamp' }),
  };

  const shieldOpacity = interpolate(frame, [0, 25], [0, 1], { extrapolateRight: 'clamp' });
  const shieldScale = interpolate(frame, [0, 30], [0.4, 1], { extrapolateRight: 'clamp' });
  const shieldY = interpolate(frame, [0, 30], [-200, 0], { extrapolateRight: 'clamp' });
  const shieldGlow = Math.sin(frame * 0.15) * 0.3 + 0.7;

  const lockOpacity = interpolate(frame, [35, 55], [0, 1], { extrapolateRight: 'clamp' });
  const lockY = interpolate(frame, [35, 55], [100, 0], { extrapolateRight: 'clamp' });
  const lockScale = interpolate(frame, [35, 55], [0.5, 1], { extrapolateRight: 'clamp' });

  const lockShackleY = interpolate(frame, [60, 75], [0, -80], { extrapolateRight: 'clamp' });
  const lockShackleOpacity = interpolate(frame, [60, 75], [1, 0], { extrapolateRight: 'clamp' });
  const lockBodyY = interpolate(frame, [60, 75], [0, 80], { extrapolateRight: 'clamp' });
  const lockSnapScale = interpolate(frame, [75, 80, 85], [1, 1.2, 1], { extrapolateRight: 'clamp' });

  const tip1Opacity = interpolate(frame, [85, 100], [0, 1], { extrapolateRight: 'clamp' });
  const tip1X = interpolate(frame, [85, 100], [-300, 0], { extrapolateRight: 'clamp' });
  const tip1Scale = interpolate(frame, [85, 100, 105], [0.8, 1.05, 1], { extrapolateRight: 'clamp' });

  const tip2Opacity = interpolate(frame, [105, 120], [0, 1], { extrapolateRight: 'clamp' });
  const tip2X = interpolate(frame, [105, 120], [300, 0], { extrapolateRight: 'clamp' });
  const tip2Scale = interpolate(frame, [105, 120, 125], [0.8, 1.05, 1], { extrapolateRight: 'clamp' });

  const tip3Opacity = interpolate(frame, [125, 140], [0, 1], { extrapolateRight: 'clamp' });
  const tip3X = interpolate(frame, [125, 140], [-300, 0], { extrapolateRight: 'clamp' });
  const tip3Scale = interpolate(frame, [125, 140, 145], [0.8, 1.05, 1], { extrapolateRight: 'clamp' });

  const finalTextOpacity = interpolate(frame, [160, 185], [0, 1], { extrapolateRight: 'clamp' });
  const finalTextScale = interpolate(frame, [160, 185, 200, 220], [0.5, 1.2, 1, 1.1], { extrapolateRight: 'clamp' });
  const finalTextY = interpolate(frame, [160, 185], [200, 0], { extrapolateRight: 'clamp' });

  const finalGlow = Math.sin(frame * 0.2) * 0.3 + 0.7;

  const sparkle1Opacity = interpolate(frame, [75, 85, 95], [0, 1, 0], { extrapolateRight: 'clamp' });
  const sparkle2Opacity = interpolate(frame, [80, 90, 100], [0, 1, 0], { extrapolateRight: 'clamp' });
  const sparkle3Opacity = interpolate(frame, [85, 95, 105], [0, 1, 0], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, rgb(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}) 0%, rgb(${backgroundColor.r - 20}, ${backgroundColor.g - 20}, ${backgroundColor.b - 20}) 100%)`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(ellipse at center, rgba(59, 130, 246, ${backgroundTransition * 0.15}) 0%, transparent 70%)`,
        }}
      />

      {frame < 160 && (
        <div
          style={{
            position: 'absolute',
            top: '250px',
            left: '50%',
            transform: `translate(-50%, ${shieldY}px) scale(${shieldScale})`,
            opacity: shieldOpacity,
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
            <svg width="300" height="350" viewBox="0 0 300 350">
              <defs>
                <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: shieldGlow }} />
                  <stop offset="100%" style={{ stopColor: '#1e40af', stopOpacity: shieldGlow * 0.9 }} />
                </linearGradient>
                <filter id="shieldGlow">
                  <feGaussianBlur stdDeviation={shieldGlow * 10} result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M 150 20 L 250 70 L 250 180 Q 250 280 150 330 Q 50 280 50 180 L 50 70 Z"
                fill="url(#shieldGradient)"
                stroke="#60a5fa"
                strokeWidth="6"
                filter="url(#shieldGlow)"
              />
              <path
                d="M 110 160 L 140 200 L 200 120"
                fill="none"
                stroke="#ffffff"
                strokeWidth="18"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={shieldGlow}
              />
            </svg>
          </div>
        </div>
      )}

      {frame >= 35 && frame < 160 && (
        <div
          style={{
            position: 'absolute',
            top: '680px',
            left: '50%',
            transform: `translate(-50%, ${lockY}px) scale(${lockScale * lockSnapScale})`,
            opacity: lockOpacity,
            zIndex: 4,
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '280px',
              height: '320px',
            }}
          >
            <div
              style={{
                position: 'absolute',
                bottom: `${lockBodyY}px`,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '220px',
                height: '180px',
                background: 'linear-gradient(180deg, #22c55e 0%, #16a34a 100%)',
                borderRadius: '35px',
                border: '5px solid #4ade80',
                boxShadow: '0 0 40px rgba(34, 197, 94, 0.6), inset 0 0 30px rgba(255, 255, 255, 0.2)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '55px',
                  height: '55px',
                  borderRadius: '50%',
                  background: 'rgba(0, 0, 0, 0.6)',
                  border: '4px solid #4ade80',
                }}
              />
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: `${180 + lockBodyY - lockShackleY}px`,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '110px',
                height: '150px',
                border: '22px solid #22c55e',
                borderBottom: 'none',
                borderRadius: '90px 90px 0 0',
                boxShadow: '0 0 35px rgba(34, 197, 94, 0.6)',
                opacity: lockShackleOpacity,
              }}
            />
            {frame >= 75 && (
              <>
                <div
                  style={{
                    position: 'absolute',
                    top: '340px',
                    left: '190px',
                    fontSize: '50px',
                    opacity: sparkle1Opacity,
                    transform: `scale(${sparkle1Opacity})`,
                  }}
                >
                  ✨
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: '320px',
                    left: '40px',
                    fontSize: '50px',
                    opacity: sparkle2Opacity,
                    transform: `scale(${sparkle2Opacity})`,
                  }}
                >
                  ✨
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: '280px',
                    left: '120px',
                    fontSize: '50px',
                    opacity: sparkle3Opacity,
                    transform: `scale(${sparkle3Opacity})`,
                  }}
                >
                  ✨
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {frame >= 85 && frame < 160 && (
        <div
          style={{
            position: 'absolute',
            top: '1050px',
            left: '50%',
            transform: `translateX(-50%) translateX(${tip1X}px) scale(${tip1Scale})`,
            opacity: tip1Opacity,
            zIndex: 5,
          }}
        >
          <div
            style={{
              width: '850px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 245, 255, 0.9) 100%)',
              borderRadius: '25px',
              padding: '40px 50px',
              border: '4px solid rgba(59, 130, 246, 0.3)',
              boxShadow: '0 15px 50px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '30px',
            }}
          >
            <div
              style={{
                fontSize: '70px',
                flexShrink: 0,
              }}
            >
              ✔️
            </div>
            <div
              style={{
                fontSize: '42px',
                fontWeight: '800',
                color: '#1e40af',
                lineHeight: '1.3',
              }}
            >
              Use Password Manager
            </div>
          </div>
        </div>
      )}

      {frame >= 105 && frame < 160 && (
        <div
          style={{
            position: 'absolute',
            top: '1240px',
            left: '50%',
            transform: `translateX(-50%) translateX(${tip2X}px) scale(${tip2Scale})`,
            opacity: tip2Opacity,
            zIndex: 5,
          }}
        >
          <div
            style={{
              width: '850px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 245, 255, 0.9) 100%)',
              borderRadius: '25px',
              padding: '40px 50px',
              border: '4px solid rgba(34, 197, 94, 0.3)',
              boxShadow: '0 15px 50px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '30px',
            }}
          >
            <div
              style={{
                fontSize: '70px',
                flexShrink: 0,
              }}
            >
              ✔️
            </div>
            <div
              style={{
                fontSize: '42px',
                fontWeight: '800',
                color: '#15803d',
                lineHeight: '1.3',
              }}
            >
              Enable 2FA
            </div>
          </div>
        </div>
      )}

      {frame >= 125 && frame < 160 && (
        <div
          style={{
            position: 'absolute',
            top: '1430px',
            left: '50%',
            transform: `translateX(-50%) translateX(${tip3X}px) scale(${tip3Scale})`,
            opacity: tip3Opacity,
            zIndex: 5,
          }}
        >
          <div
            style={{
              width: '850px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 245, 255, 0.9) 100%)',
              borderRadius: '25px',
              padding: '40px 50px',
              border: '4px solid rgba(251, 146, 60, 0.3)',
              boxShadow: '0 15px 50px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '30px',
            }}
          >
            <div
              style={{
                fontSize: '70px',
                flexShrink: 0,
              }}
            >
              ✔️
            </div>
            <div
              style={{
                fontSize: '42px',
                fontWeight: '800',
                color: '#c2410c',
                lineHeight: '1.3',
              }}
            >
              Don't Click Unknown Links
            </div>
          </div>
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
              width: '1600px',
              height: '1600px',
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(59, 130, 246, ${finalGlow * 0.25}) 0%, transparent 70%)`,
              filter: `blur(${finalGlow * 150}px)`,
            }}
          />
          <div
            style={{
              textAlign: 'center',
              padding: '0 60px',
              opacity: finalTextOpacity,
              transform: `translateY(${finalTextY}px) scale(${finalTextScale})`,
            }}
          >
            <div
              style={{
                display: 'inline-block',
                padding: '60px 80px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(240, 245, 255, 0.95) 100%)',
                border: `6px solid rgba(59, 130, 246, ${finalGlow * 0.8})`,
                borderRadius: '50px',
                boxShadow: `0 0 100px rgba(59, 130, 246, ${finalGlow * 0.6}), 0 20px 80px rgba(0, 0, 0, 0.15)`,
              }}
            >
              <div
                style={{
                  fontSize: '100px',
                  marginBottom: '30px',
                  filter: `drop-shadow(0 0 30px rgba(59, 130, 246, ${finalGlow}))`,
                }}
              >
                🛡️
              </div>
              <h1
                style={{
                  fontSize: '90px',
                  fontWeight: '900',
                  color: '#1e40af',
                  margin: 0,
                  lineHeight: '1.1',
                  textShadow: `0 0 60px rgba(59, 130, 246, ${finalGlow * 0.5})`,
                  letterSpacing: '-2px',
                  textTransform: 'uppercase',
                  background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                STAY SAFE
              </h1>
              <h1
                style={{
                  fontSize: '90px',
                  fontWeight: '900',
                  color: '#3b82f6',
                  margin: '15px 0 0 0',
                  lineHeight: '1.1',
                  textShadow: `0 0 70px rgba(59, 130, 246, ${finalGlow * 0.6})`,
                  letterSpacing: '-2px',
                  textTransform: 'uppercase',
                }}
              >
                ONLINE
              </h1>
            </div>
          </div>
        </AbsoluteFill>
      )}

      {frame >= 190 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: '250px',
              left: '150px',
              fontSize: '60px',
              opacity: interpolate(frame, [190, 200, 230], [0, 1, 1], { extrapolateRight: 'clamp' }),
              transform: `rotate(-15deg) scale(${interpolate(frame, [190, 200], [0, 1], { extrapolateRight: 'clamp' })})`,
            }}
          >
            🔒
          </div>
          <div
            style={{
              position: 'absolute',
              top: '350px',
              right: '150px',
              fontSize: '60px',
              opacity: interpolate(frame, [195, 205, 230], [0, 1, 1], { extrapolateRight: 'clamp' }),
              transform: `rotate(15deg) scale(${interpolate(frame, [195, 205], [0, 1], { extrapolateRight: 'clamp' })})`,
            }}
          >
            🛡️
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '300px',
              left: '180px',
              fontSize: '60px',
              opacity: interpolate(frame, [200, 210, 230], [0, 1, 1], { extrapolateRight: 'clamp' }),
              transform: `rotate(10deg) scale(${interpolate(frame, [200, 210], [0, 1], { extrapolateRight: 'clamp' })})`,
            }}
          >
            ✅
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '400px',
              right: '180px',
              fontSize: '60px',
              opacity: interpolate(frame, [205, 215, 230], [0, 1, 1], { extrapolateRight: 'clamp' }),
              transform: `rotate(-10deg) scale(${interpolate(frame, [205, 215], [0, 1], { extrapolateRight: 'clamp' })})`,
            }}
          >
            🔐
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
