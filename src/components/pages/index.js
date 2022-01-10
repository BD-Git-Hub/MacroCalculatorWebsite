import {
  Fragment,
  useRef,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import styled from "styled-components";
import { authContext } from "../context/AuthContext";
import UserItems from "../userItems/UserItems";

const StyledDiv = styled.div`
  background-color: red;
  width: 100%;
  margin: 0 auto;
`;

const StyledInput = styled.input`
  width: 15%;
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
  const authCtx = useContext(authContext);
  let userTokenId = authCtx.token;

  const titleRef = useRef();
  const carbRef = useRef();
  const proteinRef = useRef();
  const fatsRef = useRef();

  const [titleInput, setTitleInput] = useState("");
  const [carbInput, setCarbInput] = useState("");
  const [proteinInput, setProteinInput] = useState("");
  const [fatsInput, setFatsInput] = useState("");

  const [userInputData, setUserInputData] = useState([]);

  const addBtnHandler = () => {
    console.log(userTokenId);

    //check data in input field
    const titleData = titleRef.current.value;
    const carbData = carbRef.current.value;
    const proteinData = proteinRef.current.value;
    const fatsData = fatsRef.current.value;

    if (!titleData || !carbData || !proteinData || !fatsData) {
      return;
    }

    // //set data
    setUserInputData((prevState) => {
      if (prevState.length === 0) {
        return [
          {
            key: userTokenId,
            titleData: titleData,
            carbsData: carbData,
            proteinsData: proteinData,
            fatsData: fatsData,
          },
        ];
      } else {
        return [
          ...prevState,
          {
            key: userTokenId,
            titleData: titleData,
            carbsData: carbData,
            proteinsData: proteinData,
            fatsData: fatsData,
          },
        ];
      }
    });

    //clear input field
    setTitleInput("");
    setCarbInput("");
    setProteinInput("");
    setFatsInput("");
  };

  //RETRIEVE DATA FROM DATABASE
  const retrieveDataHandler = useCallback(async () => {
    console.log("retrieve Data");

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

      setUserInputData(data);

      //setUserInputData(loadedMacros);
    } catch (error) {
      alert(error);
    }
  }, []);

  // useEffect(() => {
  //   if (userInputData.length === 0) {
  //     return;
  //   } else if (userInputData.length > 0 && dataRecieved) {
  //     retrieveDataHandler();
  //   } else if (userTokenId) {
  //     console.log("userToken Found!");
  //     retrieveDataHandler();
  //   } else {
  //     postDataHandler(userInputData);
  //   }

  //   return () => {};
  // }, [userInputData, dataRecieved, retrieveDataHandler, userTokenId]);

  const removeItemHandler = (id) => {
    setUserInputData((prevUserInputData) => {
      return prevUserInputData.filter((item) => item.key !== id);
    });
  };

  //POST DATA TO DATABASE
  const postDataHandler = async (userData) => {
    console.log("postDataHandler");

    try {
      const response = await fetch(
        `https://react-http-735ad-default-rtdb.europe-west1.firebasedatabase.app/macros.json`,
        {
          method: "PUT",
          body: JSON.stringify(userData),
          headers: {
            "Content-Type": "application/JSON",
          },
        }
      );
      if (!response.ok) {
        throw new Error("response failed!");
      }
      //const data = response.json();
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (userTokenId) {
      retrieveDataHandler();
    }

    return () => {
      setUserInputData([]);
    };
  }, [retrieveDataHandler, userTokenId]);

  return (
    <Fragment>
      <StyledDiv>
        <label htmlFor="macroTitle">Title</label>
        <StyledInput
          type="text"
          ref={titleRef}
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
        />
        <label htmlFor="carbohydrateTitle">Carbohydrates:</label>
        <StyledInput
          type="text"
          ref={carbRef}
          value={carbInput}
          onChange={(e) => setCarbInput(e.target.value)}
        />
        <label htmlFor="proteinTitle">proteins:</label>
        <StyledInput
          type="text"
          ref={proteinRef}
          value={proteinInput}
          onChange={(e) => setProteinInput(e.target.value)}
        />
        <label htmlFor="proteinTitle">Fats:</label>
        <StyledInput
          type="text"
          ref={fatsRef}
          value={fatsInput}
          onChange={(e) => setFatsInput(e.target.value)}
        />

        <StyledInputButton onClick={addBtnHandler}>Add</StyledInputButton>

        <Styledh1>MacroCalculator:</Styledh1>
      </StyledDiv>
      <StyledTodoDiv>
        <UserItems macroData={userInputData} onRemove={removeItemHandler} />
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
