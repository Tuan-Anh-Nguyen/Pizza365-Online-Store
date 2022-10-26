function NavbarComponent() {
     return (
          <>
               <div className='container-fluid'>
                    <div className='row'>
                         <div className='col-sm-12'>
                              <nav className='navbar navbar-expand-lg bg-warning fixed-top'>
                                   <button className='navbar-toggler' type='button' data-toggle='collapse'
                                        data-target='#navigationBar' aria-controls='navigationBar' aria-expanded='false'>
                                   </button>
                                   <div className='collapse navbar-collapse' id='navigationBar'>
                                        <ul className='navbar-nav nav-fill w-100'>
                                             <li className='nav-item active'>
                                                  <a href='#' className='nav-link'>Trang Chủ</a>
                                             </li>
                                             <li className='nav-item active'>
                                                  <a href='#menu-combo' className='nav-link'>Combo</a>
                                             </li>
                                             <li className='nav-item active'>
                                                  <a href='#pizza-type' className='nav-link'>Loại Pizza</a>
                                             </li>
                                             <li className='nav-item active'>
                                                  <a href='#order-info' className='nav-link'>Gửi Đơn Hàng</a>
                                             </li>
                                        </ul>
                                   </div>
                              </nav>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default NavbarComponent;