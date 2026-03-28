import bookCover from "../assets/book_cover.jpg"; // replace with your grandma's book image

function AboutBook() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row">
      
      {/* LEFT SIDE - IMAGE */}
      <div className="md:w-1/2 bg-[#e9c27a] flex items-center justify-center p-8 md:p-12">
        <img
          src={bookCover}
          alt="Book Cover"
          className="w-64 md:w-80 shadow-2xl"
        />
      </div>

      {/* RIGHT SIDE - CONTENT */}
      <div className="md:w-1/2 bg-gray-100 flex flex-col justify-center px-6 md:px-16 py-10 md:py-0">
        
        <p className="text-xs tracking-widest text-gray-500 mb-4">
          BACK TO ALL BOOKS
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Victor! Bayside Cemetery
        </h1>

        <h2 className="mt-3 text-lg md:text-xl text-gray-600">
          A meaningful subtitle goes here
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Published 2026
        </p>

        {/* Description */}
        <div className="mt-6 space-y-4 text-gray-700 leading-relaxed max-w-lg">
          <p>
            This book tells a powerful story about love, resilience, and the
            lessons learned throughout life. It captures moments that inspire
            reflection and growth.
          </p>

          <p>
            Through heartfelt storytelling, your grandma shares wisdom that
            connects generations and reminds readers of what truly matters.
          </p>
          <button className="px-6 py-3 rounded text-white bg-purple-700 hover:bg-purple-800 transition">Purchase only on Amazon</button>
        </div>
      </div>
    </section>
  );
}

export default AboutBook;