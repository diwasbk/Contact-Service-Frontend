import axios from 'axios';
import React, { useState } from 'react';
import { toast } from "react-toastify"; // toast already installed

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const data = {
            name,
            email,
            message
        };

        try {
            const res = await axios.post("https://api-contact-diwasbk.onrender.com/api/contact", data);
            toast.success(res.data.message || "✅ Message sent successfully!");
            setName("");
            setEmail("");
            setMessage("");
        } catch (err) {
            console.log(err);
            toast.error("❌ Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-[#0f172a] flex items-center justify-center p-6">
            <form onSubmit={handleSubmit} className="bg-[#1e293b] shadow-xl rounded-2xl p-8 w-full max-w-lg mb-6">
                <h1 className="text-2xl font-bold text-[#38bdf8] mb-6 text-center">Contact Me</h1>
                <div className="space-y-4">
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Enter your name'
                        required
                        className="w-full px-4 py-2 bg-[#0f172a] text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#38bdf8] focus:outline-none"
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter your Email'
                        required
                        className="w-full px-4 py-2 bg-[#0f172a] text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#38bdf8] focus:outline-none"
                    />
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder='Write your message'
                        rows="5"
                        required
                        className="w-full px-4 py-2 bg-[#0f172a] text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#38bdf8] focus:outline-none"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full text-[#0f172a] font-bold py-2 rounded-lg transition duration-200 cursor-pointer ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#38bdf8] hover:brightness-110'
                            }`}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
