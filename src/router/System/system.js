import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from '../../container/HomePage/home.js'
import Header from '../../component/Header/Header.js'
import Footer from '../../component/Footer/Footer'

import { useSelector } from 'react-redux'
import { PATH } from '../../utils/index'
const SYSTEM = () => {
  const isLoggenIn = useSelector((state) => {
    return state.user.isLoggenIn
  })
  let navigate = useNavigate()

  useEffect(() => {
    if (!isLoggenIn) {
      return navigate(PATH.LOGIN)
    }
  }, [isLoggenIn, navigate])
  return (
    <div className="System__container">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<h1>Product</h1>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default SYSTEM
