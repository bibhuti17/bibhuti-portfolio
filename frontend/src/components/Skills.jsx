export default function Skills() {
    return (
        <section id="tech" className="max-w-6xl mx-auto px-6">

            <div
                className="
          terminal-font
          bg-black/70
          border border-white/10
          rounded-xl
          p-6
          text-sm
          leading-relaxed
          shadow-lg
        "
            >
                <TerminalLine>
                    <Prompt /> cat skills.txt
                </TerminalLine>

                <Output>
                    <Section title="Programming Languages">
                        Java, JavaScript, Python
                    </Section>

                    <Section title="Design Tools">
                        Figma
                    </Section>

                    <Section title="Frontend Web Technologies">
                        HTML5, CSS3, Tailwind CSS, React.js
                    </Section>

                    <Section title="Backend Web Technologies">
                        Node.js, Express.js
                    </Section>

                    <Section title="Databases">
                        SQL, MongoDB
                    </Section>

                    <Section title="Operating Systems">
                        Windows, Linux
                    </Section>

                    <Section title="Knowledge Of">
                        SDLC (Software Development Life Cycle)
                    </Section>

                    <Section title="Python Libraries">
                        {/* intentionally blank */}
                    </Section>
                </Output>

                <TerminalLine>
                    <Prompt />
                </TerminalLine>
            </div>
        </section>
    );
}

/* ---------- Subcomponents ---------- */

function Prompt() {
    return (
        <span className="text-green-400">
            bibhuti@portfolio:~$
        </span>
    );
}

function TerminalLine({ children }) {
    return (
        <div className="mb-2">
            {children}
        </div>
    );
}

function Output({ children }) {
    return (
        <div className="pl-4 text-gray-300 space-y-3">
            {children}
        </div>
    );
}

function Section({ title, children }) {
    return (
        <div>
            <div className="text-blue-400">
                {title}:
            </div>
            <div className="pl-4">
                {children || <span className="text-gray-500">—</span>}
            </div>
        </div>
    );
}
