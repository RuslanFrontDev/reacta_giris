import Header from "./component/Header";
import Footer from "./component/Footer";
import {SiteContext, AuthContext} from "./context";
import Home from "./component/Home";
function App() {
  return (
    <SiteContext>
      <AuthContext>
        <Header />
        <Footer />
        <Home />
      </AuthContext>
    </SiteContext>
  );
}
export default App;
