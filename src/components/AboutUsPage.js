import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  return (
    <div className="container mx-auto p-8">
      {/* Main Title */}
      <h1 className="text-5xl font-bold mb-6 text-center text-gray-800 mt-12">
        About Us
      </h1>

      {/* Company Information Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Who We Are</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our mission is to provide exceptional products that enhance the lives of our customers. 
          With a focus on quality, integrity, and innovation, we are dedicated to exceeding customer 
          expectations and pushing the boundaries of what's possible.
        </p>
      </section>

      {/* Team Members Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border rounded-lg shadow-lg p-6 text-center">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="John Doe"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-md"
            />
            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-gray-600 mb-2">Chief Executive Officer</p>
            <p className="text-gray-700 leading-relaxed">
              John has over 10 years of industry experience and leads the company with a passion for innovation and growth.
            </p>
          </div>

          <div className="border rounded-lg shadow-lg p-6 text-center">
            <img
              src="https://randomuser.me/api/portraits/women/1.jpg"
              alt="Jane Smith"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-md"
            />
            <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-gray-600 mb-2">Chief Technology Officer</p>
            <p className="text-gray-700 leading-relaxed">
              Jane is a tech visionary who oversees all aspects of our technological advancements and product development.
            </p>
          </div>

          <div className="border rounded-lg shadow-lg p-6 text-center">
            <img
              src="https://randomuser.me/api/portraits/men/2.jpg"
              alt="Michael Brown"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-md"
            />
            <h3 className="text-xl font-semibold text-gray-800">Michael Brown</h3>
            <p className="text-gray-600 mb-2">Marketing Director</p>
            <p className="text-gray-700 leading-relaxed">
              Michael leads our marketing efforts with a strong focus on brand building, customer outreach, and strategic communication.
            </p>
          </div>
        </div>
      </section>

      {/* Values & History Section */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Values & History</h2>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Core Values</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
            <li>Quality: We deliver products that meet and exceed industry standards.</li>
            <li>Customer-Centric: The needs of our customers are our top priority.</li>
            <li>Sustainability: We are committed to eco-friendly practices to protect the environment.</li>
            <li>Integrity: We maintain transparency and trustworthiness in all that we do.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Journey</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Founded in [Year], our company has evolved from a small startup to an industry leader. 
            Our journey has been driven by a commitment to innovation, customer satisfaction, and excellence. 
            Today, we continue to uphold these values as we grow and adapt to new challenges.
          </p>
        </div>
      </section>

      {/* Call to Action (Optional) */}
      <section className="mt-12 text-center">
        <p className="text-lg font-medium text-gray-800">
          Want to know more? Get in touch with us!
        </p>
        <Link to='/contact-us'>
          <button className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
};

export default AboutUsPage;
