import React from 'react';
import "./Contact.css";
import contactimg from "../IMages/contact.png";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b1b5fa41-a58c-4a88-a62f-5dd5ab9ff1db");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
     
      event.target.reset();
      setResult(data.message)
     
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>

        <div className='col1'>
            <img src={contactimg} alt=''></img>
        </div>

        <div className='col2'>
        <form onSubmit={onSubmit}>
                <p >Name</p>
                <input type="text"  placeholder='Enter name' name="name" required></input>
             
                <p>Phone Number</p>
                <input type="number"  placeholder='Enter Phone' name='phone' required></input>

                <p >Write your message here</p>
                <textarea type="text" placeholder='enter your massege' name='message' rows={5}  required></textarea>
                <button type='submit' className='btn'>Submit now</button>
            </form>
            <span>{result}</span>

        </div>
        
    </div>
  )
}
