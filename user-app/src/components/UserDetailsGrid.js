import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

function UserDetailsGrid({userLists, onDelete}) {
  console.log(userLists);


return (
  <Table striped bordered hover>
      <thead>
          <tr>
          <th>#</th>
          <th>Name</th>
          <th>Address</th>
          <th>Description</th>
          <th></th>
          </tr>
      </thead>
      <tbody>                        
          {userLists?.map(data=>(
              <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.address}</td>
              <td>{data.description}</td>
              <td>
                <Link to={`/userDetail/${data?.id}`} ><Button className='btn-primary appBtn'>Edit</Button></Link>                
                <Button className='btn-danger appBtn' onClick={() => onDelete(data.id)}>Delete</Button>
              </td>
          </tr>
          ))                       
          }
      </tbody>
  </Table>
  );
}

export default UserDetailsGrid;