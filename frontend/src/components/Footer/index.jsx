import React from 'react'
import Footer from 'reusable/Layout/Footer'
import {text} from 'utilities/types'

export default () => {
  return (
    <Footer>
      <div className={text.center}>
        <p>
          <strong>Refast</strong> by <a href="https://github.com/AyWa">Marc Hurabielle</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.
        </p>
        <p>
          Design powerer by <strong>Bulma</strong>
          <a className="icon" href="https://github.com/jgthms/bulma">
            <i className="fa fa-github" />
          </a>
        </p>
      </div>
    </Footer>
  )
}
