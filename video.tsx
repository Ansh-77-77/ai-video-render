import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
	Video,
	spring,
	Audio,
} from 'remotion';

// --- Types ---
interface SceneProps {
	startFrame: number;
	durationInFrames: number;
}

// --- Global Styles & Effects ---
const THEME = {
	teal: '#00d2ff',
	orange: '#ff9a00',
	gold: '#ffd700',
	fontLuxury: 'serif',
};

const Vignette: React.FC = () => (
	<AbsoluteFill
		style={{
			background: 'radial-gradient(circle, transparent 40%, rgba(0,0,0,0.8) 100%)',
			pointerEvents: 'none',
		}}
	/>
);

const Grain: React.FC = () => (
	<AbsoluteFill
		style={{
			opacity: 0.05,
			pointerEvents: 'none',
			backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
		}}
	/>
);

const ColorGrade: React.FC = () => (
	<AbsoluteFill
		style={{
			pointerEvents: 'none',
			background: 'linear-gradient(45deg, rgba(0, 210, 255, 0.1), rgba(255, 154, 0, 0.1))',
			mixBlendMode: 'overlay',
		}}
	/>
);

// --- Scene Components ---

const Scene1: React.FC<SceneProps> = () => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	const opacity = interpolate(frame, [0, 10, 80, 90], [0, 1, 1, 0]);
	const flicker = Math.random() > 0.9 ? 0.5 : 1;
	const zoom = interpolate(frame, [0, 90], [1, 1.15]);

	return (
		<AbsoluteFill style={{ opacity: opacity * flicker, backgroundColor: 'black' }}>
			<Video
				src="https://videos.pexels.com/video-files/35186847/14907406_1920_1080_60fps.mp4"
				style={{ width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${zoom})` }}
				muted
			/>
			<AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
				<h1
					style={{
						color: 'white',
						fontFamily: THEME.fontLuxury,
						fontSize: 100,
						fontWeight: 200,
						letterSpacing: 20,
						textShadow: '0 0 20px rgba(255,255,255,0.6)',
						opacity: interpolate(frame, [15, 45], [0, 1]),
					}}
				>
					LEGACY
				</h1>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};

const Scene2: React.FC<SceneProps> = () => {
	const frame = useCurrentFrame();
	const spacing = interpolate(frame, [0, 120], [5, 40]);
	const shake = Math.sin(frame * 0.5) * 2;

	return (
		<AbsoluteFill style={{ transform: `translateX(${shake}px)` }}>
			<Video
				src="https://videos.pexels.com/video-files/7187051/7187051-hd_1920_1080_24fps.mp4"
				style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.2) saturate(1.2)' }}
				muted
			/>
			<AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
				<h2
					style={{
						color: 'transparent',
						WebkitTextStroke: '2px #fff',
						fontSize: 80,
						letterSpacing: spacing,
						filter: 'drop-shadow(0 0 10px #00d2ff)',
						textTransform: 'uppercase',
					}}
				>
					HARD WORK
				</h2>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};

const Scene3: React.FC<SceneProps> = () => {
	const frame = useCurrentFrame();
	const { durationInFrames } = useVideoConfig();

	// Speed ramp simulation via interpolation of video playback would be complex, 
	// here we simulate intensity via glow and scale
	const glowPulse = interpolate(Math.sin(frame * 0.2), [-1, 1], [10, 40]);
	const scale = interpolate(frame, [0, 75, 150], [1, 1.1, 1.4]);

	return (
		<AbsoluteFill>
			<Video
				src="https://videos.pexels.com/video-files/5423492/5423492-hd_1920_1080_30fps.mp4"
				style={{ width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${scale})` }}
				muted
			/>
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					boxShadow: `inset 0 0 ${glowPulse}px rgba(255,154,0,0.5)`,
				}}
			/>
			<AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
				<h1
					style={{
						color: 'white',
						fontSize: 120,
						fontWeight: 'bold',
						filter: `drop-shadow(0 0 ${glowPulse}px #fff)`,
					}}
				>
					DISCIPLINE
				</h1>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};

