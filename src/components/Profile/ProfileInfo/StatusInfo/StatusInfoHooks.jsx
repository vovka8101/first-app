import { useEffect, useState } from 'react';
import s from '../ProfileInfo.module.css';

const StatusInfoHooks = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status] )

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  }

  const onStatusUpdate = () => {
    props.updateProfileStatus(status);
    setEditMode(false);
  }

  return (
    <div>
      <p className={s.status}>
        <span className={s.statusTitle}>Status: </span>
        {!editMode &&
          <span onClick={() => { setEditMode(true) }}
            className={s.statusText}>{props.status || "N/A"}</span>
        }
        {editMode &&
          <input className={s.statusInputField} type="text" value={status}
            autoFocus={true} onBlur={onStatusUpdate}
            onChange={onStatusChange} />
        }
      </p>
    </div>
  )
}

export default StatusInfoHooks;