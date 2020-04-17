// Temporary disable the eslint run `no-undef` because of the global $ (jQuery)
/* eslint no-undef: 0 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import { Howl } from 'howler';
import scanning from '../../lib/scanner';
import template from '../../templates/pages/scan.pug';

class Scan extends React.Component {
  componentDidMount() {
    console.log('scanning');
    window.sound = new Howl({ src: ['/assets/audio/beep.mp3'] });
    const video = document.createElement('video');
    const canvasElement = document.getElementById('canvas'); // as HTMLCanvasElement;
    const canvas = canvasElement.getContext('2d'); // as CanvasRenderingContext2D;

    $('body').on('click', '#nav-main-x', () => {
      stop(video.srcObject);
      // Pushing to the router history
      this.props.history.push('/');
    });
    function stop(stream) {
      if (stream) {
        stream.getTracks().forEach((track) => {
          track.stop();
        });
        scanning.stop();
      } else {
        return null;
      }
    }
    // Use facingMode: environment to attemt to get the front camera on phones
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: 'environment' } })
      .then((stream) => {
        video.srcObject = stream;
        video.setAttribute('playsinline', true); // required to tell iOS safari we don't want fullscreen
        video.play();
        scanning.start(video, canvasElement, canvas);
      })
      .catch((err) => {
        console.log(err);
        alert('Scanner: Please enable camera permissions');
      });
  }

  render() {
    return template.call(this, {});
  }
}

export default withRouter(Scan);
