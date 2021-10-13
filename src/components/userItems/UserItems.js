import UserItem from "./UserItem";

const UserItems = (props) => {
  const userData = props.userInputData;

 

  const data = userData.map((userData) => <div onClick={props.onRemove(userData.key)}><p>{userData.userData}</p></div>);

  

  return (
    
      <UserItem item={data} />
    
  );
};

export default UserItems;
