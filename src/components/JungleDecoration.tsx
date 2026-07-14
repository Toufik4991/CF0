const BLADE_D = "M0,0 C-11,-26 -9,-58 0,-92 C9,-58 11,-26 0,0 Z";
const BLADE_ANGLES = [-70, -47, -24, 0, 24, 47, 70];
const BLADE_COLORS = [
  "var(--color-foreground)",
  "var(--color-primary)",
  "var(--color-border)",
  "var(--color-primary)",
  "var(--color-foreground)",
  "var(--color-primary)",
  "var(--color-border)",
];

function Frond({
  x,
  y,
  baseAngle,
  scale,
}: {
  x: number;
  y: number;
  baseAngle: number;
  scale: number;
}) {
  return (
    <g transform={`translate(${x},${y}) scale(${scale})`} opacity="0.6">
      {BLADE_ANGLES.map((offset, i) => (
        <path
          key={i}
          d={BLADE_D}
          fill={BLADE_COLORS[i % BLADE_COLORS.length]}
          transform={`rotate(${baseAngle + offset})`}
        />
      ))}
    </g>
  );
}

function FruitCluster({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x},${y}) scale(${scale})`}>
      <circle cx="0" cy="0" r="10" fill="var(--color-accent)" />
      <circle cx="16" cy="6" r="8" fill="var(--color-accent)" />
      <circle cx="6" cy="18" r="9" fill="var(--color-accent)" />
      <circle cx="-4" cy="-4" r="3" fill="var(--color-glow)" opacity="0.8" />
    </g>
  );
}

export function JungleDecoration() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 800"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
    >
      <Frond x={-15} y={-15} baseAngle={135} scale={1.6} />
      <Frond x={30} y={10} baseAngle={150} scale={1.1} />
      <FruitCluster x={70} y={40} scale={0.9} />

      <Frond x={415} y={-10} baseAngle={225} scale={1.6} />
      <Frond x={370} y={20} baseAngle={210} scale={1.05} />

      <Frond x={-15} y={815} baseAngle={45} scale={1.6} />
      <Frond x={30} y={780} baseAngle={30} scale={1.05} />
      <FruitCluster x={65} y={745} scale={0.8} />

      <Frond x={415} y={810} baseAngle={-45} scale={1.6} />
      <Frond x={365} y={775} baseAngle={-30} scale={1.1} />

      <g opacity="0.4">
        <circle cx="330" cy="150" r="4" fill="var(--color-glow)" />
        <circle cx="300" cy="230" r="3" fill="var(--color-secondary)" />
        <circle cx="70" cy="380" r="4" fill="var(--color-glow)" />
        <circle cx="330" cy="480" r="3" fill="var(--color-tertiary)" />
        <circle cx="60" cy="560" r="4" fill="var(--color-secondary)" />
      </g>
    </svg>
  );
}
