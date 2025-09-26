import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaCar, FaMale, FaFemale, FaRegPaperPlane } from 'react-icons/fa';  // Add icons

const Formhandling = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        email: '',
        cnic: '',
        password: '',
        car: 'Ford',
        gender: '',
        newsletter: false,
        terms: false,
        details: '',
    });

    let [data, setData] = useState([])

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setInputs((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? (checked ? value : '') : value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setData((prev) => ([...prev, inputs]))
        console.log(inputs);
        console.log(data);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-8 font-sans antialiased">
            <form
                className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl w-full max-w-lg transition-transform duration-500 hover:scale-[1.03] border border-gray-300"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 text-center mb-6 tracking-wide">User Registration</h2>

                <div className="mb-5 group">
                    <label htmlFor="fullName" className="block text-gray-600 text-sm font-medium mb-2">
                        Full Name
                    </label>
                    <div className="flex items-center border-b border-gray-300 focus-within:border-blue-500">
                        <FaUser className="text-gray-500 mr-3" />
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Your full name"
                            className="w-full px-4 py-2 bg-transparent focus:outline-none text-gray-900"
                            value={inputs.fullName}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="mb-5 group">
                    <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
                        Email Address
                    </label>
                    <div className="flex items-center border-b border-gray-300 focus-within:border-blue-500">
                        <FaEnvelope className="text-gray-500 mr-3" />
                        <input
                            type="email"
                            name="email"
                            placeholder="example@email.com"
                            className="w-full px-4 py-2 bg-transparent focus:outline-none text-gray-900"
                            value={inputs.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="mb-5 group">
                    <label htmlFor="cnic" className="block text-gray-600 text-sm font-medium mb-2">
                        CNIC Number
                    </label>
                    <div className="flex items-center border-b border-gray-300 focus-within:border-blue-500">
                        <FaRegPaperPlane className="text-gray-500 mr-3" />
                        <input
                            type="number"
                            name="cnic"
                            placeholder="Enter CNIC"
                            className="w-full px-4 py-2 bg-transparent focus:outline-none text-gray-900"
                            value={inputs.cnic}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="mb-5 group">
                    <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
                        Password
                    </label>
                    <div className="flex items-center border-b border-gray-300 focus-within:border-blue-500">
                        <FaLock className="text-gray-500 mr-3" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 bg-transparent focus:outline-none text-gray-900"
                            value={inputs.password}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="mb-5 group">
                    <label htmlFor="car" className="block text-gray-600 text-sm font-medium mb-2">
                        Choose a Car
                    </label>
                    <div className="flex items-center border-b border-gray-300 focus-within:border-blue-500">
                        <FaCar className="text-gray-500 mr-3" />
                        <select
                            name="car"
                            className="w-full px-4 py-2 bg-transparent focus:outline-none text-gray-900"
                            value={inputs.car}
                            onChange={handleChange}
                        >
                            <option value="Ford">Ford</option>
                            <option value="Audi">Audi</option>
                            <option value="BMW">BMW</option>
                        </select>
                    </div>
                </div>

                <div className="mb-5">
                    <span className="block text-gray-600 text-sm font-medium mb-3">Gender</span>
                    <div className="flex flex-col sm:flex-row gap-y-3 sm:gap-y-0 sm:gap-x-10">
                        <label className="inline-flex items-center text-gray-600 cursor-pointer hover:text-blue-500">
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                className="form-radio text-blue-500"
                                checked={inputs.gender === 'male'}
                                onChange={handleChange}
                            />
                            <FaMale className="ml-2" />
                            <span className="ml-2">Male</span>
                        </label>
                        <label className="inline-flex items-center text-gray-600 cursor-pointer hover:text-blue-500">
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                className="form-radio text-pink-500"
                                checked={inputs.gender === 'female'}
                                onChange={handleChange}
                            />
                            <FaFemale className="ml-2" />
                            <span className="ml-2">Female</span>
                        </label>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="inline-flex items-center text-gray-600 cursor-pointer">
                        <input
                            type="checkbox"
                            name="newsletter"
                            value="subscribed"
                            className="form-checkbox text-blue-500"
                            checked={inputs.newsletter}
                            onChange={handleChange}
                        />
                        <span className="ml-2">Sign up for our newsletter</span>
                    </label>
                </div>

                <div className="mb-8">
                    <label className="inline-flex items-center text-gray-600 cursor-pointer">
                        <input
                            type="checkbox"
                            name="terms"
                            value="agreed"
                            className="form-checkbox text-blue-500"
                            checked={inputs.terms}
                            onChange={handleChange}
                        />
                        <span className="ml-2">I agree to the terms and conditions</span>
                    </label>
                </div>

                <div className="mb-8 group">
                    <label htmlFor="detail" className="block text-gray-600 text-sm font-medium mb-2">
                        Additional Details
                    </label>
                    <textarea
                        name="details"
                        placeholder="Enter any additional details here..."
                        rows="4"
                        className="w-full px-4 py-2 bg-transparent border border-gray-300 focus:outline-none text-gray-900"
                        value={inputs.details}
                        onChange={handleChange}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 px-6 font-bold text-white rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300 transform active:scale-95"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Formhandling;
