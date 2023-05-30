import { Fragment } from "react"
import classes from "./Header.module.css"
import mealImgae from '../../assests/meals.jpg'

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealImgae}  alt="A Table full of Meals"/>
        </div>
    </Fragment>

}

export default Header