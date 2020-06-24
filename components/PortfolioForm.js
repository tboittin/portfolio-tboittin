

import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";


const Portfolioform = ({onSubmit}) => {
    const {register, handleSubmit, setValue } = useForm();
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    useEffect(() => {
        register({name: 'startDate'});
        register({name: 'endDate'});
    }, [register])

    const handleStartDate = (date) => {
        setStartDate(date);
        setValue('startDate', date);
    }

    const handleEndDate = (date) => {
        setEndDate(date);
        setValue('endDate', date);
    }

    const handleDateChange = (dateType, setDate) => date => {
        
        setValue(dateType, date);
        setDate(date);
    }
    
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
                <label htmlFor="city">Company</label>
                <input
                    ref={register}
                    name="company"
                    type="text"
                    className="form-control"
                    id="company"
                />
            </div>

            <div className="form-group">
                <label htmlFor="city">Company Website</label>
                <input
                    ref={register}
                    name="companyWebsite"
                    type="text"
                    className="form-control"
                    id="companyWebsite"
                />
            </div>

            <div className="form-group">
                <label htmlFor="street">Location</label>
                <input
                    ref={register}
                    name="location"
                    type="text"
                    className="form-control"
                    id="location"
                />
            </div>

            <div className="form-group">
                <label htmlFor="street">Job Title</label>
                <input
                    ref={register}
                    name="jobTitle"
                    type="text"
                    className="form-control"
                    id="jobTitle"
                />
            </div>

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

            <div className="form-group">
                <label htmlFor="startDate">Start Date</label>
                <div>
                    <DatePicker
                        showYearDropdown
                        dateFormat="dd/MM/yyyy"
                        selected={startDate} 
                        onChange={handleDateChange('startDate', setStartDate)} 
                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="endDate">End Date</label>
                <div>
                    <DatePicker
                        showYearDropdown
                        dateFormat="dd/MM/yyyy"
                        selected={endDate} 
                        onChange={handleDateChange('endDate', setEndDate)} 
                    />
                </div>
            </div>
            <button
                type="submit"
                className="btn btn-primary">Create
            </button>
        </form>
    )
}

export default Portfolioform