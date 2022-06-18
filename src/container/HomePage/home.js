import Background from './images/background.jpg'
import Image1 from './images/image1.png'
import Image2 from './images/image2.png'
import Image3 from './images/image3.png'
import Image4 from './images/image4.png'
import Image5 from './images/image5.png'
import Image6 from './images/image6.jpg'
import Image7 from './images/image7.jpg'
import Image8 from './images/image8.jpg'
import Image9 from './images/image9.jpg'
import Image10 from './images/image10.jpg'
import Image11 from './images/image11.jpg'
import Image12 from './images/image12.jpg'
import Info from './images/info.jpg'

import './home.scss'
const HomePage = () => {
  return (
    <div className="Home__Container">
      <div
        className="Home__Container-background"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="overLay"></div>
        <h4>
          "Chúng tôi cùng với bạn, trên hành trình kiếm tìm hạnh phúc,
          <p>bằng cách lan tỏa lòng nhân ái, chuyển hóa khổ đau." </p>
        </h4>
      </div>
      <div className="grid wide Project__Title">
        <div className="row Project__LIST">
          <div className="col l-12 Project__Important">
            <div className="col l-6 image">
              <img src={Image1} alt="image" />
              <div className="motor">
                <h3>ĐANG VẬN ĐỘNG</h3>
              </div>
            </div>
            <div className="col l-6 title">
              <h3>
                Kỳ 517: Người cha một mình chăm sóc 2 người con bệnh hiểm nghèo
                cùng lúc tại bệnh viện.
              </h3>
              <p>
                Vợ qua đời vì ung thư cách đây nhiều năm, chú N vẫn một mình tần
                tảo nuôi 2 con đi học mặc dù gia đình thuộc diện hộ nghèo tại
                địa phương. Đứa con trai lớn bị ung thư, nhập viện được 3 ngày
                thì đứa con gái nhỏ cũng nhập viện sau khi phát hiện có khối u ở
                đùi cần được phẫu thuật gấp. Cả 2 em đều được điều trị tại Bệnh
                viện Chợ Rẫy. Mỗi ngày, người cha chạy qua lại giữa 2 khoa để
                chăm sóc các con.
              </p>
              <p style={{ textAlign: 'end', color: '#098fd4', fontSize: 22 }}>
                Xem thêm
              </p>
              <div className="more">
                <button>Đóng góp</button>
              </div>
            </div>
          </div>
          <div className="col l-12 ProjectItem">
            <div className="Title">
              <p>
                CÁC DỰ ÁN &nbsp;<h2> HỖ TRỢ Y TẾ VÀ DỊCH COVID </h2>{' '}
              </p>
              <button>ĐỐNG GÓP</button>
            </div>
            <div className="col l-12 ListItem">
              <div className="row">
                <div className="col l-3 m-4 c-6 formGroup">
                  <div className="formOVL">
                    <div className="formGroupImage">
                      <img src={Image1} alt="Image" />
                      <div className="motor">ĐANG VẬN ĐỘNG</div>
                    </div>
                    <div className="formGroupTitle">
                      <h2>
                        Kỳ 517: Người cha một mình chăm sóc 2 người con bệnh
                        hiểm nghèo cùng lúc
                      </h2>
                      <p>
                        Vợ qua đời vì ung thư cách đây nhiều năm, chú N vẫn một
                        mình tần tảo nuôi 2 con đi học mặc dù gia đình thuộc
                        diện hộ nghèo tại
                      </p>
                      <h4>
                        Đã góp được: <span style={{ color: 'red' }}>0đ</span>
                      </h4>
                      <h3>
                        Cần huy động:{' '}
                        <span style={{ color: 'red' }}>38,000,000đ</span>
                      </h3>
                      <button>Đóng góp</button>
                    </div>
                  </div>
                </div>
                <div className="col l-3 m-4 c-6 formGroup">
                  <div className="formOVL">
                    <div className="formGroupImage">
                      <img src={Image2} alt="Image" />
                      <div className="motor">ĐANG VẬN ĐỘNG</div>
                    </div>
                    <div className="formGroupTitle">
                      <h2>
                        Kỳ 516: Chuẩn bị cho cuộc phẫu thuật lần 2 khi con chỉ
                        hơn 4 tháng tuổi
                      </h2>
                      <p>
                        Bé Lục M.H, ở An Giang, bé mới hơn 4 tháng tuổi phải
                        chuẩn bị bước qua cuộc phẫu thuật tim lần thứ 2. Được
                        phát hiện bị tim bẩm
                      </p>
                      <h4>
                        Đã góp được:{' '}
                        <span style={{ color: 'red' }}> 16,670,000₫</span>
                      </h4>
                      <h3>
                        Cần huy động:{' '}
                        <span style={{ color: 'red' }}>20,000,000₫</span>
                      </h3>
                      <button>Đóng góp</button>
                    </div>
                  </div>
                </div>
                <div className="col l-3 m-4 c-6 formGroup">
                  <div className="formOVL">
                    <div className="formGroupImage">
                      <img src={Image3} alt="Image" />
                      <div className="motor">ĐANG VẬN ĐỘNG</div>
                    </div>
                    <div className="formGroupTitle">
                      <h2>
                        Kỳ 515: Gia đình bế tắc khi con mắc bệnh tim bẩm sinh
                      </h2>
                      <p>
                        Sinh ra ngay trong những ngày cả Tp.Hồ Chí Minh bị phong
                        tỏa diện rộng do ảnh hưởng bởi dịch Covid-19 nên mãi đến
                        khi hơn 2 tháng
                      </p>
                      <h4>
                        Đã góp được:{' '}
                        <span style={{ color: 'red' }}> 31,280,000₫</span>
                      </h4>
                      <h3>
                        Cần huy động:{' '}
                        <span style={{ color: 'red' }}>25,000,000₫</span>
                      </h3>
                      <button>Đóng góp</button>
                    </div>
                  </div>
                </div>
                <div className="col l-3 m-4 c-6 formGroup">
                  <div className="formOVL">
                    <div className="formGroupImage">
                      <img src={Image4} alt="Image" />
                      <div className="motor">ĐANG VẬN ĐỘNG</div>
                    </div>
                    <div className="formGroupTitle">
                      <h2>
                        Kỳ 514: Đột ngột đổ bệnh, gia đình cầm cố hết tài sản để
                        điều trị bệnh
                      </h2>
                      <p>
                        Quần quật làm việc nuôi gia đình, trong người mang bao
                        nhiêu căn bệnh nhưng không biết. Đến khi đổ bệnh, tình
                        trạng đã biến
                      </p>
                      <h4>
                        Đã góp được:{' '}
                        <span style={{ color: 'red' }}>13,230,000₫</span>
                      </h4>
                      <h3>
                        Cần huy động:{' '}
                        <span style={{ color: 'red' }}>28,000,000₫</span>
                      </h3>
                      <button>Đóng góp</button>
                    </div>
                  </div>
                </div>

                <a href="#" className="MORE">
                  Xem thêm
                </a>
              </div>
            </div>
          </div>
          <div className="col l-12 ProjectItem">
            <div className="Title">
              <p>
                CÁC DỰ ÁN &nbsp;<h2> HỖ TRỢ PHƯƠNG TIỆN MƯU SINH </h2>{' '}
              </p>
              <button>ĐỐNG GÓP</button>
            </div>
            <div className="col l-12 ListItem">
              <div className="row">
                <div className="col l-3 m-4 c-6 formGroup">
                  <div className="formOVL">
                    <div className="formGroupImage">
                      <img src={Image5} alt="Image" />
                      <div className="motor">ĐANG VẬN ĐỘNG</div>
                    </div>
                    <div className="formGroupTitle">
                      <h2>
                        Chiếc xe số 23-27: Hỗ trợ 5 chiếc xe mang hy vọng đến
                        Nhà May Mắn
                      </h2>
                      <p>
                        Mỗi lần trở lại Nhà May Mắn lấy thông tin, chúng tôi lại
                        tràn đầy năng lượng trước nét mặt hân hoan vui tươi của
                        anh chị sắp nhận
                      </p>
                      <h4>
                        Đã góp được:{' '}
                        <span style={{ color: 'red' }}> 51,509,500₫</span>
                      </h4>
                      <h3>
                        Cần huy động:{' '}
                        <span style={{ color: 'red' }}> 60,000,000₫</span>
                      </h3>
                      <button>Đóng góp</button>
                    </div>
                  </div>
                </div>
                <div className="col l-3 m-4 c-6 formGroup">
                  <div className="formOVL">
                    <div className="formGroupImage">
                      <img src={Image6} alt="Image" />
                      <div className="motor">ĐANG VẬN ĐỘNG</div>
                    </div>
                    <div className="formGroupTitle">
                      <h2>
                        Chiếc xe số 22: Nghị lực của người đàn ông nuôi hai con
                        vào đại học
                      </h2>
                      <p>
                        Tai nạn lao động bất ngờ tổn thương nặng đề đến cột sống
                        dẫn đến đôi chân không thể đứng vững và di chuyển như
                        trước. Tất cả đều
                      </p>
                      <h4>
                        Đã góp được:{' '}
                        <span style={{ color: 'red' }}> 12,802,222₫</span>
                      </h4>
                      <h3>
                        Cần huy động:{' '}
                        <span style={{ color: 'red' }}>12,000,000₫</span>
                      </h3>
                      <button>Đóng góp</button>
                    </div>
                  </div>
                </div>
                <div className="col l-3 m-4 c-6 formGroup">
                  <div className="formOVL">
                    <div className="formGroupImage">
                      <img src={Image7} alt="Image" />
                      <div className="motor">ĐANG VẬN ĐỘNG</div>
                    </div>
                    <div className="formGroupTitle">
                      <h2>
                        Chiếc xe số 21: Con đường mưu sinh có khó cũng không cản
                        được yêu
                      </h2>
                      <p>
                        Sau cuộc hôn nhân đổ vỡ, giờ đây anh phải cố gắng bươn
                        chải để chu cấp cho con và người cha ở quê. Lay lất
                        trong căn phòng ở ghép với vợ chồng người bạn để tiết
                        kiệm chi tiêu. Đôi chân khiếm khuyết nhưng ý chí thì
                        luôn tràn đầy.
                      </p>
                      <h4>
                        Đã góp được:{' '}
                        <span style={{ color: 'red' }}> 11,226,900₫</span>
                      </h4>
                      <h3>
                        Cần huy động:{' '}
                        <span style={{ color: 'red' }}>12,000,000₫</span>
                      </h3>
                      <button>Đóng góp</button>
                    </div>
                  </div>
                </div>
                <div className="col l-3 m-4 c-6 formGroup">
                  <div className="formOVL">
                    <div className="formGroupImage">
                      <img src={Image8} alt="Image" />
                      <div className="motor">ĐANG VẬN ĐỘNG</div>
                    </div>
                    <div className="formGroupTitle">
                      <h2>
                        Chiếc xe số 20: Nỗi đau thương tật dày vò người đàn ông
                        hơn thập kỷ qua
                      </h2>
                      <p>
                        Người đàn ông có đôi chân yếu ớt, di chuyển trên chiếc
                        xe lăn cùng với túi thuốc giảm đau. Vừa xuất viện sau
                        hơn 2 tháng điều trị vết thương nhưng anh đã rục rich
                        chuẩn bị đi bán lại. Tai nạn lao động hơn 10 năm trước
                        khiến cột sống tổn thương nghiêm trọng và
                      </p>
                      <h4>
                        Đã góp được:{' '}
                        <span style={{ color: 'red' }}>14,171,000₫</span>
                      </h4>
                      <h3>
                        Cần huy động:{' '}
                        <span style={{ color: 'red' }}> 12,000,000₫</span>
                      </h3>
                      <button>Đóng góp</button>
                    </div>
                  </div>
                </div>

                <a href="#" className="MORE">
                  Xem thêm
                </a>
              </div>
            </div>
          </div>
          <div className="col l-12 ProjectItem">
            <div className="Title">
              <p>
                CÁC DỰ ÁN &nbsp;<h2> SUẤT ĂN GIÁ RẺ </h2>{' '}
              </p>
              <button>ĐỐNG GÓP</button>
            </div>
            <div className="col l-12 ListItem">
              <div className="row">
                <div className="col l-3 m-4 c-6 formGroup">
                  <div className="formOVL">
                    <div className="formGroupImage">
                      <img src={Image9} alt="Image" />
                      <div className="motor">ĐANG VẬN ĐỘNG</div>
                    </div>
                    <div className="formGroupTitle">
                      <h2>Quán Yên Vui Tân Triều – Hà Nội</h2>
                      <p>
                        Quán cơm 2000 đồng thứ 15 ra đời trong những ngày tháng
                        khó khăn nhất của đất nước, khắp nơi dịch bệnh, thành
                        phố Hà nội tạm
                      </p>
                      <h4>
                        Đã góp được: <span style={{ color: 'red' }}>0đ</span>
                      </h4>
                      <h3>
                        Cần huy động:{' '}
                        <span style={{ color: 'red' }}>38,000,000đ</span>
                      </h3>
                      <button>Đóng góp</button>
                    </div>
                  </div>
                </div>
                <div className="col l-3 m-4 c-6 formGroup">
                  <div className="formOVL">
                    <div className="formGroupImage">
                      <img src={Image10} alt="Image" />
                      <div className="motor">ĐANG VẬN ĐỘNG</div>
                    </div>
                    <div className="formGroupTitle">
                      <h2>Những suất cơm ấm tình mùa dịch 2021</h2>
                      <p>
                        Suốt những ngày qua, tình hình dịch diễn biến phức tạp,
                        bà con mưu sinh trên đường phố dường như không thể tạo
                        ra thu nhập
                      </p>
                      <h4>
                        Đã góp được:{' '}
                        <span style={{ color: 'red' }}> 16,670,000₫</span>
                      </h4>
                      <h3>
                        Cần huy động:{' '}
                        <span style={{ color: 'red' }}>20,000,000₫</span>
                      </h3>
                      <button>Đóng góp</button>
                    </div>
                  </div>
                </div>
                <div className="col l-3 m-4 c-6 formGroup">
                  <div className="formOVL">
                    <div className="formGroupImage">
                      <img src={Image11} alt="photo" />
                      <div className="motor">ĐANG VẬN ĐỘNG</div>
                    </div>
                    <div className="formGroupTitle">
                      <h2>Quán Yên vui Long Xuyên – An Giang</h2>
                      <p>
                        Ngày 5/4/2021, Quỹ Từ thiện Bông Sen chính thức đón quán
                        cơm 2.000 thứ 14 mở cửa bán thử, đó là quán Yên Vui Long
                        Xuyên - An
                      </p>
                      <h4>
                        Đã góp được:{' '}
                        <span style={{ color: 'red' }}> 31,280,000₫</span>
                      </h4>
                      <h3>
                        Cần huy động:{' '}
                        <span style={{ color: 'red' }}>25,000,000₫</span>
                      </h3>
                      <button>Đóng góp</button>
                    </div>
                  </div>
                </div>
                <div className="col l-3 m-4 c-6 formGroup">
                  <div className="formOVL">
                    <div className="formGroupImage">
                      <img src={Image12} alt="picture" />
                      <div className="motor">ĐANG VẬN ĐỘNG</div>
                    </div>
                    <div className="formGroupTitle">
                      <h2>Quán Yên Vui Đống Đa – Hà Nội</h2>
                      <p>
                        Mấy ngày này, các tác viên của Quỹ Bông Sen lần lượt ra
                        Hà Nội để hỗ trợ Quán Yên Vui Đống Đa Hà Nội mở bán thử
                        vào ngày
                      </p>
                      <h4>
                        Đã góp được:{' '}
                        <span style={{ color: 'red' }}>13,230,000₫</span>
                      </h4>
                      <h3>
                        Cần huy động:{' '}
                        <span style={{ color: 'red' }}>28,000,000₫</span>
                      </h3>
                      <button>Đóng góp</button>
                    </div>
                  </div>
                </div>

                <a href="#" className="MORE">
                  Xem thêm
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gridChange">
        <div className="row">
          <div
            className="col l-12 m-12 c-12"
            style={{
              paddingLeft: '0px !important',
              paddingRight: '0px !important',
            }}
          >
            <div className="Info" style={{ backgroundImage: `url(${Info})` }}>
              {' '}
              <div className="OverLay"></div>
            </div>
            <div className="Info__Title">
              <div className="Title">
                <h2>CÁC THÔNG TIN VỀ QUĨ BÔNG SEN</h2>
              </div>
              <div className="grid wide">
                <div className="row Info__Title-member">
                  <div className="col l-6 m-6 c-12">
                    <div className="formGroup">
                      <div className="formIcon">
                        <i className="fa-solid fa-hand"></i>
                      </div>
                      <div className="formTitle">
                        <h3>Trở thành Tình nguyện viên</h3>
                        <p>
                          Chúng tôi mong muốn tìm kiếm những bạn tình nguyện
                          viên nhiệt tình, năng động, có trách nhiệm sẵn sàng
                          cống hiến sức mình nhằm đem lại những giá trị thiết
                          thực cho xã hội.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col l-6 m-6 c-12">
                    <div className="formGroup">
                      <div className="formIcon">
                        <i className="fa-solid fa-circle-dollar-to-slot"></i>
                      </div>
                      <div className="formTitle">
                        <h3>Trợ giúp suất ăn giá rẻ</h3>
                        <p>
                          Nhiều người nhập cư sống tiết kiệm, ăn sáng trễ một
                          tí, buổi trưa nhiều khi nhịn ăn để chờ đến buổi chiều
                          là có thể tiết kiệm một số tiền kha khá gởi về quê cho
                          người thân…
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col l-6 m-6 c-12">
                    <div className="formGroup">
                      <div className="formIcon">
                        <i className="fa-solid fa-heart"></i>
                      </div>
                      <div className="formTitle">
                        <h3>Trợ giúp Y tế</h3>
                        <p>
                          Chúng ta còn khá nhiều người thu nhập thấp, sống ở
                          vùng xa xôi, không có bảo hiểm y tế. Khi bị bệnh không
                          có tiền chạy chữa, thế là trốn viện về nhà, chữa thuốc
                          Nam lấy có, và chịu đựng đau đớn.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col l-6 m-6 c-12">
                    <div className="formGroup">
                      <div className="formIcon">
                        <i class="fa-solid fa-handshake"></i>
                      </div>
                      <div className="formTitle">
                        <h3>Giới thiệu</h3>
                        <p>
                          Quỹ từ thiện Bông Sen được thành lập theo Quyết định
                          số: 24/QĐ-BNV do Bộ Nội vụ cấp phép ngày 5 tháng 1 năm
                          2018. Xem thêm giới thiệu, lịch sử, tổ chức, điều lệ…
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
