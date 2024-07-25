// Write your code here
import './index.css'

const Message = props => {
  const {isLogin} = props
  const message = isLogin ? 'Welcome User' : 'Please Login'
  return <h1 className="heading">{message}</h1>
}

export default Message
