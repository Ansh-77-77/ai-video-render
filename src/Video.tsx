import { AbsoluteFill, Composition, useCurrentFrame, interpolate } from 'remotion';

const MainVideo: React.FC = () => {
  const frame = useCurrentFrame();

  const keyboardOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });
  const keyboardY = interpolate(frame, [0, 30], [200, 0], { extrapolateRight: 'clamp' });

  const keys = [
    { letter: 'P', frame: 40, x: 200, y: 800 },
    { letter: 'a', frame: 50, x: 350, y: 850 },
    { letter: 's', frame: 60, x: 500, y: 820 },
    { letter: 's', frame: 70, x: 650, y: 870 },
    { letter: 'w', frame: 80, x: 800, y: 830 },
    { letter: 'o', frame: 90, x: 280, y: 900 },
    { letter: 'r', frame: 100, x: 430, y: 880 },
    { letter: 'd', frame: 110, x: 580, y: 920 },
    { letter: '1', frame: 120, x: 730, y: 860 },
    { letter: '2', frame: 130, x: 320, y: 840 },
    { letter: '3', frame: 140, x: 470, y: 910 },
    { letter: '4', frame: 150, x: 620, y: 870 },
  ];

  const dataPackets = [
    { startFrame: 60, x: 150, delay: 0 },
    { startFrame: 80, x: 250, delay: 10 },
    { startFrame: 100, x: 350, delay: 20 },
    { startFrame: 120, x: 450, delay: 30 },
    { startFrame: 140, x: 550, delay: 40 },
    { startFrame: 160, x: 650, delay: 50 },
    { startFrame: 180, x: 750, delay: 60 },
    { startFrame: 200, x: 850, delay: 70 },
  ];

  const serverOpacity = interpolate(frame, [50, 80], [0, 1], { extrapolateRight: 'clamp' });
  const serverScale = interpolate(frame, [50, 80], [0.5, 1], { extrapolateRight: 'clamp' });
  const serverGlow = Math.sin(frame * 0.15) * 0.5 + 0.5;

  const overlayTextOpacity = interpolate(frame, [180, 210], [0, 1], { extrapolateRight: 'clamp' });
  const overlayTextScale = interpolate(frame, [180, 210, 230, 250], [0.7, 1.1, 1, 1.05], { extrapolateRight: 'clamp' });
  const overlayTextY = interpolate(frame, [180, 210], [100, 0], { extrapolateRight: 'clamp' });

  const warningPulse = Math.sin(frame * 0.2) * 0.3 + 0.7;

  const backgroundScanline = interpolate(frame, [0, 300], [0, 1920], { extrapolateRight: 'clamp' }) % 1920;

  const typingTextOpacity = interpolate(frame, [220, 240], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a0a1a 50%, #0a0a0a 100%)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse at center, rgba(138, 43, 226, 0.15) 0%, transparent 70%)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: `${backgroundScanline}px`,
          left: 0,
          right: 0,
          height: '2px',
          background: 'rgba(138, 43, 226, 0.5)',
          boxShadow: '0 0 10px rgba(138, 43, 226, 0.8)',
        }}
      />

      {frame >= 50 && (
        <div
          style={{
            position: 'absolute',
            top: '150px',
            left: '50%',
            transform: `translateX(-50%) scale(${serverScale})`,
            opacity: serverOpacity,
            zIndex: 5,
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
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '250px',
                height: '300px',
                background: 'linear-gradient(180deg, #1a1a2e 0%, #0f0f1e 100%)',
                borderRadius: '15px',
                border: '3px solid #8a2be2',
                boxShadow: `0 0 ${serverGlow * 60}px rgba(138, 43, 226, ${serverGlow})`,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '30px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '180px',
                  height: '8px',
                  background: `rgba(138, 43, 226, ${serverGlow})`,
                  borderRadius: '4px',
                  boxShadow: `0 0 15px rgba(138, 43, 226, ${serverGlow})`,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '70px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '180px',
                  height: '8px',
                  background: `rgba(138, 43, 226, ${serverGlow * 0.8})`,
                  borderRadius: '4px',
                  boxShadow: `0 0 15px rgba(138, 43, 226, ${serverGlow * 0.8})`,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '110px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '180px',
                  height: '8px',
                  background: `rgba(138, 43, 226, ${serverGlow * 0.6})`,
                  borderRadius: '4px',
                  boxShadow: `0 0 15px rgba(138, 43, 226, ${serverGlow * 0.6})`,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '40px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: '48px',
                  fontWeight: '900',
                  color: `rgba(138, 43, 226, ${serverGlow})`,
                  textShadow: `0 0 20px rgba(138, 43, 226, ${serverGlow})`,
                }}
              >
                💾
              </div>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '28px',
                fontWeight: '800',
                color: '#8a2be2',
                textShadow: '0 0 15px rgba(138, 43, 226, 0.8)',
                textAlign: 'center',
              }}
            >
              HACKER SERVER
            </div>
          </div>
        </div>
      )}

      <div
        style={{
          position: 'absolute',
          bottom: '450px',
          left: '50%',
          transform: `translateX(-50%) translateY(${keyboardY}px)`,
          opacity: keyboardOpacity,
          width: '900px',
          height: '300px',
          background: 'linear-gradient(135deg, rgba(40, 40, 60, 0.9) 0%, rgba(30, 30, 50, 0.85) 100%)',
          borderRadius: '20px',
          border: '3px solid rgba(138, 43, 226, 0.4)',
          boxShadow: '0 10px 50px rgba(0, 0, 0, 0.5)',
          display: 'flex',
          flexWrap: 'wrap',
          padding: '20px',
          gap: '10px',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((key, i) => {
          const keyPressFrame = 40 + i * 10;
          const isPressed = frame >= keyPressFrame && frame < keyPressFrame + 8;
          return (
            <div
              key={`top-${i}`}
              style={{
                width: '70px',
                height: '70px',
                background: isPressed ? '#8a2be2' : 'rgba(60, 60, 80, 0.9)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                fontWeight: '800',
                color: '#ffffff',
                boxShadow: isPressed ? '0 0 20px rgba(138, 43, 226, 1)' : '0 2px 5px rgba(0, 0, 0, 0.3)',
                transform: isPressed ? 'scale(0.95)' : 'scale(1)',
                transition: 'all 0.1s',
              }}
            >
              {key}
            </div>
          );
        })}
        {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((key, i) => {
          const keyPressFrame = 45 + i * 10;
          const isPressed = frame >= keyPressFrame && frame < keyPressFrame + 8;
          return (
            <div
              key={`mid-${i}`}
              style={{
                width: '70px',
                height: '70px',
                background: isPressed ? '#8a2be2' : 'rgba(60, 60, 80, 0.9)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                fontWeight: '800',
                color: '#ffffff',
                boxShadow: isPressed ? '0 0 20px rgba(138, 43, 226, 1)' : '0 2px 5px rgba(0, 0, 0, 0.3)',
                transform: isPressed ? 'scale(0.95)' : 'scale(1)',
                transition: 'all 0.1s',
              }}
            >
              {key}
            </div>
          );
        })}
      </div>

      {keys.map((keyData, index) => {
        const keyOpacity = interpolate(
          frame,
          [keyData.frame, keyData.frame + 10, keyData.frame + 60, keyData.frame + 80],
          [0, 1, 1, 0],
          { extrapolateRight: 'clamp' }
        );
        const keyY = interpolate(
          frame,
          [keyData.frame, keyData.frame + 80],
          [keyData.y, 100],
          { extrapolateRight: 'clamp' }
        );
        const keyScale = interpolate(
          frame,
          [keyData.frame, keyData.frame + 15],
          [0.5, 1],
          { extrapolateRight: 'clamp' }
        );

        return (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: `${keyData.x}px`,
              top: `${keyY}px`,
              opacity: keyOpacity,
              transform: `scale(${keyScale})`,
              zIndex: 3,
            }}
          >
            <div
              style={{
                fontSize: '48px',
                fontWeight: '900',
                color: '#8a2be2',
                textShadow: '0 0 20px rgba(138, 43, 226, 1), 0 0 10px rgba(138, 43, 226, 0.8)',
                fontFamily: 'monospace',
              }}
            >
              {keyData.letter}
            </div>
          </div>
        );
      })}

      {dataPackets.map((packet, index) => {
        const packetOpacity = interpolate(
          frame,
          [packet.startFrame, packet.startFrame + 20, packet.startFrame + 80, packet.startFrame + 100],
          [0, 1, 1, 0],
          { extrapolateRight: 'clamp' }
        );
        const packetY = interpolate(
          frame,
          [packet.startFrame, packet.startFrame + 100],
          [750, 500],
          { extrapolateRight: 'clamp' }
        );

        return (
          <div
            key={`packet-${index}`}
            style={{
              position: 'absolute',
              left: `${packet.x}px`,
              top: `${packetY}px`,
              opacity: packetOpacity,
              zIndex: 4,
            }}
          >
            <div
              style={{
                width: '100px',
                height: '60px',
                background: 'rgba(138, 43, 226, 0.3)',
                border: '2px solid #8a2be2',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(138, 43, 226, 0.6)',
              }}
            >
              <div
                style={{
                  fontSize: '32px',
                }}
              >
                📦
              </div>
            </div>
          </div>
        );
      })}

      {frame >= 70 && frame <= 180 && (
        <>
          {[1, 2, 3, 4, 5].map((i) => {
            const lineY = interpolate(
              frame,
              [70 + i * 10, 180],
              [750, 500],
              { extrapolateRight: 'clamp' }
            );
            const lineOpacity = interpolate(
              frame,
              [70 + i * 10, 90 + i * 10, 160, 180],
              [0, 0.6, 0.6, 0],
              { extrapolateRight: 'clamp' }
            );
            return (
              <div
                key={`line-${i}`}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: `${lineY}px`,
                  transform: 'translateX(-50%)',
                  width: '3px',
                  height: '250px',
                  background: `linear-gradient(180deg, rgba(138, 43, 226, ${lineOpacity}) 0%, transparent 100%)`,
                  opacity: lineOpacity,
                }}
              />
            );
          })}
        </>
      )}

      {frame >= 180 && (
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
              width: '1200px',
              height: '1200px',
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(138, 43, 226, ${warningPulse * 0.3}) 0%, transparent 70%)`,
              filter: `blur(${warningPulse * 100}px)`,
            }}
          />
          <div
            style={{
              textAlign: 'center',
              padding: '0 60px',
              opacity: overlayTextOpacity,
              transform: `translateY(${overlayTextY}px) scale(${overlayTextScale})`,
            }}
          >
            <div
              style={{
                display: 'inline-block',
                padding: '40px 60px',
                background: 'rgba(0, 0, 0, 0.9)',
                border: '5px solid #8a2be2',
                borderRadius: '40px',
                boxShadow: `0 0 70px rgba(138, 43, 226, ${warningPulse}), inset 0 0 40px rgba(138, 43, 226, 0.3)`,
              }}
            >
              <h1
                style={{
                  fontSize: '72px',
                  fontWeight: '900',
                  color: '#ffffff',
                  margin: 0,
                  lineHeight: '1.1',
                  textShadow: `0 0 50px rgba(138, 43, 226, ${warningPulse}), 0 0 30px rgba(138, 43, 226, 0.8)`,
                  letterSpacing: '-1px',
                  textTransform: 'uppercase',
                }}
              >
                EVERY KEY YOU TYPE
              </h1>
              <h1
                style={{
                  fontSize: '72px',
                  fontWeight: '900',
                  color: '#8a2be2',
                  margin: '20px 0 0 0',
                  lineHeight: '1.1',
                  textShadow: `0 0 60px rgba(138, 43, 226, ${warningPulse}), 0 0 40px rgba(138, 43, 226, 1)`,
                  letterSpacing: '-1px',
                  textTransform: 'uppercase',
                }}
              >
                IS RECORDED
              </h1>
            </div>
          </div>
        </AbsoluteFill>
      )}

      {frame >= 220 && (
        <div
          style={{
            position: 'absolute',
            bottom: '200px',
            left: '50%',
            transform: 'translateX(-50%)',
            opacity: typingTextOpacity,
            textAlign: 'center',
            zIndex: 11,
          }}
        >
          <div
            style={{
              fontSize: '40px',
              fontWeight: '800',
              color: '#c084fc',
              fontFamily: 'monospace',
              textShadow: '0 0 25px rgba(192, 132, 252, 0.8)',
            }}
          >
            {'> Password1234'}
          </div>
        </div>
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
