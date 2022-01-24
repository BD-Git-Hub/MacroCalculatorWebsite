import React, {Fragment} from 'react'

const Snacks = (props) => {
    let userItemTemplate = (
        <Fragment>
          <p>Title:</p>
          <p>Carbohydrates:</p>
          <p>Proteins:</p>
          <p>Fats:</p>
        </Fragment>
      );
      let macroData = props.data;
    
    
      const item = macroData.map((macroData, index) => {
        let holder = "";
        holder = <Fragment>
          <p>Title:{macroData[0]}</p>
          <p>Carbohydrates:{macroData[1]}</p>
          <p>Proteins:{macroData[2]}</p>
          <p>Fats:{macroData[3]}</p>
        </Fragment>
        return holder;
    
      });
    
      userItemTemplate = item;
    
      return userItemTemplate;
}

export default Snacks
