import React from 'react';
import s from '../ProfileInfo.module.css';

class StatusInfo extends React.Component {
  state = {
    statusText: this.props.status,
    editMode: false
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ statusText: this.props.status });
    }
  }


  onStatusChange = (e) => {
    let status = e.target.value;
    this.setState({ statusText: status });
  }

  onStatusUpdate = () => {
    this.props.updateProfileStatus(this.state.statusText);
    this.setState({ editMode: false });
  }

  render() {
    return (
      <div>
        <p className={s.status}>
          {!this.state.editMode &&
            <span onClick={() => { this.setState({ editMode: true }) }}
              className={s.statusText}>{this.props.status || "N/A"}</span>
          }
          {this.state.editMode &&
            <input className={s.statusInputField} type="text" value={this.state.statusText}
              autoFocus={true} onBlur={this.onStatusUpdate}
              onChange={this.onStatusChange} />
          }
        </p>
      </div>
    )
  }
}

export default StatusInfo;