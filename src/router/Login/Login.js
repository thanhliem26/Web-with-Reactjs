import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Routes, Route } from 'react-router-dom'
import { PATH } from '../../utils/index'
import './Login.scss'
import Logo from '../../assets/image/logo_main.jpg'
import { FaceBook, Google } from '../../component/index'
import NotFound from '../NotFound/NotFound'
import { FormattedMessage } from 'react-intl'

const Login = () => {
  const isLoggenIn = useSelector((state) => state.user.isLoggenIn)

  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggenIn) {
      return navigate(PATH.SYSTEM)
    }
  }, [isLoggenIn, navigate])

  return (
    <div className="grid">
      <div className="Login__container">
        <div className="row">
          <div className="Login__container-form col l-5">
            <div className="Login__container-logo">
              <img src={Logo} alt="" />
              <h1>
                <FormattedMessage id="login.login__main" />
              </h1>
            </div>
            <Routes>
              <Route
                path="/"
                element={
                  <div className="Login__container-plugin">
                    <Google />
                    <FaceBook />
                  </div>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
