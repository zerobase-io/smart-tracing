/* Bootstrap */
import Container from 'react-bootstrap/Container';

/* Local Components */
import HeroCard, { HeroCardProps } from '@/components/Cards/HeroCard/HeroCard';
import PageTitle, { PageTitleProps } from './PageTitle';

type SitePageProps = {
    children: React.ReactNode;
    heroCardProps?: HeroCardProps;
    pageTitleProps?: PageTitleProps;
};

const SitePage = ({ children, heroCardProps, pageTitleProps }: SitePageProps) => (
    <>
        {heroCardProps ? <HeroCard {...heroCardProps} /> : null}
        <Container className="my-5">
            {pageTitleProps ? <PageTitle {...pageTitleProps} /> : null}
            {children}
        </Container>
    </>
);

export default SitePage;
