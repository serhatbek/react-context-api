import { useUsers } from '../context/UserContext';
import UserCard from './UserCard';

const ComponentA = () => {
  const { users } = useUsers();

  return (
    <div className='a' style={{ backgroundColor: 'green' }}>
      <h3>ComponentA Users</h3>

      {users
        ? users.map((user, index) => <UserCard user={user} key={index} />)
        : 'Loaading'}
    </div>
  );
};

export default ComponentA;
