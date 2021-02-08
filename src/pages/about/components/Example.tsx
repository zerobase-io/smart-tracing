/* Bootstrap */
import Alert from 'react-bootstrap/Alert';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';

/* Images */
import GreenCheck from '@/images/green-check.png';
import Logo from '@/images/branding/zerobase/logo.svg';

type ExampleProps = {
    show: boolean;
    handleClose: Function;
};

const Example = ({ show, handleClose }: ExampleProps) => (
    <Modal centered onHide={handleClose} show={show}>
        <Modal.Header className="flex-column-reverse border-0" closeButton>
            <Image alt="Zerobase Logo" className="mx-auto w-75" src={Logo} />
        </Modal.Header>
        <Modal.Body>
            <Alert variant={'success'} className="text-center">
                Success!
            </Alert>
            <Image alt="Success Checkmark" className="d-block mx-auto" src={GreenCheck} />
        </Modal.Body>
        <Modal.Footer className="border-0 text-center">
            <p className="mx-auto">
                Scanning into locations is easy!
                <br />
                Close this window to continue reading about what happens next!
            </p>
        </Modal.Footer>
    </Modal>
);

export default Example;
