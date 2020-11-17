import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddRentHouse = () => {

    // const [file, setFile] = useState(null);
    // const [info, setInfo] = useState({});

    // const onBlur = (e) => {
    //     const newInfo = { ...info };
    //     newInfo[e.target.name] = e.target.value;
    //     setInfo(newInfo)
    // }

    // const handleFileChange = (e) => {
    //     const newFile = e.target.files[0];
    //     setFile(newFile);
    // }

    // console.log(info);

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {

        // const formData = new FormData()
        // formData.append('file', file);
        // formData.append('title', info.title);
        // formData.append('price', info.price);
        // formData.append('location', info.location);
        // formData.append('bedroom', info.bedroom);
        // formData.append('bathroom', info.bathroom);
        // console.log(formData);

        const jsonData = JSON.stringify(data);
        const formData = new FormData();
        formData.append("image", data.image[0]);
        formData.append("data", jsonData);
  
        console.log(data);

        fetch('https://apartment-hunt-simple.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if(data){
                alert("Added your service")
            }
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div>
            <div className="">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div id="formBox">
                        <div className="inputBoxes">
                            <input 
                            ref={register({
                                required: "Name is required",
                            })} 
                            className='input' type="text" name="title" placeholder="Title" />
                            <input
                            ref={register({
                                required: "Name is required",
                            })}
                             className='input' type="text" name="price" placeholder="Price" /> <br />


                            <input 
                            ref={register({
                                required: "Name is required",
                            })}  className='input' type="text" name="location" placeholder="Location" />

                            <input 
                            ref={register({
                                required: "Name is required",
                            })}
                             className='input' type="text" name="bedroom" placeholder="No of bedroom" /> <br />

                            <input
                             ref={register({
                                required: "Name is required",
                            })}
                             className='input' type="text" name="bathroom" placeholder="No of bathroom" />

                            <input ref={register({
                                required: "Name is required",
                            })} className='input' type="file" name="image" />
                        </div>
                    </div>
                    <input className='allButtons submitBtn' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default AddRentHouse;