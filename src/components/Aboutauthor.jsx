import authorImage from "../assets/Doreen_geter_author.jpg";

function AboutAuthor() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={authorImage}
            alt="Author"
            className="w-72 md:w-80 rounded shadow-xl object-cover"
          />
        </div>

        
        <div className="w-full md:w-1/2">
          <p className="text-xs tracking-widest text-gray-500 mb-3">
            ABOUT THE AUTHOR
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Your Grandma’s Name
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Your grandma is a passionate storyteller whose life experiences
            inspire meaningful and heartfelt writing. Through her words, she
            shares wisdom, love, and lessons that resonate across generations.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Her work reflects resilience, faith, and the beauty of everyday
            moments. This book is a reflection of her journey and the legacy she
            hopes to pass on.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutAuthor;