function FooterComponent() {
     return (
          <>
               <div className='container-fluid p-4 mt-4' style={{ backgroundColor: 'orange' }}>
                    <div className='row'>
                         <div className='col-sm-12 text-center'>
                              <h5><b>Footer</b></h5>
                              <a className='btn btn-dark mt-2' href='#'><i className='fas fa-arrow-alt-circle-up'></i>&nbsp;
                                   To the top</a>
                              <div className='mt-2'>
                                   <i className='fab fa-facebook-square m-1'></i>
                                   <i className='fab fa-instagram m-1'></i>
                                   <i className='fab fa-snapchat m-1'></i>
                                   <i className='fab fa-pinterest-p m-1'></i>
                                   <i className='fab fa-twitter m-1'></i>
                                   <i className='fab fa-linkedin-in'></i>
                              </div>
                              <p><b>Powered by DEVCAMP</b></p>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default FooterComponent;