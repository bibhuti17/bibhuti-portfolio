export default function HireMeModal({ open, onClose }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
            <div className="bg-black border border-white/10 rounded-lg p-6 w-full max-w-md">

                <h3 className="text-xl font-semibold mb-4">Hire Me</h3>

                <form className="space-y-4">
                    <input
                        placeholder="Your Name"
                        className="w-full p-3 bg-black border border-white/10 rounded"
                    />
                    <input
                        placeholder="Your Email"
                        className="w-full p-3 bg-black border border-white/10 rounded"
                    />
                    <textarea
                        rows="4"
                        placeholder="Project / Hiring details"
                        className="w-full p-3 bg-black border border-white/10 rounded"
                    />

                    <div className="flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-400"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="px-4 py-2 bg-white text-black rounded font-semibold"
                        >
                            Send
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
}
