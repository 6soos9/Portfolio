import React from "react";

interface IllustrationProps {
  type: "car" | "gym-grit" | "movie-rec" | "analytics" | "tech";
  className?: string;
}

export default function Illustration({ type, className = "" }: IllustrationProps) {
  // Common colors
  const blueFill = "#006eff";
  const inkColor = "#000000";

  if (type === "gym-grit") {
    return (
      <svg
        id={`illustration-gym-grit`}
        viewBox="0 0 400 300"
        className={`w-full h-auto select-none ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Canvas */}
        <rect width="400" height="300" fill="#fff8f1" />
        
        {/* Abstract Gym / Grit Geometric Composition */}
        {/* Triangular heavy wedge */}
        <path d="M50 250 L200 100 L350 250 Z" fill={blueFill} fillOpacity="0.15" />
        
        {/* Ground grid lines */}
        <line x1="50" y1="250" x2="350" y2="250" stroke={inkColor} strokeWidth="1.5" />
        <line x1="80" y1="250" x2="60" y2="280" stroke={inkColor} strokeWidth="1" />
        <line x1="140" y1="250" x2="130" y2="280" stroke={inkColor} strokeWidth="1" />
        <line x1="200" y1="250" x2="200" y2="280" stroke={inkColor} strokeWidth="1" />
        <line x1="260" y1="250" x2="270" y2="280" stroke={inkColor} strokeWidth="1" />
        <line x1="320" y1="250" x2="340" y2="280" stroke={inkColor} strokeWidth="1" />

        {/* Big Blue Disk (The Weight/Goal Symbol) */}
        <circle cx="200" cy="140" r="45" fill={blueFill} fillOpacity="0.4" />
        <circle cx="200" cy="140" r="15" fill="#fff8f1" stroke={inkColor} strokeWidth="1.5" />
        
        {/* Dumbbell bar & plates - stylized flat black strokes */}
        <rect x="110" y="137" width="180" height="6" fill={inkColor} />
        {/* Plates left */}
        <rect x="135" y="110" width="12" height="60" fill={inkColor} />
        <rect x="120" y="115" width="12" height="50" fill={blueFill} fillOpacity="0.9" />
        <rect x="105" y="125" width="12" height="30" fill={inkColor} />
        
        {/* Plates right */}
        <rect x="253" y="110" width="12" height="60" fill={inkColor} />
        <rect x="268" y="115" width="12" height="50" fill={blueFill} fillOpacity="0.9" />
        <rect x="283" y="125" width="12" height="30" fill={inkColor} />
        
        {/* Speed lines signifying activity / progress */}
        <path d="M70 100 L120 100" stroke={blueFill} strokeWidth="2" strokeDasharray="4,4" />
        <path d="M280 80 L330 80" stroke={blueFill} strokeWidth="2" strokeDasharray="4,4" />
        
        {/* Vertical alignment guides (architectural blueprints feel) */}
        <line x1="200" y1="40" x2="200" y2="260" stroke={blueFill} strokeWidth="1" strokeDasharray="3,6" strokeOpacity="0.5" />
      </svg>
    );
  }

  if (type === "movie-rec") {
    return (
      <svg
        id={`illustration-movie-rec`}
        viewBox="0 0 400 300"
        className={`w-full h-auto select-none ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="400" height="300" fill="#fff8f1" />
        
        {/* Hard-edged spotlight cone (voltage blue 30% opacity) */}
        <path d="M200 40 L60 260 L340 260 Z" fill={blueFill} fillOpacity="0.2" />
        
        {/* Film strip elements / frames in rich ink black */}
        <g transform="translate(40, 210)">
          <rect x="0" y="0" width="320" height="40" fill={inkColor} />
          {/* Film perforations */}
          <rect x="10" y="5" width="15" height="8" fill="#fff8f1" />
          <rect x="40" y="5" width="15" height="8" fill="#fff8f1" />
          <rect x="70" y="5" width="15" height="8" fill="#fff8f1" />
          <rect x="100" y="5" width="15" height="8" fill="#fff8f1" />
          <rect x="130" y="5" width="15" height="8" fill="#fff8f1" />
          <rect x="160" y="5" width="15" height="8" fill="#fff8f1" />
          <rect x="190" y="5" width="15" height="8" fill="#fff8f1" />
          <rect x="220" y="5" width="15" height="8" fill="#fff8f1" />
          <rect x="250" y="5" width="15" height="8" fill="#fff8f1" />
          <rect x="280" y="5" width="15" height="8" fill="#fff8f1" />
          <rect x="300" y="5" width="10" height="8" fill="#fff8f1" />

          <rect x="10" y="27" width="15" height="8" fill="#fff8f1" />
          <rect x="40" y="27" width="15" height="8" fill="#fff8f1" />
          <rect x="70" y="27" width="15" height="8" fill="#fff8f1" />
          <rect x="100" y="27" width="15" height="8" fill="#fff8f1" />
          <rect x="130" y="27" width="15" height="8" fill="#fff8f1" />
          <rect x="160" y="27" width="15" height="8" fill="#fff8f1" />
          <rect x="190" y="27" width="15" height="8" fill="#fff8f1" />
          <rect x="220" y="27" width="15" height="8" fill="#fff8f1" />
          <rect x="250" y="27" width="15" height="8" fill="#fff8f1" />
          <rect x="280" y="27" width="15" height="8" fill="#fff8f1" />
          <rect x="300" y="27" width="10" height="8" fill="#fff8f1" />
        </g>

        {/* Vintage projector reels - flat composition */}
        {/* Main reel left */}
        <circle cx="160" cy="110" r="45" fill={blueFill} fillOpacity="0.45" />
        <circle cx="160" cy="110" r="45" stroke={inkColor} strokeWidth="1.5" />
        {/* Spokes */}
        <line x1="160" y1="65" x2="160" y2="155" stroke={inkColor} strokeWidth="1.5" />
        <line x1="115" y1="110" x2="205" y2="110" stroke={inkColor} strokeWidth="1.5" />
        <circle cx="160" cy="110" r="10" fill="#fff8f1" stroke={inkColor} strokeWidth="1.5" />

        {/* Main reel right */}
        <circle cx="250" cy="130" r="30" fill={inkColor} />
        <circle cx="250" cy="130" r="30" stroke={blueFill} strokeWidth="1.5" />
        {/* Spokes */}
        <line x1="250" y1="100" x2="250" y2="160" stroke="#fff8f1" strokeWidth="1" />
        <line x1="220" y1="130" x2="280" y2="130" stroke="#fff8f1" strokeWidth="1" />
        <circle cx="250" cy="130" r="8" fill="#fff8f1" stroke={inkColor} strokeWidth="1.5" />

        {/* Sentiment Analysis indicator waves - simplified hard lines */}
        <path d="M290 80 C 310 90, 310 70, 330 80 S 350 70, 370 80" stroke={blueFill} strokeWidth="2.5" fill="none" />
        <path d="M290 95 C 310 105, 310 85, 330 95 S 350 85, 370 95" stroke={inkColor} strokeWidth="1.5" fill="none" />

        {/* Title text frame mockup */}
        <rect x="40" y="50" width="80" height="35" stroke={inkColor} strokeWidth="1.5" />
        <line x1="50" y1="62" x2="110" y2="62" stroke={inkColor} strokeWidth="1" />
        <line x1="50" y1="70" x2="95" y2="70" stroke={inkColor} strokeWidth="1" />
      </svg>
    );
  }

  if (type === "analytics") {
    return (
      <svg
        id={`illustration-analytics`}
        viewBox="0 0 400 300"
        className={`w-full h-auto select-none ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="400" height="300" fill="#fff8f1" />
        
        {/* Grid lines in background */}
        <line x1="50" y1="50" x2="50" y2="240" stroke={inkColor} strokeWidth="1.5" />
        <line x1="50" y1="240" x2="350" y2="240" stroke={inkColor} strokeWidth="1.5" />
        
        {/* Horiz guidlines */}
        <line x1="50" y1="190" x2="350" y2="190" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3,3" />
        <line x1="50" y1="140" x2="350" y2="140" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3,3" />
        <line x1="50" y1="90" x2="350" y2="90" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3,3" />

        {/* Abstract Data Flow Composition (Deloitte analytics) */}
        {/* Bar chart - solid ink outlines & blue opacity fills */}
        <rect x="75" y="160" width="30" height="80" fill={blueFill} fillOpacity="0.4" stroke={inkColor} strokeWidth="1.5" />
        <rect x="135" y="110" width="30" height="130" fill={inkColor} stroke={inkColor} strokeWidth="1.5" />
        <rect x="195" y="130" width="30" height="110" fill={blueFill} fillOpacity="0.15" stroke={inkColor} strokeWidth="1.5" />
        <rect x="255" y="80" width="30" height="160" fill={blueFill} fillOpacity="0.45" stroke={blueFill} strokeWidth="1.5" />
        
        {/* Growth Curve Line overlapping the bars */}
        <path
          d="M60 210 Q 120 170, 180 140 T 300 80 L 330 70"
          stroke={blueFill}
          strokeWidth="3.5"
          fill="none"
        />
        
        {/* Node dots on growth curve */}
        <circle cx="180" cy="140" r="5" fill="#fff8f1" stroke={inkColor} strokeWidth="2" />
        <circle cx="300" cy="80" r="5" fill="#fff8f1" stroke={blueFill} strokeWidth="2.5" />
        
        {/* Magnifying Glass looking at a focal point (Symbolizing Analysis) */}
        <g transform="translate(230, 60)">
          <circle cx="30" cy="30" r="16" stroke={inkColor} strokeWidth="1.5" fill="#fff8f1" fillOpacity="0.8" />
          <line x1="42" y1="42" x2="60" y2="60" stroke={inkColor} strokeWidth="3" strokeLinecap="round" />
          {/* Spark/Insights indicator inside lens */}
          <path d="M26 24 L34 36 M34 24 L26 36" stroke={blueFill} strokeWidth="1.5" />
        </g>
      </svg>
    );
  }

  if (type === "tech") {
    return (
      <svg
        id={`illustration-tech`}
        viewBox="0 0 500 350"
        className={`w-full h-auto select-none ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Canvas */}
        <rect width="500" height="350" fill="#fff8f1" />
        
        {/* Sun disk - large translucent Voltage Blue circle */}
        <circle cx="250" cy="140" r="110" fill={blueFill} fillOpacity="0.25" />
        
        {/* Horizon/Ground Line */}
        <line x1="40" y1="260" x2="460" y2="260" stroke={inkColor} strokeWidth="1.5" />
        
        {/* Connection circuit line background under the ground */}
        <line x1="100" y1="275" x2="400" y2="275" stroke={blueFill} strokeWidth="1.2" strokeDasharray="5,10" strokeOpacity="0.5" />
        <line x1="40" y1="290" x2="460" y2="290" stroke={inkColor} strokeWidth="1" strokeDasharray="15,20" strokeOpacity="0.3" />

        {/* Nodes around */}
        {/* Node 1: Cloud/Database node (Top Left) */}
        <circle cx="80" cy="110" r="22" stroke={inkColor} strokeWidth="1.5" strokeDasharray="4,4" fill="#fff8f1" />
        <g transform="translate(70, 98)">
          <ellipse cx="10" cy="4" rx="7" ry="2.5" fill="none" stroke={blueFill} strokeWidth="1.5" />
          <path d="M3 4 L3 10 A 7 2.5 0 0 0 17 10 L17 4" fill="none" stroke={blueFill} strokeWidth="1.5" />
          <path d="M3 10 L3 16 A 7 2.5 0 0 0 17 16 L17 10" fill="none" stroke={blueFill} strokeWidth="1.5" />
        </g>
        
        {/* Node 2: Git / Code node (Top Right) */}
        <circle cx="420" cy="110" r="22" fill={blueFill} fillOpacity="0.1" stroke={inkColor} strokeWidth="1.5" />
        <g transform="translate(410, 100)">
          <path d="M4 18 L4 10 C4 7, 16 7, 16 4" stroke={inkColor} strokeWidth="1.5" fill="none" />
          <line x1="4" y1="10" x2="4" y2="2" stroke={inkColor} strokeWidth="1.5" />
          <circle cx="4" cy="2" r="2.5" fill={blueFill} />
          <circle cx="16" cy="4" r="2.5" fill={inkColor} />
          <circle cx="4" cy="18" r="2.5" fill={inkColor} />
        </g>

        {/* Node 3: Terminal (Middle Left) */}
        <rect x="52" y="175" width="36" height="26" rx="3" fill={inkColor} stroke={inkColor} strokeWidth="1" />
        <path d="M59 183 L63 186 L59 189" stroke="#fff8f1" strokeWidth="1.2" fill="none" />
        <line x1="66" y1="189" x2="72" y2="189" stroke={blueFill} strokeWidth="1.5" />

        {/* Node 4: Logic / Gear node (Middle Right) */}
        <circle cx="430" cy="185" r="16" fill="none" stroke={blueFill} strokeWidth="1.5" strokeDasharray="6,4" />
        <circle cx="430" cy="185" r="7" fill="none" stroke={inkColor} strokeWidth="1.5" />

        {/* Connecting lines */}
        <line x1="102" y1="110" x2="135" y2="120" stroke={blueFill} strokeWidth="1.5" strokeDasharray="3,3" />
        <line x1="398" y1="110" x2="365" y2="120" stroke={blueFill} strokeWidth="1.5" strokeDasharray="3,3" />
        <line x1="88" y1="188" x2="135" y2="188" stroke={inkColor} strokeWidth="1" strokeDasharray="2,2" />
        <line x1="414" y1="185" x2="365" y2="185" stroke={inkColor} strokeWidth="1" strokeDasharray="2,2" />

        {/* Floating Code Symbols */}
        {/* Bracket left */}
        <path d="M 20 60 C 15 65, 15 75, 10 75 C 15 75, 15 85, 20 90" stroke={inkColor} strokeWidth="1.5" fill="none" />
        {/* Bracket right */}
        <path d="M 480 60 C 485 65, 485 75, 490 75 C 485 75, 485 85, 480 90" stroke={inkColor} strokeWidth="1.5" fill="none" />
        {/* Plus symbols */}
        <path d="M 140 50 L 148 50 M 144 46 L 144 54" stroke={blueFill} strokeWidth="1.5" />
        <path d="M 360 46 L 368 46 M 364 42 L 364 50" stroke={inkColor} strokeWidth="1.5" />

        {/* Laptop Body */}
        {/* Stand / Shadow base */}
        <path d="M 100 260 L 400 260 L 410 265 L 90 265 Z" fill={inkColor} />

        {/* Base Plate */}
        <rect x="90" y="246" width="320" height="14" rx="3" fill={blueFill} fillOpacity="0.8" stroke={inkColor} strokeWidth="1.5" />
        
        {/* Trackpad */}
        <rect x="220" y="249" width="60" height="8" rx="1.5" fill="#fff8f1" stroke={inkColor} strokeWidth="1.2" />
        
        {/* Hinge */}
        <rect x="230" y="242" width="40" height="5" fill={inkColor} />

        {/* Laptop Screen Bezel */}
        <rect x="120" y="70" width="260" height="172" rx="8" fill={inkColor} />
        
        {/* Screen Display Area */}
        <rect x="130" y="80" width="240" height="148" rx="4" fill="#fff8f1" stroke={inkColor} strokeWidth="1.5" />

        {/* Webcam */}
        <circle cx="250" cy="75" r="2.5" fill={blueFill} />

        {/* Inside Screen Content */}
        {/* Left Sidebar (file tree) */}
        <rect x="131" y="81" width="45" height="146" fill={blueFill} fillOpacity="0.08" />
        <line x1="176" y1="81" x2="176" y2="227" stroke={inkColor} strokeWidth="1" strokeOpacity="0.3" />
        
        {/* Sidebar items */}
        <line x1="138" y1="95" x2="168" y2="95" stroke={inkColor} strokeWidth="1" strokeOpacity="0.4" />
        <line x1="144" y1="110" x2="168" y2="110" stroke={inkColor} strokeWidth="1" strokeOpacity="0.4" />
        <line x1="144" y1="125" x2="162" y2="125" stroke={inkColor} strokeWidth="1" strokeOpacity="0.4" />
        <line x1="138" y1="140" x2="165" y2="140" stroke={inkColor} strokeWidth="1" strokeOpacity="0.4" />
        <line x1="144" y1="155" x2="168" y2="155" stroke={inkColor} strokeWidth="1" strokeOpacity="0.4" />
        <line x1="144" y1="170" x2="160" y2="170" stroke={inkColor} strokeWidth="1" strokeOpacity="0.4" />

        {/* Editor Area Code lines */}
        <rect x="188" y="95" width="40" height="8" rx="2" fill={blueFill} fillOpacity="0.9" />
        <rect x="188" y="110" width="110" height="8" rx="2" fill={inkColor} />
        <rect x="204" y="125" width="90" height="8" rx="2" fill={blueFill} fillOpacity="0.4" />
        <rect x="204" y="140" width="130" height="8" rx="2" fill={inkColor} />
        <rect x="204" y="155" width="50" height="8" rx="2" fill={blueFill} fillOpacity="0.9" />
        <rect x="220" y="170" width="80" height="8" rx="2" fill={inkColor} />
        <rect x="220" y="185" width="100" height="8" rx="2" fill={blueFill} fillOpacity="0.4" />
        <rect x="188" y="200" width="30" height="8" rx="2" fill={blueFill} fillOpacity="0.9" />

        {/* Editor Status Bar */}
        <rect x="131" y="214" width="238" height="13" fill={blueFill} fillOpacity="0.15" />
        <circle cx="140" cy="220.5" r="3" fill={blueFill} />
        <line x1="148" y1="220.5" x2="180" y2="220.5" stroke={inkColor} strokeWidth="1.2" strokeOpacity="0.4" />
        <line x1="330" y1="220.5" x2="355" y2="220.5" stroke={inkColor} strokeWidth="1.2" strokeOpacity="0.4" />
      </svg>
    );
  }

  // DEFAULT: Mid-century automotive poster illustration (The iconic "Summer Drive" car silhouette)
  return (
    <svg
      id={`illustration-car`}
      viewBox="0 0 500 350"
      className={`w-full h-auto select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Canvas */}
      <rect width="500" height="350" fill="#fff8f1" />
      
      {/* Sun disk - large translucent Voltage Blue circle */}
      <circle cx="250" cy="140" r="110" fill={blueFill} fillOpacity="0.38" />
      
      {/* Horizon/Road Line */}
      <line x1="40" y1="260" x2="460" y2="260" stroke={inkColor} strokeWidth="1.5" />
      
      {/* Speed marks / road perspective guidelines */}
      <line x1="40" y1="270" x2="460" y2="270" stroke={inkColor} strokeWidth="1" strokeDasharray="15,20" />
      <line x1="100" y1="285" x2="400" y2="285" stroke={blueFill} strokeWidth="1" strokeDasharray="5,10" strokeOpacity="0.5" />

      {/* Retro sports car silhouette */}
      {/* Base shadows */}
      <path d="M120 250 L380 250 L395 260 L105 260 Z" fill={inkColor} />
      
      {/* Main Car Body - beautiful organic curves but flat forms */}
      {/* Lower body */}
      <path
        d="M110 240 C110 240, 115 205, 140 200 C165 195, 200 195, 230 195 C280 195, 340 198, 365 210 C380 217, 390 225, 390 240 L110 240 Z"
        fill={blueFill}
        fillOpacity="0.8"
      />
      
      {/* Hard ink shadow accent block on rear section */}
      <path d="M330 202 C350 207, 375 215, 385 225 L385 240 L325 240 Z" fill={inkColor} />
      
      {/* Cabin Roof / Windshield curve */}
      <path
        d="M190 200 C205 168, 240 162, 280 165 C305 167, 320 180, 335 198 Z"
        stroke={inkColor}
        strokeWidth="2"
        fill="#fff8f1"
      />
      {/* Cabin glass shadow split */}
      <path d="M260 166 C285 168, 305 178, 318 191 L318 198 L260 198 Z" fill={blueFill} fillOpacity="0.25" />
      <line x1="260" y1="166" x2="260" y2="198" stroke={inkColor} strokeWidth="1.5" />

      {/* Wheel Arches */}
      <circle cx="165" cy="240" r="26" fill="#fff8f1" />
      <circle cx="165" cy="240" r="26" stroke={inkColor} strokeWidth="1.5" />
      <circle cx="330" cy="240" r="26" fill="#fff8f1" />
      <circle cx="330" cy="240" r="26" stroke={inkColor} strokeWidth="1.5" />

      {/* True Black Wheels & Spokes */}
      <circle cx="165" cy="240" r="21" fill={inkColor} />
      <circle cx="165" cy="240" r="9" fill="#fff8f1" stroke={inkColor} strokeWidth="1.5" />
      
      <circle cx="330" cy="240" r="21" fill={inkColor} />
      <circle cx="330" cy="240" r="9" fill="#fff8f1" stroke={inkColor} strokeWidth="1.5" />

      {/* Front & Rear detailed accents */}
      {/* Headlight beam */}
      <path d="M95 218 L40 215 L40 230 L105 228 Z" fill={blueFill} fillOpacity="0.15" />
      <circle cx="112" cy="223" r="5" fill={inkColor} />
      
      {/* Rear exhaust fume cloud mock-up (stylized geometric circles) */}
      <circle cx="410" cy="248" r="4" stroke={blueFill} strokeWidth="1" strokeOpacity="0.7" />
      <circle cx="422" cy="244" r="7" stroke={blueFill} strokeWidth="1.2" strokeOpacity="0.5" />

      {/* Minimal vertical and horizontal layout ticks/rulers */}
      <line x1="250" y1="20" x2="250" y2="40" stroke={inkColor} strokeWidth="1.2" />
      <line x1="240" y1="30" x2="260" y2="30" stroke={inkColor} strokeWidth="1.2" />
    </svg>
  );
}
