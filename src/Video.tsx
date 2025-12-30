import { AbsoluteFill, Composition, useCurrentFrame, interpolate } from 'remotion';

const MainVideo: React.FC = () => {
  const frame = useCurrentFrame();

  const scene1TitleOpacity = interpolate(frame, [0, 20, 70, 90], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
  const scene1TitleScale = interpolate(frame, [0, 20, 70, 90], [0.5, 1, 1, 1.2], { extrapolateRight: 'clamp' });
  const scene1TitleY = interpolate(frame, [0, 20, 70, 90], [100, 0, 0, -100], { extrapolateRight: 'clamp' });
  const scene1SubOpacity = interpolate(frame, [15, 35, 70, 90], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
  const scene1SubY = interpolate(frame, [15, 35, 70, 90], [80, 0, 0, -80], { extrapolateRight: 'clamp' });
  const scene1GlowIntensity = interpolate(frame, [0, 45, 90], [0, 1, 0], { extrapolateRight: 'clamp' });

  const scene2MainOpacity = interpolate(frame, [90, 110, 200, 220], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
  const scene2MainX = interpolate(frame, [90, 110, 200, 220], [-300, 0, 0, 300], { extrapolateRight: 'clamp' });
  const scene2MainScale = interpolate(frame, [90, 110, 200, 220], [0.7, 1, 1, 0.7], { extrapolateRight: 'clamp' });
  const scene2Line1Opacity = interpolate(frame, [100, 120, 200, 220], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
  const scene2Line1Y = interpolate(frame, [100, 120, 200, 220], [50, 0, 0, -50], { extrapolateRight: 'clamp' });
  const scene2Line2Opacity = interpolate(frame, [110, 130, 200, 220], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
  const scene2Line2Y = interpolate(frame, [110, 130, 200, 220], [50, 0, 0, -50], { extrapolateRight: 'clamp' });
  const scene2AccentOpacity = interpolate(frame, [120, 140, 200, 220], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
  const scene2AccentScale = interpolate(frame, [120, 140, 200, 220], [0, 1, 1, 1.5], { extrapolateRight: 'clamp' });

  const scene3BgOpacity = interpolate(frame, [220, 240, 350, 370], [0, 0.3, 0.3, 0], { extrapolateRight: 'clamp' });
  const scene3TitleOpacity = interpolate(frame, [220, 250, 350, 370], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
  const scene3TitleY = interpolate(frame, [220, 250, 350, 370], [-100, 0, 0, 100], { extrapolateRight: 'clamp' });
  const scene3TitleScale = interpolate(frame, [220, 250, 350, 370], [1.5, 1, 1, 0.5], { extrapolateRight: 'clamp' });
  const scene3Text1Opacity = interpolate(frame, [240, 260, 350, 370], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
  const scene3Text1X = interpolate(frame, [240, 260, 350, 370], [-200, 0, 0, 200], { extrapolateRight: 'clamp' });
  const scene3Text2Opacity = interpolate(frame, [250, 270, 350, 370], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
  const scene3Text2X = interpolate(frame, [250, 270, 350, 370], [200, 0, 0, -200], { extrapolateRight: 'clamp' });
  const scene3Text3Opacity = interpolate(frame, [260, 280, 350, 370], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
  const scene3Text3Y = interpolate(frame, [260, 280, 350, 370], [100, 0, 0, -100], { extrapolateRight: 'clamp' });

  const scene4BackdropOpacity = interpolate(frame, [370, 390, 490, 510], [0, 0.2, 0.2, 0], { extrapolateRight: 'clamp' });
  const scene4MainOpacity = interpolate(frame, [370, 400, 490, 510], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
  const scene4MainScale = interpolate(frame, [370, 400, 490, 510], [0.6, 1, 1, 1.4], { extrapolateRight: 'clamp' });
  const scene4MainRotate = interpolate(frame, [370, 400, 490, 510], [-5, 0, 0, 5], { extrapolateRight: 'clamp' });
  const scene4Subtitle1Opacity = interpolate(frame, [390, 410, 490, 510], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
  const scene4Subtitle1Y = interpolate(frame, [390, 410, 490, 510], [80, 0, 0, -80], { extrapolateRight: 'clamp' });
  const scene4Subtitle2Opacity = interpolate(frame, [400, 420, 490, 510], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
  const scene4Subtitle2Y = interpolate(frame, [400, 420, 490, 510], [80, 0, 0, -80], { extrapolateRight: 'clamp' });
  const scene4Subtitle3Opacity = interpolate(frame, [410, 430, 490, 510], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
  const scene4Subtitle3Y = interpolate(frame, [410, 430, 490, 510], [80, 0, 0, -80], { extrapolateRight: 'clamp' });
  const scene4HighlightOpacity = interpolate(frame, [420, 440, 490, 510], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
  const scene4HighlightScale = interpolate(frame, [420, 440, 490, 510], [0, 1, 1, 0], { extrapolateRight: 'clamp' });

  const scene5EnvOpacity = interpolate(frame, [510, 530, 630, 650], [0, 0.15, 0.15, 0], { extrapolateRight: 'clamp' });
  const scene5HeaderOpacity = interpolate(frame, [510, 540, 630, 650], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
  const scene5HeaderY = interpolate(frame, [510, 540, 630, 650], [-150, 0, 0, 150], { extrapolateRight: 'clamp' });
  const scene5HeaderScale = interpolate(frame, [510, 540, 630, 650], [0.8, 1, 1, 1.2], { extrapolateRight: 'clamp' });
  const scene5Point1Opacity = interpolate(frame, [530, 550, 630, 650], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
  const scene5Point1X = interpolate(frame, [530, 550, 630, 650], [-250, 0, 0, 250], { extrapolateRight: 'clamp' });
  const scene5Point2Opacity = interpolate(frame, [540, 560, 630, 650], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
  const scene5Point2X = interpolate(frame, [540, 560, 630, 650], [250, 0, 0, -250], { extrapolateRight: 'clamp' });
  const scene5Point3Opacity = interpolate(frame, [550, 570, 630, 650], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
  const scene5Point3Y = interpolate(frame, [550, 570, 630, 650], [120, 0, 0, -120], { extrapolateRight: 'clamp' });
  const scene5EmphasisOpacity = interpolate(frame, [570, 590, 630, 650], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
  const scene5EmphasisScale = interpolate(frame, [570, 590, 630, 650], [0.5, 1, 1, 1.5], { extrapolateRight: 'clamp' });

  const scene6AtmosphereOpacity = interpolate(frame, [650, 670, 760, 780], [0, 0.25, 0.25, 0], { extrapolateRight: 'clamp' });
  const scene6TitleOpacity = interpolate(frame, [650, 680, 760, 780], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
  const scene6TitleScale = interpolate(frame, [650, 680, 760, 780], [1.3, 1, 1, 0.7], { extrapolateRight: 'clamp' });
  const scene6TitleRotate = interpolate(frame, [650, 680, 760, 780], [10, 0, 0, -10], { extrapolateRight: 'clamp' });
  const scene6Desc1Opacity = interpolate(frame, [670, 690, 760, 780], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
  const scene6Desc1Y = interpolate(frame, [670, 690, 760, 780], [70, 0, 0, -70], { extrapolateRight: 'clamp' });
  const scene6Desc2Opacity = interpolate(frame, [680, 700, 760, 780], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
  const scene6Desc2Y = interpolate(frame, [680, 700, 760, 780], [70, 0, 0, -70], { extrapolateRight: 'clamp' });
  const scene6Desc3Opacity = interpolate(frame, [690, 710, 760, 780], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
  const scene6Desc3Y = interpolate(frame, [690, 710, 760, 780], [70, 0, 0, -70], { extrapolateRight: 'clamp' });
  const scene6WarningOpacity = interpolate(frame, [710, 730, 760, 780], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
  const scene6WarningScale = interpolate(frame, [710, 730, 760, 780], [0, 1, 1, 0], { extrapolateRight: 'clamp' });

  const scene7FadeOpacity = interpolate(frame, [780, 800, 870, 890], [0, 0.2, 0.2, 0], { extrapolateRight: 'clamp' });
  const scene7MainTitleOpacity = interpolate(frame, [780, 810, 870, 890], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
  const scene7MainTitleY = interpolate(frame, [780, 810, 870, 890], [120, 0, 0, -120], { extrapolateRight: 'clamp' });
  const scene7MainTitleScale = interpolate(frame, [780, 810, 870, 890], [0.7, 1, 1, 1.3], { extrapolateRight: 'clamp' });
  const scene7CTAOpacity = interpolate(frame, [810, 830, 870, 890], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
  const scene7CTAScale = interpolate(frame, [810, 830, 870, 890], [0.5, 1, 1, 1.1], { extrapolateRight: 'clamp' });
  const scene7CTAY = interpolate(frame, [810, 830, 870, 890], [100, 0, 0, -100], { extrapolateRight: 'clamp' });
  const scene7FinalOpacity = interpolate(frame, [830, 850, 870, 890], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
  const scene7FinalY = interpolate(frame, [830, 850, 870, 890], [80, 0, 0, -80], { extrapolateRight: 'clamp' });

  const particle1X = interpolate(frame, [0, 900], [-100, 1180], { extrapolateRight: 'clamp' });
  const particle1Y = interpolate(frame, [0, 900], [300, 1600], { extrapolateRight: 'clamp' });
  const particle1Opacity = interpolate(frame, [0, 100, 800, 900], [0, 0.6, 0.6, 0], { extrapolateRight: 'clamp' });

  const particle2X = interpolate(frame, [0, 900], [1180, -100], { extrapolateRight: 'clamp' });
  const particle2Y = interpolate(frame, [0, 900], [500, 1800], { extrapolateRight: 'clamp' });
  const particle2Opacity = interpolate(frame, [0, 150, 750, 900], [0, 0.5, 0.5, 0], { extrapolateRight: 'clamp' });

  const particle3X = interpolate(frame, [0, 900], [540, 540], { extrapolateRight: 'clamp' });
  const particle3Y = interpolate(frame, [0, 900], [-50, 1970], { extrapolateRight: 'clamp' });
  const particle3Opacity = interpolate(frame, [0, 200, 700, 900], [0, 0.4, 0.4, 0], { extrapolateRight: 'clamp' });

  const particle4X = interpolate(frame, [0, 900], [200, 880], { extrapolateRight: 'clamp' });
  const particle4Y = interpolate(frame, [0, 900], [100, 1700], { extrapolateRight: 'clamp' });
  const particle4Opacity = interpolate(frame, [50, 200, 700, 850], [0, 0.5, 0.5, 0], { extrapolateRight: 'clamp' });

  const particle5X = interpolate(frame, [0, 900], [880, 200], { extrapolateRight: 'clamp' });
  const particle5Y = interpolate(frame, [0, 900], [200, 1650], { extrapolateRight: 'clamp' });
  const particle5Opacity = interpolate(frame, [100, 250, 650, 800], [0, 0.6, 0.6, 0], { extrapolateRight: 'clamp' });

  const particle6X = interpolate(frame, [0, 900], [100, 980], { extrapolateRight: 'clamp' });
  const particle6Y = interpolate(frame, [0, 900], [700, 1400], { extrapolateRight: 'clamp' });
  const particle6Opacity = interpolate(frame, [150, 300, 600, 750], [0, 0.4, 0.4, 0], { extrapolateRight: 'clamp' });

  const particle7X = interpolate(frame, [0, 900], [980, 100], { extrapolateRight: 'clamp' });
  const particle7Y = interpolate(frame, [0, 900], [800, 1300], { extrapolateRight: 'clamp' });
  const particle7Opacity = interpolate(frame, [200, 350, 550, 700], [0, 0.5, 0.5, 0], { extrapolateRight: 'clamp' });

  const particle8X = interpolate(frame, [0, 900], [400, 680], { extrapolateRight: 'clamp' });
  const particle8Y = interpolate(frame, [0, 900], [400, 1500], { extrapolateRight: 'clamp' });
  const particle8Opacity = interpolate(frame, [250, 400, 500, 650], [0, 0.6, 0.6, 0], { extrapolateRight: 'clamp' });

  const backgroundGradientShift = interpolate(frame, [0, 450, 900], [0, 50, 100], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(${backgroundGradientShift}deg, #020617 0%, #0f172a 50%, #1e293b ${backgroundGradientShift}%)`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: `${particle1Y}px`,
          left: `${particle1X}px`,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'rgba(239, 68, 68, 0.8)',
          opacity: particle1Opacity,
          boxShadow: '0 0 20px rgba(239, 68, 68, 0.6)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: `${particle2Y}px`,
          left: `${particle2X}px`,
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: 'rgba(96, 165, 250, 0.8)',
          opacity: particle2Opacity,
          boxShadow: '0 0 15px rgba(96, 165, 250, 0.6)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: `${particle3Y}px`,
          left: `${particle3X}px`,
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: 'rgba(167, 139, 250, 0.7)',
          opacity: particle3Opacity,
          boxShadow: '0 0 25px rgba(167, 139, 250, 0.5)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: `${particle4Y}px`,
          left: `${particle4X}px`,
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          background: 'rgba(251, 146, 60, 0.8)',
          opacity: particle4Opacity,
          boxShadow: '0 0 18px rgba(251, 146, 60, 0.6)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: `${particle5Y}px`,
          left: `${particle5X}px`,
          width: '9px',
          height: '9px',
          borderRadius: '50%',
          background: 'rgba(52, 211, 153, 0.8)',
          opacity: particle5Opacity,
          boxShadow: '0 0 22px rgba(52, 211, 153, 0.5)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: `${particle6Y}px`,
          left: `${particle6X}px`,
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          background: 'rgba(248, 113, 113, 0.7)',
          opacity: particle6Opacity,
          boxShadow: '0 0 12px rgba(248, 113, 113, 0.5)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: `${particle7Y}px`,
          left: `${particle7X}px`,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'rgba(59, 130, 246, 0.8)',
          opacity: particle7Opacity,
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: `${particle8Y}px`,
          left: `${particle8X}px`,
          width: '11px',
          height: '11px',
          borderRadius: '50%',
          background: 'rgba(236, 72, 153, 0.7)',
          opacity: particle8Opacity,
          boxShadow: '0 0 28px rgba(236, 72, 153, 0.5)',
        }}
      />

      {frame >= 0 && frame < 90 && (
        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '900px',
              height: '900px',
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(239, 68, 68, ${scene1GlowIntensity * 0.3}) 0%, transparent 70%)`,
              filter: `blur(${scene1GlowIntensity * 80}px)`,
            }}
          />
          <div
            style={{
              textAlign: 'center',
              padding: '0 80px',
              opacity: scene1TitleOpacity,
              transform: `translateY(${scene1TitleY}px) scale(${scene1TitleScale})`,
            }}
          >
            <h1
              style={{
                fontSize: '88px',
                fontWeight: '900',
                color: '#ffffff',
                margin: 0,
                lineHeight: '1.05',
                textShadow: `0 0 ${scene1GlowIntensity * 60}px rgba(239, 68, 68, 0.8), 0 0 ${scene1GlowIntensity * 40}px rgba(239, 68, 68, 0.6)`,
                letterSpacing: '-2px',
              }}
            >
              Your Password
            </h1>
            <h1
              style={{
                fontSize: '88px',
                fontWeight: '900',
                color: '#ef4444',
                margin: '30px 0 0 0',
                lineHeight: '1.05',
                textShadow: `0 0 ${scene1GlowIntensity * 70}px rgba(239, 68, 68, 1), 0 0 ${scene1GlowIntensity * 50}px rgba(239, 68, 68, 0.8)`,
                letterSpacing: '-2px',
              }}
            >
              Is Being Stolen
            </h1>
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '300px',
              textAlign: 'center',
              opacity: scene1SubOpacity,
              transform: `translateY(${scene1SubY}px)`,
            }}
          >
            <p
              style={{
                fontSize: '38px',
                fontWeight: '700',
                color: '#fca5a5',
                margin: 0,
                letterSpacing: '1px',
              }}
            >
              Right Now
            </p>
          </div>
        </AbsoluteFill>
      )}

      {frame >= 90 && frame < 220 && (
        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              padding: '0 80px',
              opacity: scene2MainOpacity,
              transform: `translateX(${scene2MainX}px) scale(${scene2MainScale})`,
            }}
          >
            <h2
              style={{
                fontSize: '82px',
                fontWeight: '900',
                color: '#60a5fa',
                margin: 0,
                lineHeight: '1.1',
                textShadow: '0 0 50px rgba(96, 165, 250, 0.7), 0 0 30px rgba(96, 165, 250, 0.5)',
                letterSpacing: '-1px',
              }}
            >
              Phishing Attacks
            </h2>
          </div>
          <div
            style={{
              position: 'absolute',
              top: '750px',
              textAlign: 'center',
              padding: '0 100px',
              opacity: scene2Line1Opacity,
              transform: `translateY(${scene2Line1Y}px)`,
            }}
          >
            <p
              style={{
                fontSize: '40px',
                fontWeight: '700',
                color: '#e2e8f0',
                margin: 0,
                lineHeight: '1.5',
              }}
            >
              Fake emails look 100% real
            </p>
          </div>
          <div
            style={{
              position: 'absolute',
              top: '870px',
              textAlign: 'center',
              padding: '0 100px',
              opacity: scene2Line2Opacity,
              transform: `translateY(${scene2Line2Y}px)`,
            }}
          >
            <p
              style={{
                fontSize: '40px',
                fontWeight: '700',
                color: '#e2e8f0',
                margin: 0,
                lineHeight: '1.5',
              }}
            >
              They steal everything you type
            </p>
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '250px',
              textAlign: 'center',
              opacity: scene2AccentOpacity,
              transform: `scale(${scene2AccentScale})`,
            }}
          >
            <div
              style={{
                fontSize: '44px',
                fontWeight: '800',
                color: '#fbbf24',
                padding: '20px 50px',
                borderRadius: '60px',
                background: 'rgba(251, 191, 36, 0.15)',
                border: '3px solid rgba(251, 191, 36, 0.4)',
                boxShadow: '0 0 40px rgba(251, 191, 36, 0.3)',
              }}
            >
              Even Bank Passwords
            </div>
          </div>
        </AbsoluteFill>
      )}

      {frame >= 220 && frame < 370 && (
        <AbsoluteFill>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at center, rgba(167, 139, 250, 0.2) 0%, transparent 70%)',
              opacity: scene3BgOpacity,
            }}
          />
          <AbsoluteFill
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                textAlign: 'center',
                padding: '0 80px',
                opacity: scene3TitleOpacity,
                transform: `translateY(${scene3TitleY}px) scale(${scene3TitleScale})`,
              }}
            >
              <h2
                style={{
                  fontSize: '84px',
                  fontWeight: '900',
                  color: '#a78bfa',
                  margin: 0,
                  lineHeight: '1.1',
                  textShadow: '0 0 55px rgba(167, 139, 250, 0.8), 0 0 35px rgba(167, 139, 250, 0.6)',
                  letterSpacing: '-1.5px',
                }}
              >
                Keyloggers
              </h2>
            </div>
            <div
              style={{
                position: 'absolute',
                top: '720px',
                left: '0',
                right: '0',
                textAlign: 'center',
                padding: '0 90px',
                opacity: scene3Text1Opacity,
                transform: `translateX(${scene3Text1X}px)`,
              }}
            >
              <p
                style={{
                  fontSize: '42px',
                  fontWeight: '700',
                  color: '#e2e8f0',
                  margin: 0,
                  lineHeight: '1.4',
                }}
              >
                Hidden software on your device
              </p>
            </div>
            <div
              style={{
                position: 'absolute',
                top: '850px',
                left: '0',
                right: '0',
                textAlign: 'center',
                padding: '0 90px',
                opacity: scene3Text2Opacity,
                transform: `translateX(${scene3Text2X}px)`,
              }}
            >
              <p
                style={{
                  fontSize: '42px',
                  fontWeight: '700',
                  color: '#e2e8f0',
                  margin: 0,
                  lineHeight: '1.4',
                }}
              >
                Records every single keystroke
              </p>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '280px',
                left: '0',
                right: '0',
                textAlign: 'center',
                padding: '0 90px',
                opacity: scene3Text3Opacity,
                transform: `translateY(${scene3Text3Y}px)`,
              }}
            >
              <p
                style={{
                  fontSize: '46px',
                  fontWeight: '800',
                  color: '#c084fc',
                  margin: 0,
                  lineHeight: '1.3',
                  textShadow: '0 0 30px rgba(192, 132, 252, 0.6)',
                }}
              >
                Without you knowing
              </p>
            </div>
          </AbsoluteFill>
        </AbsoluteFill>
      )}

      {frame >= 370 && frame < 510 && (
        <AbsoluteFill>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 50% 30%, rgba(251, 146, 60, 0.15) 0%, transparent 60%)',
              opacity: scene4BackdropOpacity,
            }}
          />
          <AbsoluteFill
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                textAlign: 'center',
                padding: '0 70px',
                opacity: scene4MainOpacity,
                transform: `scale(${scene4MainScale}) rotate(${scene4MainRotate}deg)`,
              }}
            >
              <h2
                style={{
                  fontSize: '86px',
                  fontWeight: '900',
                  color: '#fb923c',
                  margin: 0,
                  lineHeight: '1.05',
                  textShadow: '0 0 60px rgba(251, 146, 60, 0.9), 0 0 40px rgba(251, 146, 60, 0.7)',
                  letterSpacing: '-2px',
                }}
              >
                Data Breaches
              </h2>
            </div>
            <div
              style={{
                position: 'absolute',
                top: '680px',
                left: '0',
                right: '0',
                textAlign: 'center',
                padding: '0 100px',
                opacity: scene4Subtitle1Opacity,
                transform: `translateY(${scene4Subtitle1Y}px)`,
              }}
            >
              <p
                style={{
                  fontSize: '41px',
                  fontWeight: '700',
                  color: '#e2e8f0',
                  margin: 0,
                  lineHeight: '1.4',
                }}
              >
                Millions of passwords leaked
              </p>
            </div>
            <div
              style={{
                position: 'absolute',
                top: '800px',
                left: '0',
                right: '0',
                textAlign: 'center',
                padding: '0 100px',
                opacity: scene4Subtitle2Opacity,
                transform: `translateY(${scene4Subtitle2Y}px)`,
              }}
            >
              <p
                style={{
                  fontSize: '41px',
                  fontWeight: '700',
                  color: '#e2e8f0',
                  margin: 0,
                  lineHeight: '1.4',
                }}
              >
                From major companies daily
              </p>
            </div>
            <div
              style={{
                position: 'absolute',
                top: '920px',
                left: '0',
                right: '0',
                textAlign: 'center',
                padding: '0 100px',
                opacity: scene4Subtitle3Opacity,
                transform: `translateY(${scene4Subtitle3Y}px)`,
              }}
            >
              <p
                style={{
                  fontSize: '41px',
                  fontWeight: '700',
                  color: '#e2e8f0',
                  margin: 0,
                  lineHeight: '1.4',
                }}
              >
                Hackers buy and sell them
              </p>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '240px',
                left: '0',
                right: '0',
                textAlign: 'center',
                opacity: scene4HighlightOpacity,
                transform: `scale(${scene4HighlightScale})`,
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  fontSize: '48px',
                  fontWeight: '900',
                  color: '#dc2626',
                  padding: '25px 55px',
                  borderRadius: '70px',
                  background: 'rgba(220, 38, 38, 0.2)',
                  border: '4px solid rgba(220, 38, 38, 0.5)',
                  boxShadow: '0 0 50px rgba(220, 38, 38, 0.4)',
                  letterSpacing: '0px',
                }}
              >
                On The Dark Web
              </div>
            </div>
          </AbsoluteFill>
        </AbsoluteFill>
      )}

      {frame >= 510 && frame < 650 && (
        <AbsoluteFill>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(52, 211, 153, 0.12) 0%, rgba(16, 185, 129, 0.08) 100%)',
              opacity: scene5EnvOpacity,
            }}
          />
          <AbsoluteFill
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                textAlign: 'center',
                padding: '0 75px',
                opacity: scene5HeaderOpacity,
                transform: `translateY(${scene5HeaderY}px) scale(${scene5HeaderScale})`,
              }}
            >
              <h2
                style={{
                  fontSize: '85px',
                  fontWeight: '900',
                  color: '#34d399',
                  margin: 0,
                  lineHeight: '1.1',
                  textShadow: '0 0 58px rgba(52, 211, 153, 0.85), 0 0 38px rgba(52, 211, 153, 0.65)',
                  letterSpacing: '-1.5px',
                }}
              >
                Social Engineering
              </h2>
            </div>
            <div
              style={{
                position: 'absolute',
                top: '700px',
                left: '0',
                right: '0',
                textAlign: 'center',
                padding: '0 95px',
                opacity: scene5Point1Opacity,
                transform: `translateX(${scene5Point1X}px)`,
              }}
            >
              <p
                style={{
                  fontSize: '43px',
                  fontWeight: '700',
                  color: '#e2e8f0',
                  margin: 0,
                  lineHeight: '1.4',
                }}
              >
                Fake friends gain your trust
              </p>
            </div>
            <div
              style={{
                position: 'absolute',
                top: '820px',
                left: '0',
                right: '0',
                textAlign: 'center',
                padding: '0 95px',
                opacity: scene5Point2Opacity,
                transform: `translateX(${scene5Point2X}px)`,
              }}
            >
              <p
                style={{
                  fontSize: '43px',
                  fontWeight: '700',
                  color: '#e2e8f0',
                  margin: 0,
                  lineHeight: '1.4',
                }}
              >
                They manipulate you emotionally
              </p>
            </div>
            <div
              style={{
                position: 'absolute',
                top: '940px',
                left: '0',
                right: '0',
                textAlign: 'center',
                padding: '0 95px',
                opacity: scene5Point3Opacity,
                transform: `translateY(${scene5Point3Y}px)`,
              }}
            >
              <p
                style={{
                  fontSize: '43px',
                  fontWeight: '700',
                  color: '#e2e8f0',
                  margin: 0,
                  lineHeight: '1.4',
                }}
              >
                Then trick you into revealing secrets
              </p>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '220px',
                left: '0',
                right: '0',
                textAlign: 'center',
                opacity: scene5EmphasisOpacity,
                transform: `scale(${scene5EmphasisScale})`,
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  fontSize: '50px',
                  fontWeight: '900',
                  color: '#10b981',
                  padding: '28px 60px',
                  borderRadius: '75px',
                  background: 'rgba(16, 185, 129, 0.18)',
                  border: '4px solid rgba(16, 185, 129, 0.45)',
                  boxShadow: '0 0 55px rgba(16, 185, 129, 0.35)',
                }}
              >
                Most Dangerous Method
              </div>
            </div>
          </AbsoluteFill>
        </AbsoluteFill>
      )}

      {frame >= 650 && frame < 780 && (
        <AbsoluteFill>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.18) 0%, transparent 65%)',
              opacity: scene6AtmosphereOpacity,
            }}
          />
          <AbsoluteFill
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                textAlign: 'center',
                padding: '0 70px',
                opacity: scene6TitleOpacity,
                transform: `scale(${scene6TitleScale}) rotate(${scene6TitleRotate}deg)`,
              }}
            >
              <h2
                style={{
                  fontSize: '87px',
                  fontWeight: '900',
                  color: '#3b82f6',
                  margin: 0,
                  lineHeight: '1.08',
                  textShadow: '0 0 62px rgba(59, 130, 246, 0.9), 0 0 42px rgba(59, 130, 246, 0.7)',
                  letterSpacing: '-2px',
                }}
              >
                WiFi Sniffing
              </h2>
            </div>
            <div
              style={{
                position: 'absolute',
                top: '690px',
                left: '0',
                right: '0',
                textAlign: 'center',
                padding: '0 90px',
                opacity: scene6Desc1Opacity,
                transform: `translateY(${scene6Desc1Y}px)`,
              }}
            >
              <p
                style={{
                  fontSize: '44px',
                  fontWeight: '700',
                  color: '#e2e8f0',
                  margin: 0,
                  lineHeight: '1.4',
                }}
              >
                Public WiFi networks intercept data
              </p>
            </div>
            <div
              style={{
                position: 'absolute',
                top: '820px',
                left: '0',
                right: '0',
                textAlign: 'center',
                padding: '0 90px',
                opacity: scene6Desc2Opacity,
                transform: `translateY(${scene6Desc2Y}px)`,
              }}
            >
              <p
                style={{
                  fontSize: '44px',
                  fontWeight: '700',
                  color: '#e2e8f0',
                  margin: 0,
                  lineHeight: '1.4',
                }}
              >
                Hackers see everything you send
              </p>
            </div>
            <div
              style={{
                position: 'absolute',
                top: '950px',
                left: '0',
                right: '0',
                textAlign: 'center',
                padding: '0 90px',
                opacity: scene6Desc3Opacity,
                transform: `translateY(${scene6Desc3Y}px)`,
              }}
            >
              <p
                style={{
                  fontSize: '44px',
                  fontWeight: '700',
                  color: '#e2e8f0',
                  margin: 0,
                  lineHeight: '1.4',
                }}
              >
                Including passwords and card details
              </p>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '210px',
                left: '0',
                right: '0',
                textAlign: 'center',
                opacity: scene6WarningOpacity,
                transform: `scale(${scene6WarningScale})`,
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  fontSize: '52px',
                  fontWeight: '900',
                  color: '#fbbf24',
                  padding: '30px 65px',
                  borderRadius: '80px',
                  background: 'rgba(251, 191, 36, 0.2)',
                  border: '4px solid rgba(251, 191, 36, 0.5)',
                  boxShadow: '0 0 60px rgba(251, 191, 36, 0.4)',
                }}
              >
                Never Use Free WiFi
              </div>
            </div>
          </AbsoluteFill>
        </AbsoluteFill>
      )}

      {frame >= 780 && frame <= 900 && (
        <AbsoluteFill>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at center, rgba(248, 113, 113, 0.22) 0%, rgba(239, 68, 68, 0.1) 100%)',
              opacity: scene7FadeOpacity,
            }}
          />
          <AbsoluteFill
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                textAlign: 'center',
                padding: '0 65px',
                opacity: scene7MainTitleOpacity,
                transform: `translateY(${scene7MainTitleY}px) scale(${scene7MainTitleScale})`,
              }}
            >
              <h1
                style={{
                  fontSize: '90px',
                  fontWeight: '900',
                  color: '#ffffff',
                  margin: 0,
                  lineHeight: '1.05',
                  textShadow: '0 0 65px rgba(248, 113, 113, 0.95), 0 0 45px rgba(248, 113, 113, 0.75), 0 0 25px rgba(248, 113, 113, 0.55)',
                  letterSpacing: '-2.5px',
                }}
              >
                Protect Yourself
              </h1>
            </div>
            <div
              style={{
                position: 'absolute',
                top: '800px',
                left: '0',
                right: '0',
                textAlign: 'center',
                padding: '0 80px',
                opacity: scene7CTAOpacity,
                transform: `translateY(${scene7CTAY}px) scale(${scene7CTAScale})`,
              }}
            >
              <p
                style={{
                  fontSize: '48px',
                  fontWeight: '800',
                  color: '#fca5a5',
                  margin: 0,
                  lineHeight: '1.3',
                  textShadow: '0 0 35px rgba(252, 165, 165, 0.6)',
                }}
              >
                Use strong unique passwords
              </p>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '200px',
                left: '0',
                right: '0',
                textAlign: 'center',
                padding: '0 80px',
                opacity: scene7FinalOpacity,
                transform: `translateY(${scene7FinalY}px)`,
              }}
            >
              <p
                style={{
                  fontSize: '50px',
                  fontWeight: '900',
                  color: '#ef4444',
                  margin: 0,
                  lineHeight: '1.3',
                  textShadow: '0 0 45px rgba(239, 68, 68, 0.8), 0 0 25px rgba(239, 68, 68, 0.6)',
                }}
              >
                Your security depends on it
              </p>
            </div>
          </AbsoluteFill>
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
      durationInFrames={900}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};

