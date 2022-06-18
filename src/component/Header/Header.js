import React from 'react'
import { useState } from 'react'
import Logo from './Logo.png'
import styles from './index.module.scss'
// import './index.scss'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import SideBar from './SideBar'
import { useDispatch } from 'react-redux'
import { userLogOut } from '../../store/actions/userAction'

const Header = () => {
  const userInfo = useSelector((state) => state.user?.userInfo)
  const [openSideBar, setOpenSideBar] = useState(false)
  const dispatch = useDispatch()

  const handleOpen = () => {
    setOpenSideBar((prev) => !prev)
  }
  return (
    <div className={styles.Header}>
      <div className={clsx('grid', styles.grid)}>
        <div className={clsx('row', styles.row)}>
          <div className="col l-2 m-1 c-6">
            <div className={styles.HeaderLogo}>
              <Link to="/system">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
          </div>
          <div className="col l-9 m-10 c-0">
            <div className={styles.navbar__Logo}>
              <NavLink
                activeclassname={styles.active}
                to="/system"
                className={clsx(styles.formGroup)}
              >
                <h3>Trang chủ</h3>
                <div className={clsx(styles.progress, 'progress')}></div>
              </NavLink>
              <NavLink to="/system" className={styles.formGroup}>
                <h3>Giới thiệu</h3>
                <div className={clsx(styles.progress, 'progress')}></div>
              </NavLink>
              <NavLink to="/system" className={styles.formGroup}>
                <h3>Chương trình</h3>
                <div className={clsx(styles.progress, 'progress')}></div>
                <div className={styles.listItem}>
                  <div className={styles.itemGroup}>
                    <p>Suất ăn giá rẻ</p>
                  </div>
                  <div className={styles.itemGroup}>
                    <p>Cứu trợ khẩn cấp</p>
                  </div>
                  <div className={styles.itemGroup}>
                    <p>Trạm lắng nghe</p>
                  </div>
                  <div className={styles.itemGroup}>
                    <p>Hô trợ giáo dục</p>
                  </div>
                  <div className={styles.itemGroup}>
                    <p>Xây dựng</p>
                  </div>
                  <div className={styles.itemGroup}>
                    <p>Phương tiện mưu sinh</p>
                  </div>
                  <div className={styles.itemGroup}>
                    <p>Suất ăn giá rẻ</p>
                  </div>
                  <div className={styles.borderBt}></div>
                </div>
              </NavLink>
              <NavLink to="/system" className={styles.formGroup}>
                <h3>Đóng góp </h3>
                <div className={clsx(styles.progress, 'progress')}></div>
              </NavLink>
              <NavLink to="/system" className={styles.formGroup}>
                <h3>Báo cáo tài chính</h3>
                <div className={clsx(styles.progress, 'progress')}></div>
              </NavLink>
              <NavLink to="/system" className={styles.formGroup}>
                <h3>Tin tức</h3>
                <div className={clsx(styles.progress, 'progress')}></div>
              </NavLink>
              <NavLink to="/system" className={styles.formGroup}>
                <h3>Liên hệ</h3>
                <div className={clsx(styles.progress, 'progress')}></div>
              </NavLink>
            </div>
          </div>
          <div className="col l-1 m-1 c-0">
            <div className={styles.formEdit}>
              <div className={styles.Avatar}>
                <div className={styles.AV}>
                  <img src={userInfo?.image} alt="avatar" />
                </div>

                <div className={styles.formInfo}>
                  <div className={styles.AvataInfo}>
                    <div className={styles.AvataInfo__Edit}>
                      <img src={userInfo?.image} alt="avatar" />
                    </div>
                    <h3>{userInfo?.name}</h3>
                  </div>
                  <div className={styles.formGroupEdit}>
                    <i className="fa-solid fa-user-pen"></i>
                    <h3>Edit Profile</h3>
                  </div>
                  <div className={styles.formGroupEdit}>
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    <h3 onClick={() => dispatch(userLogOut())}>Log Out</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col l-0 m-0 c-6">
            <div className={styles.headerBar}>
              <i className="fa-solid fa-bars" onClick={handleOpen}></i>
              <SideBar
                isOpen={openSideBar}
                onClick={handleOpen}
                user={userInfo}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
