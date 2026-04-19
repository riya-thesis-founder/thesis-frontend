import React, { useState } from "react";
import api from "../src/services/api";
import { Mail, Phone, Calendar, Send } from "lucide-react";

const ContactPage: React.FC = () => {
  console.log("CONTACT PAGE IS RUNNING");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("FORM SUBMITTED");

    try {
      await api.post("/contact", {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: "",
        message: `Subject: ${formData.subject}\n\n${formData.message}`
      });

      alert("Message sent successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      });

    } catch (error) {
      console.error("Contact error:", error);
      alert("Failed to send message");
    }
  };

  const handleCallRequest = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your call request has been raised. We will get back to you.");
  };

  return (
    <div className="bg-slate-50 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            How can we help?
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Our team is here to assist with your research journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* LEFT: CONTACT FORM */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm"
                  required
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm"
                  required
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm"
                required
              />

              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm"
                required
              />

              <textarea
                rows={4}
                placeholder="Tell us more..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm"
                required
              />

              <button
                type="submit"
                className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 flex items-center justify-center"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Inquiry
              </button>
            </form>
          </div>

          {/* RIGHT: INFO */}
          <div className="space-y-6">

            {/* EMAIL SUPPORT */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start">
              <div className="p-3 bg-blue-50 rounded-xl mr-4">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Email Support</h3>

                {/* ✅ ADDED EMAIL */}
                <p className="text-sm text-blue-600 font-medium">
                  <a href="mailto:contact@thesis.co.in">
                    contact@thesis.co.in
                  </a>
                </p>

                <p className="text-xs text-slate-400 mt-1">
                  Sent directly to our internal email
                </p>
              </div>
            </div>

            {/* CALL REQUEST */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-start mb-6">
                <div className="p-3 bg-emerald-50 rounded-xl mr-4">
                  <Phone className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-slate-900">
                  Request a Quick Call
                </h3>
              </div>

              <form onSubmit={handleCallRequest} className="space-y-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm"
                  required
                />
                <input
                  type="text"
                  placeholder="Preferred Time"
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm"
                  required
                />
                <textarea
                  rows={2}
                  placeholder="Your query..."
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-2.5 rounded-lg text-sm font-bold hover:bg-emerald-700 flex items-center justify-center"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Raise Call Request
                </button>
              </form>
            </div>

            {/* CONSULTATION */}
            <div className="bg-slate-900 p-8 rounded-2xl text-white">
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-bold">Deep Consultation</h3>
              </div>
              <p className="text-slate-400 text-sm mb-6">
                Need a dedicated introductory call?
              </p>
              <button className="w-full bg-white text-slate-900 py-3 rounded-lg font-bold hover:bg-slate-100">
                Book Calendar Slot
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;