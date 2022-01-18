import { Fragment } from "react";

const UserItems = (props) => {
  const macroData = props.macroData;

  const data = macroData.map((macroData) => (
    <div onClick={props.onRemove.bind(null, macroData.key)} key={macroData.id}>
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

  return <Fragment>{data}</Fragment>;
  //<UserItem item={data} />;
};

export default UserItems;
