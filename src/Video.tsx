import React from 'react';
import { AbsoluteFill, Composition, interpolate, useCurrentFrame, Easing } from 'remotion';

const Background: React.FC = () => {
const frame = useCurrentFrame();
const opacity = interpolate(frame % 60, [0, 30, 60], [0.05, 0.1, 0.05]);

return (
    <AbsoluteFill style={{ backgroundColor: '#020617', overflow: 'hidden' }}>
        <div style={{
            position: 'absolute',
            width: '200%',
            height: '200%',
            backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
            transform: `translate(-25%, -25%) translateY(${frame * 0.5}px)`,
            opacity: 0.2
        }} />
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, transparent, #38bdf8, transparent)',
            transform: `translateY(${(frame * 10) % 1920}px)`,
            opacity: 0.4
        }} />
        <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle, transparent 20%, #020617 80%)'
        }} />
    </AbsoluteFill>
);



};

const Scene: React.FC<{
children: React.ReactNode;
start: number;
end: number;
}> = ({ children, start, end }) => {
const frame = useCurrentFrame();


if (frame < start || frame >= end) return null;

const enterProgress = interpolate(frame, [start, start + 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
});

const exitProgress = interpolate(frame, [end - 15, end], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
});

const combinedOpacity = enterProgress * exitProgress;
const scale = interpolate(frame, [start, end], [0.95, 1.05]);
const translateY = interpolate(frame, [start, end], [20, -20]);

return (
    <AbsoluteFill style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: combinedOpacity,
        transform: `scale(${scale}) translateY(${translateY}px)`,
        padding: '0 80px',
        textAlign: 'center'
    }}>
        {children}
    </AbsoluteFill>
);



};

const Typography: React.FC<{
title: string;
subtitle?: string;
accent?: string
}> = ({ title, subtitle, accent }) => {
return (
<div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
{accent && (
<div style={{
color: '#38bdf8',
fontSize: '32px',
fontWeight: '800',
letterSpacing: '0.2em',
marginBottom: '20px',
textTransform: 'uppercase'
}}>
{accent}
</div>
)}
<h1 style={{
color: 'white',
fontSize: '90px',
fontWeight: '900',
lineHeight: '1.1',
margin: 0,
textTransform: 'uppercase',
letterSpacing: '-0.02em',
textShadow: '0 0 40px rgba(56, 189, 248, 0.3)'
}}>
{title}
</h1>
{subtitle && (
<p style={{
color: '#94a3b8',
fontSize: '42px',
fontWeight: '500',
marginTop: '30px',
lineHeight: '1.4'
}}>
{subtitle}
</p>
)}
</div>
);
};

const Main: React.FC = () => {
return (
<AbsoluteFill>
<Background />


        <Scene start={0} end={90}>
            <Typography 
                accent="Security Alert" 
                title="YOUR PASSWORD IS NOT SAFE" 
            />
        </Scene>

        <Scene start={90} end={210}>
            <Typography 
                accent="Method 01" 
                title="PHISHING ATTACKS" 
                subtitle="Fake login pages that look identical to the real ones."
            />
        </Scene>

        <Scene start={210} end={360}>
            <Typography 
                accent="Method 02" 
                title="BRUTE FORCE" 
                subtitle="Software testing millions of combinations in seconds."
            />
        </Scene>

        <Scene start={360} end={540}>
            <Typography 
                accent="Method 03" 
                title="KEYLOGGERS" 
                subtitle="Invisible malware recording every single keystroke."
            />
        </Scene>

        <Scene start={540} end={750}>
            <Typography 
                accent="The Reality" 
                title="DATA BREACHES" 
                subtitle="Your credentials are sold on the dark web daily."
            />
        </Scene>

        <Scene start={750} end={900}>
            <Typography 
                accent="Stay Protected" 
                title="ENABLE MFA NOW" 
                subtitle="Add a second layer of defense before it is too late."
            />
        </Scene>
    </AbsoluteFill>
);



};

export const Video: React.FC = () => {
return (
<Composition
id="Video"
component={Main}
durationInFrames={900}
fps={30}
width={1080}
height={1920}
/>
);
};
