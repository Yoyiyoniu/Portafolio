/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Github from "./img/Github";
interface CardProps {
  cardName: string;
  description: string;
  toLink: string;
  badged?: string[];
}

const Card: React.FC<CardProps> = ({
  cardName,
  description,
  badged,
  toLink,
}) => {
  return (
    <div
      className="rounded-lg border bg-card text-card-foreground shadow-sm text-gray-300"
      data-v0-t="card"
    >
      <div className="flex flex-col space-y-1.5 px-5 pt-5 pb-3">
        <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
          {cardName}
        </h3>
      </div>
      <div className="px-6">
        <p className="pb-6 px-2">{description}</p>
        {badged &&
          badged.map((badge, index) => (
            <span
              key={index}
              className=" relative inline-block overflow-hidden rounded-full p-[1px]"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/90 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                {badge}
              </div>
            </span>
          ))}
      </div>
      <div className="flex items-center p-6">
        <div>
          <Link target="_blank" rel="noopener noreferrer" to={toLink}>
            <Github />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
