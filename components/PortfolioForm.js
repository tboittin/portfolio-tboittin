

import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";


const Portfolioform = ({onSubmit, initialData = {}}) => {
    const {register, handleSubmit, setValue } = useForm({defaultValues: initialData});

    useEffect(() => {
        register({name: 'startDate'});
        register({name: 'endDate'});
    }, [register])

    useEffect(() => {
        const {startDate, endDate} = initialData
        if (startDate) { setStartDate(new Date(startDate))}
        if (endDate) { setEndDate(new Date(endDate))}
    }, [initialData])
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    ref={register}
                    name="title"
                    type="text"
                    className="form-control"
                    id="title"
                />
            </div>

            <div className="form-group">
                <label htmlFor="city">Project Link</label>
                <input
                    ref={register}
                    name="projectLink"
                    type="text"
                    className="form-control"
                    id="projectLink"
                />
            </div>
            
            {/* TODO insert Image */}

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    ref={register}
                    name="description"
                    rows="5"
                    type="text"
                    className="form-control"
                    id="description">
                </textarea>
            </div>
            
            <button
                type="submit"
                className="btn btn-primary"
            >
                Create
            </button>
        </form>
    )
}

export default Portfolioform