const Scene4: React.FC<SceneProps> = () => {
	const frame = useCurrentFrame();
	const flash = interpolate(frame, [0, 5], [1, 0]);
	
	const isFreeze = frame >= 30 && frame <= 39; // 0.3s freeze at 1s in
	const videoFrame = isFreeze ? 30 : frame;

	return (
		<AbsoluteFill>
			<Video
				src="https://videos.pexels.com/video-files/31510089/13433230_1080_1920_60fps.mp4"
				style={{ width: '100%', height: '100%', objectFit: 'cover' }}
				muted
			/>
			{/* White Flash Transition */}
			<AbsoluteFill style={{ backgroundColor: 'white', opacity: flash, pointerEvents: 'none' }} />
			
			<AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', bottom: 200 }}>
				<div style={{ textAlign: 'center' }}>
					<h1 style={{ 
						fontSize: 250, 
						color: THEME.gold, 
						margin: 0,
						filter: 'drop-shadow(0 0 30px rgba(255,215,0,0.8))',
						transform: 'perspective(500px) rotateX(10deg)'
					}}>CR7</h1>
					<h3 style={{ 
						fontSize: 60, 
						color: 'white', 
						letterSpacing: 10,
						marginTop: -40,
						opacity: interpolate(frame, [20, 40], [0, 1])
					}}>MENTALITY</h3>
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};

const Scene5: React.FC<SceneProps> = () => {
	const frame = useCurrentFrame();
	const zoomOut = interpolate(frame, [0, 120], [1.2, 1]);
	const blur = interpolate(frame, [0, 20], [10, 0]);

	return (
		<AbsoluteFill>
			<Video
				src="https://videos.pexels.com/video-files/15187502/15187502-hd_1920_1080_30fps.mp4"
				style={{ 
					width: '100%', 
					height: '100%', 
					objectFit: 'cover', 
					transform: `scale(${zoomOut})`,
					filter: `blur(${blur}px)` 
				}}
				muted
			/>
			<AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
				<h1 style={{ 
					fontSize: 90, 
					color: THEME.gold, 
					textShadow: '0 0 40px gold',
					fontFamily: THEME.fontLuxury
				}}>THE GOAT</h1>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};

const Scene6: React.FC<SceneProps> = () => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	
	const entrance = spring({ frame, fps, config: { damping: 12 } });
	const fadeOut = interpolate(frame, [60, 90], [1, 0]);

	return (
		<AbsoluteFill style={{ backgroundColor: 'black', opacity: fadeOut }}>
			<Video
				src="https://cdn.pixabay.com/video/2016/01/06/1860-150999621_medium.mp4"
				style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }}
				muted
			/>
			<AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
				<div style={{ overflow: 'hidden', position: 'relative' }}>
					<h2 style={{ 
						color: 'white', 
						fontSize: 50, 
						transform: `translateY(${(1 - entrance) * 50}px)`,
						opacity: entrance
					}}>
						⚡ EDIT BY FragzzZone
					</h2>
					{/* Shine Sweep Overlay */}
					<div style={{
						position: 'absolute',
						top: 0,
						left: '-100%',
						width: '50%',
						height: '100%',
						background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
						transform: `skewX(-20deg) translateX(${interpolate(frame, [20, 50], [0, 600])}%)`,
					}} />
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};

// --- Main Composition ---

export const FootballReel: React.FC<{ audioUrl?: string }> = ({ audioUrl }) => {
	const { fps } = useVideoConfig();

	return (
		<AbsoluteFill style={{ backgroundColor: 'black', fontFamily: 'sans-serif' }}>
			{audioUrl && (
				<>
					<Audio src={audioUrl} startFrom={0} endAt={750} />
					{/* Audio behavior handled via volume interpolation if needed */}
				</>
			)}

			<Sequence from={0} durationInFrames={90}>
				<Scene1 startFrame={0} durationInFrames={90} />
			</Sequence>

			<Sequence from={90} durationInFrames={120}>
				<Scene2 startFrame={90} durationInFrames={120} />
			</Sequence>

			<Sequence from={210} durationInFrames={150}>
				<Scene3 startFrame={210} durationInFrames={150} />
			</Sequence>

			<Sequence from={360} durationInFrames={180}>
				<Scene4 startFrame={360} durationInFrames={180} />
			</Sequence>

			<Sequence from={540} durationInFrames={120}>
				<Scene5 startFrame={540} durationInFrames={120} />
			</Sequence>

			<Sequence from={660} durationInFrames={90}>
				<Scene6 startFrame={660} durationInFrames={90} />
			</Sequence>

			{/* Global Overlays */}
			<Vignette />
			<Grain />
			<ColorGrade />
		</AbsoluteFill>
	);
};

// Register via:
// <Composition 
//   id="FootballReel" 
//   component={FootballReel} 
//   durationInFrames={750} 
//   fps={30} 
//   width={1080} 
//   height={1920} 
// />
