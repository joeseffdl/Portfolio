export default function NotFound() {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="max-w-md text-center p-8 bg-white shadow-md rounded-md">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">404</h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you are looking is not found.
        </p>
        <a
          href="/"
          className="bg-sky-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Go Home
        </a>
      </div>
    </div>
  )
}
