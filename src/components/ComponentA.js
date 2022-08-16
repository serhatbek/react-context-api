import { useUsers } from '../context/UserContext';

const ComponentA = () => {
  const { users } = useUsers();
  console.log(users);

  return (
    <div style={{ backgroundColor: 'green' }}>
      <h3>ComponentA</h3>
      {/* <p>{gender}</p>
      <p>{name}</p>
      <p>{email}</p> */}

      {/* {users.map((user, index) => (
        <div key={index}>
          <p>{user.name}</p>
          <p>{user.gender}</p>
          <p>{user.email}</p>
        </div>
      ))} */}
    </div>
  );
};

export default ComponentA;
