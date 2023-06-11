import "./Menubara.css";

function Menubara() {
  return (
    <div>
    <section class="desktop-menu " >
    <div class="container">
        <div class="row">
            <div class="img col-sm-12 col-md-6 text-sm-center text-md-start">
                <img src="https://htmldemo.net/sinrato/sinrato/assets/img/logo/logo-sinrato2.png" alt="" 
                srcset="" />
            </div>
            <div class="col-sm-12 col-md-6 ">
                <div class="menu-items" >
                    <div class="cart">
                        <a class="ha-toggle" >
                        <img src="https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/favorite/wght200/48px.svg" />
                        </a>
                    </div>
                    <div class="cart">
                        <a class="ha-toggle" >
                        <img src="https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/shopping_bag/wght200/48px.svg" /></a>
                    </div> 
                    <div class="cart">
                        <a class="ha-toggle" >
                        <img src="https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/menu/wght200/48px.svg" /></a>
                    </div> 
                </div>        
            </div>
        </div>
    </div>
</section>
    </div>
  );
}
export default Menubara;
