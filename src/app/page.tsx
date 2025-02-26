import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-neo-bg text-neo-text min-h-screen font-mono">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <h2 className="text-8xl font-bold mb-4">WEB DEVELOPER</h2>
        <p className="text-2xl max-w-2xl">Crafting digital experiences with code and creativity</p>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-neo-accent text-neo-bg">
        <h2 className="text-6xl font-bold mb-8">ABOUT ME</h2>
        <p className="text-xl max-w-2xl">
          I'm a passionate web developer with a keen eye for design and a love for clean, efficient code. With 5 years
          of experience, I specialize in creating responsive and user-friendly websites that make an impact.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <h2 className="text-6xl font-bold mb-8">SKILLS</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {["HTML", "CSS", "JavaScript", "React", "Node.js", "Git"].map((skill) => (
            <div
              key={skill}
              className="border-4 border-neo-text p-4 text-2xl font-bold hover:bg-neo-secondary hover:text-neo-bg transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-neo-text text-neo-bg">
        <h2 className="text-6xl font-bold mb-8">GET IN TOUCH</h2>
        <form className="max-w-xl">
          <input type="email" placeholder="Your email" className="w-full p-4 mb-4 text-neo-text text-xl" />
          <textarea placeholder="Your message" className="w-full p-4 mb-4 text-neo-text text-xl" rows={4}></textarea>
          <button
            type="submit"
            className="bg-neo-accent text-neo-bg text-xl font-bold py-4 px-8 hover:bg-neo-secondary transition-colors"
          >
            SEND MESSAGE
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="p-6 border-t-8 border-neo-text text-center">
        <p>&copy; 2023 John Doe. All rights reserved.</p>
      </footer>
    </div>
  )
}

