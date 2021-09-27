import style from './MainNavigation.module.css'

import {NavLink} from 'react-router-dom';

const MainNavigation = () => {
    return (
        <header className={style.header}>
            <div className={style.logo}>Great Quotes</div>
            <nav className={style.nav}>
                <ul>
                    <li>
                        <NavLink to='/quotes' className={style.active}>
                            All Quotes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/new-quote' className={style.active}>
                            Add a Quotes
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;