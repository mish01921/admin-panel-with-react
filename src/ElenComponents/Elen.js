    // import {useState} from 'react';
    import React from 'react';
    

    const initialValues={
        userName:"",
        userSurname:"",
        userSalary:""
     }

    // console.log("userData:" "userData")

        function Elen() {

            // const [userData,setUserData]= useState(initialValues);
            // const [count,setCount]= useState(0);
            return (
            <div className="wrappere">
                <div>
                <div>
                <table>
                <th>#</th>
                   <th>User name</th>
                    <th>User surname</th>
                    <th>User salary</th>
                    <th>actions</th>
                    <tbody>
                    </tbody>

                </table>

            </div>
                        <div>
                        <form>
                    <input placeholder='Write your name' />
                    <input placeholder='Write your surname' />
                    <input placeholder='Write your salary' />
        <div>
            <button type="reset">Clean </button>
            <button type="submit"> Add </button>
                
        </div>
                        </form>
                        {/* <div>{count}</div>

                        <button onClick={()=> 
                        setCount(count-1)
                        } type="button"> minus </button>

                        <button onClick={()=> 
                        setCount(count+1)
                        } type="button"> plus </button> */}
                        </div>
            
            </div>
                </div>
            
                    );
        }

    export default Elen;