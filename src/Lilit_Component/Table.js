import React from 'react';
import Button from './Button';
import './Table.css';

const Table = ({ 
   users,
   handleEditClick,
   handleRemoveClick
 }) => {
   return (
      <table>
         <th>#</th>
         <th>User Name</th>
         <th>User Surname</th>
         <th>User Salary</th>
         <th>Actions</th>

         <tbody>
            {users.map((user, index) => (
               <tr>
                  <td>{index + 1}</td>
                  <td>{user.userName}</td>
                  <td>{user.userSurname}</td>
                  <td>{user.userSalary}</td>
                  <td>
                     <div>
                        <Button
                           label="edit"
                           classNames="edit-action"
                           handleClick={handleEditClick}
                           data={({ index, user })}
                           type="button"
                        />

                        <Button
                           label="remove"
                           classNames="remove-action"
                           handleClick={handleRemoveClick}
                           data={({ index })}
                           type="button"
                        />
                     </div>
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
   )
}

export default Table;