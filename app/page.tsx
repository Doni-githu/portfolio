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
              <Link href="#goal" className="text-gray-600 hover:text-black">Goal</Link>
              <Link href="#audience" className="text-gray-600 hover:text-black">Audience</Link>
              <Link href="#identity" className="text-gray-600 hover:text-black">Identity</Link>
              <Link href="#focus" className="text-gray-600 hover:text-black">Focus</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Portfolio Definition */}
      <section className="py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Portfolio Definition</h1>
      </section>

      {/* About Me */}
      <section id="about" className="py-16 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          My name is <strong>Doniyor Doniyorov</strong>.
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I am a backend-focused software developer who enjoys building scalable, real-world web applications. My primary focus is on designing reliable APIs, authentication systems, databases, integrations with third-party services, and modern backend architectures.
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I enjoy solving practical engineering problems rather than simply building CRUD applications.
        </p>
      </section>

      {/* Primary Goal */}
      <section id="goal" className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Primary Goal of This Portfolio</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          This portfolio is designed to demonstrate my ability to build production-quality backend systems. Rather than displaying many small tutorial projects, the portfolio should communicate that I understand how modern software is designed, structured, and deployed.
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Every project should tell a story about solving a real engineering problem.
        </p>
      </section>

      {/* Target Audience */}
      <section id="audience" className="py-16 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Who This Portfolio Is For</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          The target audience includes:
        </p>
        <ul className="text-lg text-gray-600 max-w-2xl mx-auto list-disc list-inside">
          <li>Recruiters</li>
          <li>Hiring Managers</li>
          <li>Startup Founders</li>
          <li>Engineering Managers</li>
          <li>Technical Interviewers</li>
          <li>Potential Clients</li>
        </ul>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          The website should quickly answer these questions:
        </p>
        <ul className="text-lg text-gray-600 max-w-2xl mx-auto list-disc list-inside">
          <li>Who is Doniyor?</li>
          <li>What technologies does he specialize in?</li>
          <li>What kinds of problems can he solve?</li>
          <li>Why should I interview or hire him?</li>
        </ul>
      </section>

      {/* Professional Identity */}
      <section id="identity" className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Professional Identity</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          The portfolio should present me as:
        </p>
        <ul className="text-lg text-gray-600 max-w-2xl mx-auto list-disc list-inside">
          <li>Backend Engineer</li>
          <li>API Developer</li>
          <li>TypeScript Developer</li>
          <li>Node.js Developer</li>
          <li>Problem Solver</li>
          <li>Software Engineer</li>
        </ul>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          The emphasis should be on engineering, architecture, and reliability rather than visual design.
        </p>
      </section>

      {/* Technical Focus */}
      <section id="focus" className="py-16 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Technical Focus</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          The portfolio should highlight my experience and interest in:
        </p>
        <ul className="text-lg text-gray-600 max-w-2xl mx-auto list-disc list-inside">
          <li>Backend Development</li>
          <li>REST APIs</li>
          <li>Authentication & Authorization</li>
          <li>Database Design</li>
          <li>TypeScript</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>PostgreSQL</li>
          <li>Prisma (learning)</li>
          <li>Modern Backend Architecture</li>
          <li>API Integrations</li>
          <li>Cloud Services</li>
          <li>Deployment</li>
          <li>Performance</li>
          <li>Security</li>
          <li>Scalable Software Design</li>
        </ul>
      </section>
    </div>
  );
}
