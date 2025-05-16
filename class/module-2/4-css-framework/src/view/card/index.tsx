export default function CardView() {
  return (
    <main className="flex justify-center items-center h-screen m-0 bg-[#f4d04e]">
      <div className="w-[327px] h-[501px] lg:w-[384px] lg:h-[522px] p-[24px] border-[1px] border-[#111111] rounded-[20px] bg-white shadow-[8px_8px_0px_0px_black]">
        <div>
          <img
            className="w-full h-full"
            src="/card/blog-image.png"
            alt="Blog image"
          />
        </div>

        <div className="mt-[24px] mb-[24px] lg:text-[14px]">
          <div className="flex justify-center items-center w-[73px] h-[26px] rounded-[4px] font-figtree font-medium text-[12px] leading-[150%] tracking-[0%] text-[#111111] bg-[#f4d04e]">
            <p>Learning</p>
          </div>

          <div className="font-figtree font-medium text-[12px] lg:text-[14px] leading-[150%] tracking-[0%] text-[#111111]">
            <p className="mb-3 mt-3">Published 21 Dec 2023</p>
          </div>

          <div className="font-figtree font-extrabold text-[20px] lg:text-2xl  leading-[150%] tracking-[0%] text-[#111111]">
            <p className="mb-3">HTML & CSS foundations</p>
          </div>

          <div className="font-figtree font-medium text-[14px] leading-[150%] tracking-[0%] text-[#6b6b6b]">
            <p className="">
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </p>
          </div>
        </div>

        <div className="flex justify-start items-center font-figtree font-extrabold text-[14px] leading-[150%] tracking-[0%] text-[#111111]">
          <img className="mr-3" src="/card/user-pic.png" alt="Foto user" />
          <span>Greg Hooper</span>
        </div>
      </div>
    </main>
  );
}
