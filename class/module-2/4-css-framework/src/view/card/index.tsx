export default function CardView() {
  return (
    <main className="m-0 flex h-screen items-center justify-center bg-[#f4d04e]">
      <div className="h-[501px] w-[327px] rounded-[20px] border-[1px] border-[#111111] bg-white p-[24px] shadow-[8px_8px_0px_0px_black] lg:h-[522px] lg:w-[384px]">
        <div>
          <img
            className="h-full w-full"
            src="/card/blog-image.png"
            alt="Blog image"
          />
        </div>

        <div className="mt-[24px] mb-[24px] lg:text-[14px]">
          <div className="font-figtree flex h-[26px] w-[73px] items-center justify-center rounded-[4px] bg-[#f4d04e] text-[12px] leading-[150%] font-extrabold tracking-[0%] text-[#111111] lg:text-[14px]">
            <p>Learning</p>
          </div>

          <div className="font-figtree flex text-[12px] leading-[150%] font-medium tracking-[0%] text-[#111111] lg:text-[14px]">
            <p className="mt-3 mb-3">Published 21 Dec 2023</p>
          </div>

          <div className="font-figtree text-[20px] leading-[150%] font-extrabold tracking-[0%] text-[#111111] lg:text-2xl">
            <p className="mb-3">HTML & CSS foundations</p>
          </div>

          <div className="font-figtree text-[14px] leading-[150%] font-medium tracking-[0%] text-[#6b6b6b]">
            <p className="">
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </p>
          </div>
        </div>

        <div className="font-figtree flex items-center justify-start text-[14px] leading-[150%] font-extrabold tracking-[0%] text-[#111111]">
          <img className="mr-3" src="/card/user-pic.png" alt="Foto user" />
          <span>Greg Hooper</span>
        </div>
      </div>
    </main>
  );
}
