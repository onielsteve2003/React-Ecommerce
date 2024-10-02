import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="container mx-auto p-4 mt-12">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      
      {/* Contact Form */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <form className="bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              className="border rounded w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className="border rounded w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="subject">Subject</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              required 
              className="border rounded w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              required 
              className="border rounded w-full p-2" 
              rows="4"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Location Map */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
        <div className="w-full h-64">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4937977378456!2d-122.41941548468195!3d37.77492927975931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c7a8a4ed9%3A0x73c5fffb8e9f3206!2sSan%20Francisco%2C%20CA%2094103%2C%20USA!5e0!3m2!1sen!2sin!4v1631838596541!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </section>

      {/* Contact Details */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
        <p className="mb-2">Phone: <a href="tel:+1234567890" className="text-blue-500">+1 234 567 890</a></p>
        <p>Email: <a href="mailto:info@example.com" className="text-blue-500">info@example.com</a></p>
      </section>
    </div>
  );
};

export default ContactUsPage;
