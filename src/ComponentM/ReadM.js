import React, { useEffect, useState } from 'react'
import { Table, Button } from 'semantic-ui-react'
import axios from "axios"


export default function ReadM(){

const [apiData, setApiData] = useState([])

    useEffect (() =>{
        axios.get(`https://63031cbc9eb72a839d791b58.mockapi.io/fakeData`).then((getData) => {
            setApiData(getData.data)
    })
    
})
 


    return(
  <Table unstackable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.HeaderCell>FirstName</Table.HeaderCell>
        <Table.HeaderCell>LastName</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {apiData.map((data) => {
            return (
                <Table.Row>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                    <Button color="green">Update</Button>
                </Table.Cell>
                <Table.Cell>
                    <Button color="red">Delete</Button>
                    </Table.Cell>
              </Table.Row>
            )
        }

        )}
     
    </Table.Body>
  </Table>
)
}

