import "../Styles/skill.css"
export default function Skillpage() {
  return (
    <div className="about-container">
      <h1 className="about-title">MY SKILLS</h1>
      <p className="about-description">
        I aspire to become a full-stack developer, actively working towards this
        goal. I have a solid foundation in TypeScript, JavaScript, HTML, and
        CSS, along with proficiency in MS Office. Currently, I am diving deeper
        into modern web development frameworks like Next.js and React.js while
        exploring Tailwind CSS for styling. By honing these skills, I aim to
        create dynamic, responsive web applications that provide a seamless user
        experience.
      </p>

      <div className="skills-grid">
        {[
          "HTML",
          "CSS",
          "JAVASCRIPT",
          "TYPESCRIPT",
          "TAILWIND CSS",
          "NEXT JS",
          "REACT JS",
          "MS OFFICE",
        ].map((skill) => (
          <button key={skill} className="skill-button">
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
}
