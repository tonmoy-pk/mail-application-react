import React from "react";
import ReorderIcon from '@mui/icons-material/Reorder';
import { IconButton,Avatar } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import "./css/header.css";
import AppsIcon from '@mui/icons-material/Apps';
import SettingsIcon from '@mui/icons-material/Settings';

const Header = ()=>{
    return(
        <div className="header">
            <div className="header_left">
                <IconButton>
                    <ReorderIcon></ReorderIcon>
                </IconButton>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6IiChrJlnsjRnpaz4y87uhf1P1eNZeZAP8A&usqp=CAU" alt="logo" width="45px" height="40px"/>
            </div>
            <div className="header_middle">
                <div className="search_mail">
                <IconButton>
                    <SearchIcon></SearchIcon>
                </IconButton>
                <input type="text" placeHolder="Search mail"></input>
                </div>
            </div>
            <div className="header_right">
            <IconButton>
                <AppsIcon></AppsIcon>
            </IconButton>
            <IconButton>
                <SettingsIcon></SettingsIcon>
            </IconButton>
            <Avatar src="https://backoffice.daily-bangladesh.com/media/imgAll/2021November/English/SM/Tasnuva-Tisha-Syed-Prince-Ashkar-Daily-Bangladesh-2202020742-SM.jpg"></Avatar>
            </div>

        </div>
    )
}
export default Header