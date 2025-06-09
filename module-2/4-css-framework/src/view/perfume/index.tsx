export default function PerfumeView() {
  return (
    <main className="m-0 flex h-screen items-center justify-center bg-[#f2eae2]">
      <div className="w-[343px] overflow-hidden rounded-[10px] bg-white lg:grid lg:grid-cols-2 lg:w-[600px] lg:h-[450px]">
        <div>
          <img
            className="h-[240px] w-full rounded object-cover lg:h-full lg:rounded-br-none lg:rounded-tr-none"
            src="/perfume/perfume-img.png"
            alt="Perfume image"
          />
        </div>

        <div className="p-6 lg:p-8">
          <div className="font-monserrat text-[12px] leading-[100%] font-medium tracking-[5px] text-[#6c7289] uppercase">
            Perfume
          </div>
          <div className="font-fraunces mt-3 text-[32px] leading-8 font-bold tracking-normal text-[#1C232B] lg:mt-5">
            Gabrielle Essence Eau De Parfum
          </div>
          <div className="font-monserrat mt-4 text-[14px] leading-6 font-medium tracking-normal text-[#6c7289] lg:mt-6">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </div>
          <div className="mt-6 flex lg:mt-7">
            <span className="font-fraunces mr-5 text-3xl leading-8 font-bold tracking-normal text-[#3d8168]">
              $149.99
            </span>
            <span className="font-monserrat flex items-center justify-center text-[13px] leading-6 font-medium tracking-normal text-[#6c7289] line-through">
              $169.99
            </span>
          </div>

          <button className="mt-5 flex h-[48px] w-full items-center justify-center gap-3 rounded-[8px] bg-[#3d8168] lg:mt-7">
            <img src="/perfume/cart.png" alt="Cart icon" />
            <span className="font-monserrat text-[14px] leading-[100%] font-bold tracking-normal text-white">
              Add to cart
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}
