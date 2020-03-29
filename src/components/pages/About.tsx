import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import HowItWorks1 from '@images/info/1.png';
import HowItWorks2 from '@images/info/2.png';
import HowItWorks3 from '@images/info/3.png';
import HowItWorks4 from '@images/info/4.png';
import HowItWorks5 from '@images/info/5.png';

const About = () => (
  <div className="content">
    <div className="container" style={{ padding: 0 }}>
      <div className="card card-lg">
        <div className="card-body">
          <div className="markdown">
            <div className="d-flex">
              <h2 className="h1 mt-0">Introduction</h2>
            </div>
            <h2 id="what-is-tabler">What is Zerobase?</h2>
            <p>
              Zerobase (0base) is a smart tracing solution to inform individuals and agencies of
              potential COVID-19 exposure in a passive, non intrusive manner. Our secure solution
              allows public health officials to recreate travel chains in order to estimate
              exposure, notify those at risk and effectively contain community spread of the novel
              coronavirus. It's free, privacy enabled, easy to use, fast to deploy, and ready now.
            </p>
            <p>If you're visiting from a smartphone you are already deploying Zerobase.</p>
            <a
              className="btn btn-secondary mb-4"
              href="https://necsi-edu.slack.com/join/shared_invite/zt-cu5215sg-63h4A7uCy~ehDsrfAIJ~_Q"
              target="_blank"
            >
              <svg
                className="mr-2"
                enableBackground="new 0 0 24 24"
                height={20}
                viewBox="0 0 24 24"
                width={20}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m8.843 12.651c-1.392 0-2.521 1.129-2.521 2.521v6.306c0 1.392 1.129 2.521 2.521 2.521s2.521-1.129 2.521-2.521v-6.306c-.001-1.392-1.13-2.521-2.521-2.521z"
                  fill="#e91e63"
                />
                <path
                  d="m.019 15.172c0 1.393 1.13 2.523 2.523 2.523s2.523-1.13 2.523-2.523v-2.523h-2.521c-.001 0-.001 0-.002 0-1.393 0-2.523 1.13-2.523 2.523z"
                  fill="#e91e63"
                />
                <path
                  d="m8.846-.001c-.001 0-.002 0-.003 0-1.393 0-2.523 1.13-2.523 2.523s1.13 2.523 2.523 2.523h2.521v-2.523c0-.001 0-.003 0-.005-.001-1.391-1.128-2.518-2.518-2.518z"
                  fill="#00bcd4"
                />
                <path
                  d="m2.525 11.37h6.318c1.393 0 2.523-1.13 2.523-2.523s-1.13-2.523-2.523-2.523h-6.318c-1.393 0-2.523 1.13-2.523 2.523s1.13 2.523 2.523 2.523z"
                  fill="#00bcd4"
                />
                <path
                  d="m21.457 6.323c-1.391 0-2.518 1.127-2.518 2.518v.005 2.523h2.521c1.393 0 2.523-1.13 2.523-2.523s-1.13-2.523-2.523-2.523c-.001 0-.002 0-.003 0z"
                  fill="#4caf50"
                />
                <path
                  d="m12.641 2.522v6.325c0 1.392 1.129 2.521 2.521 2.521s2.521-1.129 2.521-2.521v-6.325c0-1.392-1.129-2.521-2.521-2.521-1.392 0-2.521 1.129-2.521 2.521z"
                  fill="#4caf50"
                />
                <g fill="#ff9800">
                  <path d="m17.682 21.476c0-1.392-1.129-2.521-2.521-2.521h-2.521v2.523c.001 1.391 1.129 2.519 2.521 2.519s2.521-1.129 2.521-2.521z" />
                  <path d="m21.479 12.649h-6.318c-1.393 0-2.523 1.13-2.523 2.523s1.13 2.523 2.523 2.523h6.318c1.393 0 2.523-1.13 2.523-2.523s-1.13-2.523-2.523-2.523z" />
                </g>
              </svg>
              <span>Join us on Slack</span>
            </a>
            <p>
              Want to help? Join our Slack messaging group or reach out to us by email:
              info@zerobase.io. Collaborate with us, we have a patent pending to ensure this system
              and similar systems stay open and accessible for all.
            </p>
            <h2>How it Works</h2>
            <div style={{ position: 'relative' }}>
              <Slider lazyLoad={'ondemand'} dots infinite slidesToShow={3} slidesToScroll={3}>
                <img src={HowItWorks1} />
                <img src={HowItWorks2} />
                <img src={HowItWorks3} />
                <img src={HowItWorks4} />
                <img src={HowItWorks5} />
              </Slider>
            </div>
            <p>
              At its core Zerobase is a location tracker for community hot spots. Businesses,
              organizations, locations use a designated smartphone to enroll, print out a QR code
              and request that every individual entering the premise scan the code. We work with
              public health agencies to then backtrace potential exposure events in the case that an
              individual tests positive and notify all affected locations and individuals with next
              steps.
            </p>
            <h2>Who can deploy it and where?</h2>
            <p>
              Anyone with a smartphone with internet connection can deploy Zerobase in their
              communities in under 5 seconds. We recommend communities prioritize Zerobase
              deployment in high risk touch points (Doctor's Offices, Hospitals) and community touch
              points (Churches, Grocery Stores, Pharmacies). We make it extremely easy for event
              venues (Concerts, Tradeshows, Movie Theaters) to deploy Zerobase in order to enable
              responsible cooperation with public health agencies.
            </p>
            <p>
              Need help with deployment? Send us an email at info@zerobase.io. We'll get you set up
              in less than a minute.
            </p>
            <h2>Ease of Use</h2>
            <p>
              A universally acceptable solution is the best solution. Zerobase leverages the
              assumption that most individuals have a smartphone. We offer easy solutions to
              accommodate those who also do not own a smartphone such as children or the elderly.
              Additionally we leverage the fact that up to 90% of smartphone default cameras allow
              for QR scanning functionality. This reduces the need for cumbersome installation of a
              third party app or visiting a third party website. Users can simply open their camera
              and point it at a location's code to register with no extra steps.
            </p>
            <h2>Security</h2>
            <p>
              The best security is having nothing to steal. We do not record any personally
              identifiable information or metadata for either users or locations. We also do not
              require users to set up any account. Once a location code is scanned by the default
              camera application, an anonymized id is registered for that device. We assume most
              individuals only use one device as they move about locations. Our solution is passive
              in nature and in practice follows fundamentals of zero knowledge proofs. We work with
              public health agencies build a historical snapshot of exposure:
            </p>
            <ol>
              <li>
                If a patient 0 receives a positive test, local public health agencies will ask for a
                public key of the patient's anonymized id that we will generate. This is voluntary
                and a public key does not reveal the patient's true id. Please read about Zero
                Knowledge Proofs.
              </li>
              <li>
                Afterwords, a notification will be sent to all anonymized ids (users and locations)
                which had a scanned timestamp coincide with the patient 0, notifying of potential
                exposure and recommended steps.
              </li>
              <li>
                Those receiving a notification can choose to reach out to their public health
                agencies or not.
              </li>
            </ol>
            <p>
              The process is entirely voluntary and passive in nature leading to high levels of
              security and privacy.
            </p>
            <h2>Effectiveness</h2>
            <p>
              Some may ask if its private, how can it be effective? Public health efficacy can be
              distilled into the following components:
            </p>
            <ol>
              <li>Do you have a direct line of communication with individuals?</li>
              <li>Can you administer individualized public health guidance at scale?</li>
              <li>Can you establish some baseline metrics in order to automate triage?</li>
            </ol>
            <p>
              Using modern technologies, knowing an individual patient may not be necessary from a
              public health perspective. Strong privacy guarantees enable high levels of trust and
              high levels of user adoption. Strong community adoption enables a strong feedback
              mechanism.
            </p>
            <h2>Containment</h2>
            <p>
              The cornerstones of any public health response is Test, Isolate, Trace, Contain.
              Zerobase algorithms allow public health officials to reconstruct and trace the
              historical path of exposure and estimate exposure severity. This will allow for more
              informed and measured public policy decisions and allow for more surgical containment
              if necessary. Currently city wide or regional containment is equivalent to using a
              hammer to nail, zerobase enables a more efficient and low impact solution equivalent
              to threading a needle.
            </p>
            <h2>Inspiration</h2>
            <p>
              After the outbreak of the novel coronavirus in China, many businesses and public
              locations required temperature readings when entering a location. While this mitigates
              exposure, COVID-19 has shown challenging properties such as asymptomatic spread and a
              long incubation period that reduces temperature reading effectiveness. Further case
              studies are needed to gauge the impact of temperature reading checkpoints, however
              this new paradigm of checkpoints allowed us to innovate less intrusive solutions,
              while providing a useful historical reference necessary for effective exposure
              estimates and response. Additionally, Zerobase may actually prove more effective in
              developing countries, where mobile penetration is high for activities such as
              payments.
            </p>
            <h2>Patent</h2>
            <p>
              This protocol has a Patent Pending no. 62/987,3281 for the express purpose of enabling
              the unification, standardization, and accessibility of collated, anonymized data of
              similar systems in the future. We hope to organize these vital open source efforts and
              keep this system and similar systems open for everyone. Our patent aims to:
            </p>
            <ol>
              <li>Fully disclose the process and methods utilized</li>
              <li>Allow other communities and organizations to readily adopt</li>
              <li>Enable data standardization</li>
            </ol>
            <h2>Our Team</h2>
            <div className="card">
              <div className="card-body">
                <div className="row row-sm align-items-center">
                  <div className="col">
                    <h4 className="card-title m-0">John Lo</h4>
                    <p>
                      Current entrepreneurial resident in Cologne, Germany. Specialization in
                      Statistics and Computer Science from Harvard University with experience in
                      public health policy.
                    </p>
                    <p>
                      <a
                        className="btn btn-facebook"
                        href="https://linkedin.com/in/john-lo-2b95a0169"
                        target="_blank"
                      >
                        My Linkedin Profile
                        <i className="fe fe-arrow-up-right ml-3" />
                      </a>
                    </p>
                    <p>
                      I developed Zerobase protocol in four days in response to increasingly urgent
                      WHO guidelines for communities to take preemptive action, but unfortunately
                      not having the basic infrastructure to do so. I hope Zerobase can serve to
                      provide a basic line of community defense against a spreading pandemic.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="row row-sm align-items-center">
                  <div className="col">
                    <h4 className="card-title m-0">Aron Szanto</h4>
                    <p>
                      Machine learning engineer at Kensho Technologies and a researcher at Harvard
                      University. His background is in applied artificial intelligence, including
                      misinformation detection, social network analysis, and natural language
                      processing.
                    </p>
                    <p>
                      Past work has also involved data privacy, high performance computing,
                      distributed data systems, and tech x social activism.
                    </p>
                    <p>
                      <a
                        className="btn btn-facebook"
                        href="https://www.linkedin.com/in/aronszanto"
                        target="_blank"
                      >
                        My Linkedin Profile
                        <i className="fe fe-arrow-up-right ml-3" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p>
              Want to help or join our team? Please reach out to us by email info@zerobase.io or
              join our Slack Group Chat.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
