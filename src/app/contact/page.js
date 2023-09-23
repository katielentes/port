"use client";
import React, { useState } from "react";

const ContactPage = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState("Send");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      try {
        const res = await fetch("/api/sendgrid", {
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            fullname: fullname,
            subject: subject,
            message: message,
          }),
          method: "POST",
        });
        if (res) {
          setShowSuccessMessage(true);
          setShowFailureMessage(false);
          setButtonText("Send");
        } else {
          setShowSuccessMessage(false);
          setShowFailureMessage(true);
          setButtonText("Send");
        }
      } catch (error) {
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      } finally {
        setFullname("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
    }
  };

  return (
    <div className="pt-4 w-full flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-base-200 w-[90%] max-w-[800px]"
      >
        <h1 className="text-2xl font-bold dark:text-gray-50">
          Send me a message :)
        </h1>

        <label
          htmlFor="fullname"
          className="text-gray-500 font-light mt-8 dark:text-gray-50"
        >
          Full name<span className="text-red-500 dark:text-gray-50">*</span>
        </label>
        <input
          type="text"
          name="fullname"
          value={fullname}
          onChange={(e) => {
            setFullname(e.target.value);
          }}
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 font-light text-gray-500"
        />

        <label
          htmlFor="email"
          className="text-gray-500 font-light mt-4 dark:text-gray-50"
        >
          E-mail<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 font-light text-gray-500"
        />

        <label
          htmlFor="subject"
          className="text-gray-500 font-light mt-4 dark:text-gray-50"
        >
          Subject<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="subject"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 font-light text-gray-500"
        />

        <label
          htmlFor="message"
          className="text-gray-500 font-light mt-4 dark:text-gray-50"
        >
          Message<span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 font-light text-gray-500"
        ></textarea>
        <div className="flex flex-row justify-start items-end">
          <button className="px-6 mt-8  text-gray-50 btn bg-secondary">
            {buttonText} 🌼
          </button>
          {showFailureMessage && (
            <p className="error text-center pl-2">Error sending message</p>
          )}
          {showSuccessMessage && (
            <p className="success text-center pl-2">Successfully sent</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
