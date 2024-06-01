import { Box, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { FaPhone } from 'react-icons/fa';
import { Fa4 } from 'react-icons/fa6';
import { IoIosContact } from 'react-icons/io';
import {
  MdAccountCircle,
  MdOutlineEmail,
  MdOutlinePhone,
} from 'react-icons/md';

const NewsLetter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const response = axios.post(
        'http://localhost:3000/api/subscriber',
        formData,
      );
      console.log('Form submitted succeccfully', response.data);
    } catch (e) {
      console.log(e);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('form submission');
  //   const smtpUser = import.meta.env.VITE_EMAIL_USER;
  //   const smtpPass = import.meta.env.VITE_EMAIL_PASS;
  //   const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
  //   try {
  //     Email.send({
  //       SecureToken: 'c3c49119-2f49-449b-aeb0-f1eef4ac2d86',
  //       To: adminEmail,
  //       From: smtpUser,
  //       Subject: 'This is the subject',
  //       Body: `Name: ${formData.name}<br>Email: ${formData.email}<br>Contact Number: ${formData.contactNumber}<br>Message: ${formData.message}`,
  //     }).then((response) => {
  //       console.log(response);
  //     });
  //     console.log('Email sent successfully');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // document
  //   .getElementById('contactForm')
  //   ?.addEventListener('submit', function (event) {
  //     event.preventDefault();

  //     const smtpUser = import.meta.env.VITE_EMAIL_USER;
  //     const smtpPass = import.meta.env.VITE_EMAIL_PASS;
  //     const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;

  //     Email.send({
  //       SecureToken: smtpPass, // Use SecureToken or direct password
  //       To: adminEmail,
  //       From: smtpUser,
  //       Subject: 'New Newsletter Subscriber',
  //       Body: `Name: ${formData.name}<br>Email: ${formData.email}<br>Contact Number: ${formData.contactNumber}<br>Message: ${formData.message}`,
  //     })
  //       // .then((message) => alert('Email sent successfully!'))
  //       .catch((error) => alert('Failed to send email: ' + error));
  //   });
  return (
    <>
      <section>
        <div className="container mb-28">
          <div className="text-center my-10 p-0 m-0">
            <p className="text-3xl font-[tourney] 2xl:text-4xl">Contact Us</p>
            <h1 className="font-[poppins] font-bold 2xl:text-6xl">
              For Enquiries
            </h1>
          </div>
          <div class="bg-gray-900 py-16 sm:py-24 lg:py-32">
            <div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
              <div class="newsletter flex flex-col justify-center items-center max-w-xl text-3xl md:text-5xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
                <h2 class="inline sm:block lg:inline xl:block whitespace-nowrap font-[poppins]">
                  Your Project, Our Passion
                </h2>
                <p class="inline sm:block lg:inline xl:block font-[poppins]">
                  Contact Us
                </p>
              </div>
              <form
                onSubmit={handleSubmit}
                method="POST"
                id="contactForm"
                class="w-full max-w-md lg:col-span-5 lg:pt-2"
              >
                <div class="flex flex-col gap-y-4">
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <IoIosContact size={20} />
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
                      <MdOutlinePhone size={20} />
                    </div>
                    <input
                      type="text"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      id="contactNumber"
                      class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your contact number"
                      required
                    />
                  </div>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <MdOutlineEmail size={20} />
                    </div>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      autocomplete="email"
                      id="email"
                      class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    class="block  p-4 ps-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your message here..."
                  ></textarea>
                  {/* <input
                    required
                    id="conatct_name"
                    placeholder="Enter your contact number"
                    class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    type="tel"
                  />

                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                  /> */}
                  <button
                    type="submit"
                    name="submit"
                    id="submit"
                    class="flex justify-center rounded-md bg-indigo-500 px-3.5 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Submit
                  </button>
                </div>
                <p class="mt-4 text-sm leading-6 text-gray-300">
                  We care about your data. Read our{' '}
                  <a
                    href="https://www.swellai.com/privacy"
                    class="font-semibold text-white"
                  >
                    privacy&nbsp;policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
