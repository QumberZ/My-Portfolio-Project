import * as React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Home from "./Home";


import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

import { MovingComponent } from "react-moving-text";
import { motion, AnimatePresence } from "framer-motion";

import Profile from "./Profile";
import Info from "./Info";
import WordFlicker from "./WordFlicker";
import Projects from "./Projects";
import Skills from "./Skills";
import Resume from "./Resume";
import Contact from "./Contact";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  background: "#221532",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

function HomePage() {
  return (
    <div>
      <h2
        className="animate-charcter"
        style={{ color: "#FFACAC", marginTop: 0 }}
      >
        Welcome To My Personal Website!
      </h2>

      <Profile />

      <div style={{ margin: "20px 0" }}>
    
      </div>

      <div className="container" style={{ marginTop: "24px" }}>
        <div className="row">
          <div className="col-md-12 text-center">
            <Info />
          </div>
        </div>
      </div>
    </div>
  );
}
function AnimatedPageRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Info />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}
function ResponsiveDrawer() {
  const theme = useTheme();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  const navItems = [
    { text: "Home", icon: <HomeRoundedIcon />, path: "/" },
    { text: "About", icon: <PersonRoundedIcon />, path: "/about" },
    { text: "Projects", icon: <WorkRoundedIcon />, path: "/projects" },
    { text: "Skills", icon: <CodeRoundedIcon />, path: "/skills" },
    { text: "Resume", icon: <SchoolRoundedIcon />, path: "/resume" },
    { text: "Contact", icon: <EmailRoundedIcon />, path: "/contact" },
  ];

  return (
  <div
    style={{
      display: "flex",
      minHeight: "100vh",
      position: "relative",
      zIndex: 2,
    }}
  >
    <CssBaseline />

    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          onClick={() => setOpen(true)}
          edge="start"
          sx={{
            marginRight: 2,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon sx={{ color: "#E45A84" }} />
        </IconButton>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "40px",
            overflow: "hidden",
            position: "relative",
            zIndex: 3,
            pointerEvents: "none",
          }}
        >
          <motion.span
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              color: "#FFACAC",
              fontWeight: 700,
              display: "inline-block",
            }}
          >
            Qumber Zaidi
          </motion.span>
        </div>

        <Typography variant="h6" noWrap component="div" />
      </Toolbar>
    </AppBar>

    <Drawer
      variant="permanent"
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "#221532",
          color: "#FFACAC",
        },
      }}
    >
      <DrawerHeader>
        <IconButton onClick={() => setOpen(false)}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon sx={{ color: "#FFACAC" }} />
          ) : (
            <ChevronLeftIcon sx={{ color: "#FFACAC" }} />
          )}
        </IconButton>
      </DrawerHeader>

      <Divider />

      <List sx={{ pt: 1 }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <ListItem
              key={item.text}
              disablePadding
              sx={{ display: "block", px: 1 }}
            >
              <Tooltip title={!open ? item.text : ""} placement="right" arrow>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    mb: 0.5,
                    borderRadius: "12px",
                    backgroundColor: isActive
                      ? "rgba(228, 90, 132, 0.18)"
                      : "transparent",
                    border: isActive
                      ? "1px solid rgba(228, 90, 132, 0.35)"
                      : "1px solid transparent",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.06)",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: isActive ? "#FFACAC" : "#E45A84",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>

                  <ListItemText
                    primary={item.text}
                    sx={{
                      opacity: open ? 1 : 0,
                      "& .MuiTypography-root": {
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? "#FFACAC" : "#ffd3df",
                      },
                    }}
                  />
                </ListItemButton>
              </Tooltip>
            </ListItem>
          );
        })}
      </List>
    </Drawer>

    <main
      style={{
        flexGrow: 1,
        padding: "24px",
        paddingBottom: "64px",
        overflowY: "auto",
        color: "white",
        position: "relative",
        zIndex: 5,
      }}
    >
      <DrawerHeader />
      <AnimatedPageRoutes />
    </main>
  </div>
);
}

export default ResponsiveDrawer;