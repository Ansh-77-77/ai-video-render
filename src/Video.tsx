import { AbsoluteFill, Composition, useCurrentFrame, interpolate } from 'remotion';

const MainVideo: React.FC = () => {
  const frame = useCurrentFrame();

  const coffeeShopOpacity = interpolate(frame, [0, 25], [0, 1], { extrapolateRight: 'clamp' });
  const coffeeShopScale = interpolate(frame, [0, 30], [1.2, 1], { extrapolateRight: 'clamp' });

  const wifiIconOpacity = interpolate(frame, [30, 50], [0, 1], { extrapolateRight: 'clamp' });
  const wifiIconY = interpolate(frame, [30, 50], [-100, 0], { extrapolateRight: 'clamp' });
  const wifiIconScale = interpolate(frame, [30, 50], [0.5, 1], { extrapolateRight: 'clamp' });

  const wifiPulse1 = Math.sin(frame * 0.15) * 0.5 + 0.5;
  const wifiPulse2 = Math.sin((frame + 10) * 0.15) * 0.5 + 0.5;
  const wifiPulse3 = Math.sin((frame + 20) * 0.15) * 0.5 + 0.5;

  const wifiWaveScale1 = interpolate(frame, [50, 150], [1, 2.5], { extrapolateRight: 'clamp' }) * (1 + Math.sin(frame * 0.1) * 0.1);
  const wifiWaveScale2 = interpolate(frame, [60, 160], [1, 2.5], { extrapolateRight: 'clamp' }) * (1 + Math.sin((frame + 15) * 0.1) * 0.1);
  const wifiWaveScale3 = interpolate(frame, [70, 170], [1, 2.5], { extrapolateRight: 'clamp' }) * (1 + Math.sin((frame + 30) * 0.1) * 0.1);

  const wifiWaveOpacity1 = interpolate(frame, [50, 80, 150, 180], [0, 0.8, 0.8, 0], { extrapolateRight: 'clamp' });
  const wifiWaveOpacity2 = interpolate(frame, [60, 90, 160, 190], [0, 0.7, 0.7, 0], { extrapolateRight: 'clamp' });
  const wifiWaveOpacity3 = interpolate(frame, [70, 100, 170, 200], [0, 0.6, 0.6, 0], { extrapolateRight: 'clamp' });

  const dataPackets = [
    { id: 1, startFrame: 80, startX: 300, startY: 600, endX: 750, endY: 300, color: '#3b82f6' },
    { id: 2, startFrame: 95, startX: 400, startY: 650, endX: 750, endY: 300, color: '#06b6d4' },
    { id: 3, startFrame: 110, startX: 500, startY: 620, endX: 750, endY: 300, color: '#8b5cf6' },
    { id: 4, startFrame: 125, startX: 350, startY: 680, endX: 750, endY: 300, color: '#ec4899' },
    { id: 5, startFrame: 140, startX: 450, startY: 640, endX: 750, endY: 300, color: '#f59e0b' },
  ];

  const interceptPackets = [
    { id: 1, startFrame: 95, startX: 400, startY: 650, endX: 200, endY: 1400 },
    { id: 2, startFrame: 125, startX: 350, startY: 680, endX: 150, endY: 1450 },
    { id: 3, startFrame: 155, startX: 480, startY: 630, endX: 250, endY: 1420 },
  ];

  const hackerOpacity = interpolate(frame, [100, 130], [0, 0.95], { extrapolateRight: 'clamp' });
  const hackerScale = interpolate(frame, [100, 140], [1.3, 1], { extrapolateRight: 'clamp' });
  const hackerGlow = Math.sin(frame * 0.18) * 0.4 + 0.6;

  const warningTextOpacity = interpolate(frame, [180, 210], [0, 1], { extrapolateRight: 'clamp' });
  const warningTextScale = interpolate(frame, [180, 210, 230, 250], [0.7, 1.15, 1, 1.08], { extrapolateRight: 'clamp' });
  const warningTextY = interpolate(frame, [180, 210], [150, 0], { extrapolateRight: 'clamp' });

  const dangerPulse = Math.sin(frame * 0.25) * 0.35 + 0.65;

  const backgroundShift = interpolate(frame, [0, 300], [0, 100], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(${backgroundShift}deg, #0a0a1a 0%, #1a0f0a 50%, #0a0a1a 100%)`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse at center, rgba(251, 146, 60, 0.12) 0%, transparent 65%)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: '600px',
          left: '50%',
          transform: `translateX(-50%) scale(${coffeeShopScale})`,
          opacity: coffeeShopOpacity,
          zIndex: 2,
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '700px',
            height: '500px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '600px',
              height: '350px',
              background: 'linear-gradient(180deg, rgba(101, 67, 33, 0.9) 0%, rgba(80, 52, 25, 0.85) 100%)',
              borderRadius: '20px 20px 0 0',
              border: '4px solid rgba(139, 92, 46, 0.6)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '30px',
                left: '40px',
                width: '200px',
                height: '120px',
                background: 'rgba(30, 30, 40, 0.7)',
                borderRadius: '10px',
                border: '3px solid rgba(200, 200, 220, 0.3)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '30px',
                right: '40px',
                width: '200px',
                height: '120px',
                background: 'rgba(30, 30, 40, 0.7)',
                borderRadius: '10px',
                border: '3px solid rgba(200, 200, 220, 0.3)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '180px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '450px',
                height: '15px',
                background: 'rgba(139, 92, 46, 0.5)',
                borderRadius: '8px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '50px',
                left: '80px',
                fontSize: '80px',
              }}
            >
              ☕
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '50px',
                right: '80px',
                fontSize: '80px',
              }}
            >
              💻
            </div>
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '350px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '48px',
              fontWeight: '900',
              color: '#fb923c',
              textShadow: '0 0 20px rgba(251, 146, 60, 0.8)',
              letterSpacing: '2px',
            }}
          >
            FREE WIFI ZONE
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          top: '550px',
          left: '50%',
          transform: `translateX(-50%) translateY(${wifiIconY}px) scale(${wifiIconScale})`,
          opacity: wifiIconOpacity,
          zIndex: 3,
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '200px',
            height: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: '120px',
              color: '#3b82f6',
              textShadow: `0 0 40px rgba(59, 130, 246, ${wifiPulse1})`,
              filter: `brightness(${wifiPulse1 + 0.5})`,
            }}
          >
            📶
          </div>
        </div>
      </div>

      {frame >= 50 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: '650px',
              left: '50%',
              transform: `translateX(-50%) scale(${wifiWaveScale1})`,
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              border: '4px solid #3b82f6',
              opacity: wifiWaveOpacity1,
              boxShadow: `0 0 30px rgba(59, 130, 246, ${wifiPulse1})`,
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '650px',
              left: '50%',
              transform: `translateX(-50%) scale(${wifiWaveScale2})`,
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              border: '3px solid #06b6d4',
              opacity: wifiWaveOpacity2,
              boxShadow: `0 0 25px rgba(6, 182, 212, ${wifiPulse2})`,
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '650px',
              left: '50%',
              transform: `translateX(-50%) scale(${wifiWaveScale3})`,
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              border: '3px solid #8b5cf6',
              opacity: wifiWaveOpacity3,
              boxShadow: `0 0 20px rgba(139, 92, 246, ${wifiPulse3})`,
              zIndex: 1,
            }}
          />
        </>
      )}

      {dataPackets.map((packet) => {
        const packetProgress = interpolate(
          frame,
          [packet.startFrame, packet.startFrame + 60],
          [0, 1],
          { extrapolateRight: 'clamp' }
        );
        const packetX = interpolate(
          frame,
          [packet.startFrame, packet.startFrame + 60],
          [packet.startX, packet.endX],
          { extrapolateRight: 'clamp' }
        );
        const packetY = interpolate(
          frame,
          [packet.startFrame, packet.startFrame + 60],
          [packet.startY, packet.endY],
          { extrapolateRight: 'clamp' }
        );
        const packetOpacity = interpolate(
          frame,
          [packet.startFrame, packet.startFrame + 10, packet.startFrame + 50, packet.startFrame + 60],
          [0, 1, 1, 0],
          { extrapolateRight: 'clamp' }
        );

        return (
          <div
            key={`data-${packet.id}`}
            style={{
              position: 'absolute',
              left: `${packetX}px`,
              top: `${packetY}px`,
              opacity: packetOpacity,
              zIndex: 4,
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                background: `rgba(${packet.color === '#3b82f6' ? '59, 130, 246' : packet.color === '#06b6d4' ? '6, 182, 212' : packet.color === '#8b5cf6' ? '139, 92, 246' : packet.color === '#ec4899' ? '236, 72, 153' : '245, 158, 11'}, 0.3)`,
                border: `3px solid ${packet.color}`,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 0 25px ${packet.color}`,
                fontSize: '36px',
              }}
            >
              📦
            </div>
          </div>
        );
      })}

      {frame >= 100 && (
        <div
          style={{
            position: 'absolute',
            bottom: '250px',
            left: '150px',
            opacity: hackerOpacity,
            transform: `scale(${hackerScale})`,
            zIndex: 5,
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '350px',
              height: '500px',
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
                borderLeft: '100px solid transparent',
                borderRight: '100px solid transparent',
                borderBottom: `200px solid rgba(220, 38, 38, ${hackerGlow * 0.9})`,
                filter: `drop-shadow(0 0 30px rgba(220, 38, 38, ${hackerGlow}))`,
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '200px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '150px',
                height: '180px',
                background: `linear-gradient(180deg, rgba(220, 38, 38, ${hackerGlow * 0.95}) 0%, rgba(185, 28, 28, ${hackerGlow * 0.85}) 100%)`,
                borderRadius: '80px 80px 0 0',
                filter: `drop-shadow(0 0 25px rgba(220, 38, 38, ${hackerGlow}))`,
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '320px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '130px',
                height: '130px',
                borderRadius: '50%',
                background: `radial-gradient(circle, rgba(220, 38, 38, ${hackerGlow}) 0%, rgba(185, 28, 28, ${hackerGlow * 0.9}) 100%)`,
                filter: `drop-shadow(0 0 30px rgba(220, 38, 38, ${hackerGlow}))`,
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '360px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '60px',
                filter: `drop-shadow(0 0 20px rgba(220, 38, 38, ${hackerGlow}))`,
              }}
            >
              🕵️
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '200px',
                left: '30px',
                width: '50px',
                height: '150px',
                background: `linear-gradient(90deg, rgba(220, 38, 38, ${hackerGlow * 0.9}) 0%, rgba(185, 28, 28, ${hackerGlow * 0.7}) 100%)`,
                borderRadius: '25px',
                transform: 'rotate(25deg)',
                filter: `drop-shadow(0 0 15px rgba(220, 38, 38, ${hackerGlow * 0.7}))`,
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '200px',
                right: '30px',
                width: '50px',
                height: '150px',
                background: `linear-gradient(270deg, rgba(220, 38, 38, ${hackerGlow * 0.9}) 0%, rgba(185, 28, 28, ${hackerGlow * 0.7}) 100%)`,
                borderRadius: '25px',
                transform: 'rotate(-25deg)',
                filter: `drop-shadow(0 0 15px rgba(220, 38, 38, ${hackerGlow * 0.7}))`,
              }}
            />
          </div>
        </div>
      )}

      {interceptPackets.map((packet) => {
        const interceptProgress = interpolate(
          frame,
          [packet.startFrame, packet.startFrame + 50],
          [0, 1],
          { extrapolateRight: 'clamp' }
        );
        const interceptX = interpolate(
          frame,
          [packet.startFrame, packet.startFrame + 50],
          [packet.startX, packet.endX],
          { extrapolateRight: 'clamp' }
        );
        const interceptY = interpolate(
          frame,
          [packet.startFrame, packet.startFrame + 50],
          [packet.startY, packet.endY],
          { extrapolateRight: 'clamp' }
        );
        const interceptOpacity = interpolate(
          frame,
          [packet.startFrame, packet.startFrame + 10, packet.startFrame + 40, packet.startFrame + 50],
          [0, 1, 1, 0],
          { extrapolateRight: 'clamp' }
        );

        return (
          <div
            key={`intercept-${packet.id}`}
            style={{
              position: 'absolute',
              left: `${interceptX}px`,
              top: `${interceptY}px`,
              opacity: interceptOpacity,
              zIndex: 6,
            }}
          >
            <div
              style={{
                width: '90px',
                height: '90px',
                background: 'rgba(220, 38, 38, 0.4)',
                border: '4px solid #dc2626',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 35px rgba(220, 38, 38, 0.9)',
                fontSize: '42px',
              }}
            >
              💀
            </div>
          </div>
        );
      })}

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
              width: '1300px',
              height: '1300px',
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(251, 146, 60, ${dangerPulse * 0.35}) 0%, transparent 70%)`,
              filter: `blur(${dangerPulse * 120}px)`,
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
            <div
              style={{
                display: 'inline-block',
                padding: '50px 70px',
                background: 'rgba(0, 0, 0, 0.92)',
                border: '6px solid #fb923c',
                borderRadius: '45px',
                boxShadow: `0 0 80px rgba(251, 146, 60, ${dangerPulse}), inset 0 0 50px rgba(251, 146, 60, 0.25)`,
              }}
            >
              <h1
                style={{
                  fontSize: '90px',
                  fontWeight: '900',
                  color: '#ffffff',
                  margin: 0,
                  lineHeight: '1',
                  textShadow: `0 0 60px rgba(251, 146, 60, ${dangerPulse}), 0 0 40px rgba(251, 146, 60, 0.9)`,
                  letterSpacing: '-2px',
                  textTransform: 'uppercase',
                }}
              >
                PUBLIC WIFI
              </h1>
              <div
                style={{
                  fontSize: '100px',
                  fontWeight: '900',
                  margin: '25px 0',
                  color: '#fb923c',
                  textShadow: `0 0 70px rgba(251, 146, 60, ${dangerPulse}), 0 0 50px rgba(251, 146, 60, 1)`,
                }}
              >
                =
              </div>
              <h1
                style={{
                  fontSize: '90px',
                  fontWeight: '900',
                  color: '#dc2626',
                  margin: 0,
                  lineHeight: '1',
                  textShadow: `0 0 70px rgba(220, 38, 38, ${dangerPulse}), 0 0 50px rgba(220, 38, 38, 1)`,
                  letterSpacing: '-2px',
                  textTransform: 'uppercase',
                }}
              >
                DANGER
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
