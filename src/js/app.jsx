import React from 'react'
import ReactDOM from 'react-dom'
import CommentBox from './comment-box'

(function() {

  console.log('in app')

  ReactDOM.render(<CommentBox />, document.getElementById('app'))

  console.log('rendered.!')

})()
