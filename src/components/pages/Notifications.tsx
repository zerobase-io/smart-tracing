import React from 'react';

const Notifications = () => (
  <div className="content">
    <div className="container" style={{ padding: 0 }}>
      <div className="container">
        <h4 className="text-muted">You currently have no notifications.</h4>
        <p className="text-muted">
          If the device ID has coincided with another device ID confirmed with a positive test
          result, you will be notified here. If your local public health requests you share your
          public key, you will also be notified. Your participation is optional and your device ID
          is never revealed.
        </p>
      </div>
    </div>
  </div>
);

export default Notifications;
