import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import HeaderSection from './components/HeaderSection';
import ProfileCard from './components/ProfileCard';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';

// --- Data Configuration ---
const OWNER_DATA = {
  name: "Your Name",
  welcomeMessage: "Welcome — I build interfaces that delight users.",
  photoSrc: "images/img2.jpg", // Make sure this image is in the 'public/images' folder
  title: "Frontend Developer",
  bio: "Hi — I'm a developer focused on building accessible, responsive web apps. I love HTML, CSS, and JavaScript.",
  hobbies: ["Photography", "Chess", "Cooking"]
};

const PROJECTS_DATA = [
  { id: 1, name: "TaskMaster Pro", image: "images/img3.jpg", description: "A todo app with deadlines, reminders, and filtering.", live: "#", tech: ["HTML", "CSS", "JavaScript"], featured: true },
  { id: 2, name: "WeatherNow", image: "images/img.jpg", description: "Simple weather UI that consumes a weather API (dummy).", live: "#", tech: ["Fetch API", "Vanilla JS"], featured: false },
  { id: 3, name: "Portfolio Redesign", image: "images/img4.jpeg", description: "Personal portfolio built to showcase projects and blog posts.", live: "#", tech: ["HTML", "CSS"], featured: false }
];

const QUOTES = [
  "Ship your code. Perfection is the enemy of progress.",
  "Practice makes progress, not perfection.",
  "Learn by building — small steps win.",
  "Read, build, repeat."
];
// --- End Data Configuration ---

function App() {
  // Theme Toggle Logic
  const initialTheme = localStorage.getItem('theme') || 
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const currentQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];

  return (
    <>
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <main className="container" id="top">
        <HeaderSection owner={OWNER_DATA} quote={currentQuote} />
        <section className="two-column" aria-label="Profile and about">
          <ProfileCard owner={OWNER_DATA} />
          <AboutSection owner={OWNER_DATA} />
        </section>
        <ProjectsSection projects={PROJECTS_DATA} />
      </main>
      <Footer owner={OWNER_DATA} />
    </>
  );
}

export default App;