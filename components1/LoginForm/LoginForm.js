import React ,{useHistory}from 'react';
import {Link} from 'react-router-dom'
import useInput from '../hooks/use-input';
import './LoginForm.css';

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

    const {
        value:enteredMobilelNumber,
        isValid:enteredMobileNumberIsValid,
        hasError:mobileNumberInputHasError,
        valueChangeHandler:mobileNumberChangeHandler,
        inputBlurHandler:mobileNumberBlurHandler,
        reset:resetMobileNumberInput,
    } = useInput(value => value.trim() !== '' )


    const {
        value:enteredUserName,
        isValid:enteredUserNameIsValid,
        hasError:userNameInputHasError,
        valueChangeHandler:userNameChangeHandler,
        inputBlurHandler:userNameBlurHandler,
        reset:resetUserNameInput,
    } = useInput(value => value.trim() !== '' )


    let formIsValid = false;

    if(enteredNameIsValid  && enteredEmailIsValid && enteredPasswordIsValid && enteredMobileNumberIsValid &&enteredUserNameIsValid) {
        formIsValid = true;
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        if(!enteredNameIsValid  || !enteredEmailIsValid || !enteredPasswordIsValid || !enteredMobileNumberIsValid ||!enteredUserNameIsValid) {
            return;
        }

        console.table(enteredName, enteredEmail, enteredPassword, enteredMobilelNumber, enteredUserName);


        resetNameInput();
        resetEmailInput();
        resetPasswordInput();
        resetMobileNumberInput();
        resetUserNameInput();

    }
    // let history= useHistory();
    // const handleRoute = () => {
    //     history.push("/Api")
    // }



    return(
        <div className='formbody'>
        <form onSubmit={formSubmissionHandler}>
            <div>
                <h2>Submit Profile</h2>
            </div>
            <br/>
            <div>
                <label className="b1" htmlFor="name">Name </label>
                <input className="ib1" type='text' id='name' value={enteredName} onChange={NameChangeHandler}  onBlur ={NameBlurHandler}/>
                {NameInputHasError && <p> Name must not be empty</p>}
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
                <label  className="b4" htmlFor="mblnumber">Mobile Number </label>
                <input className="ib4" type='number' id='number' value={enteredMobilelNumber} onChange={mobileNumberChangeHandler}  onBlur ={mobileNumberBlurHandler}/>
                {mobileNumberInputHasError && <p> password must be more than  6. </p>}
            </div>
            <br/>
            <div>
                <label className="b5" htmlFor="username">User Name </label>
                <input className="ib5" type='text' id='username' value={enteredUserName} onChange={userNameChangeHandler}  onBlur ={userNameBlurHandler}/>
                {userNameInputHasError && <p> Name must not be empty</p>}
            </div>
            <br/>
            <div>
                  <Link to ="/Api" >
                    <center><button type="submit" disabled={!formIsValid} >Submit</button></center></Link>
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


//
// import React , {useState}from 'react';
// import Axios from 'axios';

// function Form () {
//     const url = "https://ixonotest.herokuapp.com/api/User/get-profiles"
//     const [data, setData] = useState({
//         name:"",
//         email:"",
//         password:"",
//         mblnumber:"",
//         username:""
//     })
//     function submit(e) {
//         e.preventDefault();
//         Axios.post(url,{
//             name: data.name,
//             email:data.email,
//             password:data.password,
//             mblnumber:data.mblnumber,
//             username:data.username
//         })
//         .then(res => {
//             console.log(res.data)
//         })
//     }

//     function handle(e) {
//         const newData =  {...data }
//         newData[e.target.id] = e.target.value
//         setData(newData)
//         console.log(newData)

//     }
//     return (
//         <div>
//             <form onSubmit={(e) => submit(e)}>
//                 <label className="l1" htmlFor='name'>Name</label>
//                 <input onChange={(e) => handle(e)} id="name" value={data.name} placeholder="name" type="text"></input><br/>
//                 <label className="l2" htmlFor='email'>Email</label>
//                 <input onChange={(e) => handle(e)} id="email" value={data.email} placeholder="email" type="text"></input><br/>
//                 <label className="l3" htmlFor='password'>Password</label>
//                 <input onChange={(e) => handle(e)} id="password" value={data.password} placeholder="password" type="text"></input><br/>
//                 <label className="l4" htmlFor='number'>Mobile Number</label>
//                 <input onChange={(e) => handle(e)} id="mblnumber" value={data.mblnumber} placeholder="mobileNumber" type="text"></input><br/>
//                 <label className="l5" htmlFor='name'>User Name</label>
//                 <input onChange={(e) => handle(e)} id="username" value={data.username} placeholder="userName" type="text"></input><br/>
//                 <button>Submit</button>
//             </form>
//         </div>
//     )
// }
// export default Form;