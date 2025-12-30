import React from 'react';
import {
AbsoluteFill,
Composition,
interpolate,
useCurrentFrame,
useVideoConfig,
Easing,
} from 'remotion';

const CyberScene: React.FC = () => {
const frame = useCurrentFrame();
const { width, height, fps } = useVideoConfig();

```
const opacity = interpolate(frame, [0, 15, 135, 150], [0, 1, 1, 0]);
const scale = interpolate(frame, [0, 150], [1, 1.1], {
	extrapolateRight: 'clamp',
});

const scanlinePos = interpolate(frame % 40, [0, 40], [0, height]);

const text1Opacity = interpolate(frame, [10, 25, 65, 75], [0, 1, 1, 0]);
const text1Y = interpolate(frame, [10, 25], [20, 0], {
	extrapolateRight: 'clamp',
});

const text2Opacity = interpolate(frame, [75, 90, 135, 145], [0, 1, 1, 0]);
const text2Y = interpolate(frame, [75, 90], [20, 0], {
	extrapolateRight: 'clamp',
});

const glowIntensity = interpolate(
	Math.sin(frame / 10),
	[-1, 1],
	[10, 25]
);

return (
	<AbsoluteFill
		style={{
			backgroundColor: '#020617',
			fontFamily: 'system-ui, -apple-system, sans-serif',
			color: 'white',
			overflow: 'hidden',
		}}
	>
		{/* Background Grid */}
		<AbsoluteFill
			style={{
				backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
				backgroundSize: '80px 80px',
				opacity: 0.2,
				transform: `scale(${scale})`,
			}}
		/>

		{/* Scanline Effect */}
		<div
			style={{
				position: 'absolute',
				top: scanlinePos,
				width: '100%',
				height: '2px',
				background: 'rgba(34, 197, 94, 0.3)',
				boxShadow: '0 0 15px #22c55e',
			}}
		/>

		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				padding: '0 80px',
				textAlign: 'center',
				opacity,
			}}
		>
			{/* Scene 1: The Hook */}
			<div
				style={{
					position: 'absolute',
					opacity: text1Opacity,
					transform: `translateY(${text1Y}px)`,
				}}
			>
				<h1
					style={{
						fontSize: '90px',
						fontWeight: 900,
						lineHeight: 1.1,
						letterSpacing: '-0.05em',
						textTransform: 'uppercase',
						textShadow: `0 0 ${glowIntensity}px rgba(255, 255, 255, 0.5)`,
					}}
				>
					YOUR PASSWORDS <br />
					<span style={{ color: '#ef4444' }}>ARE NOT SAFE</span>
				</h1>
			</div>

			{/* Scene 2: The Method */}
			<div
				style={{
					position: 'absolute',
					opacity: text2Opacity,
					transform: `translateY(${text2Y}px)`,
				}}
			>
				<p
					style={{
						fontSize: '48px',
						fontWeight: 500,
						color: '#94a3b8',
						marginBottom: '20px',
						textTransform: 'uppercase',
						letterSpacing: '0.2em',
					}}
				>
					THE HACKER METHOD
				</p>
				<h2
					style={{
						fontSize: '80px',
						fontWeight: 800,
						lineHeight: 1.2,
					}}
				>
					BRUTE FORCE <br />
					& PHISHING <br />
					<span style={{ color: '#22c55e', fontFamily: 'monospace' }}>
						EXPOSED_
					</span>
				</h2>
			</div>
		</AbsoluteFill>

		{/* Vignette */}
		<AbsoluteFill
			style={{
				boxShadow: 'inset 0 0 300px rgba(0,0,0,0.8)',
				pointerEvents: 'none',
			}}
		/>
	</AbsoluteFill>
);

```

};

export const Video: React.FC = () => {
return (
<>
<Composition
id="Video"
component={CyberScene}
durationInFrames={150}
fps={30}
width={1080}
height={1920}
/>
</>
);
};
