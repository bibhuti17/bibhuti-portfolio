import Connect from "./Connect";

function Footer() {
    return (
        <footer className="border-t border-white/10">
            <div
                className="
          max-w-6xl
          mx-auto
          px-6
          py-6
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-4
        "
            >
                {/* LEFT: COPYRIGHT */}
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Bibhuti Bhusan Naik. All rights reserved.
                    {/* TODO: update name if needed */}
                </p>

                {/* RIGHT: CONNECT ICONS */}
                <div className="flex items-center">
                    <Connect />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
