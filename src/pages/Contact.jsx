import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = 'Spel8tJNCNHTwOC7R';
  const sendEmail = (e) => {
    e.preventDefault();
    setMessageSent(true);
    console.log(SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div
      className="contact-wrapper bg-[#100F15] z-[10] relative h-[90%]"
      id="contact"
    >
      <div className="contact-wrapper-header absolute w-[100%] text-center flex justify-center items-center top-0">
        <h1 className="text-3xl bg-[#100F15] p-5 z-[5] text-center text-white">
          Contact
        </h1>
        <hr className="w-[50%] absolute z-[2] opacity-50 h-px bg-red-400 border-0"></hr>
      </div>
      <div className="contact-content h-[100%] flex w-full items-center justify-center gap-[5%]">
        {!messageSent ? (
          <div className="form-wrapper">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-10  justify-center [&>*]:p-2  [&>*]:border-[#e7e5e5] [&>*]:border-[0.5px] [&>*]:rounded-lg [&>*]:bg-[#191629] [&>*]:text-white"
            >
              <input
                className="w-[450px] h-[35px] focus:bg-slate-600"
                type={"text"}
                placeholder="Name..."
                required
                name="name"
                id="name"
              ></input>
              <input
                className="w-[450px] h-[35px] focus:bg-slate-600"
                type={"email"}
                placeholder="Email..."
                required
                name="email"
                id="email"
              ></input>
              <input
                className="w-[450px] h-[35px] focus:bg-slate-600"
                type={"number"}
                placeholder="Phone Number (Optional)..."
                name="phone"
                id="number"
              ></input>
              <textarea
                className="w-[450px] h-[200px] focus:bg-slate-600 resize-none"
                placeholder="Message..."
                required
                name="message"
                id="message"
              ></textarea>
              <button
                className="p-5 text-white hover:bg-slate-600"
                value="Send"
              >
                Message Me!
              </button>
            </form>
          </div>
        ) : (
          <div className="thanks-wrapper flex flex-col gap-10  justify-center [&>*]:text-white w-[450px] items-center text-2xl border-2 py-20">
            <p>Message sent!</p>
            <p>Thank you for contacting me</p>
            <p>I will contact you shortly</p>
          </div>
        )}
        <div className="contact-info-wrapper flex flex-col gap-10">
          <a
            href="mailto:unartcs@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-google-plain text-center text-red-500 flex gap-2 text-2xl hover:text-slate-300">
              <p>Email (unartcs@gmail.com)</p>
            </i>
          </a>

          <a
            href="https://www.linkedin.com/in/daniel-cohen-dc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-linkedin-plain text-center text-red-500 flex gap-2 text-2xl hover:text-slate-300">
              <p>Linkedin (@daniel-cohen-dc)</p>
            </i>
          </a>
          <a
            href="https://github.com/unartcs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-github-plain icon text-center text-red-500 flex gap-2 text-2xl hover:text-slate-300">
              <p>Github (@unartcs)</p>
            </i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
