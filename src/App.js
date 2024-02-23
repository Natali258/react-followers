import { useEffect } from "react";
import { CardsList } from "./components/CardsList/CardsList";
import { useDispatch, useSelector } from "react-redux";
import { selectPage } from "./redux/users/slice";
import { changePage, fetchUsers } from "./redux/users/operations";

function App() {
  const dispatch = useDispatch();
  const nextPage = useSelector(selectPage);

  useEffect(() => {
    dispatch(fetchUsers(nextPage));
  }, [dispatch, nextPage]);

  return (
    <div className="App">
      <CardsList />
      <button
        onClick={() => {
          dispatch(changePage(nextPage + 1));
        }}
      >
        Load more...
      </button>
    </div>
  );
}

export default App;
