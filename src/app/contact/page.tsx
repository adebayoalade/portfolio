"use client";


import Navbar from '@/components/shared/Navbar';
import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
    <div><Navbar/></div>    
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black mt-16">
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-white">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white h-32"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="w-full h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1644242702450!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="location map"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact