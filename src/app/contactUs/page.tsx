"use client";

import { SetStateAction, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email, setEmail] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [phone, setPhone] = useState<number | "">("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [emailError, setEmailError] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [phoneError, setPhoneError] = useState("");

  const handleEmailChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e: { target: { value: string } }) => {
    const value = e.target.value;
    // Remove non-digit characters before setting the state
    const normalizedPhone = value.replace(/\D/g, ''); // Remove non-numeric characters
    setPhone(normalizedPhone === '' ? '' : parseInt(normalizedPhone));
  };

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }

    if (!validatePhone(phone)) {
      setPhoneError("Please enter a valid phone number.");
    } else {
      setPhoneError("");
    }

    // Handle form submission logic here if needed
  };

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePhone = (phone: number | "") => {
    const re = /^\d{10}$/; // Assuming a 10-digit phone number format
    return typeof phone === 'number' && re.test(phone.toString());
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container flex flex-wrap px-5 py-24 mx-auto  items-center border-4">
          <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Gateway to seamless solutions
            </h1>
            <p className="leading-relaxed text-base">
              Whether you have a query, opportunity, or just want to explore
              your options, our team is here to support you every step. Connect
              with us today and pave the path to success
            </p>
          </div>
          <div className="flex flex-col md:w-2/4 ">
            <div className="container px-5 py-24 mx-auto">
              <div className="lg:w-3/5 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <Box
                        component="form"
                        sx={{
                          "& > :not(style)": { mt: 2 },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          id="standard-basic"
                          label="First Name"
                          variant="standard"
                        />
                      </Box>
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <Box
                        component="form"
                        sx={{
                          "& > :not(style)": { mt: 2 },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          id="standard-basic"
                          label="Last Name"
                          variant="standard"
                        />
                      </Box>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <Box
                        component="form"
                        sx={{
                          "& > :not(style)": { mt: 2 },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          id="email"
                          label="Your email"
                          value={email}
                          onChange={handleEmailChange}
                          error={Boolean(emailError)}
                          helperText={emailError}
                          variant="standard"
                          className="w-full"
                        />
                      </Box>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <Box
                        component="form"
                        sx={{
                          "& > :not(style)": { mt: 2 },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          id="phone"
                          label="Phone No."
                          value={phone}
                          variant="standard"
                          className="w-full"
                          onChange={handlePhoneChange}
                          error={Boolean(phoneError)}
                          helperText={phoneError}
                        />
                      </Box>
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
                      />
                    </div>
                  </div>
                  <div className="p-2 mt-4">
                    <form onSubmit={handleFormSubmit}>
                      <Button
                        className="w-[170px] bg-blue-600"
                        variant="contained"
                        endIcon={<SendIcon />}
                        type="submit"
                      >
                        Send
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
function validatePhone(phone: string) {
  throw new Error("Function not implemented.");
}
