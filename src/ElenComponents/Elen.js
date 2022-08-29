    import {useState} from 'react';
    import React from 'react';
    import './Elen.css';
    

    const initialValues={
        userName:"",
        userSurname:"",
        userSalary:""
     }



        function Elen() {

            const [userData,setUserData]= useState(initialValues);
            const [users,setUsers]= useState([]);
            const [editableUserData, seteditableUserData]= useState({
                isEdit:false,
                userIndex:null
            })
            

            const handleRemoveClick=(index)=> { 
                setUsers(users.filter((user, userIndex)=>userIndex !==index));
            }
            const isFilledFields=userData.userName && userData.userSurname && userData.userSalary;

       const handleSubmitUser=(e)=> {
            e.preventDefault();

            if(isFilledFields) {
            if (editableUserData.isEdit) {
                const editedData=users;
                editedData.splice(editableUserData.userIndex,1,userData);
                                    
           setUsers(editedData); 
           seteditableUserData({
            isEdit:false,
             userIndex:null
      })

 } 
   else {
            setUsers((prevState)=>[...prevState, userData]);}

            setUserData(initialValues) 
                 }
                 }
const handleCleanClick=()=> setUserData(initialValues);

const handleEditClick=(data,index)=> {
    setUserData(data);
    seteditableUserData({
    isEdit:true,
    userIndex:index
    })

}
            
            return (
                
            <div className="wrapper-e">
                <div className="wrapper-content-e">
                <div className="table-data-e">
                    
                <table>
                    <thead>
                    <tr>
                    
                   <th>#</th>
                   <th>User Name</th>
                    <th>User Surname</th>
                    <th>User Salary</th>
                    <th>Actions</th>
                    
                    </tr>
                    </thead>
                    <tbody>
                        {users.map((user,index)=> (
                            <tr>
                                <td>{index+1}</td>
                                <td>{user.userName}</td>
                                <td>{user.userSurname}</td>
                                <td>{user.userSalary}</td>
                                <td>
            <div>
            <button className='edit-action-e' onClick={()=> handleEditClick(user,index)}>edit</button>
            <button className='remove-action-e' onClick={()=>handleRemoveClick(index)}>remove</button>


                                    </div>
                                    </td>
                                     </tr>

                                      ))}
                        </tbody>
                 </table>
                

            </div>

           <div className="form-data-e">

                        <form onSubmit={handleSubmitUser} onReset={handleCleanClick}>
                    <input placeholder='Write your name' onChange={(evt)=>setUserData((prevState)=>({...prevState,
                    userName:evt.target.value}) 
                        )} 
                        value={userData.userName}
                        />
                    <input placeholder='Write your surname' onChange={(evt)=>setUserData((prevState)=>({...prevState,
                    userSurname:evt.target.value}) 
                        )} 
                        value={userData.userSurname}
                        />
                    <input placeholder='Write your salary'onChange={(evt)=>setUserData((prevState)=>({...prevState,
                    userSalary:evt.target.value}) 
                        )} 
                        value={userData.userSalary}
                        />
        <div className='buttons-wrapper-e'>
            <button type="reset">Clean </button>
            <button disabled={!isFilledFields} type="submit"> {editableUserData.isEdit ? 'Edit': 'Add'}</button>
                
        </div>
                        </form>
                        
                        </div>
            
            </div>
                </div>
            
                
                );
        }

    export default Elen;