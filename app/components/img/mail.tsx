import { SVGProps } from "react";

interface MailProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

const Mail = ({ width = 44, height = 44, ...props }: MailProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    stroke="#fff"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 18H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7.5" />
    <path d="m3 6 9 6 9-6M15 18h6M18 15l3 3-3 3" />
  </svg>
);

export default Mail;
