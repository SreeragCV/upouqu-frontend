import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "../../utils/store/AuthSlice";
import { toast } from "react-toastify";

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const data = useSelector((state) => state.auth);
  const id = useSelector((state) => state.auth.user_id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let pages = ["home", "books", "contribute", "genres"];
  if (data.role === "super-admin") {
    pages = ["home", "books", "contribute", "genres", "dashboard"];
  }

  // console.log(data);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function handleLogoutButton() {
    dispatch(handleLogout());
    toast.success("Logged out successfully", {
      position: "top-center",
      autoClose: 2000,
      closeButton: true
    })
    return navigate("/");
  }

  return (
    <AppBar position="fixed" sx={{ background: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: `'Quicksand', 'sans-serif'`,
                fontWeight: 700,
                fontSize: "21px",
                letterSpacing: ".2rem",
                color: "darkgoldenrod",
                textDecoration: "none",
              }}
            >
              UPOUQU
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link
                  to={
                    (page === "home" && "") ||
                    (page === "dashboard" && "admin-panel") ||
                    (page === "books" && "books") ||
                    (page === "contribute" && "contribute") ||
                    (page === "genres" && "genres")
                  }
                  style={{
                    textDecoration: "none",
                    color: "black",
                    textAlign: "center",
                    fontFamily: `'Quicksand', sans-serif`,
                  }}
                >
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: `'Quicksand', sans-serif`,
              fontWeight: 600,
              // fontSize:'22px' ,
              letterSpacing: ".3rem",
              color: "goldenrod",
              textDecoration: "none",
            }}
          >
            UPOUQU
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                to={
                  (page === "home" && "") ||
                  (page === "dashboard" && "admin-panel") ||
                  (page === "books" && "books") ||
                  (page === "contribute" && "contribute") ||
                  (page === "genres" && "genres")
                }
                style={{ textDecoration: "none" }}
              >
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontFamily: `'Quicksand', sans-serif`,
                    fontSize: "15px",
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          {!data.isVerified ? (
            <div style={{ fontFamily: `'Quicksand', sans-serif` }}>
              <Link to="/login">LOGIN</Link>
              <span className="gap-4 m-2">/</span>
              <Link to="/signup">SIGNUP</Link>
            </div>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar style={{width:'55px'}} src={data.dp_url ? data.dp_url : "/broken-image.jpg"} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography
                    style={{
                      fontFamily: `'Quicksand', sans-serif`,
                      fontWeight: "700",
                    }}
                    onClick={() => navigate(`/user/${id}`)}
                    textAlign="center"
                  >
                    Profile
                  </Typography>
                </MenuItem>
                {data.role === "super-admin" && (
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography
                      style={{
                        fontFamily: `'Quicksand', sans-serif`,
                        fontWeight: "700",
                      }}
                      onClick={() => navigate(`/admin-panel`)}
                      textAlign="center"
                    >
                      Dashboard
                    </Typography>
                  </MenuItem>
                )}
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography
                    style={{
                      fontFamily: `'Quicksand', sans-serif`,
                      fontWeight: "700",
                    }}
                    onClick={handleLogoutButton}
                    textAlign="center"
                  >
                    Logout
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
