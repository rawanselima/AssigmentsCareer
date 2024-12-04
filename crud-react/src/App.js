import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { FetchPosts } from "./network/fetchposts";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonAppBar from "./components/navbar";
import Card_Component from "./components/cardpost";
import BasicTextFields from "./components/addPost";

function App() {
  let dispatch = useDispatch();
  let data = useSelector((state) => state.poststore);

  useEffect(() => {
    dispatch(FetchPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <ButtonAppBar></ButtonAppBar>
      {data.map((ele) => {
        return <Card_Component posts={ele} key={ele.id} />;
      })}

      <BasicTextFields />
    </div>
  );
}

export default App;
