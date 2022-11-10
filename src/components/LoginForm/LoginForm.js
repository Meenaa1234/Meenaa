import React ,{useHistory}from 'react';
import {Link} from 'react-router-dom'
import useInput from '../hooks/use-input';
import './LoginForm.css';
 import Api from '../Api/Api';

const LoginForm = () => {

    const {
        value:enteredName,
        isValid:enteredNameIsValid,
        hasError:NameInputHasError,
        valueChangeHandler:NameChangeHandler,
        inputBlurHandler:NameBlurHandler,
        reset:resetNameInput,
    } = useInput(value => value.trim() !== '' )


    const {
        value:enteredUserName,
        isValid:enteredUserNameIsValid,
        hasError:userNameInputHasError,
        valueChangeHandler:userNameChangeHandler,
        inputBlurHandler:userNameBlurHandler,
        reset:resetUserNameInput,
    } = useInput(value => value.trim() !== '' )

    const {
        value:enteredEmail,
        isValid:enteredEmailIsValid,
        hasError:emailInputHasError,
        valueChangeHandler:emailChangeHandler,
        inputBlurHandler:emailBlurHandler,
        reset:resetEmailInput,
    } = useInput(value => value.trim() !== '' && value.includes('@'));

    const {
        value:enteredPassword,
        isValid:enteredPasswordIsValid,
        hasError:passwordInputHasError,
        valueChangeHandler:passwordChangeHandler,
        inputBlurHandler:passwordBlurHandler,
        reset:resetPasswordInput,
    } = useInput(value => value.trim().length >=6 && value.trim() !== '' )

    let formIsValid = false;

    if(enteredNameIsValid && enteredUserNameIsValid && enteredEmailIsValid && enteredPasswordIsValid ) {
        formIsValid = true;
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        if(!enteredNameIsValid || !enteredUserNameIsValid || !enteredEmailIsValid || !enteredPasswordIsValid) {
            return;
        }

        console.table( enteredName, enteredUserName, enteredEmail, enteredPassword);
        
        resetNameInput();
        resetUserNameInput();
        resetEmailInput();
        resetPasswordInput();
    }
    // let history= useHistory();
    // const handleRoute = () => {
    //     history.push("/Api")
    // }



    return(
        <div className='formbody'>
        <form onSubmit={formSubmissionHandler}>
        <div>
                <label className="b1" htmlFor="name">Name </label>
                <input className="ib1" type='text' id='name' value={enteredName} onChange={NameChangeHandler}  onBlur ={NameBlurHandler}/>
                {NameInputHasError && <p> Name must not be empty</p>}
            </div>
           <br/>
            <div>
                <label className="b1" htmlFor="name">User Name </label>
                <input className="ib1" type='text' id='name' value={enteredUserName} onChange={userNameChangeHandler}  onBlur ={userNameBlurHandler}/>
                {userNameInputHasError && <p> Name must not be empty</p>}
            </div>
           <br/>
            <div>
                <label className="b2"htmlFor="email">Email </label>
                <input className="ib2"type='email' id='email' value={enteredEmail} onChange={emailChangeHandler}  onBlur ={emailBlurHandler}/>
                {emailInputHasError && <p> Email must not be valid</p>}
            </div>
            <br/>
            <div>
                <label  className="b3"htmlFor="password">Password </label>
                <input className="ib3"type='password' id='password' value={enteredPassword} onChange={passwordChangeHandler}  onBlur ={passwordBlurHandler}/>
                {passwordInputHasError && <p> password must be more than  6. </p>}
            </div>
            <br/>
            <div>
                  <Link to ="/Api" >
                    <center><button type="submit" disabled={!formIsValid} >Login</button></center></Link>
                {/* <Link to="/Api">    
                <button className="subtn"type="submit" disabled={!formIsValid}>submit</button>
                </Link> */}
                {/* <button className="subtn"type="submit" onClick={handleRoute} dis abled={!formIsValid}>submit</button> */}


            </div>
    </form>
    </div>

    );
}
export default LoginForm;
