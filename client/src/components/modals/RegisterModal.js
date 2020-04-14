import React from 'react';
import {Modal, ModalBody, Button} from 'react-bootstrap';
import {useForm} from 'react-hook-form'

export const RegisterModal = ({show, closeModal}) => {
    const {register, handleSubmit} = useForm();

    function onSubmit(data) {
        if (data.passwordRepeat !== data.password) {
            //    do smth, idk idc
            console.log("passwords dont match")
            return;
        }
        console.log(data);

        const url = "api/register"
        fetch(url, {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        })
            .then(res=>{
            if (res.code === 404){
            //    do smth again, idgf
            }
            return res.json();
        }).then(parseRes=>{
            closeModal();
            console.log(parseRes);
        });
    }

return (
    <Modal show={show}>
        {/* <Modal.Header>Register</Modal.Header> */}
        <ModalBody>
            <div className="d-flex">
                <h1 className="h2 mt-2">Create an uccount</h1>
                <a onClick={closeModal} className="ml-auto" style={{cursor: 'pointer'}}>
                    <span aria-hidden="true" className="h1">&times;</span>
                </a>
            </div>
            <form className="user container" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <input type="text" className="form-control form-control-user" id="firstname" name="firstname"
                               placeholder="First name" required ref={register}/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <input type="text" className="form-control form-control-user" id="lastname" name="lastname"
                               placeholder="Last name" ref={register}/>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col">
                        <input type="text" className="form-control form-control-user" type="email" id="email"
                               name="email" placeholder="Email" ref={register}/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className=" col-sm-12 col-md-6 col-lg-6">
                        <input type="text" className="form-control form-control-user" id="password" name="password"
                               placeholder="Password" ref={register}/>
                    </div>
                    <div className=" col-sm-12 col-md-6 col-lg-6">
                        <input type="text" className="form-control form-control-user" id="passwordRepeat"
                               name="passwordRepeat" placeholder="Repeat password" ref={register}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-user btn-block">Register</button>
                <hr/>

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
            <hr/>
            <a href="#" className="text-center"><p>Already have an account?</p></a>
        </ModalBody>
        {/* <Modal.Footer>This is the footer</Modal.Footer> */}
    </Modal>
)
}