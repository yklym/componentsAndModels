import React from 'react';
import { Modal, ModalBody, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { AuthService } from '../../services/authService';
import { useState } from 'react';

export const RegisterModal = ({ show, closeModal, onLogin }) => {
    const { register, handleSubmit } = useForm();
    const [ passwordsEqual, setPasswordsEqual ] = useState(true);

    function onSubmit(data) {
        if (data.passwordRepeat !== data.password) {
            setPasswordsEqual(false);
            console.log("passwords dont match")
            return;
        }
        console.log(data);
        setPasswordsEqual(true);
        AuthService.registerUser(data)
            .then(res => {
                if (res.code === 404) {
                    //    do smth again, idgf
                }
                return res;
            }).then(res => {
                onLogin();
                console.log('response', res);
            }).catch(err => console.log(err));
    }

    return (
        <Modal show={show}>
            <ModalBody>
                <div className="d-flex">
                    <h1 className="h2 mt-2">Create an uccount</h1>
                    <a onClick={closeModal} className="ml-auto" style={{ cursor: 'pointer' }}>
                        <span aria-hidden="true" className="h1">&times;</span>
                    </a>
                </div>
                <form className="user container" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <input type="text" className="form-control form-control-user" id="firstname" name="firstName" required
                                placeholder="First name" required ref={register} />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <input type="text" className="form-control form-control-user" id="lastname" name="lastName" required
                                placeholder="Last name" ref={register} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col">
                            <input type="text" className="form-control form-control-user" type="email" id="email" required
                                name="email" placeholder="Email" ref={register} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <input type="password" className={"form-control form-control-user " + (passwordsEqual ? '' : 'is-invalid')} id="password" name="password" required
                                placeholder="Password" ref={register} />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <input type="password" className={"form-control form-control-user " + (passwordsEqual ? '' : 'is-invalid')} id="passwordRepeat" required
                                name="passwordRepeat" placeholder="Repeat password" ref={register} />
                        </div>
                        <div className="col-12 text-danger">
                            <div className="text-center">{passwordsEqual ? '' : 'Passwords differ'}</div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-user btn-block">Register</button>
                    <hr />

                    <div className="row">
                        <div className="col">
                            <Button className="btn btn-google btn-user btn-block"> <i className="fab fa-google fa-fw"></i>
                            Sign in with Google</Button>
                        </div>
                        <div className="col">
                            <Button className="btn btn-facebook btn-user btn-block"> <i
                                className="fab fa-facebook-f fa-fw"></i>
                            Sign in with Facebook</Button>
                        </div>
                    </div>
                </form>
                <hr />
                <a href="#" className="text-center" onClick={onLogin}><p>Already have an account?</p></a>
            </ModalBody>
        </Modal>
    )
}