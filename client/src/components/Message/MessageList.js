import React, { Component } from 'react';
import axios from 'axios';
import Message from './Message';
import MessageCreate from './MessageCreate';

export default class MessageList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      user: JSON.parse(localStorage.getItem('user'))
    }
  }

  componentDidMount() {
    console.log(this.state.user)
    axios.get('http://localhost:5000/messages/', {
      params: {
        user: this.state.user._id
      }
    })
    .then((res) => {
      this.setState({
        messages: res.data.reverse()
      })
    })
    .catch(function (err) {
        console.log(err)
    });
  }

  Messages() {
    return this.state.messages.map((message, index) => {
      return (
        <Message
          content={message.content}
          index={index}
        />
      )
    })
  }

  render() {
    return (
      <div className="container">
          <h1>Message flow</h1>
          <br></br>
          <div>
            <MessageCreate />
          </div>
          <br></br>
          <div>
            {this.Messages()}
          </div>
      </div>
    )
  }
}
