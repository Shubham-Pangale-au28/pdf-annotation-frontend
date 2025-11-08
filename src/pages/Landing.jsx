import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Navbar />

      <section className="flex flex-col items-center justify-center text-center px-6 py-20 md:py-28">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 mb-4 leading-tight">
          Collaborative <span className="text-blue-600">PDF Annotation</span>
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mb-8">Create, share, and annotate PDF documents with your team in real-time.</p>
        <Link to="/register" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-transform hover:scale-105">
          Get Started
        </Link>
      </section>

      <section className="px-6 py-16 bg-white rounded-t-3xl shadow-inner">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Key Features</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl p-6 transition-all duration-200 shadow-sm hover:shadow-md">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">📄 Easy Uploads</h3>
              <p className="text-gray-600 text-sm">Upload PDF documents and share with your team instantly.</p>
            </div>

            <div className="feature-card bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl p-6 transition-all duration-200 shadow-sm hover:shadow-md">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">✏️ Rich Annotations</h3>
              <p className="text-gray-600 text-sm">Add comments, highlights, and drawings to your PDFs effortlessly.</p>
            </div>

            <div className="feature-card bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl p-6 transition-all duration-200 shadow-sm hover:shadow-md">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">👥 Collaboration</h3>
              <p className="text-gray-600 text-sm">Work together with threaded discussions and real-time updates.</p>
            </div>

            <div className="feature-card bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl p-6 transition-all duration-200 shadow-sm hover:shadow-md">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">🔐 Secure Sharing</h3>
              <p className="text-gray-600 text-sm">Control access with role-based permissions for ultimate security.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-auto py-6 text-center text-gray-500 text-sm border-t border-gray-200 bg-white">© {new Date().getFullYear()} PDF Annotate. All rights reserved.</footer>
    </div>
  );
}

export default Landing;
