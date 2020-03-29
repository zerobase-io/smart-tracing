import React from 'react';

import Modal from 'react-bootstrap/Modal';

type Props = {
  show: boolean;
};

const RegisterNoticeModal = ({ show }: Props) => (
  <Modal id="modal-register-notice" show={show}>
    <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-body text-center py-5">
          <h3>Device Registration</h3>
          <div className="text-muted">
            By continuing you agree to automatically register this device. You only need to do this
            once.
            <br />
            <br />
            We do not ask for any personally identifiable information and do not store any personal
            non anonymized data. Please view our Security section for more details
          </div>
        </div>
        <div className="modal-footer">
          <a className="btn btn-primary btn-block" href="#" id="register-notice-agree">
            Agree and Continue
          </a>
          <a className="btn btn-secondary btn-block" href="#" data-dismiss="modal">
            Cancel
          </a>
        </div>
      </div>
    </div>
  </Modal>
);

export default RegisterNoticeModal;
