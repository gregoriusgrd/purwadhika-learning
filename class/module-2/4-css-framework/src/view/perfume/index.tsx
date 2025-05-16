export default function PerfumeView() {
  return (
    <main>
      <div className="card-mobile">
        <div className="card-image">
          <img src="Bitmap.png" alt="perfume image" />
        </div>

        <div className="card-content">
          <div className="product-category">
            <p>Perfume</p>
          </div>
          <div className="product-name">
            <p>Gabrielle Essence Eau De Parfum</p>
          </div>
          <div className="product-description">
            <p>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
          </div>
          <div className="price">
            <span className="price-discount">$149.99</span>
            <span className="price-original">$169.99</span>
          </div>

          <div className="button-container">
            <button>
              <img src="cart.png" alt="cart-icon" />
              <span className="button-text">Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
