import { useState } from "react";

export default function SayHello() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        alert("Bibhuti will reply soon!");

        // reset form
        setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    }

    return (
        <section
            id="contact"
            className="max-w-xl mx-auto px-6 pb-32"
        >
            <h2 className="text-3xl font-bold mb-6 text-center">
                Say Hello
            </h2>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-black border border-white/10 rounded"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-black border border-white/10 rounded"
                />

                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full p-3 bg-black border border-white/10 rounded"
                />

                <textarea
                    name="message"
                    placeholder="Message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-black border border-white/10 rounded"
                />

                <button
                    type="submit"
                    className="w-full py-3 bg-white text-black font-semibold rounded"
                >
                    Send
                </button>
            </form>
        </section>
    );
}
