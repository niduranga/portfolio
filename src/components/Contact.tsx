import React, { useState } from "react";

const Contact: React.FC = () => {
    const [result, setResult] = useState<string>("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending...");

        const form = event.currentTarget;
        const formData = new FormData(form);

        formData.append("access_key", "4e85a91b-8c0c-4962-bdd5-0831f28c1b07");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form submitted successfully.");
                form.reset();
            } else {
                console.error("Error:", data);
                setResult(data.message || "Something went wrong.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setResult("Submission failed.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <section className="py-16 px-4 w-full">
                <form
                    onSubmit={onSubmit}
                    className="bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700 max-w-lg w-full mx-auto space-y-6 transition-all duration-300 text-white"
                >
                    <h2 className="text-3xl font-bold text-white text-center">Let's Connect</h2>
                    <p className="text-gray-400 text-center text-sm mb-4">
                        Have a project in mind or just want to say hi? Drop me a message.
                    </p>

                    <div className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Your Name"
                            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                        />

                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Your Email"
                            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                        />

                        <textarea
                            name="message"
                            required
                            placeholder="Your Message"
                            rows={5}
                            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg shadow-md transition hover:shadow-lg"
                    >
                        Send Message
                    </button>

                    {result && (
                        <p className="text-sm mt-4 text-center text-emerald-400 font-medium">
                            {result}
                        </p>
                    )}
                </form>
            </section>
        </div>
    );
};

export default Contact;