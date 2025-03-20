import { FC } from "react";
import { Link } from "react-router-dom";
interface CardProps {
  cardName: string;
  description: string;
  toLink: string;
  svg: JSX.Element;
  badged?: string[];
  image?: string;
}

const Card: FC<CardProps> = ({
  cardName,
  description,
  badged,
  toLink,
  svg,
  image,
}: CardProps) => {
  return (
    <div className="inline-flex flex-col justify-between rounded-lg border shadow-sm text-gray-300 p-4 gap-3">
      <div className="flex flex-col">
        <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
          {cardName}
        </h3>
      </div>
      <p className="pb-3">{description}</p>
      <Link
        to={toLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
      >
        <img
          className="rounded-xl transition-opacity duration-300 group-hover:opacity-30"
          src={image}
          alt=""
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {svg}
        </div>
      </Link>
      <span className="flex flex-wrap gap-1">
        {badged &&
          badged.map((badge, index) => (
            <span
              key={index}
              className="transform transition-transform duration-300 ease-in-out p-[1px] relative inline-block overflow-hidden rounded-full"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <div className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950/90 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                {badge}
              </div>
            </span>
          ))}
      </span>
    </div>
  );
};

export default Card;
