import { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Tab,
  Tabs,
  useTheme
} from "@mui/material";
import logo from "../../assets/images/main-logo.png";
import navItems from "../../data/mainHeaderItem";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

export default function MainHeader() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={isScrolled ? "main-header-scroll" : "main-header"}>
        <Toolbar>
          <Box sx={{ flexGrow: 0.1 }} />
          <Box mt="1rem">
            <img src={logo} alt="Logo"></img>
          </Box>
          <Box sx={{ flexGrow: 0.4 }} />
          <Box mt="1.2rem" sx={{ flexGrow: 0.4, height: "2rem" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="Scrolling Button Navbar"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {navItems.map(({ text, url, icon }, index) => (
                <Tab
                  key={index}
                  label={text}
                  sx={{
                    color: "#222",
                    indicator: "#222",
                    textTransform: "revert",
                    fontSize: "18px",
                    fontWeight: "bold",
                    fontFamily: "Montserrat-Regular",
                    maxWidth: "500px"
                  }}
                  component={Link}
                  to={url}
                  icon={icon}
                  onClick={() => console.log(url)}
                ></Tab>
              ))}
            </Tabs>
          </Box>
          <Box
            sx={{
              height: "0.5rem",
              display: { xs: "none", md: "flex" }
            }}
          >
            <IconButton component="a" href="https://twitter.com">
              <Twitter
                sx={{
                  color: theme.palette.primary[500],
                  fontSize: "28px"
                }}
              ></Twitter>
            </IconButton>
            <IconButton component="a" href="https://www.facebook.com">
              <FacebookIcon
                sx={{
                  color: theme.palette.primary[500],
                  fontSize: "28px"
                }}
              ></FacebookIcon>
            </IconButton>
            <IconButton component="a" href="https://www.linkedin.com">
              <LinkedInIcon
                sx={{
                  color: theme.palette.primary[500],
                  fontSize: "28px"
                }}
              ></LinkedInIcon>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
