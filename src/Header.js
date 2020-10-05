import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { Link } from 'react-router-dom';

import './Header.css';

const Header = ({backButton}) => {
    return (
        // BEM
        <div className="header">
            {
                backButton ? (
                    <Link to={backButton}>
                        <IconButton>
                            <ArrowBackIosIcon fontSize="large" className="header__icon" />
                        </IconButton>
                    </Link>
                ):(
                    <IconButton>
                        <PersonIcon className="header__icon" fontSize="large"/>
                    </IconButton>
                )
            }
            <Link to="/">
                <img
                    className="header__logo" 
                    src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" 
                    alt="tinder logo" 
                />
            </Link>
            <Link to="/chat">
                <IconButton>
                    <QuestionAnswerIcon className="header__icon" fontSize="large"/>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header;