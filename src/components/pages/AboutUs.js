import React from 'react';

import ZBHeroMissionImage from '../../assets/img/info/ZBHero_Mission.jpg';
import LogoLight from '../../assets/img/info/ZerobaseLogo_light.png';
import EarthImage from '../../assets/img/earth.png';
import InfoImage1 from '../../assets/img/info/1.png';
import InfoImage3 from '../../assets/img/info/3.png';
import InfoImage4 from '../../assets/img/info/4.png';
import SampleQRImage from '../../assets/img/sample_zerobase_qr.jpg';

class AboutUs extends React.Component {
  render() {
    return (
      <div className="content m-0 p-0 w-100">
        <div className="container-fluid w-100 p-0 mb-2 mb-md-6">
          <div className="row">
            <div className="col-12">
              <div className="card mb-0">
                <div
                  className="hero-img-height hero-img-cover-center"
                  style={{
                    backgroundImage: `url(${ZBHeroMissionImage})`,
                    filter: 'brightness(70%)',
                  }}
                  alt="Zerobase logo over highway heading into city."
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row m-2">
            <div className="col-12" style={{ margin: '0 auto' }}>
              <div className="card shadow-none" style={{ border: 'none' }}>
                <div className="card-body shadow-none">
                  <div className="row align-items-center">
                    <div className="col-lg-12 d-flex justify-content-center text-center">
                      <h1>Everything You Need To Know About</h1>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-lg-12 text-center">
                      <img
                        src={LogoLight}
                        style={{ width: '50%' }}
                        alt="Zerobase Logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row m-4 mb-6">
            <div className="col-lg-6 col-12 pr-lg-5">
              <p className="h1 lh-180 mb-3">
                Zerobase is a free, privacy-first contact tracing platform that
                empowers both individuals and local officials to stop the spread
                of COVID-19.
              </p>
            </div>
            <div className="col-lg-6 col-12">
              <p className="lead lh-180">
                Contact tracing is the identification of likely
                disease-spreading interaction between individuals－it is a
                crucial part of modern pandemic response.
              </p>
              <p className="lead lh-180">
                Zerobase enables local communities to establish their first line
                of defense against COVID-19 outbreaks in a way that is private,
                easy to use, and helps to alleviate the manual issues involved
                in contact tracing and individualized testing.
              </p>
              <a
                className="btn btn-outline-dark font-weight-normal"
                href="https://www.who.int/features/qa/contact-tracing/en/"
                role="button"
                style={{ borderColor: '#65C6E1', color: '#65C6E1' }}
              >
                More about contact tracing
              </a>
            </div>
          </div>
          <div className="row m-4 p-5 mt-5 border-top border-secondary pb-4 pt-4">
            <div className="col-12 col-lg-12 pr-lg-5 mt-6">
              <p className="h1 lh-180 mb-3 font-weight-normal">
                We built Zerobase to help real people
              </p>
            </div>
          </div>
          <div className="row m-4">
            <div className="col-lg-4 col-12 text-center mb-2">
              <img
                className="w-75 mt-3 mb-3 card-img"
                src={EarthImage}
                alt="Satellite of earth."
              />
            </div>
            <div className="col-12 col-lg-8">
              <div className="row">
                <div className="col-12">
                  <p className="h1 lh-180 mb-4 text-justify">Zerobase:</p>
                </div>
                <div className="col-lg-6 col-12">
                  <h2>Puts Privacy First.</h2>
                  <p>
                    We provide an effective tracing solution for local
                    governments and communities without compromising individual
                    privacy or reducing trust.
                  </p>
                </div>
                <div className="col-lg-6 col-12">
                  <h2>Is Easy to Use.</h2>
                  <p>
                    Anyone with a smartphone can use Zerobase by simply opening
                    their camera. New users are enrolled immediately without any
                    signup process.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-12">
                  <h2>Is Accessible.</h2>
                  <p>
                    Zerobase’s coverage is worldwide, supporting Edge (low-speed
                    cellular), 3G, 4G, or WiFi. We offer no-internet solutions
                    as well. Anyone in the world can immediately use it, no
                    matter where they are.
                  </p>
                </div>
                <div className="col-lg-6 col-12">
                  <h2>Is Free.</h2>
                  <p>
                    Our infrastructure is free to use. From New York City to
                    Nairobi, anyone can use Zerobase to begin keeping themselves
                    and their community safe. Zerobase has been organized as a
                    nonprofit effort and labor has been donated.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row m-4 p-5 mt-5 border-top border-secondary pb-4 pt-4">
            <div className="col-12 col-lg-12 pr-lg-5 mt-6">
              <p className="h1 lh-180 mb-3 font-weight-normal text-align-center">
                Here’s how Zerobase could protect your community:
              </p>
            </div>
          </div>
          <div className="row text-align-center">
            <div className="col-lg-4 col-12">
              <img
                src={InfoImage1}
                style={{ width: '100%', display: 'inline-block', opacity: '1' }}
                alt="Man posting QR code on wall."
              />
            </div>
            <div className="col-lg-4 col-12">
              <img
                style={{ width: '100%', display: 'inline-block', opacity: '1' }}
                src={InfoImage3}
                alt="Man scanning QR code on wall. Woman waiting behind him on phone."
              />
            </div>
            <div className="col-lg-4 col-12">
              <img
                style={{ width: '100%', display: 'inline-block', opacity: '1' }}
                src={InfoImage4}
                alt="Woman patient in hospital bed. Doctor scans the patients phone with his phone."
              />
            </div>
          </div>
          <div className="row text-align-center mt-5">
            <div className="col-12">
              <div className="card m-5">
                <div className="card-body p-5">
                  <ol className="h4 font-weight-normal">
                    <li className="mb-4">
                      <strong>
                        Paper printouts with unique Zerobase QR codes
                      </strong>{' '}
                      are posted at the entrances and touchpoints of public
                      locations like grocery store cash registers, restaurant
                      entrances, pharmacies, doctors' offices, and places of
                      worship.
                    </li>
                    <li className="mb-4">
                      <strong>
                        People entering a participating location scan the code
                      </strong>{' '}
                      – this is as simple as pointing a phone’s camera at the
                      sign; it takes just a few seconds, and no app download is
                      required. Here is an example code that you can scan right
                      now:
                      <br />
                    </li>
                    <li
                      className="mb-4"
                      style={{ textAlign: 'center', display: 'block' }}
                    >
                      <img
                        className="text-center w-md-100 w-lg-30"
                        src={SampleQRImage}
                        alt="Zerobase QR code."
                      />
                    </li>
                    <li className="mb-4" style={{ display: 'block' }}>
                      Individuals may choose to share their phone number in
                      order to be notified by public health authorities (or
                      automatically by Zerobase, if so desired) if they have
                      been exposed. By default, no personal information is
                      required and if we don't have access to your phone number,
                      we'll still try to notify you the next time you check in
                      to any location.
                    </li>
                    <li className="mb-4">
                      <strong>
                        If an individual receives a COVID-19 test,
                      </strong>{' '}
                      they are given a sheet of paper with a Zerobase QR code on
                      it to scan as part of the intake process. Each code sheet
                      is unique and anonymous. Batches of code sheets can be
                      printed at testing centers or distributed to drive-through
                      sites.
                    </li>
                    <li className="mb-4">
                      <strong>
                        Zerobase’s contact tracing technology anonymously
                        analyzes
                      </strong>{' '}
                      community networks of interaction to identify people who
                      visited the same places at roughly the same times. It then
                      links an individual who has been tested to the individuals
                      that they were near to construct a list of individuals
                      that may have been exposed.
                    </li>
                    <li className="mb-4">
                      <strong>Public health officials can identify</strong> the
                      community touchpoints through which the virus seems to be
                      spreading most rapidly. They can also notify the
                      individuals who may have been exposed and advise them to
                      self-quarantine, even before they exhibit symptoms.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row m-4 p-5 mt-5 pb-4 pt-4">
            <div className="col-12 col-lg-12 pr-lg-5 mt-6">
              <p className="h1 lh-180 mb-1 font-weight-normal text-align-center">
                FAQs
              </p>
            </div>
          </div>
          <div className="row m-4 justify-content-between mb-5">
            <div className="col-lg-3 col-md-12 col-12 text-lg-right">
              <h4 className="m-0">
                Can’t large companies do this at scale with their location
                history?
              </h4>
              <h4 className="mb-4">How is Zerobase unique?</h4>
            </div>
            <div className="col-lg-8 col-12">
              <p className="h3 font-weight-normal">
                Other approaches can indeed geo-tag your movements at all times.
                But there are tradeoffs to those approaches:
              </p>
              <ul>
                <li className="mb-2">
                  Location data is extremely imprecise, sometimes off by over
                  300 feet, especially indoors. Zerobase not only pinpoints the
                  exact locations of community touchpoints, it is designed to
                  focus on the specific high-traffic areas where the virus is
                  most likely to spread - for example, inside buildings.
                </li>
                <li className="mb-2">
                  While they have location history for their enrolled users,
                  they are missing data for individuals who are not users of
                  their platform. Zerobase is unique in that 100% of users are
                  immediately enrolled via an instant check-in at all
                  participating locations.
                </li>
                <li className="mb-2">
                  GPS solutions log locations for the 99.99% of the day that an
                  infected individual spends<i> not</i> transmitting the virus.
                  Zerobase homes in on the critical moments in public spaces
                  that the infection may spread, making more accurate and
                  focused determinations.
                </li>
              </ul>
              <p className="bg-secondary text-white p-3">
                Fundamentally, location tracking is both ineffective and
                unnecessary. Putting privacy first is critical to establishing
                trust and community buy-in. In many communities, there has been
                significant resistance to adopting more socially intrusive
                automated tracking and tracing methods. Community adoption and
                trustworthiness have been key design criteria since Zerobase’s
                inception. We believe in “Big Data without Big Brother.”
              </p>
            </div>
          </div>
          <div className="row m-4 justify-content-between mb-5">
            <div className="col-lg-3 col-md-12 col-12 text-lg-right">
              <h4 className="mb-0">What information is collected</h4>
              <h4 className="mb-4">by Zerobase?</h4>
            </div>
            <div className="col-lg-8 col-12">
              <p>
                An individual’s identity is never deduced by the system, and any
                personal information shared voluntarily is stored securely.
                Zerobase is built from the ground up with security and privacy
                in mind and abides by relevant local, state, and federal laws.
                To read more about how we put your privacy first, click
                <a className="text-wrap" href="/privacy-policy">
                  {' '}
                  here.
                </a>
              </p>
            </div>
          </div>
          <div className="row m-4 justify-content-between mb-5">
            <div className="col-lg-3 col-md-12 col-12 text-lg-right">
              <h4 className="mb-4">
                What is required to use Zerobase in your community?
              </h4>
            </div>
            <div className="col-lg-8 col-md-12 col-12">
              <p>
                A computer and a printer are all that is required for
                businesses, public locations, and healthcare providers to
                activate Zerobase. Individual community members only need a
                smartphone.
              </p>
            </div>
          </div>
          <hr />
          <div className="row m-4 align-items-center">
            <div className="col-lg-12 text-center">
              <h2>For press inquiries, please contact press@zerobase.io</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
