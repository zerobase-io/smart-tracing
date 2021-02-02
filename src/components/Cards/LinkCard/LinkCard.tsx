/* Routing */
import { Link, LinkProps } from "react-router-dom";

/* Local Components */
import InfoCard, { InfoCardProps } from "@/components/Cards/InfoCard/InfoCard";

const LinkCard = ({ to, ...props }: LinkProps & InfoCardProps) => (
  <Link to={to}>
    <InfoCard {...props} />
  </Link>
);

export default LinkCard;
