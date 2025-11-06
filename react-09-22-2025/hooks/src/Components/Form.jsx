import React, { useState } from 'react';
import "../index.css";
import { FaUser, FaEnvelope, FaBirthdayCake, FaLock } from 'react-icons/fa';

const Form = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    age: "",
    password: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.userName || !formData.email || !formData.age || !formData.password) {
      alert("Please fill all inputs");
    } else {
      setIsSubmitted(true);
      setSubmittedData(formData);
      alert("Data Submitted Successfully");

      setFormData({
        userName: "",
        email: "",
        age: "",
        password: ""
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden outline-none ring-2 ring-blue-500 border-blue-500">
        <div className="bg-blue-600 py-4 px-6 text-white">
          <h2 className="text-2xl font-semibold text-center">
            {isSubmitted ? "Submission Preview" : "Create Account"}
          </h2>
          <p className="text-gray-200 text-center text-sm mt-1">
            {isSubmitted ? "Review your details below." : "Join our community!"}
          </p>
        </div>

        <div className="p-8">
          {!isSubmitted && (
            <form className="space-y-6 " onSubmit={handleSubmit}>
              <div className="relative ">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ">
                  <FaUser className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="userName"
                  name="userName"
                  type="text"
                  placeholder="Full Name"
                  required
                  className="block w-full py-3 pl-10 pr-4 rounded-md border outline-none ring-2 ring-blue-500 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  value={formData.userName}
                  onChange={handleChange}
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  className="block w-full py-3 pl-10 pr-4 rounded-md border outline-none ring-2 ring-blue-500 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaBirthdayCake className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="age"
                  name="age"
                  type="number"
                  placeholder="Age"
                  required
                  className="block w-full py-3 pl-10 pr-4 rounded-md border outline-none ring-2 ring-blue-500 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  className="block w-full py-3 pl-10 pr-4 rounded-md border outline-none ring-2 ring-blue-500 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Create Account
                </button>
              </div>
            </form>
          )}

          {isSubmitted && submittedData && (
            <div className="bg-gray-50 rounded-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Details:</h3>
              <div className="space-y-2">
                <p><span className="font-medium text-gray-700">Name:</span> {submittedData.userName}</p>
                <p><span className="font-medium text-gray-700">Email:</span> {submittedData.email}</p>
                <p><span className="font-medium text-gray-700">Age:</span> {submittedData.age}</p>
                <p><span className="font-medium text-gray-700">Password:</span> {"*".repeat(submittedData.password.length)}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
