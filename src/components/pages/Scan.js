import React from 'react';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';
import scanning from '../../lib/scanner';
import template from '../../templates/pages/scan.pug';

class Scan extends React.Component {
  componentDidMount() {
    console.log('scanning');

    const video = document.createElement('video');
    const canvasElement = document.getElementById('canvas'); // as HTMLCanvasElement;
    const canvas = canvasElement.getContext('2d'); // as CanvasRenderingContext2D;

    // Use facingMode: environment to attemt to get the front camera on phones
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: 'environment' } })
      .then((stream) => {
        video.srcObject = stream;
        video.setAttribute('playsinline', true); // required to tell iOS safari we don't want fullscreen
        video.play();
        scanning.start(video, canvasElement, canvas);
        $('body').on('click', '#nav-main-x', () => {
          stream.getTracks().forEach((track) => {
            track.stop();
          });
          scanning.stop();

          // Pushing to the router history
          this.props.history.push('/');
        });
      });
  }

  render() {
    return template.call(this, {});
  }
}

export default withRouter(Scan);
