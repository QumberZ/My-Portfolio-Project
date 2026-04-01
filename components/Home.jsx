import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  Chip,
  Avatar,
} from "@mui/material";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import { motion } from "framer-motion";
import Profile from "./Profile";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const quickNavBtnSx = {
  borderRadius: "999px",
  textTransform: "none",
  color: "#FFACAC",
  border: "1px solid rgba(255,172,172,0.25)",
  bgcolor: "rgba(255,255,255,0.03)",
  "&:hover": {
    bgcolor: "rgba(255,172,172,0.06)",
    borderColor: "#FFACAC",
  },
};

export default function Home() {
  const navCards = [
    {
      title: "About Me",
      description:
        "Learn more about who I am, how I think, and what drives me.",
      icon: <PersonRoundedIcon />,
      path: "/about",
    },
    {
      title: "Projects",
      description:
        "Explore interactive apps and creative builds I’ve worked on.",
      icon: <WorkRoundedIcon />,
      path: "/projects",
    },
    {
      title: "Skills",
      description: "View my technical stack, coursework, and strengths.",
      icon: <CodeRoundedIcon />,
      path: "/skills",
    },
    {
      title: "Resume",
      description: "See my experience, education, and professional profile.",
      icon: <DescriptionRoundedIcon />,
      path: "/resume",
    },
  ];

  const featuredProjects = [
    {
      title: "List Creationz",
      subtitle: "Task management platform",
      description:
        "A modern to-do and productivity app with authentication, structured workflows, and a clean UI.",
      path: "/projects",
    },
    {
      title: "Amazon-Style Shopping App",
      subtitle: "E-commerce storefront",
      description:
        "A retail-inspired shopping experience focused on browsing, layout, and user-friendly design.",
      path: "/projects",
    },
    {
      title: "Goat Grade Collectibles",
      subtitle: "NBA pack opening experience",
      description:
        "An interactive trading card pack opening concept inspired by sports collectibles and NFTs.",
      path: "/projects",
    },
  ];

  const topSkills = [
    "React",
    "JavaScript",
    "Node.js",
    "PostgreSQL",
    "MUI",
    "Full Stack Development",
    "UI/UX",
    "Cybersecurity",
  ];

  return (
    <Box
      sx={{
        position: "relative",
        color: "#fff",
        px: { xs: 1, md: 2 },
        py: 1,
        overflow: "hidden",
      }}
    >
      <MotionBox
        animate={{ x: [0, 14, 0], y: [0, -18, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          top: 0,
          right: 20,
          width: 240,
          height: 240,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(228,90,132,0.22) 0%, rgba(228,90,132,0) 72%)",
          filter: "blur(12px)",
          pointerEvents: "none",
        }}
      />

      <MotionBox
        animate={{ x: [0, -16, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          bottom: 0,
          left: -30,
          width: 260,
          height: 260,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,172,172,0.16) 0%, rgba(255,172,172,0) 74%)",
          filter: "blur(14px)",
          pointerEvents: "none",
        }}
      />

      {/* Homepage welcome heading */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <h2
          className="animate-charcter"
          style={{
            marginTop: 0,
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Welcome To My Personal Website!
        </h2>
      </motion.div>
      <Profile />

      <div style={{ margin: "20px 0" }}></div>

      <MotionCard
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{
          mb: 3,
          borderRadius: "30px",
          background:
            "linear-gradient(135deg, rgba(38,24,58,0.97), rgba(59,31,89,0.92))",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
          <Stack direction="row" spacing={1} alignItems="center" mb={1.5}>
            <Avatar sx={{ bgcolor: "rgba(228,90,132,0.18)", color: "#FFACAC" }}>
              <RocketLaunchRoundedIcon />
            </Avatar>
            <Typography
              sx={{
                color: "#ffbfd0",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontSize: "0.82rem",
              }}
            >
              Portfolio Home
            </Typography>
          </Stack>

          <Typography
            sx={{
              fontWeight: 800,
              lineHeight: 1.08,
              mb: 1.5,
              fontSize: { xs: "2.2rem", md: "3.4rem" },
              background:
                "linear-gradient(90deg, #FFFFFF 0%, #FFACAC 50%, #E45A84 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Hi, I’m Qumber.
          </Typography>

          <Typography
            sx={{
              color: "#e4d8eb",
              lineHeight: 1.85,
              fontSize: { xs: "1rem", md: "1.08rem" },
              maxWidth: "850px",
              mb: 2.5,
            }}
          >
            I’m a Computer Science Graduate and developer who enjoys building
            modern, interactive web experiences with clean design, strong
            frontend structure, and thoughtful technical execution. This
            portfolio is a space to explore my projects, skills, resume, and the
            kind of work I’m excited to keep building.
          </Typography>

          <Stack direction="row" flexWrap="wrap" gap={1.1} mb={3}>
            <Chip
              label="Full Stack Developer"
              sx={{
                color: "#fff",
                bgcolor: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
            <Chip
              label="Interactive UI"
              sx={{
                color: "#fff",
                bgcolor: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
            <Chip
              label="Creative Problem Solver"
              sx={{
                color: "#fff",
                bgcolor: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
            <Chip
              label="Cybersecurity Interest"
              sx={{
                color: "#fff",
                bgcolor: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
            <Button
              component={Link}
              to="/projects"
              variant="contained"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                borderRadius: "999px",
                px: 3,
                py: 1.2,
                textTransform: "none",
                fontWeight: 700,
                bgcolor: "#E45A84",
                boxShadow: "0 10px 30px rgba(228,90,132,0.28)",
                "&:hover": {
                  bgcolor: "#cf4d74",
                },
              }}
            >
              View Projects
            </Button>

            <Button
              component={Link}
              to="/contact"
              variant="outlined"
              startIcon={<EmailRoundedIcon />}
              sx={{
                borderRadius: "999px",
                px: 3,
                py: 1.2,
                textTransform: "none",
                fontWeight: 700,
                color: "#FFACAC",
                borderColor: "rgba(255,172,172,0.35)",
                "&:hover": {
                  borderColor: "#FFACAC",
                  bgcolor: "rgba(255,172,172,0.06)",
                },
              }}
            >
              Contact Me
            </Button>
          </Stack>
        </CardContent>
      </MotionCard>

      {/* Command-style quick nav */}
      <MotionCard
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
        sx={{
          mb: 3,
          borderRadius: "24px",
          background: "rgba(34, 21, 50, 0.94)",
          border: "1px solid rgba(255,255,255,0.07)",
          color: "#fff",
        }}
      >
        <CardContent sx={{ p: { xs: 2, md: 2.5 } }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={1.5}
            alignItems={{ xs: "flex-start", md: "center" }}
            justifyContent="space-between"
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                sx={{
                  bgcolor: "rgba(228,90,132,0.18)",
                  color: "#FFACAC",
                  width: 34,
                  height: 34,
                }}
              >
                <TerminalRoundedIcon />
              </Avatar>
              <Typography sx={{ color: "#d8cae2", fontWeight: 700 }}>
                Quick Navigation
              </Typography>
            </Stack>

            <Stack direction="row" flexWrap="wrap" gap={1}>
              <Button component={Link} to="/about" sx={quickNavBtnSx}>
                About
              </Button>
              <Button component={Link} to="/projects" sx={quickNavBtnSx}>
                Projects
              </Button>
              <Button component={Link} to="/skills" sx={quickNavBtnSx}>
                Skills
              </Button>
              <Button component={Link} to="/resume" sx={quickNavBtnSx}>
                Resume
              </Button>
              <Button component={Link} to="/contact" sx={quickNavBtnSx}>
                Contact
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </MotionCard>

      <MotionCard
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        sx={{
          mb: 3,
          borderRadius: "26px",
          background: "rgba(34, 21, 50, 0.94)",
          border: "1px solid rgba(255,255,255,0.07)",
          color: "#fff",
        }}
      >
        <CardContent sx={{ p: { xs: 2, md: 3 } }}>
          <Stack direction="row" spacing={1} alignItems="center" mb={2.5}>
            <Avatar sx={{ bgcolor: "rgba(228,90,132,0.18)", color: "#FFACAC" }}>
              <AutoAwesomeRoundedIcon />
            </Avatar>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                background: "linear-gradient(90deg, #FFACAC, #E45A84)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "0.5px",
              }}
            >
              Where would you like to explore?
            </Typography>
          </Stack>

          <Grid container spacing={2}>
            {navCards.map((card) => (
              <Grid item xs={12} sm={6} key={card.title}>
                <MotionCard
                  component={Link}
                  to={card.path}
                  whileHover={{ y: -10, scale: 1.03, rotateX: 4 }}
                  transition={{ duration: 0.2 }}
                  sx={{
                    textDecoration: "none",
                    borderRadius: "22px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    color: "#fff",
                    height: "100%",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      boxShadow: "0 20px 45px rgba(228,90,132,0.18)",
                    },
                  }}
                >
                  <CardContent>
                    <Stack
                      direction="row"
                      spacing={1.2}
                      alignItems="center"
                      mb={1.2}
                    >
                      <Avatar
                        sx={{
                          bgcolor: "rgba(255,255,255,0.06)",
                          color: "#FFACAC",
                        }}
                      >
                        {card.icon}
                      </Avatar>
                      <Typography sx={{ fontWeight: 800 }}>
                        {card.title}
                      </Typography>
                    </Stack>

                    <Typography
                      sx={{ color: "#d8cae2", lineHeight: 1.75, mb: 1.6 }}
                    >
                      {card.description}
                    </Typography>

                    <Typography sx={{ color: "#FFACAC", fontWeight: 700 }}>
                      Explore →
                    </Typography>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </MotionCard>

      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <MotionCard
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            sx={{
              mb: 3,
              borderRadius: "26px",
              background: "rgba(34, 21, 50, 0.94)",
              border: "1px solid rgba(255,255,255,0.07)",
              color: "#fff",
            }}
          >
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Stack direction="row" spacing={1} alignItems="center" mb={2.5}>
                <Avatar
                  sx={{ bgcolor: "rgba(228,90,132,0.18)", color: "#FFACAC" }}
                >
                  <WorkRoundedIcon />
                </Avatar>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    background: "linear-gradient(90deg, #FFACAC, #E45A84)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "0.5px",
                  }}
                >
                  Featured Projects
                </Typography>
              </Stack>

              <Grid container spacing={2}>
                {featuredProjects.map((project) => (
                  <Grid item xs={12} md={4} key={project.title}>
                    <MotionCard
                      component={Link}
                      to={project.path}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      sx={{
                        textDecoration: "none",
                        borderRadius: "20px",
                        background:
                          "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "#fff",
                        height: "100%",
                        boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
                        "&:hover": {
                          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                        },
                      }}
                    >
                      <CardContent>
                        <Typography sx={{ fontWeight: 800, mb: 0.5 }}>
                          {project.title}
                        </Typography>
                        <Typography
                          sx={{ color: "#FFACAC", fontWeight: 700, mb: 1 }}
                        >
                          {project.subtitle}
                        </Typography>
                        <Typography sx={{ color: "#d8cae2", lineHeight: 1.7 }}>
                          {project.description}
                        </Typography>
                      </CardContent>
                    </MotionCard>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </MotionCard>

          <MotionCard
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            sx={{
              borderRadius: "26px",
              background: "rgba(34, 21, 50, 0.94)",
              border: "1px solid rgba(255,255,255,0.07)",
              color: "#fff",
            }}
          >
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Stack direction="row" spacing={1} alignItems="center" mb={2.5}>
                <Avatar
                  sx={{ bgcolor: "rgba(228,90,132,0.18)", color: "#FFACAC" }}
                >
                  <PsychologyRoundedIcon />
                </Avatar>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    background: "linear-gradient(90deg, #FFACAC, #E45A84)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "0.5px",
                  }}
                >
                  Currently Exploring
                </Typography>
              </Stack>

              <Typography sx={{ color: "#d8cae2", lineHeight: 1.85 }}>
                I’m currently exploring richer frontend animation systems, full
                stack architecture, more polished portfolio experiences, and the
                intersection of software development with cybersecurity and
                digital media workflows.
              </Typography>
            </CardContent>
          </MotionCard>
        </Grid>

        <Grid item xs={12} lg={4}>
          <MotionCard
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            sx={{
              mb: 3,
              borderRadius: "26px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03))",
              border: "1px solid rgba(255,255,255,0.07)",
              color: "#fff",
            }}
          >
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                <Avatar
                  sx={{ bgcolor: "rgba(228,90,132,0.18)", color: "#FFACAC" }}
                >
                  <CodeRoundedIcon />
                </Avatar>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    background: "linear-gradient(90deg, #FFACAC, #E45A84)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "0.5px",
                  }}
                >
                  {" "}
                  Skills Snapshot
                </Typography>
              </Stack>

              <Stack direction="row" flexWrap="wrap" gap={1}>
                {topSkills.map((skill, index) => (
                  <MotionBox
                    key={skill}
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.03 }}
                    whileHover={{ y: -3, scale: 1.04 }}
                  >
                    <Chip
                      label={skill}
                      sx={{
                        color: "#fff",
                        bgcolor: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    />
                  </MotionBox>
                ))}
              </Stack>
            </CardContent>
          </MotionCard>

          <MotionCard
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            sx={{
              borderRadius: "26px",
              background:
                "linear-gradient(135deg, rgba(54,31,84,0.95), rgba(75,38,101,0.95))",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#fff",
              boxShadow: "0 16px 40px rgba(0,0,0,0.24)",
            }}
          >
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                <Avatar
                  sx={{ bgcolor: "rgba(255,172,172,0.15)", color: "#FFACAC" }}
                >
                  <SchoolRoundedIcon />
                </Avatar>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    background: "linear-gradient(90deg, #FFACAC, #E45A84)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "0.5px",
                  }}
                >
                  {" "}
                  Quick Intro
                </Typography>
              </Stack>

              <Typography sx={{ color: "#f0dfe9", lineHeight: 1.85, mb: 2 }}>
                I enjoy building projects that combine clean frontend execution,
                thoughtful structure, and enough creativity to make the final
                result feel memorable instead of generic.
              </Typography>

              <Button
                component={Link}
                to="/about"
                variant="outlined"
                sx={{
                  borderRadius: "999px",
                  textTransform: "none",
                  color: "#FFACAC",
                  borderColor: "rgba(255,172,172,0.35)",
                  "&:hover": {
                    borderColor: "#FFACAC",
                    bgcolor: "rgba(255,172,172,0.06)",
                  },
                }}
              >
                Learn More About Me
              </Button>
            </CardContent>
          </MotionCard>
        </Grid>
      </Grid>
    </Box>
  );
}
