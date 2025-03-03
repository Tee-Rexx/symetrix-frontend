import React from "react";
import { SetStateAction, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser";

type ContactUsSectionsProps = {
  showSideText?: boolean;
  sideHeading?: string;
  sidePara?: string;
};

const ContactUsSections = ({
  showSideText,
  sideHeading,
  sidePara,
}: ContactUsSectionsProps) => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [fNameError, setFNameError] = useState("");
  const [lNameError, setLNameError] = useState("");
  const [message, setMessage] = useState("");
  const [formComplete, setFormComplete] = useState(true); // State to track form completion

  const handleEmailChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleLNameChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setLName(e.target.value);
    setLNameError("");
  };

  const handleFNameChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setFName(e.target.value);
    setFNameError("");
  };

  // const handlePhoneChange = (e: { target: { value: string } }) => {
  //   const value = e.target.value;
  //   // Remove non-digit characters before setting the state
  //   const normalizedPhone = value.replace(/\D/g, ""); // Remove non-numeric characters
  //   setPhone(normalizedPhone === "" ? "" : parseInt(normalizedPhone));
  // };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (fname.trim() === "") {
      setFNameError("Please enter first name.");
    }
    if (lname.trim() === "") {
      setLNameError("Please enter last name.");
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
    }

    if (!validateForm()) {
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
    // const isMessageValid = message.trim() !== ""; // Check if Message is not empty

    return isFNameValid && isLNameValid && isEmailValid;
  };

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="container flex flex-wrap py-24 mx-auto  items-center">
      <div
        className={`${
          showSideText ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 w-full"
        } grid gap-10 md:gap-0 mt-10`}
      >
        {/* Left Section */}
        {showSideText ? (
          <div className="md:pr-12 md:py-8 h-full md:border-r md:border-b-0 pb-10 border-b border-gray-200 flex flex-col justify-center text-left">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              {sideHeading}
            </h1>
            <p className="leading-relaxed text-base text-gray-400">
              {sidePara}
            </p>
          </div>
        ) : (
          ""
        )}

        {/* Right Section (Form) */}
        <div className="w-full flex justify-center">
          <div
            className={` ${
              showSideText ? "lg:w-4/5 w-full md:w-2/3" : "w-full"
            }  p-7 rounded-xl bg-[rgba(23,23,23,0.7)] shadow-2xl`}
          >
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              onSubmit={handleFormSubmit}
            >
              {/* First Name */}
              <div>
                <TextField
                  id="standard-basic"
                  label="First Name"
                  error={Boolean(fNameError)}
                  helperText={fNameError}
                  variant="standard"
                  className="w-full"
                  sx={{
                    "& .MuiInputBase-input": {
                      color: "white",
                      fontSize: "18px",
                    },
                    "& .MuiInputLabel-root": {
                      color: "white",
                      fontSize: "18px",
                    },
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "white", // Default underline color
                    },
                    "& .MuiInput-underline:hover:before": {
                      borderBottomColor: "white !important", // Underline color on hover
                    },
                  }}
                  value={fname}
                  onChange={handleFNameChange}
                />
              </div>

              {/* Last Name */}
              <div>
                <TextField
                  id="standard-basic"
                  label="Last Name"
                  error={Boolean(lNameError)}
                  helperText={lNameError}
                  variant="standard"
                  className="w-full"
                  sx={{
                    "& .MuiInputBase-input": {
                      color: "white",
                      fontSize: "18px",
                    },
                    "& .MuiInputLabel-root": {
                      color: "white",
                      fontSize: "18px",
                    },
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "white", // Default underline color
                    },
                    "& .MuiInput-underline:hover:before": {
                      borderBottomColor: "white !important", // Underline color on hover
                    },
                  }}
                  value={lname}
                  onChange={handleLNameChange}
                />
              </div>

              {/* Email (Full Width) */}
              <div className="col-span-1 md:col-span-2">
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
                      color: "white",
                      fontSize: "18px",
                    },
                    "& .MuiInputLabel-root": {
                      color: "white",
                      fontSize: "18px",
                    },
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "white", // Default underline color
                    },
                    "& .MuiInput-underline:hover:before": {
                      borderBottomColor: "white !important", // Underline color on hover
                    },
                  }}
                />
              </div>

              {/* Message (Full Width) */}
              <div className="col-span-1 md:col-span-2">
                <TextField
                  id="standard-multiline-static"
                  label="How we can help you? (optional)"
                  multiline
                  rows={4}
                  variant="standard"
                  className="w-full"
                  sx={{
                    "& .MuiInputBase-input": {
                      color: "white",
                      fontSize: "18px",
                    },
                    "& .MuiInputLabel-root": {
                      color: "white",
                      fontSize: "18px",
                    },
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "white", // Default underline color
                    },
                    "& .MuiInput-underline:hover:before": {
                      borderBottomColor: "white !important", // Underline color on hover
                    },
                  }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              {/* Submit Button (Full Width) */}
              <div className="col-span-1 md:col-span-2 mt-2">
                <Button
                  className="w-full submit-btn"
                  variant="contained"
                  type="submit"
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactUsSections.defaultProps = {
  showSideText: true,
  sideHeading: "Gateway to seamless solutions",
  sidePara:
    "Whether you have a query, opportunity, or just want to explore your options, our team is here to support you every step. Connect with us today and pave the path to success.",
};

export default ContactUsSections;
