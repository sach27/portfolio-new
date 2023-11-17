import "./FormStyle.css"
import React from 'react'

function form() {
  return (
    <div className="form">
        <form action="https://getform.io/f/1a47874f-e7a4-4017-80ea-a597e4190e23" method="POST">
            <label id="10">Your Name</label>
            <input type="text" id="1" name="name"></input>
            <label id="11" >Email</label>
            <input type="text" id="2" name="email"></input>
            <label id="12">Subject</label>
            <input type="text" id="3" name="subject"></input>
            <label id="13">Message</label>
            <textarea placeholder="Type your message here" id="69" name="message" rows="6"/>
            <button className="btn" id="4">Submit</button>
        </form>
    </div>
  )
}

export default form
