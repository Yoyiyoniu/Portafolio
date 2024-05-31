import { SVGProps } from "react";

interface LinkedInProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

const LinkedIn = ({ width = 32, height = 32, ...props }: LinkedInProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    {...props}
  >
    <path
      d="M27.266 27.266h-4.743V19.84c0-1.77-.03-4.05-2.464-4.05-2.47 0-2.848 1.929-2.848 3.92v7.556h-4.742v-15.27h4.55v2.086h.067a4.98 4.98 0 0 1 4.488-2.465c4.809 0 5.692 3.16 5.692 7.274ZM7.12 9.91a2.756 2.756 0 0 1-2.754-2.754A2.752 2.752 0 1 1 7.121 9.91m2.367 17.356H4.742v-15.27h4.746ZM29.628.004H2.36A2.333 2.333 0 0 0 0 2.309V29.69A2.337 2.337 0 0 0 2.36 32h27.269A2.344 2.344 0 0 0 32 29.691V2.31A2.342 2.342 0 0 0 29.629 0"
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#fff",
        fillOpacity: 1,
      }}
    />
  </svg>
);

export default LinkedIn;
