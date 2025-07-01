// src/pages/SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        otp: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, mobile, otp, password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Simulate sending data
        console.log('Registering user:', { name, email, mobile, otp, password });

        alert('Sign up successful! Redirecting to Sign In page...');
        navigate('/signin');
    };

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card shadow p-4" style={{ maxWidth: '500px', width: '100%' }}>
                <h3 className="text-center mb-4">Sign Up</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mobile">Mobile Number</label>
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            className="form-control"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="otp">OTP</label>
                        <input
                            type="text"
                            id="otp"
                            name="otp"
                            className="form-control"
                            value={formData.otp}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className="form-control"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                            <p className="text-danger mt-1">Passwords do not match</p>
                        )}
                    </div>

                    <button type="submit" className="btn btn-success w-100">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
