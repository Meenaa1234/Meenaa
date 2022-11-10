import React from 'react';
import {Link , useHistory} from 'react-router-dom'
import useInput from '../hooks/use-input';
import './NewRegistrationForm.css';

const NewRegistrationForm = (props) => {
    
    const history = useHistory();


    const {
        value:enteredFirstName,
        isValid:enteredFirstNameIsValid,
        hasError:firstNameInputHasError,
        valueChangeHandler:firstNameChangeHandler,
        inputBlurHandler:firstNameBlurHandler,
        reset:resetFirstNameInput,
    } = useInput(value => value.trim() !== '' )

    const {
        value:enteredLastName,
        isValid:enteredLastNameIsValid,
        hasError:lastNameInputHasError,
        valueChangeHandler:lastNameChangeHandler,
        inputBlurHandler:lastNameBlurHandler,
        reset:resetLastNameInput,
    } = useInput(value => value.trim() !== '' && value.trim() !=='[0-9]' )

    const {
        value:enteredMblNumber,
        isValid:enteredMblNumberIsValid,
        hasError:mblNumberInputHasError,
        valueChangeHandler:mblNumberChangeHandler,
        inputBlurHandler:mblNumberBlurHandler,
        reset:resetMblNumberInput,
    } = useInput(value => value.trim() !== '' && value.trim().length === 10  )

    const {
        value:enteredAge,
        isValid:enteredAgeIsValid,
        hasError:ageInputHasError,
        valueChangeHandler:ageChangeHandler,
        inputBlurHandler:ageBlurHandler,
        reset:resetAgeInput,
    } = useInput(value => value.trim() !== '' && value.trim() > '0' )

    const {
        value:enteredAddress,
        isValid:enteredAddressIsValid,
        hasError:addressInputHasError,
        valueChangeHandler:addressChangeHandler,
        inputBlurHandler:addressBlurHandler,
        reset:resetAddressInput,
    } = useInput(value => value.trim() !== '' )



    let formIsValid = false;




    if(enteredFirstNameIsValid && enteredLastNameIsValid && enteredMblNumberIsValid && enteredAgeIsValid && enteredAddressIsValid) {
        formIsValid = true;
    }

    // if(enteredLastNameIsValid) {
    //     formIsValid = true;
    // }

    // if(enteredMblNumberIsValid) {
    //     formIsValid = true;
    // }

    // if(enteredAgeIsValid) {
    //     formIsValid = true;
    // }

    // if(enteredAddressIsValid) {
    //     formIsValid = true;
    // }



    const formSubmissionHandler = (event) => {
        event.preventDefault();

        if(!enteredFirstNameIsValid || !enteredLastNameIsValid || !enteredMblNumberIsValid ||!enteredAgeIsValid || !enteredAddressIsValid){
            return;
        }

        console.table(enteredFirstName , enteredLastName ,enteredMblNumber, enteredAge , enteredAddress);

        resetFirstNameInput();
        resetLastNameInput();
        resetMblNumberInput();
        resetAgeInput();
        resetAddressInput();


    }


    return(
        <div className='formbody'>
        <form onSubmit={formSubmissionHandler}>
            <div>
                <label className="l1" htmlFor="name">First Name </label>
                <input className="ip1"type='text' id='name' value={enteredFirstName} onChange={firstNameChangeHandler}  onBlur ={firstNameBlurHandler}/>
                {firstNameInputHasError && <p>First Name must not be empty</p>}
            </div>
            <div>
                <label className="l2" htmlFor="lname">Last Name </label>
                <input className="ip2" type='text' id='lname' value={enteredLastName} onChange={lastNameChangeHandler}  onBlur ={lastNameBlurHandler}/>
                {lastNameInputHasError && <p> Last Name must not be empty</p>}
            </div>
            <div>
                <label className="l3" htmlFor="mbl">Mobile number </label>
                <input className="ip3" type='number' id='mbl' value={enteredMblNumber} onChange={mblNumberChangeHandler}  onBlur ={mblNumberBlurHandler}/>
                {mblNumberInputHasError && <p> Mobile number must not be empty</p>}
            </div>

            <div>
                <label className="l4" htmlFor="age">Age </label>
                <input className="ip4" type='number' id='age' value={enteredAge} onChange={ageChangeHandler}  onBlur ={ageBlurHandler}/>
                {ageInputHasError && <p> Age must not be empty</p>}
            </div>
            <div>
                <label className="l5" htmlFor="add">Address </label>
                <input className="ip5" type='text' id='name' value={enteredAddress} onChange={addressChangeHandler}  onBlur ={addressBlurHandler}/>
                {addressInputHasError && <p> Address must not be empty</p>}
            </div>

            <div>
                {/* <button className="sbtn"type="submit" disabled={!formIsValid} >submit</button> */}
             <button type="submit"disabled={!formIsValid} onClick={() => history.push('/LoginForm')}>Go to Login</button>
                {/* <Link to ="/LoginForm">
                    <center>
                    <button type="submit"  disabled={!formIsValid}>Go to Login</button>
                    </center></Link> */}
            
                
                
            </div>

        </form>
        </div>

    );

}
export default NewRegistrationForm;

