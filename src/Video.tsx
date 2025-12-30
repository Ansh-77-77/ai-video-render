import { AbsoluteFill, Composition, interpolate, useCurrentFrame } from "remotion";

const Scene1 = () => {
  const frame = useCurrentFrame();

  const headlineOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  const headlineScale = interpolate(frame, [0, 30], [0.95, 1], {
    extrapolateRight: "clamp",
  });

  const subtitleOpacity = interpolate(frame, [25, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const subtitleScale = interpolate(frame, [25, 55], [0.95, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0f172a",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 80px",
        }}
      >
        <div
          style={{
            opacity: headlineOpacity,
            transform: `scale(${headlineScale})`,
          }}
        >
          <h1
            style={{
              fontSize: 82,
              fontWeight: 700,
              color: "#ffffff",
              textAlign: "center",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              margin: 0,
              textShadow: "0 0 60px rgba(99, 102, 241, 0.4), 0 0 120px rgba(99, 102, 241, 0.2)",
            }}
          >
            HOW HACKERS
            <br />
            STEAL PASSWORDS
          </h1>
        </div>
        <div
          style={{
            opacity: subtitleOpacity,
            transform: `scale(${subtitleScale})`,
            marginTop: 48,
          }}
        >
          <p
            style={{
              fontSize: 38,
              fontWeight: 400,
              color: "rgba(255, 255, 255, 0.6)",
              textAlign: "center",
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            Most people never notice this
          </p>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(ellipse at 50% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};

export const RemotionRoot = () => {
  return (
    <Composition
      id="Video"
      component={Scene1}
      durationInFrames={150}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
