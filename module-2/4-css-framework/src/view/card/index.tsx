export default function CardView() {
  return (
    <main className="m-0 flex h-screen items-center justify-center bg-[#f4d04e]">
      <div className="min-h-[501px] w-[327px] overflow-hidden rounded-[20px] border-[1px] border-[#111111] bg-white p-6 shadow-[8px_8px_0px_0px_black] lg:min-h-0 lg:w-[384px]">
        <div>
          <img className="w-full rounded-[10px]" src="/card/blog-image.png" alt="Blog image" />
        </div>

        <div className="mt-[24px] flex flex-col gap-3 lg:text-[14px]">
          <p className="font-figtree flex h-[26px] w-[73px] items-center justify-center rounded-[4px] bg-[#f4d04e] text-[12px] leading-[150%] font-extrabold text-[#111111] lg:text-[14px]">
            Learning
          </p>

          <p className="font-figtree flex text-[12px] leading-[150%] font-medium text-[#111111] lg:text-[14px]">
            Published 21 Dec 2023
          </p>

          <p className="font-figtree text-[20px] leading-[150%] font-extrabold text-[#111111] hover:cursor-pointer hover:text-[#f4d04e] lg:text-2xl">
            HTML & CSS foundations
          </p>

          <p className="font-figtree text-[14px] leading-[150%] font-medium text-[#6b6b6b] lg:text-[16px]">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>

        <div className="font-figtree mt-6 flex items-center justify-start text-[14px] leading-[150%] font-extrabold text-[#111111]">
          <img className="mr-3" src="/card/user-pic.png" alt="Foto user" />
          <span>Greg Hooper</span>
        </div>
      </div>
    </main>
  );
}
