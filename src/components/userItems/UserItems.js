import { Fragment } from "react";

const UserItems = (props) => {
  const macroData = props.macroData;

  // const data = macroData.map((macroData) => (
  //   <div onClick={props.onRemove.bind(null, macroData.key)} key={macroData.id}>
  //     <p>Title:{macroData.titleData}</p>
  //     <p>Carbohydrates:{macroData.carbsData}</p>
  //     <p>Proteins:{macroData.proteinsData}</p>
  //     <p>Fats:{macroData.fatsData}</p>
  //   </div>
  // ));

  // const data = macroData.map((macroData) => {
  //   let x = "test";
  //   if (macroData.categoryData === "breakfast") {
  //     x = <div key={macroData.id}>
  //       <h1>Breakfast:</h1>
  //       <p>Title:{macroData.titleData}</p>
  //       <p>Carbohydrates:{macroData.carbsData}</p>
  //       <p>Proteins:{macroData.proteinsData}</p>
  //       <p>Fats:{macroData.fatsData}</p>
  //     </div>;

  //   }
  //   return x;
  // });

  const breakDiv = (
    <div>
      <p>BREAKFAST</p>
    </div>
  );

  const lunchDiv = (
    <div>
      <p>LUNCH</p>
    </div>
  );

  const dinnerDiv = (
    <div>
      <p>DINNER</p>
    </div>
  );

  const snacksDiv = (
    <div>
      <p>SNACKS</p>
    </div>
  );

  

  return <Fragment>{breakDiv}{lunchDiv}{dinnerDiv}{snacksDiv}</Fragment>;
};

export default UserItems;
