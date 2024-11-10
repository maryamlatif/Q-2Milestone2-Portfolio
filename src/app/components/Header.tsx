import Link from "next/link";
import "../Styles/header.css"

export default function Header() {
  return (
    <header className="header-container">
      <div>
        <h1 className="header-title">My Portfolio</h1>
      </div>
      <nav>
        <div className="header-nav">
          
            <Link href="/" className="nav-link">
              Home
            </Link>
          
            <Link href="/About" className="nav-link">
              About
            </Link>
        
            <Link href="/Project" className="nav-link">
              Project
            </Link>
          
            <Link href="/Education" className="nav-link">
              Education
            </Link>
        
         
            <Link href="/Skill" className="nav-link">
              Skill
            </Link>
          
        </div>
      </nav>
    </header>
  );
}
