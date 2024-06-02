import { FC } from "react";
import { Link } from "react-router-dom";
interface CardProps {
  cardName: string;
  description: string;
  toLink: string;
  svg?: JSX.Element;
  badged?: string[];
}

const Card: FC<CardProps> = ({
  cardName,
  description,
  badged,
  toLink,
  svg
} : CardProps) => {
  return (
    <div
      className="flex flex-col justify-between rounded-lg border bg-card text-card-foreground shadow-sm text-gray-300"
      data-v0-t="card"
    >
      <div className="flex flex-col space-y-1.5 px-5 pt-5 pb-3">
        <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
          {cardName}
        </h3>
      </div>
      <div className="flex flex-col px-4 gap-3">
        <p className="pb-3">{description}</p>
        <span>
        {badged &&
          badged.map((badge, index) => (
            <span
              key={index}
              className="hover:scale-125 transform transition-transform duration-300 ease-in-out p-[2px] relative inline-block overflow-hidden rounded-full"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <div className=" inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/90 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                {badge}
              </div>
            </span>
          ))}
        </span>
      </div>
      <div className="flex items-center p-6">
        <div>
          <Link
            className="flex items-center justify-center hover:scale-125 transform transition-transform duration-300 ease-in-out"
            target="_blank" rel="noopener noreferrer" to={toLink}>
            {svg}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
