export default function ProjectCard({
    title,
    description,
    tech = [],
    link,
}) {
    return (
        <div
            className="
        bg-black/70
        border border-white/10
        rounded-xl
        p-6
        hover:border-white/25
        transition
        flex
        flex-col
        justify-between
      "
        >
            {/* TITLE */}
            <h1 className="text-xl font-bold mb-3">
                {title}
            </h1>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                {description}
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 mb-5">
                {tech.map((skill) => (
                    <span
                        key={skill}
                        className="
              text-xs
              px-2 py-1
              rounded
              border border-white/10
              text-gray-300
            "
                    >
                        {skill}
                    </span>
                ))}
            </div>

            {/* LINK */}
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:underline"
            >
                View Project →
            </a>
        </div>
    );
}
