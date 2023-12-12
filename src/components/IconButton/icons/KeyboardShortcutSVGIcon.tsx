import { SVGProps } from 'react';

export function KeyboardShortcutSVGIcon({
  stroke = 'currentColor',
  strokeWidth = '1.125',
  strokeLinecap = 'round',
  strokeLinejoin = 'round',
}: Readonly<SVGProps<SVGSVGElement>>) {
  return (
    <svg
      height="1em"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M1.5 14.5653C1.5 15.211 1.75652 15.8303 2.21314 16.2869C2.66975 16.7435 3.28905 17 3.9348 17C4.58054 17 5.19984 16.7435 5.65646 16.2869C6.11307 15.8303 6.36959 15.211 6.36959 14.5653V12.1305H3.9348C3.28905 12.1305 2.66975 12.387 2.21314 12.8437C1.75652 13.3003 1.5 13.9195 1.5 14.5653Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
      <path
        d="M3.9348 1.00063C3.28905 1.00063 2.66975 1.25715 2.21314 1.71375C1.75652 2.17035 1.5 2.78964 1.5 3.43537C1.5 4.0811 1.75652 4.70038 2.21314 5.15698C2.66975 5.61358 3.28905 5.8701 3.9348 5.8701H6.36959V3.43537C6.36959 2.78964 6.11307 2.17035 5.65646 1.71375C5.19984 1.25715 4.58054 1.00063 3.9348 1.00063Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
      <path
        d="M15.0652 12.1305H12.6304V14.5653C12.6304 15.0468 12.7732 15.5175 13.0407 15.9179C13.3083 16.3183 13.6885 16.6304 14.1334 16.8147C14.5783 16.9989 15.0679 17.0472 15.5402 16.9532C16.0125 16.8593 16.4464 16.6274 16.7869 16.2869C17.1274 15.9464 17.3593 15.5126 17.4532 15.0403C17.5472 14.568 17.4989 14.0784 17.3147 13.6335C17.1304 13.1886 16.8183 12.8084 16.4179 12.5409C16.0175 12.2733 15.5468 12.1305 15.0652 12.1305Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
      <path
        d="M12.6318 5.86775H6.36955V12.1285H12.6318V5.86775Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
      <path
        d="M17.5 3.43473C17.5 2.789 17.2435 2.16972 16.7869 1.71312C16.3303 1.25652 15.711 1 15.0652 1C14.4195 1 13.8002 1.25652 13.3435 1.71312C12.8869 2.16972 12.6304 2.789 12.6304 3.43473V5.86946H15.0652C15.711 5.86946 16.3303 5.61295 16.7869 5.15635C17.2435 4.69975 17.5 4.08046 17.5 3.43473Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
    </svg>
  );
}
