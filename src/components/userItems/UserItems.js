import UserItem from "./UserItem";

const UserItems = (props) => {
  const macroData = props.macroData;

  //console.log(macroData);

  const data = macroData.map((macroData) => (
    <div onClick={props.onRemove.bind(null, macroData.key)}>
      <p>Title:{macroData.titleData}</p>
      <p>Carbohydrates:{macroData.carbsData}</p>
      <p>Proteins:{macroData.proteinsData}</p>
      <p>Fats:{macroData.fatsData}</p>
    </div>
  ));

  // const data = userData.map((userData) => (
  //   <div onClick={props.onRemove.bind(null, userData.key)}>
  //     <p>{userData.userData}</p>
  //   </div>

  //));

  return <UserItem item={data} />;
};

export default UserItems;
