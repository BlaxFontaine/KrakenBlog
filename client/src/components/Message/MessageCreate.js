import React, { Component } from 'react';
import axios from 'axios';

export default class MessageCreate extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      content: '',
      user: JSON.parse(localStorage.getItem('user')),
      redirect: false
    }
    
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  
  onSubmit = (e) => {
    e.preventDefault();    
    
    const message = {
      content: this.state.content,
      user: this.state.user
    }

    axios.post('http://localhost:5000/messages/add', message)
    .then((res) => {
        console.log(res)
      if (res.status === 200) {
        console.log('success')
      }
    })
    .catch(function (err) {
        console.log(err)
    });
    
}

  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(() => {
      return {
        [name]: value
      };
    });
  }

  render() {
    
    const {
      content,
    } = this.state;

    // if (this.state.redirect) {
    //   return <Redirect to="/" />
    // }

    return (
      <div className="container">
        <div className="grid-33 centered">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                type="textarea"
                id="content"
                className="form-control"
                name="content"
                value={content}
                placeholder="Spread your tentacles..."
                maxLength="140"
                onChange={this.onChange}
                required />
            </div>
            <input
              type="submit"
              className="btn btn-dark"
              value="Post" />
          </form>
        </div>
      </div>
    )
  }
}
