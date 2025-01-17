import React from "react";
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaHome } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-maroon-800 mb-6">Kirimkan kami Pesan</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-maroon-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-maroon-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-maroon-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-maroon-500"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-maroon-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-maroon-500"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full border border-maroon-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-maroon-500"
                />
              </div>
              <textarea
                placeholder="Your message"
                rows={4}
                className="w-full border border-maroon-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-maroon-500"
              ></textarea>
              <button
                type="submit"
                className="bg-maroon-600 text-white py-3 px-6 rounded-lg shadow hover:bg-maroon-700"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-maroon-700 text-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Hubungi segera untuk penawaran spesial!</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhone className="text-maroon-100 mr-4" />
                <span>150130</span>
              </div>
              <div className="flex items-center">
                <FaWhatsapp className="text-maroon-100 mr-4" />
                <span>0813 4000 8080 / 0822 1000 6600</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-maroon-100 mr-4" />
                <span>marketing@integrasihunian.co.id</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-maroon-100 mr-4" />
                <span>Casamora Square, Jl. Sirsak, Ciganjur, Jagakarsa, Jakarta Selatan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Call-to-Action */}
        <div className="bg-maroon-800 text-white py-8 mt-16 rounded-lg shadow-lg flex items-center justify-between px-6 lg:px-16">
          <div className="flex items-center">
            <FaHome className="text-maroon-100 text-3xl mr-4" />
            <h4 className="text-lg font-semibold">
              Jasa renovasi atau bangun baru?
              <br />
              Segera hubungi kami untuk mendapatkan penawaran terbaik!
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
