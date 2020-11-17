import React, { useState } from 'react';

const AddRentHouse = () => {

    const [file, setFile] = useState(null);
    const [info, setInfo] = useState({});

    const onBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    console.log(info);

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('price', info.price);
        formData.append('location', info.location);
        formData.append('bedroom', info.bedroom);
        formData.append('bathroom', info.bathroom);
        console.log(formData);

        fetch('http://localhost:8080/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <div className="">
                <form onSubmit={handleSubmit}>
                    <div id="formBox">
                        <div className="inputBoxes">
                            <input className='input' type="text" name="title" placeholder="Title" onBlur={onBlur} />
                            <input className='input' type="text" name="price" placeholder="Price" onBlur={onBlur} /> <br />
                            <input className='input' type="text" name="location" placeholder="Location" onBlur={onBlur} />
                            <input className='input' type="text" name="bedroom" placeholder="No of bedroom" onBlur={onBlur} /> <br />
                            <input className='input' type="text" name="bathroom" placeholder="No of bathroom" onBlur={onBlur} />
                            <input className='input' type="file" name="image" onChange={handleFileChange} />
                        </div>
                    </div>
                    <input className='allButtons submitBtn' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default AddRentHouse;