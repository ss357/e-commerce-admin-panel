import classes from "./Navbar.module.css";
import icon from "../../asset/shopping.png";
import add from "../../asset/plus.png";
import profile from "../../asset/man.png";

export default function Navbar() {
  return (
    <div className= {classes.Navbar}>
      <div className={classes.navigation}>
        <ul>
          <li>
            <button>
              <img className={classes.icon} src={icon} alt="" />
            </button>
          </li>
          <li>
            <button>Products</button>
          </li>
          <li>
            <button>
              Add product
              <span>
                
                <img height={"20px"}  src={add} alt="" />
              </span>
            </button>
          </li>
        </ul>
      </div>
      <div className={classes.profile}>
        <img className={classes.icon} src={profile} alt="" />
        <span>Suman Atta</span>
      </div>
    </div>
  );
}
