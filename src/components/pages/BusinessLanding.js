import React from 'react';
import ZBContainersLocation from '../../assets/img/info/ZB_containers_location.jpg';


class BusinessLanding extends React.Component {
  render() {
    return (
      <div class="content m-0 p-0 w-100">
        <div class="container-fluid w-100 p-0 mb-2 mb-md-6">
          <div class="row">
            <div class="col-12">
              <div class="card mb-0">
                <div class="hero-img-height hero-img-cover-top"
                     style={{backgroundImage: `url(${ZBContainersLocation})`,
                       filter: 'brightness(70%)',
                     }}
                     alt="Man putting open sign in window."
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row m-2 mb-6">
            <div class="title col-12 col-md-8">
              <h2 class="align-center pb-3 mbr-fonts-style display-3">Businesses and Public Locations</h2>
              <h3 class="mbr-section-subtitle align-center mbr-light mbr-fonts-style display-5">Lead your community in the fight against COVID-19.</h3>
            </div>
          </div>
        <div class="row m-2 mb-md-5">
          <div class="col-lg-6 col-12 pr-lg-5">
            <p class="h1 lh-180 mb-3" style={{fontSize: '36px'}}>Zerobase is a free, privacy-first contact tracing platform that empowers both individuals and local officials to stop the spread of COVID-19.</p>
          </div>
          <div class="col-lg-6 col-12">
            <p class="lead lh-180" style={{fontSize: '24px'}}>Zerobase anonymously monitors the spread of the virus and warns exposed individuals to stay at home and avoid infecting other members of the community.</p>
            <p class="lead lh-180" style={{fontSize: '24px'}}>With your help, we can keep the public healthy and businesses open, putting your community back on its feet.</p>
          </div>
        </div>
        <div class="container">
          <div class="media-container-row mt-6">
            <div class="col-lg-12 col-12">
              <div class="media-container-row">
                <div class="media-content">
                  <div class="mbr-section-text">
                    <p class="mbr-text mb-0 mbr-fonts-style" style={{fontSize: '24px'}}><strong>Unlike other contact tracing mechanisms developed so far,</strong> Zerobase doesn't track GPS locations, require downloading an app, or require intrusive technology to be installed in your building. By automatically
                    notifying individuals to stay home if they’ve been exposed, Zerobase takes the burden off you to ensure that your location and employees are safe- without any extra staff.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="media-container-row mt-6">
            <div class="col-lg-12 col-12">
              <div class="media-container-row">
                <div class="media-content">
                  <div class="mbr-section-text">
                    <p class="mbr-text mb-0 mbr-fonts-style" style={{fontSize: '24px'}}><strong>Here’s how it works:</strong> Paper printouts with unique Zerobase QR codes are posted at entrances and touchpoints of your location, for example the front door and the cash register. People entering your location
                      scan the code by simply pointing their phone’s camera at the sign – it takes just a few seconds. Zerobase’s tracing technology anonymously analyzes community networks of interaction to identify people who may have been
                      exposed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="media-container-row mt-6">
            <div class="col-lg-12 col-12">
              <div class="media-container-row">
                <div class="media-content">
                  <div class="mbr-section-text">
                    <p class="mbr-text mb-0 mbr-fonts-style" style={{fontSize: '24px'}}><strong>If an individual is exposed to or contracts COVID-19,</strong> public health officials can use Zerobase to direct anyone who has been in their presence to self-quarantine and stop the virus from spreading. In this
                      way, Zerobase keeps your employees and your location safe.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="media-container-row mt-6">
            <div class="col-lg-12 col-12">
              <div class="media-container-row">
                <div class="media-content">
                  <div class="mbr-section-text">
                    <p class="mbr-text mb-0 mbr-fonts-style" style={{fontSize: '30px'}}><strong>At no point does an individual’s check-in get tracked alongside their identity.</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="media-container-row mt-6">
            <div class="col-lg-12 col-12">
              <div class="media-container-row">
                <div class="media-content">
                  <div class="mbr-section-text">
                    <p class="mbr-text mb-0 mbr-fonts-style" style={{fontSize: '24px'}}><strong>Zerobase is deployable by businesses and community touchpoints</strong> with nothing more than a computer and a printer. Because of this, Zerobase can be deployed everywhere in minutes to be accessible to and instantly
                    usable by all. By joining the Zerobase network of businesses, public locations, and community touchpoints, you are doing your part to end the spread of the virus and revitalize your community.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br/>
          <br/>
          <div class="container">
            <div class="row m-4 p-5 mt-5 border-top border-secondary pb-4 pt-4">
              <div class="col-lg-8 col-12 pr-lg-5 mt-6">
                <p class="h1 lh-180 mb-3">Lead your community in the fight against COVID-19.</p>
                <p class="h2 font-weight-normal">Zerobase is free, it’s ready, and it saves lives.</p>
              </div>
              <div class="col-lg-4 col-12 align-middle mt-6"><a class="btn btn-primary btn-lg align-middle" href="/business/register" id="register-business"> Enroll in under a minute</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default BusinessLanding;
