//import { Link} from "react-router-dom";
import { connect } from "react-redux";
import { addUser } from "../../actions";
import { useState } from 'react';
import Successfully from '../successfull/successfully'
import { validPhone, validPassword } from '../../Regex';
import './form.css'


function Form(props) {

   const [inputUserName, setValueUserName] = useState('');
   const [inputPhoneNumber, setValuePhoneNumber] = useState('');
   const [inputPassword, setValuePassword] = useState('');
   const [inputConfirm, setValueConfirm] = useState('');

   const [unError, setUndError] = useState(false);
   const [phoneErr, setPhoneErr] = useState(false);
   const [pwdError, setPwdError] = useState(false);
   const [pw2dError, setPw2dError] = useState(false);

   const [successfull, setSuccessfull] = useState(false);


   const sendForm = () => {
      if (inputUserName === '') {

         setUndError(true);
         setValueUserName('');
         return;
      }

      if (!validPhone.test(inputPhoneNumber)) {
         setUndError(false);
         setPhoneErr(true);
         setValuePhoneNumber('');
         return;
      }
      if (!validPassword.test(inputPassword)) {
         setPhoneErr(false);
         setPwdError(true);
         setValuePassword('');

         return;

      }
      if (inputConfirm !== inputPassword) {
         setPwdError(false);
         setPw2dError(true);
         setValueConfirm('');
         return;
      }

      props.addUser({
         user: inputUserName,
         phone: inputPhoneNumber
      });
      setSuccessfull(true)
   }

   return (
      <>
         {successfull ? <Successfully /> :
            <form>
               <fieldset>
                  <legend >
                     <label
                        htmlFor="user"
                        className="label">
                        User Name
                     </label>
                  </legend>
                  <input
                     id="user"
                     type="text"
                     className="input"
                     value={inputUserName}
                     onChange={(e) => setValueUserName(e.target.value)} />
               </fieldset >
               <fieldset>
                  <legend >
                     <label
                        htmlFor="tel"
                        className="label">
                        Phone Number
                     </label>
                  </legend>
                  <input
                     id="tel"
                     type="tel"
                     className="input"
                     maxLength="10"
                     value={inputPhoneNumber}
                     onChange={(e) => setValuePhoneNumber(e.target.value)} />
               </fieldset >


               <fieldset>
                  <legend >
                     <label
                        htmlFor="password"
                        className="label">
                        Password
                     </label>
                  </legend>
                  <input
                     id="password"
                     type="password"
                     className="input"
                     minLength="6"
                     maxLength="12"
                     value={inputPassword}
                     onChange={(e) => setValuePassword(e.target.value)} />
               </fieldset >
               <fieldset>
                  <legend >
                     <label
                        htmlFor="Confirm-password"
                        className="label">
                        Confirm Password
                     </label>
                  </legend>
                  <input
                     id="Confirm-password"
                     type="password"
                     className="input"
                     minLength="6"
                     maxLength="12"
                     value={inputConfirm}
                     onChange={(e) => setValueConfirm(e.target.value)} />
               </fieldset >
               {unError && <p className="alert">Your user name is invalid</p>}
               {phoneErr && <p className="alert">Your phone number is invalid</p>}
               {pwdError && <p className="alert">Your password is invalid</p>}
               {pw2dError && <p className="alert">Your Confirm password is Not the same</p>}


               <div className="submit" onClick={sendForm}>SUBMIT</div>

            </form>
         }
      </>
   );
}
export default connect(null, { addUser })(Form);