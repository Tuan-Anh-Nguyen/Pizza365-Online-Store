import pizza1 from '../../assets/images/pizza1.jpg';

function IntroduceComponent() {
     return (
          <>
               <div className='col-sm-12 text-warning'>
                    <h2><b>PIZZA 365</b></h2>
                    <h4><i>Truly Italian!</i></h4>
               </div>
               {/* Slide */}
               <div className='col-sm-12 mt-4'>
                    <img src={pizza1} alt='img pizza1' style={{ width: '100%' }}></img>
               </div>
               {/* Introduction */}
               <div className='col-sm-12 text-center text-warning p-4 mt-4'>
                    <h3><b className='p-2 border-bottom border-warning'>Tại sao lại Pizza 365?</b></h3>
               </div>
               <div className='col-sm-12 mt-4'>
                    <div className='row'>
                         <div className='col-sm-3 border border-warning p-4' style={{ backgroundColor: 'lightgoldenrodyellow' }}>
                              <h4>Đa Dạng</h4>
                              <p>Số lượng pizza đa dạng, có đầy đủ các loại pizza đang hot nhất hiện nay.</p>
                         </div>
                         <div className='col-sm-3 border border-warning p-4' style={{ backgroundColor: 'yellow' }}>
                              <h4>Chất Lượng</h4>
                              <p>Nguyên liệu sạch 100% rõ nguồn gốc, quy trình chế biến đảm bảo vệ sinh an toàn
                                   thực phẩm.</p>
                         </div>
                         <div className='col-sm-3 border border-warning p-4' style={{ backgroundColor: 'lightsalmon' }}>
                              <h4>Hương Vị</h4>
                              <p>Đảm bảo hương vị ngon, độc, lạ mà bạn chỉ có thể tìm thấy tại Pizza 365.</p>
                         </div>
                         <div className='col-sm-3 border border-warning p-4' style={{ backgroundColor: 'orange' }}>
                              <h4>Dịch Vụ</h4>
                              <p>Nhân viên thân thiện, hệ thống nhà hàng hiện đại. Dịch vụ giao hàng nhanh, chất lượng,
                                   thân thiện.</p>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default IntroduceComponent;