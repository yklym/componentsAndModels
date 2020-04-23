import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Modal, ModalBody, Button } from 'react-bootstrap';
import { AuthContext } from '../../contexts/authContext';
import { AuthService } from '../../services/authService';

export const LoginModal = ({ show, closeModal, onRegister }) => {

    const { register, handleSubmit } = useForm();

    const { setUser } = useContext(AuthContext);

    const onSubmit = (value) => {
        AuthService.loginUser(value)
        .then(user => {
            setUser(user);
            closeModal();
        }).catch(err=>{
            // 
        });
    }

    return (
        <Modal show={show}>
            <ModalBody>
                <div className="d-flex">
                    <h1 className="h2 mt-2">Login</h1>
                    <a onClick={closeModal} className="ml-auto" style={{ cursor: 'pointer' }}>
                        <span aria-hidden="true" className="h1">&times;</span>
                    </a>
                </div>

                <form className="user container" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group row">
                        <input type="text" className="form-control form-control-user" type="email" id="email"
                            name="email" placeholder="Email" ref={register} />
                    </div>
                    <div className="form-group row">
                        <input type="password" className="form-control form-control-user" id="password" name="password" required minLength="3"
                            placeholder="Password" ref={register} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-user btn-block">Login</button>
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
                <a href="#" className="text-center" onClick={onRegister}><p>Don't have an account?</p></a>
            </ModalBody>
        </Modal>
    )
}