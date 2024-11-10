import React from "react";
import Link from "next/link";
import "../Styles/project.css"

export default function Projectpage() {
  return (
    <div className="project-container">
      <h1 className="project-title">My Projects</h1>
      <p className="project-description">
        Throughout my development journey, I have created various projects that
        reflect my skills and creativity. Notable projects include a Student
        Identification Card for GIAIC and a Next.js Todo List application,
        showcasing my proficiency with React. I have also participated in
        hackathons, resulting in innovative solutions, and developed an online
        class platform, an upgraded todo application, a currency converter, an
        ATM management system, and a calculator. Each project has contributed
        significantly to my growth as a full-stack developer.
      </p>

      <div className="project-list-container">
        <h2 className="project-subtitle">Projects</h2>
        <ul className="project-list">
          <li className="project-item">
            <Link
              href="https://student-identify-card-of-giaic.vercel.app"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Student Identify Card
            </Link>
          </li>
          <li className="project-item">
            <Link
              href="https://nextjs-todo-list-beige.vercel.app/"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js Todo List
            </Link>
          </li>
          <li className="project-item">
            <Link
              href="https://vercel.com/maryams-projects-50f16e31/hackathon-project-01-maryamlatif"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hackathon Project 01
            </Link>
          </li>
        </ul>
      </div>

      <div className="npx-projects-container">
        <h2 className="npx-subtitle">NPX Projects</h2>
        <ul className="npx-list">
          <li className="npx-item">npx 23class-online-2nd-project</li>
          <li className="npx-item">npx currency-converter_with_maryam</li>
          <li className="npx-item">npx @m2h5m/calculator02</li>
          <li className="npx-item">npx todo_upgrade_with_maryam</li>
          <li className="npx-item">npx maryam3_atm</li>
        </ul>
      </div>
    </div>
  );
}
