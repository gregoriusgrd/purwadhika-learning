export default function CardView() {
  return (
    <main className="bg-yellow-400 min-h-screen flex items-center justify-center">
      <div className=" bg-amber-950 border border-black rounded-2xl shadow-lg w-[327px] h-[501px] p-6">
        <div className="card-image">
          <img src="/card/blog-image.png" alt="Blog image" />
        </div>

        <div className="card-content">
          <div className="bg-yellow-400 font-bold text-red-700">
            <p>Learning</p>
          </div>

          <div className="bg-yellow-400 font-figtree text-blue-700">
            <p>Published 21 Dec 2023</p>
          </div>

          <div className="font-figtree text-lg text-blue-700">
            Hello with Figtree font!
          </div>

          <div className="bg-yellow-400 font-sans text-blue-700">
            <p>HTML & CSS foundations</p>
          </div>

          <div className="description">
            <p>
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </p>
          </div>
        </div>

        <div className="author">
          <img src="/card/user-pic.png" alt="Foto user" />
          <span>Greg Hooper</span>
        </div>
      </div>
    </main>
  );
}
