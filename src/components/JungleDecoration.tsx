export function JungleDecoration() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 800"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
    >
      <g opacity="0.5">
        <path
          d="M0,0 C40,40 10,90 55,120 C90,145 60,190 100,200 L0,200 Z"
          fill="var(--color-primary)"
        />
        <path
          d="M0,0 C30,25 15,55 45,75 C70,92 50,120 75,130 L0,130 Z"
          fill="var(--color-border)"
        />
        <circle cx="60" cy="50" r="10" fill="var(--color-secondary)" opacity="0.7" />
      </g>
      <g opacity="0.45">
        <path
          d="M400,800 C355,760 385,715 340,685 C305,660 335,615 300,600 L400,600 Z"
          fill="var(--color-primary)"
        />
        <path
          d="M400,800 C370,775 385,745 355,725 C330,708 350,680 325,670 L400,670 Z"
          fill="var(--color-tertiary)"
        />
        <circle cx="345" cy="740" r="8" fill="var(--color-glow)" opacity="0.8" />
      </g>
      <g opacity="0.35">
        <circle cx="330" cy="90" r="4" fill="var(--color-glow)" />
        <circle cx="300" cy="160" r="3" fill="var(--color-secondary)" />
        <circle cx="360" cy="220" r="5" fill="var(--color-tertiary)" />
        <circle cx="40" cy="420" r="4" fill="var(--color-glow)" />
        <circle cx="90" cy="500" r="3" fill="var(--color-secondary)" />
        <circle cx="30" cy="600" r="5" fill="var(--color-tertiary)" />
      </g>
    </svg>
  );
}
