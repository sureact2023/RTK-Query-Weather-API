import React, {FormEvent} from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useGetWeatherDataQuery } from "./store2/API/weatherApi";

/**
 * ! Store 1 code
 */

// import { useGetWeatherDataQuery } from "./store/API/weatherApi";
// import { setSearchTerm } from "./store/slice/searchSlice";

/**
 * ! Store 2 code
 */
import { setSearchTerm } from "./store2/Slices/searchSlice";


function App() {
  const dispatch = useDispatch();
  /**
   * ! Store 1 code
   */
  // const store = useSelector((x: any) => x);
  // console.log(store);

  // const { data = [] } = useGetWeatherDataQuery(store.searchSlice.searchTerm);
  // console.log(data);

  /**
   * ! Store 2 code
   */
  const store = useSelector((state:any)=> state)
  console.log(store)

  const {data = [], isFetching} = useGetWeatherDataQuery(store.searchSlice.searchTerm)
  console.log(data)
  return (
    <div className="App">
      <form
        action=""
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          // @ts-ignore
          dispatch(setSearchTerm(e.target[0].value));
        }}
      >
        <input type="text" />
        <button type="submit">search</button>
      </form>

      {isFetching && <div>loading please wait....</div>}
      temperateure : {data?.main?.temp}
    </div>
  );
}

export default App;
