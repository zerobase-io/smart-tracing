import React from 'react';

const Businesses = () => (
  <div className="content">
    <div className="container" style={{ padding: 0 }}>
      <div className="card card-lg">
        <div className="card-body">
          <div className="markdown">
            <div className="d-flex" />
            <h2>Q&amp;A about Zerobase for Businesses and Public Locations</h2>
            <h2>What is Zerobase? </h2>
            <p>
              Zerobase is a tool used by state and local health officials to pinpoint individuals
              likeliest to next develop COVID-19. Zerobase uses anonymized predictive technology to
              help protect communities before an outbreak occurs, enabling officials to best
              allocate their resources, eliminating guesswork, and reducing illness and fear.
            </p>
            <h2>How much does it cost? </h2>
            <p>
              Zerobase is being offered without charge. It has been organized as a nonprofit effort
              and labor has been donated.
            </p>
            <h2>Who is building Zerobase? </h2>
            <p>
              Zerobase was created by a team of volunteer technologists and medical professionals
              concerned about the spread of coronavirus among their fellow citizens. Using local
              data, their program traces the likely path of travel of the virus, identifying the
              next prospective patients before illness can spread further.
            </p>
            <h2>How does it work? </h2>
            <p>
              Local governments work with businesses, places of worship, and other gathering spaces
              in their communities to post a QR code at the entrance or another obvious highly
              trafficked spot. Individuals visiting those locations scan the QR code on their way in
              and their information is then anonymized and analyzed to ascertain likely patterns of
              spread in that community. The data builds up invisible networks of interaction among
              people. If someone tests positive, the program can inform local health authorities of
              the next likely people to contract and spread illness. Patients and prospective
              patients are informed anonymously via their cell phones. The more data that is
              collected and aggregated, the more accurate its predictive properties. Over time,
              communities deploying Zerobase help sister communities to be even better prepared for
              viral spread.
            </p>
            <h2>What information is collected by Zerobase? </h2>
            <p>
              An individual’s identity is never known by the system. Personally identifying
              information is therefore not stored and not subject to discovery by any other party.
            </p>
            <h2>What do participating businesses and public locations need to do? </h2>
            <p>
              Participating businesses and public locations simply use a designated smartphone to
              enroll, print out a QR code and request that every individual entering the premises
              scan the code.
            </p>
            <h2>What technological resources does Zerobase require? </h2>
            <p>
              A computer and a printer is all that is required for local public health efforts to
              activate Zerobase. Individual community members only need a cell phone.
            </p>
            <h2>How do I contact Zerobase?</h2>
            <p>
              {' '}
              You can always contact us at <a href="mailto:info@zerobase.io">info@zerobase.io</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Businesses;
