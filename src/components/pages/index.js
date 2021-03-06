import {
  Fragment,
  useRef,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { authContext } from "../context/AuthContext";
import UserItems from "../userItems/UserItems";
import {
  StyledDiv,
  StyledInput,
  StyledSubmitButton,
  StyledTodoDiv,
  StyledLabel,
  StyledSelect,
} from "./PagesElements";


const Main = () => {
  
  document.title = "Macros Page"
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
  // const [showDiv, setShowDiv] = useState(false);

  

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
      setItemAdjusted(true);
      
    } catch (error) {
      alert(error);
    }
  };

  //RETRIEVE DATA FROM DATABASE
  const retrieveDataHandler = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    //let controller = new AbortController();

    //RETRIEVE DATA FROM DATABASE
    // const retrieveDataHandler = async () => {
    //   try {
    //     const response = await fetch(
    //       "https://react-http-735ad-default-rtdb.europe-west1.firebasedatabase.app/macros.json",
    //       {
    //         method: "GET",
    //         //signal: controller.signal,
    //       }
    //     );

    //     if (!response.ok) {
    //       throw new Error("retrieving data failed");
    //     }

    //     const data = await response.json();

    //     if (data === null) {
    //       setDisplayData(false);

    //       return;
    //     } else {
    //       setUserInputData(data);
    //       itemCount.current = data.length;

    //       setDisplayData(true);
    //     }
    //   } catch (error) {
    //     alert(error);
    //   }
    // };

    if (userTokenId) {
      retrieveDataHandler();
    }

    return () => {
      //controller.abort();
      //setUserInputData([]);
    };
  }, [userTokenId, retrieveDataHandler]);

  if (itemRemoved === true) {
    postDataHandler(userInputData);
    setItemRemoved(false);
  }

  if (submitted === true) {
    postDataHandler(userInputData);
    setSubmitted(false);
  }

  if (itemAdjusted === true) {
    retrieveDataHandler();
    setItemAdjusted(false);
  }

  const handleSelectChange = (event) => {
    setCategorySelected(event.target.value);
  };

  const inputAdjustedHandler = (prevInput, input, id, categoryInput) => {
    userInputData.map((macroData) => {
      if (macroData.id === id) {
        if (macroData.titleData === prevInput) {
          macroData.titleData = input;
        } else if (macroData.carbsData === prevInput) {
          macroData.carbsData = input;
        } else if (macroData.proteinsData === prevInput) {
          macroData.proteinsData = input;
        } else if (macroData.fatsData === prevInput) {
          macroData.fatsData = input;
        }
        postDataHandler(userInputData);
      }

      return macroData;
    });
  };

  // const toggleBtnHandler = () => {
  //   if (!showDiv) {
  //     setShowDiv(true);
  //   } else {
  //     setShowDiv(false);
  //   }
  // };

  return (
    <Fragment>
      {/* <StyledDiv> */}
        <form onSubmit={addBtnHandler}>
          <StyledLabel htmlFor="category">Category:</StyledLabel>
          
          <StyledSelect value={categorySelected} onChange={handleSelectChange}>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
          </StyledSelect>
          <StyledLabel htmlFor="macroTitle">Title:</StyledLabel>
          <StyledInput
          id="macroTitle"
            type="text"
            ref={titleRef}
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
            name="macroTitle"
          />
          <StyledLabel htmlFor="carbohydrateTitle" >Carbohydrates:</StyledLabel>
          <StyledInput
            id="carbohydrateTitle"
            type="text"
            ref={carbRef}
            value={carbInput}
            onChange={(e) => setCarbInput(e.target.value)}
            name="carbohydrateTitle"
          />
          <StyledLabel htmlFor="proteinTitle">proteins:</StyledLabel>
          <StyledInput
            id="proteinTitle"
            type="text"
            ref={proteinRef}
            value={proteinInput}
            onChange={(e) => setProteinInput(e.target.value)}
            name="proteinTitle"
          />
          <StyledLabel htmlFor="fatsTitle">Fats:</StyledLabel>
          <StyledInput
            id="fatsTitle"
            type="text"
            ref={fatsRef}
            value={fatsInput}
            onChange={(e) => setFatsInput(e.target.value)}
            name="proteinTitle"
          />

          <StyledSubmitButton />
        </form>
      {/* </StyledDiv> */}
      <StyledTodoDiv>
        {!displayData && <p>No Data</p>}
        {displayData && (
          <UserItems
            macroData={userInputData}
            onRemove={removeItemHandler}
            inputAdjusted={inputAdjustedHandler}
          />
        )}
        {/* <button onClick={toggleBtnHandler}>Toggle</button>

        <Transition in={showDiv} timeout={1000} mountOnEnter unmountOnExit>
          {state => (
            <div
            style={{ backgroundColor: "red", width: 100, height: 100, margin: 'auto', transition: 'opacity 1s ease-out', opacity: state === 'exiting' ? 0 : 1 }}
          ></div>

          )}
          
        </Transition> */}
      </StyledTodoDiv>
    </Fragment>
  );
};

export default Main;
