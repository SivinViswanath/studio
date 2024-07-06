import { useEffect, useState } from 'react';
import axios from 'axios';
import { IoIosContact } from 'react-icons/io';
import { MdOutlineEmail, MdOutlinePhone } from 'react-icons/md';
import contactUs from '../../assets/cotactUs.png';
import { Audio } from 'react-loader-spinner';
const NewsLetter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formSumitted, setFormSumitted] = useState(false);

  // useEffect(() => {
  //   // Initialize WebSocket connection
  //   const socket = io('http://localhost:3000'); // Adjust the URL if your server runs on a different host or port

  //   // Listen for new submissions
  //   socket.on('newSubmission', (message) => {
  //     alert(message); // Show an alert for the new submission
  //   });

  //   // Clean up the connection when the component unmounts
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');
    try {
      const response = await axios.post(
        'http://localhost:3000/api/subscriber',
        formData,
      );
      console.log(response.status);
      if (response.status === 200) {
        setFormSumitted(true);
        setLoading(false);
        setSuccessMessage('Enquiry submitted successfully!');
        setFormData({
          name: '',
          email: '',
          contactNumber: '',
          message: '',
        });
      }
    } catch (e) {
      setLoading(false);
      setErrorMessage('Error submitting form. Please try again.');
      console.error(e);
    }
  };

  return (
    <section id="contact_us">
      <div className="container mb-28">
        <div className="text-center my-10 p-0 m-0">
          <p className="text-3xl font-[tourney] 2xl:text-4xl">Contact Us</p>
          <h1 className="font-[poppins] font-bold 2xl:text-6xl">
            For Enquiries
          </h1>
        </div>
        <div className="bg-gray-900 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
            <div className="newsletter flex flex-col justify-center items-center max-w-xl text-3xl md:text-4xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
              <h2 className="inline sm:block  lg:inline xl:block whitespace-nowrap font-[poppins]">
                Your Project, Our Passion
              </h2>
              <p className="inline sm:block lg:inline xl:block font-[poppins]">
                Contact Us
              </p>
            </div>
            {!formSumitted ? (
              <form
                onSubmit={handleSubmit}
                method="POST"
                id="contactForm"
                className="w-full max-w-md lg:col-span-5 lg:pt-2"
              >
                <div className="flex flex-col gap-y-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <IoIosContact size={20} />
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <MdOutlinePhone size={20} />
                    </div>
                    <input
                      type="text"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      id="contactNumber"
                      className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your contact number"
                      required
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <MdOutlineEmail size={20} />
                    </div>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      id="email"
                      className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    className="block p-4 ps-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your message here..."
                  ></textarea>
                  <button
                    type="submit"
                    name="submit"
                    id="submit"
                    className="flex justify-center rounded-md bg-indigo-500 px-3.5 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    disabled={loading}
                  >
                    {loading ? (
                      <Audio
                        height="20"
                        width="20"
                        color="#fff"
                        ariaLabel="audio-loading"
                        wrapperStyle={{}}
                        wrapperClass="wrapper-class"
                        visible={true}
                      />
                    ) : (
                      'Submit'
                    )}
                  </button>
                  {successMessage && (
                    <p className="text-green-500">{successMessage}</p>
                  )}
                  {errorMessage && (
                    <p className="text-red-500">{errorMessage}</p>
                  )}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-300">
                  We care about your data. Read our{' '}
                  <a
                    href="https://www.swellai.com/privacy"
                    className="font-semibold text-white"
                  >
                    privacy&nbsp;policy
                  </a>
                  .
                </p>
              </form>
            ) : (
              <div className="grid grid-col-4">
                <img
                  width={300}
                  className="lightSpeedIn max-w-72 text-center"
                  src={contactUs}
                  alt=""
                />
                <h1 className="lightSpeedIn font-bold font-[poppins] text-center text-5xl whitespace-nowrap">
                  <span className="mb-2">Thankyou for</span> <br />
                  contacting us!
                </h1>
                <p className="lightSpeedIn text-center text-sm text-indigo-200 font-[poppins] mt-3">
                  We have recieved your message <br /> We will reach you out
                  immediately
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
