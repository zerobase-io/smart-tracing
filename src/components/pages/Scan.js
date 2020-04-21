/* eslint-disable jsx-a11y/anchor-is-valid */
// Temporary disable the eslint run `no-undef` because of the global $ (jQuery)
/* eslint no-undef: 0 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import { Howl } from 'howler';
import QrReader from 'react-qr-reader';

//import scanning from '../../lib/scanner';
//import template from '../../templates/pages/scan.pug';

// // This is an example of how you override an existing component with custom CSS
// const Wrapper = styled(Link)`
//   color: #61dafb;
// `;

class Scan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 500,
      sound: new Howl({ src: ['/assets/audio/beep.mp3'] }),
      result: 'No result',
      legacyMode: false,
    };

    this.handleScan = this.handleScan.bind(this);
    this.openImageDialog = this.openImageDialog.bind(this);
  }
  handleScan(result) {
    if (result) {
      this.state.sound.play();
      this.setState({ result });
      window.location.replace(this.state.result);
    }
  }
  handleError(err) {
    alert(
      'This app does not have permission to access your camera. Instead, you may take a picture of the QR code.',
    );
    this.setState({ legacyMode: true });
    console.error(err);
  }
  openImageDialog() {
    this.refs.scanner.openImageDialog();
  }
  render() {
    const previewStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    };
    const wrapperStyle = {
      position: 'relative',
      height: '100vh',
      overflow: 'hidden',
    };
    const featuredStyle = {
      position: 'absolute',
      width: 'calc(85vh)' /*'calc(100vh * (1000 / 562))',*/,
      minWwidth: '100%',
      minHheight: '100%',
      // top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    };
    const { legacyMode } = this.state;
    return (
      <div style={wrapperStyle}>
        <div style={featuredStyle}>
          <QrReader
            ref="scanner"
            delay={this.state.delay}
            style={previewStyle}
            onError={this.handleError}
            onScan={this.handleScan}
            showViewFinder={false}
            facingMode="environment"
            legacyMode={legacyMode}
          />
          {legacyMode && (
            <a
              className="btn btn-primary mt-6 md-5"
              onClick={this.openImageDialog.bind(this)}
            >
              Take a picture
            </a>
          )}
          <div className="ocrloader" style={{ position: 'absolute' }}>
            <em></em>
            <div></div>
            <span></span>
          </div>
        </div>
      </div>
    );
  }
}
// class Scan extends React.Component {
//   componentDidMount() {
//     console.log('scanning');
//     window.sound = new Howl({ src: ['/assets/audio/beep.mp3'] });
//     const video = document.createElement('video');
//     const canvasElement = document.getElementById('canvas'); // as HTMLCanvasElement;
//     const canvas = canvasElement.getContext('2d'); // as CanvasRenderingContext2D;

//     $('body').on('click', '#nav-main-x', () => {
//       stop(video.srcObject);
//       // Pushing to the router history
//       this.props.history.push('/');
//     });
//     function stop(stream) {
//       if (stream) {
//         stream.getTracks().forEach((track) => {
//           track.stop();
//         });
//         scanning.stop();
//       } else {
//         return null;
//       }
//     }
//     // Use facingMode: environment to attemt to get the front camera on phones
//     navigator.mediaDevices
//       .getUserMedia({ video: { facingMode: 'environment' } })
//       .then((stream) => {
//         video.srcObject = stream;
//         video.setAttribute('playsinline', true); // required to tell iOS safari we don't want fullscreen
//         video.play();
//         scanning.start(video, canvasElement, canvas);
//       })
//       .catch((err) => {
//         console.log(err);
//         alert('Scanner: Please enable camera permissions');
//       });
//   }

//   render() {
//     return template.call(this, {});
//   }
// }

export default withRouter(Scan);
