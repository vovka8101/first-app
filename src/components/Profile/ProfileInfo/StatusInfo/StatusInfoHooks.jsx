import { useEffect, useState } from 'react';
import s from '../ProfileInfo.module.css';
import ErrorMsg from '../../../../assets/common/ErrorMsg';

const StatusInfoHooks = ({ status, updateProfileStatus, isOwner }) => {

  const [editMode, setEditMode] = useState(false);
  const [newStatus, setNewStatus] = useState(status);
  const [errorStatus, setErrorStatus] = useState('');

  useEffect(() => {
    setNewStatus(status);
  }, [status])

  const onStatusChange = (e) => {
    setNewStatus(e.target.value);
  }

  const onStatusUpdate = () => {
    updateProfileStatus(newStatus)
      .then(() => {
        setEditMode(false);
        setErrorStatus(''); 
      })
      .catch(err => { setErrorStatus(err) })
  }

  return (
    <div>
      <p className={s.status}>
        {!editMode &&
          <span onClick={() => { isOwner && setEditMode(true) }}
            className={isOwner ? s.statusText : ""}>{status || "N/A"}</span>
        }
        {editMode &&
          <input className={s.statusInputField} type="text" value={newStatus}
            autoFocus={true} onBlur={onStatusUpdate}
            onChange={onStatusChange} />
        }
        {editMode && errorStatus && <ErrorMsg>{errorStatus}</ErrorMsg>}
      </p>
    </div>
  )
}

export default StatusInfoHooks;