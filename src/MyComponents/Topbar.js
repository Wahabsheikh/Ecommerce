import "./Topbar.css";

function Topbar() {
  return (
    <div>
      <section className="topbar">
        <div className="container">
          <div className="row">
            <div className="left col-sm-12 col-md-7 col-lg-6 ">
              <div className="d-flex justify-content-center  ">
                <div className="item ">
                  <span class="light-text pe-2">Email:</span>
                  <span>support@sinrato.com</span>
                </div>
                <span className="px-3">|</span>
                <div className="item">
                  <span>Free Shipping for all Order of $99</span>
                </div>
              </div>
            </div>
            <div className="right col-xs-12 col-md-5 col-lg-6  ">
              <div className="menu-list">
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
