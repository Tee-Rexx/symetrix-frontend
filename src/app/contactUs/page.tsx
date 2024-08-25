"use client";

import { SetStateAction, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser";

const page = () => {
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
      from_name: fname + ' ' + lname,
      from_email: email,
      to_name: "Symmetrix Solution",
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
      <div className="container-fluid mx-auto our-service-bg py-32 w-full items-center justify-center flex">
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
        <div className="container flex flex-wrap px-5 py-24 mx-auto  items-center">
          <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              Gateway to seamless solutions
            </h1>
            <p className="leading-relaxed text-base">
              Whether you have a query, opportunity, or just want to explore
              your options, our team is here to support you every step. Connect
              with us today and pave the path to success
            </p>
          </div>
          <div className="flex flex-col w-full md:w-2/4">
            <div className="container w-full flex justify-center px-0 md:px-5 my-4 py-20 mx-auto">
              <div className="lg:w-4/5 w-full md:w-2/3 p-7 rounded-lg bg-slate-300 ">
                <form
                  className="flex flex-col md:flex-row flex-wrap -m-2"
                  onSubmit={handleFormSubmit}
                >
                  <div className="p-2 w-full md:w-1/2">
                      <TextField
                        id="standard-basic"
                        label="First Name"
                        variant="standard"
                        className="w-full"
                        sx={{
                          "& .MuiInputBase-input": {
                            color: "black", // Set color of input text
                            fontSize: "18px", // Set color of input text
                          },
                          "& .MuiInputLabel-root": {
                            color: "black", // Set color of input text
                            fontSize: "18px", // Set color of input label
                          },
                        }}
                        value={fname}
                        onChange={(e) => setFName(e.target.value)}
                      />
                  </div>
                  <div className="p-2 w-full md:w-1/2">
                      <TextField
                        id="standard-basic"
                        label="Last Name"
                        variant="standard"
                        className="w-full"
                        sx={{
                          "& .MuiInputBase-input": {
                            color: "black", // Set color of input text
                            fontSize: "18px", // Set color of input text
                          },
                          "& .MuiInputLabel-root": {
                            color: "black", // Set color of input text
                            fontSize: "18px", // Set color of input label
                          },
                        }}
                        value={lname}
                        onChange={(e) => setLName(e.target.value)}
                      />
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <TextField
                        id="email"
                        label="Your email"
                        value={email}
                        onChange={handleEmailChange}
                        error={Boolean(emailError)}
                        helperText={emailError}
                        variant="standard"
                        className="w-full"
                        sx={{
                          "& .MuiInputBase-input": {
                            color: "black", // Set color of input text
                            fontSize: "18px", // Set color of input text
                          },
                          "& .MuiInputLabel-root": {
                            color: "black", // Set color of input text
                            fontSize: "18px", // Set color of input label
                          },
                        }}
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative w-full">
                      <TextField
                        id="standard-multiline-static"
                        label="How we can help you? (optional)"
                        multiline
                        rows={4}
                        variant="standard"
                        className="w-full"
                        sx={{
                          "& .MuiInputBase-input": {
                            color: "black", // Set color of input text
                            fontSize: "18px", // Set color of input text
                          },
                          "& .MuiInputLabel-root": {
                            color: "black", // Set color of input text
                            fontSize: "18px", // Set color of input label
                          },
                        }}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="p-2 mt-2">
                    {/* Button for form submission */}
                    <Button
                      className="w-full title-font submit-btn"
                      variant="contained"
                      type="submit"
                    >
                      Send
                    </Button>
                    {!formComplete && (
                      <p
                        style={{
                          color: "red",
                          backgroundColor: "lightpink",
                          padding: "8px",
                        }}
                      >
                        Kindly fill all fields.
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default page;

