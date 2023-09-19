import React from "react";

function Contact() {
  return (
    <div className="contact-wrapper bg-[#100F15] z-[10] relative h-[90%]">
      <div className="contact-wrapper-header absolute w-[100%] text-center flex justify-center items-center top-0">
        <h1 className="text-3xl bg-[#100F15] p-5 z-[5] text-center text-white">
          Contact
        </h1>
        <hr className="w-[50%] absolute z-[2] opacity-50 h-px bg-red-400 border-0"></hr>
      </div>
      <div className="contact-content h-[100%] flex w-full items-center justify-center gap-[5%]">
        <div className="form-wrapper">
          <form className="flex flex-col gap-10  justify-center [&>*]:p-2  [&>*]:border-[#e7e5e5] [&>*]:border-[0.5px] [&>*]:rounded-lg [&>*]:bg-[#191629] [&>*]:text-white">
            <input
              className="w-[450px] h-[35px] focus:bg-slate-600"
              type={"text"}
              placeholder="Name..."
            ></input>
            <input
              className="w-[450px] h-[35px] focus:bg-slate-600"
              type={"email"}
              placeholder="Email..."
            ></input>
            <input
              className="w-[450px] h-[35px] focus:bg-slate-600"
              type={"number"}
              placeholder="Phone Number (Optional)..."
            ></input>
            <textarea
              className="w-[450px] h-[200px] focus:bg-slate-600 resize-none"
              type={"text"}
              placeholder="Message..."
            ></textarea>
            <button className="p-5 text-white hover:bg-slate-600">
              Message Me!
            </button>
          </form>
        </div>
        <div className="contact-info-wrapper flex flex-col gap-10 mb-32">
          <a href="mailto:unartcs@gmail.com">
            <i className="devicon-google-plain text-center text-red-500 flex gap-2 text-2xl hover:text-slate-300">
              <p>Email (unartcs@gmail.com)</p>
            </i>
          </a>

          <a href="https://www.linkedin.com/in/daniel-cohen-dc/">
            <i className="devicon-linkedin-plain text-center text-red-500 flex gap-2 text-2xl hover:text-slate-300">
              <p>Linkedin (@daniel-cohen-dc)</p>
            </i>
          </a>
          <a href="https://github.com/unartcs">
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
