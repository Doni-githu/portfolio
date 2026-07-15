import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white text-black font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex space-x-4">
              <Link href="#about" className="text-gray-600 hover:text-black">About</Link>
              <Link href="#experience" className="text-gray-600 hover:text-black">Experience</Link>
              <Link href="#projects" className="text-gray-600 hover:text-black">Projects</Link>
              <Link href="#skills" className="text-gray-600 hover:text-black">Skills</Link>
              <Link href="#contact" className="text-gray-600 hover:text-black">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-5xl font-bold mb-4">Doniyor Doniyorov</h1>
        <p className="text-lg text-gray-600 mb-6">
          Building modern, minimal, and professional web experiences.
        </p>
        <div className="space-x-4">
          <a href="#projects" className="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition">View My Work</a>
          <a href="#contact" className="px-6 py-3 border border-red-500 text-red-500 rounded hover:bg-red-100 transition">Contact Me</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I am a dedicated developer with a passion for creating clean, modern, and user-friendly web applications. With a focus on simplicity and elegance, I strive to deliver exceptional digital experiences.
        </p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Software Engineer at TechCorp</h3>
            <p className="text-gray-600">Jan 2020 - Present</p>
            <p className="text-gray-600">Developed scalable web applications and improved performance by 30%.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Frontend Developer at Webify</h3>
            <p className="text-gray-600">Jun 2018 - Dec 2019</p>
            <p className="text-gray-600">Designed and implemented responsive user interfaces for clients.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Project Alpha</h3>
            <p className="text-gray-600 mb-4">A modern web application built with Next.js and Tailwind CSS.</p>
            <a href="#" className="text-red-500 hover:underline">View Project</a>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Project Beta</h3>
            <p className="text-gray-600 mb-4">An e-commerce platform with a focus on user experience.</p>
            <a href="#" className="text-red-500 hover:underline">View Project</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="p-4 border border-gray-200 rounded-lg">
            <p className="text-lg font-medium">JavaScript</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg"   >
            <p className="text-lg font-medium">React</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg"> 
            <p className="text-lg font-medium">Next.js</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <p className="text-lg font-medium">Tailwind CSS</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-lg text-gray-600 mb-6">Feel free to reach out to me for any inquiries or collaborations.</p>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-left text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-left text-gray-700 mb-2">Message</label>
            <textarea
              id="message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Message"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}