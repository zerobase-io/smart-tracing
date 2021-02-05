/* Bootstrap */
import Card, { CardProps } from 'react-bootstrap/Card';

/* CSS */
import styles from './HeroCard.module.scss';

export type HeroCardProps = {
    src: string;
    top?: boolean;
} & CardProps;

const HeroCard = ({ src, top = false, ...props }: HeroCardProps) => (
    <Card
        style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${src}")`,
        }}
        className={`${styles.heroCard} ${
            top ? styles.heroCardTop : styles.heroCardCenter
        } border-0 bg-p-dark text-center`}
        {...props}
    />
);

export default HeroCard;
