import { Fragment, useRef, useState, useContext, useEffect } from "react";
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

const StyledInputButton = styled.input.attrs({
  type: "submit",
  value: "SUBMIT",
})`
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
  let itemCount = useRef(undefined);
  let controller = new AbortController();

  const titleRef = useRef();
  const carbRef = useRef();
  const proteinRef = useRef();
  const fatsRef = useRef();

  const [titleInput, setTitleInput] = useState("");
  const [carbInput, setCarbInput] = useState("");
  const [proteinInput, setProteinInput] = useState("");
  const [fatsInput, setFatsInput] = useState("");
  const [categorySelected, setCategorySelected] = useState("breakfast");

  const [userInputData, setUserInputData] = useState([]);

  const [displayData, setDisplayData] = useState();
  const [submitted, setSubmitted] = useState(false);
  const [itemRemoved, setItemRemoved] = useState(false);
  const [itemAdjusted, setItemAdjusted] = useState(false);
  

  const addBtnHandler = (e) => {
    e.preventDefault();

    //check data in input field
    const titleData = titleRef.current.value;
    const carbData = carbRef.current.value;
    const proteinData = proteinRef.current.value;
    const fatsData = fatsRef.current.value;
    const categoryData = categorySelected;
    let keyGen = (Math.random() + 1).toString(36).substring(2);

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
            categoryData: categoryData,
            id: keyGen,
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
            categoryData: categoryData,
            id: keyGen,
          },
        ];
      }
    });

    //clear input field
    setTitleInput("");
    setCarbInput("");
    setProteinInput("");
    setFatsInput("");
    setSubmitted(true);

    setCategorySelected("breakfast");
  };

  const removeItemHandler = (id) => {
    setUserInputData((prevUserInputData) => {
      return prevUserInputData.filter((item) => item.id !== id);
    });

    setItemRemoved(true);
  };

  useEffect(() => {
    let controller = new AbortController();

    //RETRIEVE DATA FROM DATABASE
    const retrieveDataHandler = async () => {
      try {
        const response = await fetch(
          "https://react-http-735ad-default-rtdb.europe-west1.firebasedatabase.app/macros.json",
          {
            method: "GET",
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error("retrieving data failed");
        }

        const data = await response.json();

        if (data === null) {
          setDisplayData(false);

          return;
        } else {
          setUserInputData(data);
          itemCount.current = data.length;

          setDisplayData(true);
        }
      } catch (error) {
        alert(error);
      }
    };

    if (userTokenId) {
      retrieveDataHandler();
    }

    return () => {
      //controller.abort();
      setUserInputData([]);
    };
  }, [userTokenId]);

  // //POST DATA TO DATABASE
  const postDataHandler = async (userData) => {
    try {
      const response = await fetch(
        "https://react-http-735ad-default-rtdb.europe-west1.firebasedatabase.app/macros.json",
        {
          method: "PUT",
          body: JSON.stringify(userData),
          headers: {
            "Content-Type": "application/JSON",
          },
          signal: controller.signal,
        }
      );
      if (!response.ok) {
        throw new Error("response failed!");
      }

      setDisplayData(true);
    } catch (error) {
      alert(error);
    }
  };

  //RETRIEVE DATA FROM DATABASE
  const retrieveDataHandler = async () => {
    try {
      const response = await fetch(
        "https://react-http-735ad-default-rtdb.europe-west1.firebasedatabase.app/macros.json",
        {
          method: "GET",
          signal: controller.signal,
        }
      );

      if (!response.ok) {
        throw new Error("retrieving data failed");
      }

      const data = await response.json();

      if (data === null) {
        setDisplayData(false);

        return;
      } else {
        setUserInputData(data);
        itemCount.current = data.length;

        setDisplayData(true);
      }
    } catch (error) {
      alert(error);
    }
  };

  if (submitted === true) {
    postDataHandler(userInputData);
    setSubmitted(false);
  }

  if (itemRemoved === true) {
    postDataHandler(userInputData);
    setItemRemoved(false);
  }

  if (itemAdjusted === true) {
    retrieveDataHandler();
    setItemAdjusted(false);
  }

  const handleSelectChange = (event) => {
    setCategorySelected(event.target.value);
  };

  const inputAdjustedHandler = (prevTitle, titleInput) => {
    //get the previous userInputData

    //find where title is for that particular item
    userInputData.map((macroData) => {
      if (macroData.titleData === prevTitle) {
        macroData.titleData = titleInput;
        postDataHandler(userInputData);
      }
      return macroData;
    });

    setItemAdjusted(true);
  };

  return (
    <Fragment>
      <StyledDiv>
        <form onSubmit={addBtnHandler}>
          <label htmlFor="macroTitle">Title</label>
          <StyledInput
            type="text"
            ref={titleRef}
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
            name="macroTitle"
          />
          <label htmlFor="carbohydrateTitle">Carbohydrates:</label>
          <StyledInput
            type="text"
            ref={carbRef}
            value={carbInput}
            onChange={(e) => setCarbInput(e.target.value)}
            name="carbohydrateTitle"
          />
          <label htmlFor="proteinTitle">proteins:</label>
          <StyledInput
            type="text"
            ref={proteinRef}
            value={proteinInput}
            onChange={(e) => setProteinInput(e.target.value)}
            name="proteinTitle"
          />
          <label htmlFor="proteinTitle">Fats:</label>
          <StyledInput
            type="text"
            ref={fatsRef}
            value={fatsInput}
            onChange={(e) => setFatsInput(e.target.value)}
            name="proteinTitle"
          />
          <label htmlFor="category">Category:</label>
          <select value={categorySelected} onChange={handleSelectChange}>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
          </select>

          <StyledInputButton />
        </form>

        <Styledh1>MacroCalculator:</Styledh1>
      </StyledDiv>
      <StyledTodoDiv>
        {!displayData && <p>No Data</p>}
        {displayData && (
          <UserItems
            macroData={userInputData}
            onRemove={removeItemHandler}
            inputAdjusted={inputAdjustedHandler}
          />
        )}
      </StyledTodoDiv>
    </Fragment>
  );
};

export default Main;
