import "./Navbar.css";

function Navbar(props) {
  return (
    <div>
      <div class="navigation">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-lg-6">
              <div class="menu">
                <div class="item">
                  <a routerLink="/">Home</a>
                </div>
                <div class="item">
                  <a routerLink="/shop">Shop</a>
                </div>
                <div class="item">
                  <a routerLink="/">Categories</a>
                </div>
                <div class="item">
                  <a routerLink="/">Contact Us</a>
                </div>
              </div>
            </div>
            <div class="contact-info col-md-4 col-lg-6 align-self-center">
              <p class="m-0 text-end">
                <span class="lnr lnr-phone"></span>Hotline :{" "}
                <strong>{props.no}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
