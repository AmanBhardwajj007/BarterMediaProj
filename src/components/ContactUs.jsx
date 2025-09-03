import React from 'react'
import 'remixicon/fonts/remixicon.css'

const ContactUs = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 w-screen min-h-screen backdrop-blur-2xl flex flex-col justify-center items-center p-4">
      <div className="relative w-full max-w-[560px] mx-auto">
        <div className="absolute bottom-2 right-2">
          <i 
          onClick={ onClose }
          className="ri-close-large-line text-xl cursor-pointer p-2.5 rounded-full hover:bg-slate-200
          hover:text-slate-800"></i>
        </div>
      </div>

      <div className="w-full max-w-[560px] bg-[#0b0c3a] text-white rounded-xl flex flex-col items-center justify-center py-6">
        <h1 className="text-xl sm:text-2xl font-semibold italic uppercase bg-green-500 px-6 sm:px-10 md:px-43 py-2 mt-2 rounded-tl-2xl rounded-br-2xl text-center">
          Get In Touch
        </h1>

        <form className="w-full flex flex-col gap-5 mt-5 py-4 px-7">
          {/* Full Name */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <label className="sm:w-34 text-[15px] sm:text-[17px] font-medium">
              Full Name:
            </label>
            <input
              type="text"
              required
              placeholder="Arun Verma"
              className="flex-1 border border-[#000080] rounded px-2 py-1 placeholder-gray-400
                         placeholder:text-[15px] focus:outline-none"
            />
          </div>

          {/* Contact Number */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <label className="sm:w-34 text-[15px] sm:text-[17px] font-medium">
              Contact Number:
            </label>
            <input
              type="number"
              required
              placeholder="e.g. +91 0000 989 090"
              className="flex-1 border border-[#000080] rounded px-2 py-1 placeholder-gray-400
                         [&::-webkit-inner-spin-button]:appearance-none focus:outline-none placeholder:text-[15px]
                         [&::-webkit-outer-spin-button]:appearance-none [appearance:textfield]"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <label className="sm:w-34 text-[15px] sm:text-[17px] font-medium">
              Email Address:
            </label>
            <input
              type="email"
              required
              placeholder="You@example.com"
              className="flex-1 border border-[#000080] rounded px-2 py-1 placeholder-gray-400 
                         placeholder:text-[15px] focus:outline-none"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-2">
            <label className="sm:w-34 text-[15px] sm:text-[17px] font-medium">
              Message:
            </label>
            <textarea
              required
              placeholder="How can we help you?"
              className="flex-1 border border-[#000080] rounded px-2 py-1 resize-y min-h-[110px] placeholder-gray-400
                         focus:outline-none placeholder:text-[15px]"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-70 m-auto rounded-full text-lg sm:text-xl font-semibold py-2 mt-2.5 cursor-pointer bg-yellow-400 text-slate-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
