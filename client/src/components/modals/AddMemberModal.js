import React from 'react'

import { Modal, ModalBody } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export const AddMemberModal = ({ show, closeModal }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = ({ email }) => {
        toast.info(`We will invite the user with email ${email} to join your team!`);
        closeModal();
    }

    return (
        <Modal show={show}>
            <ModalBody>
                <div className="d-flex">
                    <h1 className="h2 mt-2">Add team member</h1>
                    <i onClick={closeModal} className="ml-auto" style={{ cursor: 'pointer' }}>
                        <span aria-hidden="true" className="h1">&times;</span>
                    </i>
                </div>

                <form className="container" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="email" name="email" id="email" className="form-control" placeholder="mail@mail.com"
                            ref={register} />
                    </div>

                    <button type="submit" className="btn btn-primary">Send invite</button>
                </form>
            </ModalBody>
        </Modal>
    )
}
