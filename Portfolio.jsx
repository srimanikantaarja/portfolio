
import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900 p-6">
      <header className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold">Sri Manikanta</h1>
        <p className="text-lg mt-2">Business Analyst | MSc Business Analytics Student</p>
      </header>

      <main className="max-w-4xl mx-auto mt-8 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="mt-2 text-slate-700">
            I’m a results-driven Business Analyst currently pursuing my Master’s in Business Analytics at Dublin Business School.
            Passionate about transforming data into strategic insights to optimize processes and drive decision-making.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="mt-4 space-y-4">
            <div className="p-4 border rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold">Greenhouse Gas Emissions Dashboard</h3>
              <p className="text-slate-700">Interactive Tableau dashboard showing emission trends from 1990 to 2023.</p>
              <a href="https://www.datascienceportfol.io/srimanikantaarja0" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                View Project
              </a>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Resume</h2>
          <a
            href="/resume.pdf"
            download
            className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
          >
            Download My Resume
          </a>
        </section>
      </main>

      <footer className="mt-12 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Sri Manikanta • Built with React & Tailwind
      </footer>
    </div>
  );
}
