// Write your code here
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

import './index.css'

class Home extends Component {
  state = {isLogin: false}

  buttonFunc = () => {
    this.setState(prevState => {
      console.log('PrevState: ', !prevState.isLogin)
      return {isLogin: !prevState.isLogin}
    })
  }

  render() {
    const {isLogin} = this.state

    return (
      <div className="bg-container">
        <div className="content-container">
          <Message isLogin={isLogin} />
          {isLogin ? (
            <Logout logout={this.buttonFunc} />
          ) : (
            <Login login={this.buttonFunc} />
          )}
        </div>
      </div>
    )
  }
}
export default Home