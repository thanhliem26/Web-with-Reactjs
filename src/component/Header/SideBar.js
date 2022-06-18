import React from 'react'
import styles from './index.module.scss'
const SideBar = ({ isOpen, user, onClick }) => {
  console.log(isOpen)

  if (!isOpen) {
    return null
  }
  return (
    <div className={styles.SideBar}>
      <div className={styles.SideBarChild}>
        <div className={styles.SideBarAvatar}>
          <img src={user.image} alt="avatar" />
          <h3>{user.name}</h3>
          <i className="fa-solid fa-delete-left" onClick={onClick}></i>
        </div>
        <div className={styles.SideBarList}>
          <div className={styles.formGroupSB}>
            <div className={styles.mainTitle}>
              <i className="fa-solid fa-house-user"></i>
              <h3>Trang chủ</h3>
            </div>
          </div>
          <div className={styles.formGroupSB}>
            <div className={styles.mainTitle}>
              <i className="fa-solid fa-network-wired"></i>
              <h3>Giới thiệu</h3>
            </div>
          </div>
          <div className={styles.formGroupSB}>
            <div className={styles.mainTitle}>
              <i className="fa-solid fa-leaf"></i>
              <h3>Chương trình</h3>
            </div>

            <div className={styles.listGroup}>
              <p>Suất ăn giá rẻ</p>
              <p>Cứu trợ khẩn cấp</p>
              <p>Trạm lắng nghe</p>
              <p>Hô trợ giáo dục</p>
              <p>Xây dựng</p>
              <p>Phương tiện mưu sinh</p>
              <p>Suất ăn giá rẻ</p>
            </div>
          </div>
          <div className={styles.formGroupSB}>
            <div className={styles.mainTitle}>
              <i className="fa-solid fa-circle-dollar-to-slot"></i>
              <h3>Đóng góp</h3>
            </div>
          </div>
          <div className={styles.formGroupSB}>
            <div className={styles.mainTitle}>
              <i className="fa-solid fa-coins"></i>
              <h3>Báo cáo tài chính</h3>
            </div>
          </div>
          <div className={styles.formGroupSB}>
            <div className={styles.mainTitle}>
              <i className="fa-solid fa-newspaper"></i>
              <h3>Tin tức</h3>
            </div>
          </div>
          <div className={styles.formGroupSB}>
            <div className={styles.mainTitle}>
              <i className="fa-solid fa-address-book"></i>
              <h3>Liên hệ</h3>
            </div>
          </div>
          <div className={styles.formGroupSB}>
            <div className={styles.mainTitle}>
              <i className="fa-solid fa-pen-to-square"></i>
              <h3>Edit Profile</h3>
            </div>
          </div>
          <div className={styles.formGroupSB}>
            <div className={styles.mainTitle}>
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              <h3>Log Out</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
