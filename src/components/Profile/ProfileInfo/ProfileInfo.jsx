import s from './ProfileInfo.module.css';
import StatusInfoHooks from './StatusInfo/StatusInfoHooks';
import noAvatar from '../../../assets/images/noAvatar.jpg';
import editSign from '../../../assets/images/edit-sign.svg';
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';


const ProfileInfo = (props) => {

  const [editMode, setEditMode] = useState(false);

  const handleSavePhoto = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  const profileContacts = props.contacts;

  return (
    <div className={s.wrapper}>
      <div className={s.profileImgContainer}>
        <img className={s.ava}
          src={props.photos.large || noAvatar}
          alt="Ava"
        />
        {props.isOwner &&
          <>
            <input type='file' id="files" capture="image/*" className={s.hidden} onChange={handleSavePhoto} />
            <label htmlFor="files" className={s.editProfileImg}>load photo</label>
          </>
        }
      </div>
      <div className={s.description}>
        <h2>{props.fullName}</h2>
        <StatusInfoHooks status={props.status} updateProfileStatus={props.updateProfileStatus}
          isOwner={props.isOwner} />
        {editMode && <ProfileDataForm {...props} profileContacts={profileContacts} setEditMode={setEditMode} />}
        <ProfileInfoData {...props} profileContacts={profileContacts}
          setEditMode={setEditMode} />
      </div>
    </div>
  );
}

const ProfileInfoData = (props) => {
  return (
    <section className={s.additionalInfo}>
      <p><b>About me: </b>{props.aboutMe}</p>
      <p><b>Looking for a job: </b>{props.lookingForAJob ? 'Yes' : 'No'}</p>
      <p><b>Looking For A Job Description: </b>{props.lookingForAJobDescription}</p>
      <ul className={s.contacts}>
        <li><b>Contacts: </b></li>
        {
          Object.keys(props.profileContacts).map(key => {
            return props.profileContacts[key] &&
              <li key={key}><Contact contactTitle={key} contactValue={props.profileContacts[key]} /></li>
          })
        }
      </ul>
      {props.isOwner &&
        <div onClick={() => { props.setEditMode(true) }} className={s.editAdditionalInfo}><img src={editSign} alt="edit" className={s.editSign} /></div>
      }
    </section>
  )
}

const Contact = ({ contactTitle, contactValue }) => {
  return <a target="_blank" rel="noreferrer" href={contactValue}>{contactTitle}</a>
}


export default ProfileInfo;