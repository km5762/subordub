import React, { ReactNode } from "react";
import { Star } from "react-feather";

type BarValues = {
  sub: number;
  dub: number;
};

type BarLabels = {
  sub: ReactNode;
  dub: ReactNode;
};

export default function HorizontalBarChart({
  values,
  labels,
}: {
  values: BarValues;
  labels?: BarLabels;
}) {
  const subPercentage = (values.sub / (values.sub + values.dub)) * 100;
  const dubPercentage = 100 - subPercentage;

  return (
    <div className="flex">
      <Bar
        percentage={subPercentage}
        className="bg-orange-600 rounded-s-lg border-solid border-2 border-orange-500"
      >
        {labels?.sub}
      </Bar>
      <Bar
        percentage={dubPercentage}
        className="bg-purple-600 rounded-e-lg border-solid border-2 border-purple-500"
      >
        {labels?.dub}
      </Bar>
    </div>
  );
}

function Bar({
  percentage,
  children,
  className,
}: {
  percentage: number;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "h-8 text-center hover:scale-y-125 ease-in-out duration-300 flex items-center justify-center group " +
        className
      }
      style={{
        width: `${percentage}%`,
        backgroundImage:
          "linear-gradient(45deg, transparent 25%, rgba(255, 255, 255, 0.1) 25%, rgba(255, 255, 255, 0.1) 50%, transparent 50%, transparent 75%, rgba(255, 255, 255, 0.1) 75%, rgba(255, 255, 255, 0.1) 100%)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="group-hover:scale-x-125 ease-in-out duration-300 ">
        {children}
      </div>
    </div>
  );
}
