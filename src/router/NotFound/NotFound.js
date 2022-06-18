import './NotFound.scss'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { PATH } from '../../utils/index'
import { FormattedMessage } from 'react-intl'

const NotFound = () => {
  const isLoggenIn = useSelector((state) => state.user.isLoggenIn)
  const ridirect = isLoggenIn ? PATH.SYSTEM : PATH.LOGIN
  let navigate = useNavigate()
  const [backHome, setBackHome] = useState(false)

  useEffect(() => {
    if (backHome) {
      return navigate(ridirect)
    }
  }, [backHome, navigate, ridirect])

  return (
    <div className="NotFound">
      <div className="grid">
        <div className="row">
          <div className="NotFound__content col l-6 m-11 c-11">
            <div className="NotFound__content-main">
              <h1>Oops!</h1>
            </div>
            <div className="NotFound__content-title">
              <h2>404 Error - Page Not Found</h2>
              <p>
                <FormattedMessage id="NotFound.content" />
              </p>
              <button onClick={() => setBackHome(true)}>
                <FormattedMessage id="NotFound.button" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
