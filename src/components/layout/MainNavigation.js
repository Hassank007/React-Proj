import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css"


function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React App</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All AllMeetup</Link>
          </li>
          <li>
            <Link to="/newmeetup">NewMeetup</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
 
export default MainNavigation;
