import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
    return (
        <section
            id="projects"
            className="max-w-6xl mx-auto px-6 py-24"
        >
            <h2 className="text-3xl font-bold mb-12">
                Projects
            </h2>

            <div
                className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
        "
            >
                <ProjectCard
                    title="Portfolio Website"
                    description="A personal portfolio website to showcase my projects and skills, built with React and Tailwind CSS."
                    tech={["React", "Tailwind CSS", "JavaScript"]}
                    link="#"
                />

                <ProjectCard
                    title="Project Two"
                    description="Description of another project showcasing backend and API development."
                    tech={["Node.js", "Express", "MongoDB"]}
                    link="#"
                />

                <ProjectCard
                    title="Project Three"
                    description="A project focused on frontend performance and responsive UI design."
                    tech={["HTML", "CSS", "React"]}
                    link="#"
                />
            </div>
        </section>
    );
}
