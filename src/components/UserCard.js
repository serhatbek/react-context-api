const UserCard = ({ user }) => {
  const { gender, email, name } = user;

  return (
    <div className='user'>
      <p>{`${name.first} ${name.last}`}</p>
      <p>{gender}</p>
      <p>{email}</p>
    </div>
  );
};

export default UserCard;
