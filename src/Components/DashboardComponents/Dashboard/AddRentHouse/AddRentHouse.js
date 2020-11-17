import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddRentHouse = () => {
  const { register, handleSubmit } = useForm();

  // needed states
  const [file, setFile] = useState(null);

  // to handle to file
  const handleFileInput = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  // to submit data from the input form
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", data.title);
    formData.append("price", data.price);
    formData.append("location", data.location);
    formData.append("bedroom", data.bedroom);
    formData.append("bathroom", data.bathroom);
    console.log(formData);

    fetch("http://localhost:8080/addService", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Order placed Successfully");
        }
      });
  };

  return (
    <div>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div id="formBox">
            <div className="inputBoxes">
              <input
                required
                ref={register}
                className="input"
                type="text"
                name="title"
                placeholder="Title"
              />
              <input
                required
                ref={register}
                className="input"
                type="text"
                name="price"
                placeholder="Price"
              />{" "}
              <br />
              <input
                required
                ref={register}
                className="input"
                type="text"
                name="location"
                placeholder="Location"
              />
              <input
                required
                ref={register}
                className="input"
                type="text"
                name="bedroom"
                placeholder="No of bedroom"
              />{" "}
              <br />
              <input
                required
                ref={register}
                className="input"
                type="text"
                name="bathroom"
                placeholder="No of bathroom"
              />
              <input
                required
                ref={register}
                className="input"
                type="file"
                name="image"
                onChange={handleFileInput}
              />
            </div>
          </div>
          <input
            className="allButtons submitBtn"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddRentHouse;
