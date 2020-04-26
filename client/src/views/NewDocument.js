import React from 'react';
import { useForm } from 'react-hook-form';
import { DocumentService } from '../services/documentService';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export const NewDocumet = (props) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (value) => {
        console.log(value);
        toast.info('Your document was added!');
        // DocumentService.addDocument(value)
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(err => console.log(err));

    }

    return (
        <>
            <div className="container-fluid">
                <h1 className="h3 mb-0 text-gray-800 mb-3">Add new document</h1>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="form-group">
                                <label htmlFor="title">Rename file (optional)</label>
                                <input type="text" placeholder="Enter new file name" name="title" className="form-control" ref={register}></input>
                                <span className="text-muted form-text">You can leave uploaded file leaving this field empty</span>
                            </div>

                            <div className="form-group">
                                <label htmlFor="team">Choose team (optional)</label>
                                <select name="team" id="team" className="form-control" ref={register}>
                                    <option value="1">Developers Team</option>
                                    <option value="2">Proj Managment</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="bio">Enter document description (optional)</label>
                                <textarea className="form-control" id="bio" name="bio" ref={register}></textarea>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="form-group">
                                <label htmlFor="file">Upload file</label>
                                <input type="file" name="file" className="form-control-file" label="file" id="file" ref={register}></input>
                            </div>
                        </div>
                        <Link to="/home">
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary" onClick={onSubmit}>Add new document</button>
                            </div>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}