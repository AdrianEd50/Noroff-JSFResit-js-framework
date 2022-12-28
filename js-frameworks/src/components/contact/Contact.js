import React from "react";
import Heading from "../layout/Heading";
import FormValidation from "./FormValidation";

function Contact() {
  return (
    <>
      <div className="wrapper">
        <Heading content="Contact us" />
        <FormValidation />
      </div>
      <footer>copyright&copy;</footer>
    </>
  );
}

export default Contact;
