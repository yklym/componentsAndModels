import React from 'react';
import { LocalForm, Control } from 'react-redux-form';
import { FormLabel, Modal, ModalBody, Button } from 'react-bootstrap';

export const RegisterModal = ({ show, closeModal }) => {

    function onSubmit(val) {
        alert(JSON.stringify(val));
    }

    return (
        <Modal show={show}>
            {/* <Modal.Header>Register</Modal.Header> */}
            <ModalBody>
                <div className="d-flex">
                    <h1 className="h2 mt-2">Create an uccount</h1>
                    <a onClick={closeModal} className="ml-auto" style={{ cursor: 'pointer' }}>
                        <span aria-hidden="true" className="h1">&times;</span>
                    </a>
                </div>
                <LocalForm className="user container" onSubmit={onSubmit}>
                    <div className="form-group row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <Control.text className="form-control form-control-user" id="firstname" model=".firstname" placeholder="First name" required />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <Control.text className="form-control form-control-user" id="lastname" model=".lastname" placeholder="Last name" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col">
                            <Control.text className="form-control form-control-user" type="email" id="email" model=".email" placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className=" col-sm-12 col-md-6 col-lg-6">
                            <Control.text className="form-control form-control-user" id="password" model=".password" placeholder="Password" />
                        </div>
                        <div className=" col-sm-12 col-md-6 col-lg-6">
                            <Control.text className="form-control form-control-user" id="passwordRepeat" model=".passwordRepeat" placeholder="Repeat password" />
                        </div>
                    </div>
                    <Button type="submit" className="btn btn-primary btn-user btn-block">Register</Button>
                    <hr />
                    <div className="row">
                        <div className="col">
                            <Button className="btn btn-google btn-user btn-block"> <i className="fab fa-google fa-fw"></i>
                            Sign in with Google</Button>
                        </div>
                        <div className="col">
                            <Button className="btn btn-facebook btn-user btn-block"> <i className="fab fa-facebook-f fa-fw"></i>
                            Sign in with Facebook</Button>
                        </div>
                    </div>
                </LocalForm>
                <hr />
                <a href="#" className="text-center"><p>Already have an account?</p></a>
            </ModalBody>
            {/* <Modal.Footer>This is the footer</Modal.Footer> */}
        </Modal>
    )
}