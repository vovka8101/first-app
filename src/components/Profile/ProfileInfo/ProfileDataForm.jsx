import { Formik, Form, Field } from "formik";
import { useEffect, useRef } from "react";
import '../../../assets/common/Forms.css';
import iconClose from '../../../assets/images/icon-close.png';
import s from './ProfileDataForm.module.css';
import ErrorMsg from "../../../assets/common/ErrorMsg";


const ProfileDataForm = ({ fullName, aboutMe, lookingForAJob, lookingForAJobDescription, profileContacts, updateProfileInfo, setEditMode }) => {

  function useOutsideClick(ref) {
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          setEditMode(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside, true);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref])
  }

  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef);

  return <div className={s.overlay}>
    <div className={s.formContainer} ref={wrapperRef}>
      <img src={iconClose} alt="close icon" onClick={() => { setEditMode(false) }} className={s.iconClose} />
      <Formik
        initialValues={{
          fullName,
          aboutMe,
          lookingForAJob,
          lookingForAJobDescription,
          contacts: { ...profileContacts }
        }}
        onSubmit={(values, { setStatus }) => {
          updateProfileInfo(values, setStatus)
            .then(() => { setEditMode(false) })
            .catch(err => { console.log(err) })
        }}
      >
        {(formik) => {
          return <Form className={s.formContent} noValidate>
            <div className={`form-control ${s.profileDataFormControl}`}>
              <label htmlFor="fullName"><b>Full name:</b></label>
              <Field type="text" name="fullName" />
            </div>
            <div className={`form-control ${s.profileDataFormControl}`}>
              <label htmlFor="aboutMe"><b>About me:</b></label>
              <Field type="text" name="aboutMe" />
            </div>
            <div className={`form-control ${s.profileDataFormControl}`}>
              <label htmlFor="lookingForAJob" className={s.isLookingLabel}><b>Looking for a job:</b></label>
              <Field type="checkbox" name="lookingForAJob" className={s.isLookingField} />
            </div>
            <div className={`form-control ${s.profileDataFormControl}`}>
              <label htmlFor="lookingForAJobDescription"><b>Looking for a job description:</b></label>
              <Field type="text" name="lookingForAJobDescription" />
            </div>
            <div className={`form-control ${s.profileDataFormControl}`}>
              <h3 className={s.contactsTitle}>Contacts</h3>
              <section className={s.contactsContainer}>
                <div className={s.contactItem}>
                  <label htmlFor="contacts.facebook"><b>Facebook: </b></label>
                  <Field type="url" name="contacts.facebook" placeholder="facebook link" />
                </div>
                <div className={s.contactItem}>
                  <label htmlFor="contacts.website"><b>Website: </b></label>
                  <Field type="url" name="contacts.website" placeholder="website link" />
                </div>
                <div className={s.contactItem}>
                  <label htmlFor="contacts.vk"><b>VK: </b></label>
                  <Field type="url" name="contacts.vk" placeholder="vk link" />
                </div>
                <div className={s.contactItem}>
                  <label htmlFor="contacts.twitter"><b>Twitter: </b></label>
                  <Field type="url" name="contacts.twitter" placeholder="twitter link" />
                </div>
                <div className={s.contactItem}>
                  <label htmlFor="contacts.instagram"><b>Instagram: </b></label>
                  <Field type="url" name="contacts.instagram" placeholder="instagram link" />
                </div>
                <div className={s.contactItem}>
                  <label htmlFor="contacts.youtube"><b>YouTube: </b></label>
                  <Field type="url" name="contacts.youtube" placeholder="youtube link" />
                </div>
                <div className={s.contactItem}>
                  <label htmlFor="contacts.github"><b>GitHub: </b></label>
                  <Field type="url" name="contacts.github" placeholder="github link" />
                </div>
                <div className={s.contactItem}>
                  <label htmlFor="contacts.mainLink"><b>Main link: </b></label>
                  <Field type="url" name="contacts.mainLink" placeholder="main link" />
                </div>
              </section>
            </div>
            <ErrorMsg>{formik.status}</ErrorMsg>

            <div className={s.submit}>
              <button type="submit" disabled={!formik.dirty} className={s.submit__btn}>Save</button>
            </div>
          </Form>
        }}
      </Formik>
    </div>

  </div>
}

export default ProfileDataForm;
