import "./Footer.css";

function Footer() {
  return (
    <div>
      <section className="footer">
        <div class="container">
          <div class="row">
            <div className="col-md-12 col-lg-6 col-xl-4 mb-5">
              <a href="#">
                <img
                  class="logo"
                  src="https://htmldemo.net/sinrato/sinrato/assets/img/logo/logo-sinrato.png"
                />
              </a>
              <p>
                We are a team of designers and developers that create high
                quality Magento, Prestashop, Opencart.
              </p>
              <h6 class="sub-title">Payment</h6>
              <img src="https://htmldemo.net/sinrato/sinrato/assets/img/payment/payment.png" />
            </div>
            <div class="col-md-4 col-lg-6 col-xl-2">
              <h4 class="title">Information</h4>
              <ul>
                <li>
                  <a class="link-item" href="about.html">
                    About us
                  </a>
                </li>
                <li>
                  <a class="link-item" href="#">
                    Delivery Information
                  </a>
                </li>
                <li>
                  <a class="link-item" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a class="link-item" href="#">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a class="link-item" href="#">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a class="link-item" href="#">
                    Returns
                  </a>
                </li>
                <li>
                  <a class="link-item" href="#">
                    Site Map
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4 col-lg-6 col-xl-3">
              <h4 class="title">Contact us</h4>
              <ul>
                <li>
                  <span>Address:</span> 4710-4890 Breckinridge St,Fayetteville,
                  NC 28311
                </li>
                <li>
                  <span>email:</span> support@sinrato.com
                </li>
                <li>
                  <span>Call us:</span> <strong> 1-1001-234-5678</strong>
                </li>
              </ul>
            </div>
            <div class="col-md-4 col-lg-6 col-xl-3 d-md-block d-none">
              <h4 class="title">Our Twitter Feed</h4>
              <div class="twitter-text">
                Check out "Alice - Multipurpose Responsive #Magento #Theme" on
                #Envato by <a href="#">@sinratos</a> #Themeforest{" "}
                <a href="#">https://t.co/DNdhAwzm88</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Footer;
