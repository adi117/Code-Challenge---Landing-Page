import SolutionIcon from "./solutions-icon";
import { FC } from "react";

interface SolutionCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const SolutionCard: FC<SolutionCardProps> = ({ imageUrl, title, description }) => {
  return (
    <div>
      <SolutionIcon imageUrl={imageUrl} />
      {title}
      {description}
    </div>
  )
}

export default SolutionCard;