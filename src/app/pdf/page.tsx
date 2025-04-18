import Link from "next/link";

export default function PDFPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">CommuniCore</Link>
          <Link href="/" className="text-sm">← Back to Home</Link>
        </div>
      </nav>
      
      <main className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">PDF Resources</h1>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <p className="text-xl text-gray-700 mb-6">
            This page will contain downloadable PDF resources for executive presence training.
          </p>
          <div className="bg-gray-100 p-6 rounded-md mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              We're currently developing comprehensive PDF materials to help you enhance your executive presence.
              Check back soon for downloadable guides, worksheets, and reference materials.
            </p>
          </div>
          <div className="mt-8 text-center">
            <Link 
              href="/" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
} 