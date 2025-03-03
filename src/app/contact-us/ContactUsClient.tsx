"use client";

import React from "react";
import { SetStateAction, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser";
import { SendPageDataToDataLayer } from "../hooks/analyticsProvider";
import ContactUsSections from "../sections/contactUs";

const ContactUsClient = () => {
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     SendPageDataToDataLayer();
  //   }, 500);
  // }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [fname, setFName] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [lname, setLName] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email, setEmail] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [phone, setPhone] = useState<number | "">("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [emailError, setEmailError] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [phoneError, setPhoneError] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [message, setMessage] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formComplete, setFormComplete] = useState(true); // State to track form completion

  const handleEmailChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
    // Reset email error when user types in the email field
    setEmailError("");
  };

  // const handlePhoneChange = (e: { target: { value: string } }) => {
  //   const value = e.target.value;
  //   // Remove non-digit characters before setting the state
  //   const normalizedPhone = value.replace(/\D/g, ""); // Remove non-numeric characters
  //   setPhone(normalizedPhone === "" ? "" : parseInt(normalizedPhone));
  // };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate email before submitting the form
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return; // Do not proceed with form submission
    }

    if (!validateForm()) {
      // If form is incomplete, set formComplete to false
      setFormComplete(false);
      return;
    }

    // if (!validatePhone(phone)) {
    //   setPhoneError("Please enter a valid phone number.");
    // } else {
    //   setPhoneError("");
    // }

    // Handle form submission logic here if needed

    const serviceId: string = "service_pwtrv1z";
    const templateId: string = "template_5y6afgs";
    const publicKey: string = "VURwmCwyXSVYDqwmG";

    const templateParams = {
      from_name: fname + " " + lname,
      from_email: email,
      to_name: "Naxiums Limited",
      message: message,
    };

    //Send the email using Emailjs

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setFName("");
        setLName("");
        setEmail("");
        setMessage("");
        setFormComplete(true); // Set formComplete to true after successful submission
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  const validateForm = () => {
    // Check if fname, lname, email, and message are not empty
    const isFNameValid = fname.trim() !== ""; // Check if First Name is not empty
    const isLNameValid = lname.trim() !== ""; // Check if Last Name is not empty
    const isEmailValid = validateEmail(email); // Check if Email is valid
    const isMessageValid = message.trim() !== ""; // Check if Message is not empty

    return isFNameValid && isLNameValid && isEmailValid && isMessageValid;
  };

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // const validatePhone = (phone: number | "") => {
  //   const re = /^\d{10}$/; // Assuming a 10-digit phone number format
  //   return typeof phone === "number" && re.test(phone.toString());
  // };

  return (
    <section className="text-gray-600 body-font">
      <div className="container-fluid mx-auto our-service-bg banner-bg-specs py-32 w-full items-center justify-center flex">
        <div className="text-left container relative w-full">
          <div className="flex ms-5 md:ms-0 items-center">
            <div
              className="h-6 mb-2 w-1 mr-2"
              style={{
                background: "linear-gradient(to right, #02f0f1, #024868)",
              }}
            ></div>
            <p className="text-3xl text-gray-900 font-medium title-font mb-2">
              Contact Us
            </p>
          </div>
        </div>
      </div>

      <ContactUsSections showSideText={true} />
    </section>
  );
};

export default ContactUsClient;
