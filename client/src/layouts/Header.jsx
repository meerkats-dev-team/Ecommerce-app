import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge"
import { styled } from "@mui/material/styles"
import IconButton from "@mui/material/IconButton"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

import Nav from "./Nav";

function Header() {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }))
  return (
    <header>
      <div className="site-header">
        <div className="primary-menu">
          <div className="mobile-menu">
            <div className="logo-area">
              <Tooltip title="Home">
                <Link to="/">LOGO</Link>
              </Tooltip>
            </div>
            <Nav />
          </div>
        </div>
        <div className="secondary-menu">
          <Tooltip title="Your Cart">
            <Link to="/cart">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Link>
          </Tooltip>
        </div>
      </div>
    </header>
  )
}

export default Header;
