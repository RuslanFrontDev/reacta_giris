
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { url } from "./utils/utils.js";

const App = () => {
  //console.log(generatePath('post/:id', {id:2}));
  console.log(
    url('home.blog.categories')
  );
  return useRoutes(routes);
};

export default App;
