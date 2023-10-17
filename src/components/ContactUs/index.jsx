import React from "react";

const ContactUs = () => {
  return (
    <div className="mt-16 pt-16" id="contact-form">
      <div class="bg-[#14131a] p-8 w-4/5 md:w-3/5 lg:w-1/2 mx-auto mt-10 rounded-lg">
        <h2 class="text-2xl font-bold text-white mb-6 text-center">
          Contact Us
        </h2>
        <p className="text-lg text-gray-100 leading-6 text-center mb-12">
          Have questions about service, please contact us.
        </p>
        <form className="flex flex-col justify-center">
          <div className="flex flex-row justify-between">
            <div class="mb-4 w-[48%]">
              <label for="name" class="text-white block mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="bg-[#2d2c37] w-full p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div class="mb-4 w-[48%]">
              <label for="email" class="text-white block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="bg-[#2d2c37] w-full p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
          </div>

          <div class="mb-4">
            <label for="subject" class="text-white block mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              class="bg-[#2d2c37] w-full p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div class="mb-6">
            <label for="message" class="text-white block mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              class="bg-[#2d2c37] w-full p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="bg-orange-600 text-white py-2 px-4 font-medium rounded-md"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
