import React, { useState } from "react";
import NavbarOption from "./NavbarOption";
import { TiHome } from "react-icons/ti";
import { BsFillPeopleFill } from "react-icons/bs";
import { HiOutlineCash } from "react-icons/hi";
import { SiWechat } from "react-icons/si";
import { IoMdNotifications } from "react-icons/io";
import { BiSearchAlt } from "react-icons/bi";
import { GrMenu, GrClose } from "react-icons/gr";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { IoPersonAddSharp, IoSettingsSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { useSelector } from "react-redux";
import { selectUser } from "../../Redux/features/userSlice";

import "../../style/header.css";

const Header = () => {
  const user = useSelector(selectUser);

  const [openMenu, setMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      <div className="header__left">
        <div className="header__logo">
          <img src="../images/icon.png" />
        </div>
        <form>
          <BiSearchAlt className="icon" />
          <input type="text" placeholder="Search" />
        </form>
      </div>

      <div className="header__right d_f-ali_c">
        <nav className={`header__navbar ${openMenu && "active"}`}>
          <ul>
            <NavbarOption Link={"/"} Icon={TiHome} Name={"Home"} />
            <NavbarOption
              Link={"/mynetwork"}
              Icon={BsFillPeopleFill}
              Name={"My Network"}
            />
            <NavbarOption Link={"/jobs"} Icon={HiOutlineCash} Name={"Jobs"} />
            <NavbarOption Link={"/message"} Icon={SiWechat} Name={"Messages"} />
            <NavbarOption
              Link={"/notifation"}
              Icon={IoMdNotifications}
              Name={"Notifation"}
            />
          </ul>
          <div className="closehamburgar" onClick={() => setMenu(!openMenu)}>
            <GrClose className="icon" />
          </div>
        </nav>
        {openMenu ? (
          ""
        ) : (
          <div className="hamburgarMenu" onClick={() => setMenu(!openMenu)}>
            <GrMenu className="icon" />
          </div>
        )}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar alt={user?.displayName} src={user?.photoURL}></Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            <Avatar src={user?.photoURL} /> {user?.displayName}
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <IoPersonAddSharp fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <IoSettingsSharp fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <MdLogout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
