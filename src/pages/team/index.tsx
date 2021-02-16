/* Bootstrap */
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

/* Local Components */
import Overlay from '@/components/Cards/HeroCard/Overlay';
import ProfileCard, { ProfileCardProps } from '@/components/Cards/ProfileCard/ProfileCard';
import SitePage from '@/components/Site/SitePage/SitePage';

/* Images */
import HeroImage from '@/images/banner03.jpg';
import PartnerHDSI from '@/images/partners/hdsi.png';
import PartnerMaxPlanck from '@/images/partners/max-planck.png';
import PartnerNECSI from '@/images/partners/necsi.png';
import ProfileAlicia from '@/images/profiles/alicia.jpg';
import ProfileAron from '@/images/profiles/aron.jpg';
import ProfileBianca from '@/images/profiles/bianca.jpg';
import ProfileCamille from '@/images/profiles/camille.jpg';
import ProfileChris from '@/images/profiles/chris.jpg';
import ProfileDan from '@/images/profiles/dan.png';
import ProfileDavid from '@/images/profiles/david.jpg';
import ProfileGary from '@/images/profiles/gary.jpg';
import ProfileJason from '@/images/profiles/jason.jpg';
import ProfileJoshua from '@/images/profiles/joshua.jpg';
import ProfileJustin from '@/images/profiles/justin.jpg';
//import ProfileTemp from "@/icons/zb/icon.svg";

/* Non founder profiles */
const profiles: ProfileCardProps[] = [
    {
        name: 'Gary Chizever, MD',
        src: ProfileGary,
        title: 'Medical Lead',
    },
    {
        name: 'David Harris',
        src: ProfileDavid,
        title: 'Backend Lead',
    },
    {
        name: 'Joshua Kohn',
        src: ProfileJoshua,
        title: 'Frontend Developer',
    },
    {
        name: 'Chris Lee',
        src: ProfileChris,
        title: 'Health Sciences Lead',
    },
    {
        name: 'Alicia McCauley',
        src: ProfileAlicia,
        title: 'Director of Public Information',
    },
    {
        name: "Camille N'Diaye",
        src: ProfileCamille,
        title: 'Operations Lead',
    },
    {
        name: 'Justin Reeves',
        src: ProfileJustin,
        title: 'Frontend Lead',
    },
    {
        name: 'Bianca Victoria Scott',
        src: ProfileBianca,
        title: 'Outreach Lead, General Counsel',
    },
    {
        name: 'Jason Spriggs',
        src: ProfileJason,
        title: 'Infrastructure and Security Lead',
    },
    { name: 'Dan Turner', src: ProfileDan, title: 'Design Lead' },
];

const Team = () => (
    <SitePage
        heroCardProps={{
            children: (
                <Overlay>
                    <Card.Title>
                        <h1>The Zerobase Foundation</h1>
                    </Card.Title>
                </Overlay>
            ),
            src: HeroImage,
            top: true,
        }}
    >
        <Row>
            <Col>
                <p className="h4 lead text-p-dark">
                    The Zerobase Foundation is an international nonprofit organization of volunteer technologists,
                    business leaders, medical professionals, and concerned citizens. Zerobase builds free and open
                    source public health technology for the good of communities around the world.
                </p>
            </Col>
        </Row>
        <Row className="my-5 text-center">
            <Col>
                <h1>Our Team</h1>
            </Col>
        </Row>
        <Row className="align-items-middle justify-content-center">
            <Col xs={2}>
                <ProfileCard name="Aron Szanto" src={ProfileAron} title="Founder" />
            </Col>
            <Col lg={9}>
                <p className="px-5">
                    Aron leads the Zerobase Foundation team. Aron’s background is in the study of the spread of
                    misinformation through social networks. He holds dual research and engineering appointments at
                    Harvard University and Kensho Technologies, where his work lies at the intersection of machine
                    learning on networks and natural language processing. Aron completed undergraduate and graduate
                    study in applied mathematics at Harvard University.
                </p>
            </Col>
        </Row>
        <Row className="justify-content-center my-5" lg={3} xs={2}>
            {profiles.map((profile) => (
                <Col key={profile.name}>
                    <ProfileCard {...profile} />
                </Col>
            ))}
        </Row>
        <Row className="justify-content-center text-p-black">
            <Col xs={10}>
                <p className="lead">
                    The Zerobase team comprises over 150 volunteers from dozens of countries around the world, including
                    technologists, medical professionals, attorneys, political activists, and concerned citizens. No
                    matter who or where you are, you can make an immediate impact on our efforts to bring free and
                    accessible public health technology to the communities that need it most.{' '}
                    <a href="https://tinyurl.com/zerobase-volunteer">Join us!</a>
                </p>
            </Col>
        </Row>
        <Row className="justify-content-center my-5">
            <Col xs="auto">
                <h1>Our Partners</h1>
            </Col>
        </Row>
        <Row className="align-items-center h-200 justify-content-center text-center" lg={3} xs={1}>
            <Col className="py-3">
                <a href="https://datascience.harvard.edu/">
                    <Image alt="Harvard Data Science Intitiative logo" src={PartnerHDSI} height={200} />
                </a>
            </Col>
            <Col className="py-3">
                <a href="https://www.mpg.de/en">
                    <Image alt="Max-Planck logo" src={PartnerMaxPlanck} height={200} />
                </a>
            </Col>
            <Col className="py-3">
                <a href="https://necsi.edu/">
                    <Image alt="NESCI logo" src={PartnerNECSI} height={200} />
                </a>
            </Col>
        </Row>
    </SitePage>
);

export default Team;
