import MyContext from "../../context";
import Navbar from "./Navbar";

const NavbarContainer = () => {

  return (
    <MyContext.Consumer>
      {store => {
        return <Navbar friends={store.getState().navbar.friends} />
      }}
    </MyContext.Consumer>
  );
}

export default NavbarContainer;