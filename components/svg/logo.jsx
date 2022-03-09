import * as React from "react";

function SvgDwgLogo(props) {
  return (
    <svg width={64} height={64} {...props}>
      <path
        className="logo-svg__path logo-svg__path--one"
        d="M4 54v6h48v-6L10 12H4v32h6V20l34 34z"
        fill="none"
        stroke="#000"
      />
      <path
        className="logo-svg__path logo-svg__path--two"
        d="M60 10V4H12v6l42 42h6V20h-6v24L20 10z"
        fill="none"
        stroke="#000"
      />
    </svg>
  );
}

export default SvgDwgLogo;
