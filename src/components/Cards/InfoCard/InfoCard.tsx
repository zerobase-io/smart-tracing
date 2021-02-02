/* React */
import React from "react";

/* Bootstrap */
import Card, { CardProps } from "react-bootstrap/Card";

/* Css */
import styles from "./InfoCard.module.scss";

export type InfoCardProps = {
  cardImgComp?: React.ReactNode;
  fullCard?: boolean;
  hasBorder?: boolean;
  hasHover?: boolean;
  info?: string;
  title?: string;
} & CardProps;

const InfoCard = ({
  cardImgComp = null,
  className,
  fullCard = false,
  hasBorder = false,
  hasHover = false,
  info,
  title,
  ...props
}: InfoCardProps) => {
  return (
    <Card
      className={`${className} ${styles.link} ${hasBorder ? "" : "border-0"} ${
        hasHover ? styles.cardHover : ""
      } ${fullCard ? "h-100" : ""}`}
      {...props}
    >
      {cardImgComp}
      <Card.Body>
        <Card.Title>
          <strong>{title}</strong>
        </Card.Title>
        <Card.Text>{info}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InfoCard;
