import React from 'react';
import {
AbsoluteFill,
Composition,
interpolate,
spring,
useCurrentFrame,
useVideoConfig,
Easing,
Sequence,
} from 'remotion';

const FPS = 60;
const DURATION = 4 * FPS;

const TerminalScene: React.FC = () => {
const frame = useCurrentFrame();
const { width, height, fps } = useVideoConfig();

	
// Timing logic
const glitchStartFrame = 2.2 * fps;
const isGlitched = frame >= glitchStartFrame;

// Motion values
const entry = spring({
	frame,
	fps,
	config: { damping: 12, stiffness: 100 },
});

const skullRotateY = interpolate(frame, [0, DURATION], [0, 360]);
const cameraZoom = interpolate(
	frame,
	[DURATION - 40, DURATION],
	[1, 12],
	{ easing: Easing.bezier(0.7, 0, 0.84, 0), extrapolateRight: 'clamp' }
);

const boxShake = isGlitched ? (Math.random() - 0.5) * 30 : 0;
const opacityFlicker = interpolate(
	Math.sin(frame * 0.8),
	[-1, 1],
	[0.8, 1]
);

const ASCII_SKULL = [
	"      XXXXXXXX      ",
	"    XXXXXXXXXXXX    ",
	"   XXXX  XX  XXXX   ",
	"   XXXX  XX  XXXX   ",
	"    XXXXXXXXXXXX    ",
	"      XXXXXXXX      ",
	"     XXXXXXXXXX     ",
	"     X  X  X  X     "
];

return (
	<AbsoluteFill style={{ 
		backgroundColor: '#020617', 
		perspective: '1200px',
		overflow: 'hidden'
	}}>
		<AbsoluteFill style={{ transform: `scale(${cameraZoom})` }}>
			
			{/* Background Matrix-style ASCII Grid */}
			<AbsoluteFill style={{ opacity: 0.15 }}>
				{Array.from({ length: 12 }).map((_, i) => (
					<div key={i} style={{ 
						display: 'flex', 
						justifyContent: 'space-around',
						color: isGlitched ? '#ef4444' : '#22c55e',
						fontSize: '14px',
						fontFamily: 'monospace'
					}}>
						{Array.from({ length: 6 }).map((_, j) => (
							<div key={j} style={{ 
								transform: `rotateY(${skullRotateY}deg)`,
								whiteSpace: 'pre',
								lineHeight: '1.1'
							}}>
								{ASCII_SKULL.join('\n')}
							</div>
						))}
					</div>
				))}
			</AbsoluteFill>

			{/* Main UI Container */}
			<AbsoluteFill style={{ 
				justifyContent: 'center', 
				alignItems: 'center',
				transform: `scale(${entry}) translateY(${boxShake}px)`
			}}>
				{/* Status Card */}
				<div style={{
					width: 900,
					height: 500,
					border: `6px solid ${isGlitched ? '#ef4444' : '#22c55e'}`,
					backgroundColor: 'rgba(0, 0, 0, 0.9)',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					position: 'relative',
					boxShadow: `0 0 80px ${isGlitched ? 'rgba(239, 68, 68, 0.5)' : 'rgba(34, 197, 94, 0.4)'}`,
					opacity: opacityFlicker
				}}>
					{/* Top Scanline effect */}
					<div style={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						height: '100%',
						background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.2) 50%)',
						backgroundSize: '100% 4px',
						pointerEvents: 'none'
					}} />

					<h1 style={{
						fontFamily: 'monospace',
						fontSize: '84px',
						fontWeight: 'bold',
						color: isGlitched ? '#ef4444' : '#22c55e',
						margin: 0,
						letterSpacing: '-2px',
						textTransform: 'uppercase',
						textAlign: 'center',
						padding: '0 40px'
					}}>
						{isGlitched ? 'SYSTEM COMPROMISED' : 'ACCESS GRANTED'}
					</h1>

					<div style={{
						width: '70%',
						height: '4px',
						backgroundColor: isGlitched ? '#ef4444' : '#22c55e',
						margin: '40px 0',
						opacity: 0.6
					}} />

					<p style={{
						fontFamily: 'monospace',
						fontSize: '42px',
						color: '#fff',
						margin: 0,
						letterSpacing: '12px',
						opacity: 0.9
					}}>
						{isGlitched ? 'ENCRYPTION FAILED' : 'TO THEM.'}
					</p>

					{/* Glitch Bars */}
					{isGlitched && Array.from({ length: 4 }).map((_, i) => (
						<div key={i} style={{
							position: 'absolute',
							width: '110%',
							height: '20px',
							backgroundColor: '#ef4444',
							top: `${Math.random() * 100}%`,
							left: '-5%',
							opacity: Math.random() > 0.5 ? 0.8 : 0,
							mixBlendMode: 'overlay'
						}} />
					))}
				</div>
			</AbsoluteFill>
		</AbsoluteFill>

		{/* Post-processing Vignette */}
		<AbsoluteFill style={{
			boxShadow: 'inset 0 0 500px rgba(0,0,0,1)',
			pointerEvents: 'none'
		}} />
	</AbsoluteFill>
);



};

export const Video: React.FC = () => {
return (
<Composition
id="Video"
component={TerminalScene}
durationInFrames={DURATION}
fps={FPS}
width={1080}
height={1920}
/>
);
};
