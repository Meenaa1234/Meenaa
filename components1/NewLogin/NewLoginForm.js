import React , {useState}from 'react';
import Axios from 'axios';

function Form () {
    const url = "https://ixonotest.herokuapp.com/api/User/get-profiles"
    const [data, setData] = useState({
        name:"",
        email:"",
        password:"",
        mblnumber:"",
        username:""
    })
    function submit(e) {
        e.preventDefault();
        Axios.post(url,{
            name: data.name,
            email:data.email,
            password:data.password,
            mblnumber:data.mblnumber,
            username:data.username
        })
        .then(res => {
            console.log(res.data)
        })
    }

    function handle(e) {
        const newData =  {...data }
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)

    }
    return (
        <div>
            <form onSubmit={(e) => submit(e)}>
                <label className="l1" htmlFor='name'>Name</label>
                <input onChange={(e) => handle(e)} id="name" value={data.name} placeholder="name" type="text"></input><br/>
                <label className="l2" htmlFor='email'>Email</label>
                <input onChange={(e) => handle(e)} id="email" value={data.email} placeholder="email" type="text"></input><br/>
                <label className="l3" htmlFor='password'>Password</label>
                <input onChange={(e) => handle(e)} id="password" value={data.password} placeholder="password" type="text"></input><br/>
                <label className="l4" htmlFor='number'>Mobile Number</label>
                <input onChange={(e) => handle(e)} id="mblnumber" value={data.mblnumber} placeholder="mobileNumber" type="text"></input><br/>
                <label className="l5" htmlFor='name'>User Name</label>
                <input onChange={(e) => handle(e)} id="username" value={data.username} placeholder="userName" type="text"></input><br/>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Form;