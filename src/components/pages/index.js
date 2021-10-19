import { Fragment, useRef, useState, useEffect } from "react";
import styled from "styled-components";
import UserItems from "../userItems/UserItems";

const StyledDiv = styled.div`
  background-color: red;
  width: 100%;
  margin: 0 auto;
`;

const StyledInput = styled.input`
  width: 80%;
  padding: 2rem 3rem;
  box-sizing: border-box;
  margin-left 3rem;
`;

const StyledInputButton = styled.button`
  width: 15%;
  padding: 2rem 3rem;
  margin-left: 1rem;
`;

const Styledh1 = styled.h1`
  text-align: center;
  font-size: 3rem;
`;

const StyledTodoDiv = styled.div`
  background-color: #d4f1f4;
`;

const Main = () => {
  const inputRef = useRef();
  const [userInputData, setUserInputData] = useState([{}]);
  const [input, setInput] = useState("");

  const addBtnHandler = () => {
    //check data in input field
    const inputData = inputRef.current.value;

    if (!inputData || !userInputData) {
      return;
    }

    //set
    setUserInputData((prevState) => {
      return [
        ...prevState,
        { key: Math.random().toString(), userData: inputData },
      ];
    });

    //clear input field
    setInput("");

    
    //postDataHandler();
  };

  const removeItemHandler = (id) => {
    setUserInputData((prevUserInputData) => {
      return prevUserInputData.filter((item) => item.key !== id);
    });
  };

  //RETRIEVE DATA FROM DATABASE
  const retrieveDataHandler = async () => {
    try {
      const response = await fetch(
        "https://react-http-735ad-default-rtdb.europe-west1.firebasedatabase.app/macros.json",
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("retrieving data failed");
      }

      const data = await response.json();

      const loadedMacros = [];

      for (const key in data) {
        const removedFirstItem = data[key].slice(1);

        loadedMacros.push({
          key: removedFirstItem[0].key,
          userData: removedFirstItem[0].userData,
        });
      }

      setUserInputData(loadedMacros);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    retrieveDataHandler();

    return () => {};
  }, []);

  //POST DATA TO DATABASE
  // const postDataHandler = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://react-http-735ad-default-rtdb.europe-west1.firebasedatabase.app/macros.json",
  //       {
  //         method: "POST",
  //         body: JSON.stringify(userInputData),
  //         headers: {
  //           "Content-Type": "application/JSON",
  //         },
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("response failed!");
  //     }

  //     //const data = response.json();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Fragment>
      <StyledDiv>
        <StyledInput
          type="text"
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></StyledInput>
        <StyledInputButton onClick={addBtnHandler}>Add</StyledInputButton>
        <Styledh1>Bovs MacroCalculator:</Styledh1>
      </StyledDiv>
      <StyledTodoDiv>
        <UserItems userInputData={userInputData} onRemove={removeItemHandler} />
      </StyledTodoDiv>
    </Fragment>
  );
};

export default Main;

//RETRIEVE DATA FROM DATABASE
// useEffect(() => {
//   fetch(
//     "https://react-http-735ad-default-rtdb.europe-west1.firebasedatabase.app/macros.json",
//     {
//       method: "GET",
//     }
//   )
//     .then((res) => {
//       if (res.ok) {

//         return res.json();
//       } else {
//         return res.json().then((data) => {
//           let errorMessage = "Sending Macros data failed";

//           if (data && data.error && data.error.message) {
//             errorMessage = data.error.message;
//           }
//           throw new Error(errorMessage);
//         });
//       }
//     })

//     .catch((err) => {
//       alert(err.message);
//     });

//   return () => {};
// }, []);
