import React from 'react';
import s from '../ProfileInfo.module.css';

class StatusInfo extends React.Component {
  state = {
    statusText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    editMode: false
  }

  render() {
    return (
      <div>
        <p className={s.status}>
          <span className={s.statusTitle}>Status: </span>
          {!this.state.editMode &&
            <span onClick={() => { this.setState({ editMode: true }) }}
              className={s.statusText}>{this.state.statusText}</span>
          }
          {this.state.editMode &&
            <input className={s.statusInputField} type="text" value={this.state.statusText}
              autoFocus={true} onBlur={() => { 
                this.setState({ editMode: false, statusText: this.state.statusText }) 
              }} 
              onChange={(e) => {
                this.setState({statusText: e.target.value})
              }} />
          }
        </p>
      </div>
    )
  }
}

export default StatusInfo;