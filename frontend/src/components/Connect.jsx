import {
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaStackOverflow,
    FaReddit,
    FaXTwitter,
} from "react-icons/fa6";

export default function Connect() {
    return (
        <section
            id="connect"
            className="flex gap-6 text-2xl text-gray-400"
        >
            <div className="flex justify-center gap-8 text-3xl text-gray-400">
                {/* TODO: replace links with your profiles */}
                <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-400 transition"
                >
                    <FaInstagram />
                </a>

                <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition"
                >
                    <FaLinkedin />
                </a>

                <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://stackoverflow.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-400 transition"
                >
                    <FaStackOverflow />
                </a>

                <a
                    href="https://reddit.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-500 transition"
                >
                    <FaReddit />
                </a>

                <a
                    href="https://x.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-400 transition"
                >
                    <FaXTwitter />
                </a>
            </div>
        </section>
    );
}
