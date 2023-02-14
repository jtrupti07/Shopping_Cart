import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import './navigation.styles.scss';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrownLogo />
                </Link>
                <div className="nav-link-container">
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='nav-link' to='/sign-in'>
                        SignIn
                    </Link>

                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;