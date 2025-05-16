export default function PerfumeView() {
  return (
    <main className="m-0 flex h-screen items-center justify-center bg-[#f2eae2]">
      <div className="h-[611px] w-[343px] rounded-[10px] bg-white">
        <div>
          <img
            className="-tr-[10px] h-[240px] w-[343px] rounded rounded-tl-[10px] object-cover"
            src="/perfume/perfume-img.png"
            alt="perfume image"
          />
        </div>

        <div className="p-6">
          <div className="font-monserrat text-[12px] leading-[100%] font-medium tracking-[5px] text-[#6c7289] uppercase">
            <p className="p-0">Perfume</p>
          </div>
          <div className="font-fraunces text-[32px] leading-8 font-bold tracking-normal text-[#1C232B]">
            <p className="mt-3 mb-4">Gabrielle Essence Eau De Parfum</p>
          </div>
          <div className="font-monserrat text-[14px] leading-6 font-medium tracking-normal text-[#6c7289]">
            <p className="mb-6">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
          </div>
          <div className="flex mb-5">
            <span className="font-fraunces mr-5 text-3xl leading-8 font-bold tracking-normal text-[#3d8168]">
              $149.99
            </span>
            <span className="font-monserrat flex items-center justify-center text-[13px] leading-6 font-medium tracking-normal text-[#6c7289] line-through">
              $169.99
            </span>
          </div>

          <div>
            <button className="flex h-[48px] w-[295px] items-center justify-center gap-3 rounded-[8px] bg-[#3d8168]">
              <img src="/perfume/cart.png" alt="cart-icon" />
              <span className="font-monserrat text-[14px] leading-[100%] font-bold tracking-normal text-white">
                Add to cart
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
