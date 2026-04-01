import React, { useMemo, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  Stack,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  LinearProgress,
  Divider,
  Avatar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LaunchIcon from "@mui/icons-material/Launch";
import PreviewIcon from "@mui/icons-material/Preview";
import CodeIcon from "@mui/icons-material/Code";
import SecurityIcon from "@mui/icons-material/Security";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import SchoolIcon from "@mui/icons-material/School";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import TerminalIcon from "@mui/icons-material/Terminal";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

export default function Projects() {
  const [selectedPreview, setSelectedPreview] = useState(null);

  const skills = useMemo(
    () => [
      { name: "React", level: 92 },
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "MUI", level: 88 },
      { name: "Framer Motion", level: 82 },
      { name: "Cybersecurity", level: 76 },
    ],
    [],
  );

  const techStack = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "MUI",
    "Framer Motion",
    "Node.js",
    "Git",
    "Responsive Design",
    "UI/UX",
    "Frontend Development",
    "Cybersecurity",
    "Artificial Intelligence",
    "Qality Assurance",
    "Jira",
    "Dreamweaver",


  ];

  const timeline = [
    {
      year: "Now",
      title: "Building Interactive Portfolio Experiences / QA Engineer",
      description:
        "Creating responsive, animated interfaces that blend strong visuals with functionality. Currently working as a QA Engineer, applying a detail-oriented mindset to ensure polished software quality while continuing to build frontend projects that showcase design and development skills.",
      icon: <AutoAwesomeIcon />,
    },
    {
      year: "Recent",
      title: "Computer Science Graduate",
      description:
        "Focused on software development, problem solving, and real-world application design.",
      icon: <SchoolIcon />,
    },
    {
      year: "Growing",
      title: "Cybersecurity + Development Path",
      description:
        "Combining secure thinking with polished frontend experiences and modern web practices.",
      icon: <SecurityIcon />,
    },
    {
      year: "Ongoing",
      title: "Creative Technical Projects",
      description:
        "Building portfolio pieces, UI concepts, and tools that show both design and technical ability.",
      icon: <WorkOutlineIcon />,
    },
  ];

  const projects = [
    {
      title: "List Creationz",
      subtitle: "Full-stack to-do list and task management app",
      description:
        "A modern task management application built to help users organize daily responsibilities with a clean and user-friendly interface. The app includes account-based features such as login and registration, making it feel more like a real productivity platform than a basic to-do list. This project highlights frontend structure, user flow design, and the foundations of full-stack app behavior.",
      features: [
        "User login and registration flow",
        "Task organization and productivity-focused layout",
        "Structured app flow for a real-world use case",
        "Built as a more complete to-do platform rather than a static demo",
      ],
      tags: ["Next.js", "Task Manager", "Authentication", "Productivity App"],
      previewUrl: "https://csc-436-final-todo-list-next-js.vercel.app/",
      liveUrl: "https://csc-436-final-todo-list-next-js.vercel.app/",
    },
    {
      title: "Amazon-Style Shopping App",
      subtitle: "E-commerce interface inspired by modern online retail",
      description:
        "An online shopping application modeled after the experience of large-scale marketplaces like Amazon. This project focuses on product browsing, shopping flow, layout design, and a polished storefront experience. It showcases frontend development skills through structured UI sections, reusable components, and the kind of user experience expected in a real e-commerce platform.",
      features: [
        "Retail-inspired shopping interface",
        "Product browsing and storefront-style design",
        "Reusable UI sections and organized layout",
        "Built to simulate a realistic e-commerce experience",
      ],
      tags: ["React", "E-Commerce", "UI Design", "Shopping App"],
      previewUrl: "https://csc430-midterm.vercel.app/",
      liveUrl: "https://csc430-midterm.vercel.app/",
    },
    {
      title: "Goat Grade Collectibles",
      subtitle: "NBA / NFT-inspired digital trading card pack opening app",
      description:
        "An interactive collectible card experience centered around digital pack openings and basketball-themed trading content. Inspired by NFT and sports card collecting, this app is designed to feel exciting, animated, and engaging for users opening packs and exploring collectible content. It demonstrates creativity, interactive UI design, and the ability to build niche experiences around entertainment and digital collectibles.",
      features: [
        "Pack opening concept with collectible reveal experience",
        "NBA and digital collectible inspiration",
        "Entertainment-focused, niche interactive app idea",
        "Strong showcase piece for animation and visual engagement",
      ],
      tags: ["React", "NBA Cards", "NFT Concept", "Interactive UI"],
      previewUrl: "https://goatgradecollectibles.netlify.app/",
      liveUrl: "https://goatgradecollectibles.netlify.app/",
    },
  ];

  const stats = [
    { label: "Projects Built", value: "10+" },
    { label: "Technologies Used", value: "12+" },
    { label: "UI Components Created", value: "50+" },
    { label: "Design Iterations", value: "100+" },
  ];

  const openPreview = (project) => {
    setSelectedPreview(project);
  };

  const closePreview = () => {
    setSelectedPreview(null);
  };

  return (
    <Box
      sx={{
        position: "relative",
        color: "#fff",
        px: { xs: 2, md: 3 },
        py: 2,
        overflow: "hidden",
      }}
    >
      {/* Floating background accents */}
      <MotionBox
        animate={{ y: [0, -20, 0], x: [0, 12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          top: 40,
          right: 60,
          width: 180,
          height: 180,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(228,90,132,0.28) 0%, rgba(228,90,132,0) 70%)",
          filter: "blur(6px)",
          pointerEvents: "none",
        }}
      />
      <MotionBox
        animate={{ y: [0, 16, 0], x: [0, -14, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          bottom: 80,
          left: -20,
          width: 240,
          height: 240,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,172,172,0.18) 0%, rgba(255,172,172,0) 72%)",
          filter: "blur(10px)",
          pointerEvents: "none",
        }}
      />

      {/* Hero / About */}
      <MotionCard
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        sx={{
          mb: 4,
          borderRadius: "28px",
          background:
            "linear-gradient(135deg, rgba(38,24,58,0.97), rgba(59,31,89,0.92))",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            opacity: 0.25,
            background:
              "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.15) 35%, transparent 70%)",
            backgroundSize: "200% 100%",
            animation: "shine 7s linear infinite",
          }}
        />

        <CardContent
          sx={{ p: { xs: 3, md: 4 }, position: "relative", zIndex: 2 }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={8}>
              <Stack direction="row" spacing={1} alignItems="center" mb={1.5}>
                <Avatar
                  sx={{ bgcolor: "rgba(228,90,132,0.2)", color: "#FFACAC" }}
                >
                  <StarBorderIcon />
                </Avatar>
                <Typography
                  sx={{
                    color: "#ffb7c9",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontSize: "0.82rem",
                  }}
                >
                  About / Showcase
                </Typography>
              </Stack>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  lineHeight: 1.08,
                  mb: 1.5,
                  fontSize: { xs: "2rem", md: "3rem" },
                  background:
                    "linear-gradient(90deg, #FFFFFF 0%, #FFACAC 50%, #E45A84 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Designing memorable digital experiences with code, motion, and
                personality.
              </Typography>

              <Typography
                sx={{
                  color: "#ead8ef",
                  fontSize: { xs: "1rem", md: "1.08rem" },
                  lineHeight: 1.8,
                  maxWidth: "760px",
                }}
              >
                I enjoy creating polished, interactive web experiences that feel
                modern, expressive, and technically strong. My work blends
                frontend development, visual design, smooth animation, and a
                problem-solving mindset grounded in software and cybersecurity
                interests.
              </Typography>

              <Stack
                direction="row"
                spacing={1.2}
                flexWrap="wrap"
                mt={3}
                useFlexGap
              >
                {[
                  "Interactive UI",
                  "Creative Frontend",
                  "Clean Design",
                  "Modern Motion",
                ].map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    sx={{
                      color: "#fff",
                      bgcolor: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      backdropFilter: "blur(10px)",
                    }}
                  />
                ))}
              </Stack>
            </Grid>

            <Grid item xs={12} md={4}>
              <MotionBox
                whileHover={{ scale: 1.03, rotate: 0.4 }}
                transition={{ duration: 0.25 }}
                sx={{
                  p: 2.2,
                  borderRadius: "24px",
                  background: "rgba(15, 10, 24, 0.52)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
              >
                <Stack direction="row" spacing={1} alignItems="center" mb={1.5}>
                  <TerminalIcon sx={{ color: "#FFACAC" }} />
                  <Typography sx={{ fontWeight: 700, color: "#ffcad7" }}>
                    Quick Snapshot
                  </Typography>
                </Stack>

                <Box
                  sx={{
                    fontFamily: "monospace",
                    color: "#dcd0e3",
                    fontSize: "0.95rem",
                    lineHeight: 1.9,
                  }}
                >
                  <div>{">"} Role: Frontend / UI Developer / QA Engineer</div>
                  <div>{">"} Focus: React, design systems, motion</div>
                  <div>{">"} Interest: Security + software development</div>
                  <div>{">"} Style: Clean, expressive, responsive</div>
                </Box>
              </MotionBox>
            </Grid>
          </Grid>
        </CardContent>
      </MotionCard>

      {/* Stats */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={6} md={3} key={stat.label}>
            <MotionCard
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              sx={{
                borderRadius: "22px",
                background: "rgba(34, 21, 50, 0.92)",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "0 12px 35px rgba(0,0,0,0.22)",
              }}
            >
              <CardContent>
                <Typography
                  sx={{
                    fontSize: { xs: "1.5rem", md: "2rem" },
                    fontWeight: 800,
                    color: "#FFACAC",
                    mb: 0.5,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography sx={{ color: "#d8c5e1" }}>{stat.label}</Typography>
              </CardContent>
            </MotionCard>
          </Grid>
        ))}
      </Grid>

      {/* Skills + Stack */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={7}>
          <MotionCard
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            sx={{
              height: "100%",
              borderRadius: "24px",
              background: "rgba(34, 21, 50, 0.94)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                <CodeIcon sx={{ color: "#FFACAC" }} />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    background:
                      "linear-gradient(270deg,#FFACAC,#E45A84,#FFACAC)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "gradientMove 6s linear infinite",
                    "@keyframes gradientMove": {
                      "0%": { backgroundPosition: "0% center" },
                      "100%": { backgroundPosition: "200% center" },
                    },
                  }}
                >
                  Skills Showcase
                </Typography>
              </Stack>

              <Typography sx={{ color: "#dacbe3", mb: 3, lineHeight: 1.8 }}>
                A quick view of the technologies and areas I enjoy working with
                most.
              </Typography>

              <Stack spacing={2.2}>
                {skills.map((skill) => (
                  <Box key={skill.name}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ mb: 0.8 }}
                    >
                      <Typography sx={{ color: "#fff", fontWeight: 700 }}>
                        {skill.name}
                      </Typography>
                      <Typography sx={{ color: "#ffb7c9", fontWeight: 700 }}>
                        {skill.level}%
                      </Typography>
                    </Stack>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      sx={{
                        height: 10,
                        borderRadius: "999px",
                        bgcolor: "rgba(255,255,255,0.08)",
                        "& .MuiLinearProgress-bar": {
                          borderRadius: "999px",
                          background:
                            "linear-gradient(90deg, #FFACAC 0%, #E45A84 100%)",
                        },
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </MotionCard>
        </Grid>

        <Grid item xs={12} md={5}>
          <MotionCard
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            sx={{
              height: "100%",
              borderRadius: "24px",
              background: "rgba(34, 21, 50, 0.94)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                <DesignServicesIcon sx={{ color: "#FFACAC" }} />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    background:
                      "linear-gradient(270deg,#FFACAC,#E45A84,#FFACAC)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "gradientMove 6s linear infinite",
                    "@keyframes gradientMove": {
                      "0%": { backgroundPosition: "0% center" },
                      "100%": { backgroundPosition: "200% center" },
                    },
                  }}
                >
                  Tech Stack
                </Typography>
              </Stack>

              <Typography sx={{ color: "#dacbe3", mb: 3, lineHeight: 1.8 }}>
                These are the tools and technologies I use to build modern,
                animated, and responsive experiences.
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap={1.2}>
                {techStack.map((item, index) => (
                  <MotionBox
                    key={item}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.03 }}
                    whileHover={{ y: -4, scale: 1.04 }}
                  >
                    <Chip
                      label={item}
                      sx={{
                        color: "#fff",
                        bgcolor: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        px: 0.5,
                      }}
                    />
                  </MotionBox>
                ))}
              </Stack>
            </CardContent>
          </MotionCard>
        </Grid>
      </Grid>

      {/* Timeline */}
      <MotionCard
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        sx={{
          mb: 4,
          borderRadius: "24px",
          background: "rgba(34, 21, 50, 0.94)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
          <Stack direction="row" spacing={1} alignItems="center" mb={2.5}>
            <WorkOutlineIcon sx={{ color: "#FFACAC" }} />
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                color: "#FFACAC",
                letterSpacing: "0.5px",
                mb: 2,
              }}
            >
              Journey & Focus
            </Typography>
          </Stack>

          <Grid container spacing={2}>
            {timeline.map((item, index) => (
              <Grid item xs={12} md={6} key={`${item.year}-${item.title}`}>
                <MotionBox
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  sx={{
                    p: 2.2,
                    borderRadius: "20px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    height: "100%",
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={1.3}
                    alignItems="center"
                    mb={1}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "rgba(228,90,132,0.18)",
                        color: "#FFACAC",
                      }}
                    >
                      {item.icon}
                    </Avatar>
                    <Box>
                      <Typography sx={{ color: "#ffb7c9", fontWeight: 800 }}>
                        {item.year}
                      </Typography>
                      <Typography sx={{ fontWeight: 700 }}>
                        {item.title}
                      </Typography>
                    </Box>
                  </Stack>
                  <Typography sx={{ color: "#d5c6df", lineHeight: 1.8 }}>
                    {item.description}
                  </Typography>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </MotionCard>

      {/* Projects */}
      <MotionCard
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        sx={{
          borderRadius: "24px",
          background: "rgba(34, 21, 50, 0.94)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            spacing={1}
            mb={2.5}
          >
            <Box>
              <Stack direction="row" spacing={1} alignItems="center" mb={0.5}>
                <PreviewIcon sx={{ color: "#FFACAC" }} />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    color: "#FFACAC",
                    letterSpacing: "0.5px",
                    mb: 2,
                  }}
                >
                  Featured Projects
                </Typography>
              </Stack>
              <Typography sx={{ color: "#d8cbe2" }}>
                Featuring some of the interactive, polished projects I've built
                that blend frontend development, design, and creativity. Click
                "Preview" to see them in action!
              </Typography>
            </Box>
          </Stack>

          <Grid container spacing={2.2}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={4} key={project.title}>
                <MotionCard
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                  sx={{
                    height: "100%",
                    borderRadius: "22px",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.03) 100%)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    boxShadow: "0 10px 28px rgba(0,0,0,0.18)",
                  }}
                >
                  <CardContent sx={{ p: 2.5 }}>
                    <Typography
                      sx={{ fontWeight: 800, fontSize: "1.15rem", mb: 0.6 }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      sx={{ color: "#ffb7c9", mb: 1.4, fontWeight: 600 }}
                    >
                      {project.subtitle}
                    </Typography>
                    <Typography
                      sx={{ color: "#d5c6df", lineHeight: 1.75, mb: 2 }}
                    >
                      {project.description}
                    </Typography>

                    {project.features && (
                      <Box sx={{ mb: 2 }}>
                        {project.features.map((feature, i) => (
                          <Typography
                            key={i}
                            sx={{
                              fontSize: "0.9rem",
                              color: "#dcd0e3",
                              lineHeight: 1.6,
                            }}
                          >
                            • {feature}
                          </Typography>
                        ))}
                      </Box>
                    )}

                    <Stack direction="row" flexWrap="wrap" gap={1} mb={2.2}>
                      {project.tags.map((tag) => (
                        <Chip
                          key={tag}
                          size="small"
                          label={tag}
                          sx={{
                            color: "#fff",
                            bgcolor: "rgba(255,255,255,0.08)",
                            border: "1px solid rgba(255,255,255,0.08)",
                          }}
                        />
                      ))}
                    </Stack>

                    <Divider
                      sx={{ borderColor: "rgba(255,255,255,0.07)", mb: 2 }}
                    />

                    <Stack
                      direction="row"
                      spacing={1.2}
                      flexWrap="wrap"
                      useFlexGap
                    >
                      <Button
                        variant="contained"
                        startIcon={<PreviewIcon />}
                        onClick={() => openPreview(project)}
                        sx={{
                          borderRadius: "999px",
                          textTransform: "none",
                          bgcolor: "#E45A84",
                          "&:hover": { bgcolor: "#cf4d74" },
                        }}
                      >
                        Preview
                      </Button>

                      <Button
                        variant="outlined"
                        startIcon={<LaunchIcon />}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        sx={{
                          borderRadius: "999px",
                          textTransform: "none",
                          color: "#FFACAC",
                          borderColor: "rgba(255,172,172,0.4)",
                          "&:hover": {
                            borderColor: "#FFACAC",
                            bgcolor: "rgba(255,172,172,0.06)",
                          },
                        }}
                      >
                        Open Live
                      </Button>
                    </Stack>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </MotionCard>

      {/* Preview Dialog */}
      <Dialog
        open={Boolean(selectedPreview)}
        onClose={closePreview}
        fullWidth
        maxWidth="lg"
        PaperProps={{
          sx: {
            borderRadius: "22px",
            background: "#140d1f",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.08)",
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pr: 1,
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 800 }}>
              {selectedPreview?.title || "Project Preview"}
            </Typography>
            <Typography sx={{ color: "#cdbcd6", fontSize: "0.95rem" }}>
              Embedded preview
            </Typography>
          </Box>

          <IconButton onClick={closePreview} sx={{ color: "#FFACAC" }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ pb: 3 }}>
          {selectedPreview && (
            <>
              <Box
                sx={{
                  mb: 2,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  href={selectedPreview.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  startIcon={<LaunchIcon />}
                  sx={{
                    borderRadius: "999px",
                    textTransform: "none",
                    color: "#FFACAC",
                    border: "1px solid rgba(255,172,172,0.35)",
                  }}
                >
                  Open in New Tab
                </Button>
              </Box>

              <Box
                sx={{
                  borderRadius: "18px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                  height: { xs: "60vh", md: "72vh" },
                  background: "#0d0915",
                }}
              >
                <iframe
                  title={selectedPreview.title}
                  src={selectedPreview.previewUrl}
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    background: "#fff",
                  }}
                />
              </Box>

              <Typography
                sx={{ mt: 1.5, color: "#bcaac8", fontSize: "0.92rem" }}
              >
                If the preview appears blank, that site is likely blocking
                iframe embedding.
              </Typography>
            </>
          )}
        </DialogContent>
      </Dialog>

      <style>
        {`
          @keyframes shine {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}
      </style>
    </Box>
  );
}
