import "./Topbar.css";

function Topbar() {
  return (
    <div>
      <section class="topbar">
        <div class="container">
          <div class="row">
            <div class="left col-xs-12 col-md-7 col-lg-6 ">
              <div class="d-flex justify-content-center  ">
                <div class="item ">
                  <span class="light-text pe-2">Email:</span>
                  <span>support@sinrato.com</span>
                </div>
                <span class="px-3">|</span>
                <div class="item">
                  <span>Free Shipping for all Order of $99</span>
                </div>
              </div>
            </div>
            <div class="right col-xs-12 col-md-5 col-lg-6  ">
              <div class="menu-list">
                <a href="#">My Account</a>
                <a href="#">Language</a>
                <a href="#">Currency</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Topbar;