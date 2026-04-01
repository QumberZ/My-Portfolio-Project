import React, { useMemo, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
  LinearProgress,
  ToggleButton,
  ToggleButtonGroup,
  Avatar,
  Divider,
  Collapse,
  Button,
} from "@mui/material";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import MemoryRoundedIcon from "@mui/icons-material/MemoryRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import TvRoundedIcon from "@mui/icons-material/TvRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

export default function Skills() {
  const [category, setCategory] = useState("programming");
  const [expandedSkill, setExpandedSkill] = useState(null);

  const categories = {
    programming: {
      title: "Programming Languages & Web Stack",
      icon: <CodeRoundedIcon />,
      description:
        "A strong development base across frontend, backend, and modern web architecture.",
      skills: [
        {
          name: "JavaScript",
          level: 93,
          details:
            "Strong working knowledge for building interactive user interfaces, dynamic behaviors, and component-driven web apps.",
        },
        {
          name: "TypeScript",
          level: 82,
          details:
            "Used for better type safety, cleaner scaleable code, and more maintainable frontend projects.",
        },
        {
          name: "React.js",
          level: 92,
          details:
            "Core framework for building interactive portfolio pages, reusable UI components, and polished user experiences.",
        },
        {
          name: "Node.js",
          level: 84,
          details:
            "Comfortable with backend fundamentals, app structure, APIs, and server-side workflows.",
        },
        {
          name: "Express.js",
          level: 82,
          details:
            "Used for routing, middleware-based APIs, and full stack development patterns.",
        },
        {
          name: "HTML",
          level: 97,
          details:
            "Strong semantic markup and layout structure for production-ready pages.",
        },
        {
          name: "CSS",
          level: 94,
          details:
            "Strong visual styling, responsive layout work, animation, and UI polish.",
        },
        {
          name: "Java",
          level: 80,
          details:
            "Academic and object-oriented development background with problem-solving focus.",
        },
        {
          name: "C++",
          level: 78,
          details:
            "Used in coursework involving logic, memory understanding, and structured programming.",
        },
        {
          name: "C",
          level: 74,
          details:
            "Helpful for low-level systems thinking and foundational programming concepts.",
        },
        {
          name: "PostgreSQL",
          level: 76,
          details:
            "Experience with relational data concepts, schemas, and application data handling.",
        },
        {
          name: "GraphQL",
          level: 72,
          details:
            "Exposure to structured query-driven APIs and modern frontend/backend data flows.",
        },
      ],
    },
    tools: {
      title: "Developer Tools & Platforms",
      icon: <BuildRoundedIcon />,
      description:
        "The environments, collaboration platforms, and utilities I use to ship and organize work.",
      skills: [
        { name: "Git", level: 90, details: "Version control, branching, collaboration, and iterative development." },
        { name: "GitHub", level: 92, details: "Repository management, portfolio hosting workflows, and project sharing." },
        { name: "GitLab", level: 78, details: "Familiar with repo collaboration and team workflows." },
        { name: "VS Code", level: 96, details: "Primary development environment for modern web projects." },
        { name: "Postman", level: 84, details: "API testing, request inspection, and backend integration workflows." },
        { name: "Docker", level: 70, details: "Basic containerization knowledge and environment familiarity." },
        { name: "Linux", level: 78, details: "Comfortable navigating development environments and tooling workflows." },
        { name: "Netlify", level: 86, details: "Used for project deployment and quick frontend hosting." },
        { name: "Heroku", level: 72, details: "Experience with cloud deployment and app hosting." },
        { name: "Jira", level: 82, details: "Task organization, team workflows, and ticket-based tracking." },
        { name: "Figma", level: 80, details: "UI layout planning, design collaboration, and interface ideation." },
        { name: "Xcode", level: 66, details: "Exposure to Apple ecosystem tooling and development setup." },
      ],
    },
    systems: {
      title: "Systems, Software Design & CS Foundations",
      icon: <MemoryRoundedIcon />,
      description:
        "Computer science fundamentals that strengthen architecture, performance, and development decisions.",
      skills: [
        { name: "Data Structures", level: 84, details: "Understanding of arrays, trees, linked lists, stacks, queues, and problem solving patterns." },
        { name: "Algorithms", level: 82, details: "Applied logic for efficiency, structured solutions, and deeper engineering thinking." },
        { name: "Object-Oriented Design", level: 86, details: "Strong grasp of classes, abstraction, modularity, and maintainable code structure." },
        { name: "Operating Systems", level: 74, details: "Foundational systems understanding including processes, memory, and resource management." },
        { name: "Assembly Language", level: 68, details: "Low-level exposure that improves systems thinking and machine-level understanding." },
        { name: "Discrete Structures", level: 78, details: "Logic, proofs, sets, relations, and mathematical foundations relevant to CS." },
        { name: "Full Stack Development", level: 88, details: "Ability to connect frontend interfaces with backend logic and databases." },
        { name: "Software Design", level: 84, details: "Focus on thoughtful structure, scalability, and user-facing clarity." },
      ],
    },
  };

  const coursework = [
    "Discrete Structures and Algorithms",
    "C++ Programming",
    "Data Structures",
    "Java Programming",
    "Object Oriented Software Design",
    "Operating Systems",
    "Assembly Language",
    "Full Stack Web Development",
  ];

  const technologies = [
    "React Native",
    "NPM",
    "Bootstrap",
    "jQuery",
    "MUI",
    "MySQL",
    "Hasura",
    "Excalidraw",
    "Trello",
    "ClickUp",
    "Slack",
    "Discord",
    "Miro",
    "Microsoft Office Suite",
    "DreamWeaver",
    "Code Lite",
    "Eclipse",
    "Reetro",
    "Docker",
    "GitHub",
    "GitLab",
    "Netlify",
    "Postman API",
    "Figma",
  ];

  const stats = [
    { label: "Languages & Frameworks", value: "18+" },
    { label: "Developer Tools", value: "20+" },
    { label: "Coursework Areas", value: "8" },
    { label: "Project Domains", value: "Web + Media" },
  ];

  const topRadarSkills = [
    { label: "Frontend", value: 92 },
    { label: "UI Design", value: 88 },
    { label: "Backend", value: 80 },
    { label: "CS Foundations", value: 84 },
    { label: "Tooling", value: 87 },
    { label: "Media Tech", value: 76 },
  ];

  const currentCategory = useMemo(() => categories[category], [category]);

  const polarPoints = useMemo(() => {
    const centerX = 150;
    const centerY = 150;
    const radius = 95;
    return topRadarSkills
      .map((skill, index) => {
        const angle = (Math.PI * 2 * index) / topRadarSkills.length - Math.PI / 2;
        const r = (skill.value / 100) * radius;
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;
        return `${x},${y}`;
      })
      .join(" ");
  }, [topRadarSkills]);

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
        animate={{ x: [0, 12, 0], y: [0, -18, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          width: 220,
          height: 220,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(228,90,132,0.22) 0%, rgba(228,90,132,0) 72%)",
          filter: "blur(10px)",
          pointerEvents: "none",
        }}
      />

      <MotionBox
        animate={{ x: [0, -14, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          bottom: 0,
          left: -30,
          width: 240,
          height: 240,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,172,172,0.16) 0%, rgba(255,172,172,0) 74%)",
          filter: "blur(14px)",
          pointerEvents: "none",
        }}
      />

      <MotionCard
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{
          mb: 3,
          borderRadius: "30px",
          background:
            "linear-gradient(135deg, rgba(38,24,58,0.97), rgba(59,31,89,0.92))",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
        }}
      >
        <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
          <Stack direction="row" spacing={1} alignItems="center" mb={1.5}>
            <Avatar sx={{ bgcolor: "rgba(228,90,132,0.18)", color: "#FFACAC" }}>
              <AutoAwesomeRoundedIcon />
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
              Skills / Technical Profile
            </Typography>
          </Stack>

          <Typography
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
            Technical depth with creative frontend execution.
          </Typography>

          <Typography
            sx={{
              color: "#e4d8eb",
              lineHeight: 1.85,
              fontSize: { xs: "1rem", md: "1.05rem" },
              maxWidth: "880px",
            }}
          >
            My skill set combines computer science fundamentals, modern web
            development, collaborative tooling, and UI-focused implementation.
            I’m especially interested in building polished interfaces, full-stack
            applications, and experiences connected to digital media and live
            broadcast TV channel workflows.
          </Typography>
        </CardContent>
      </MotionCard>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        {stats.map((stat, index) => (
          <Grid item xs={6} md={3} key={stat.label}>
            <MotionCard
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              sx={{
                borderRadius: "22px",
                background: "rgba(34, 21, 50, 0.92)",
                border: "1px solid rgba(255,255,255,0.07)",
                color: "#fff",
              }}
            >
              <CardContent>
                <Typography
                  sx={{
                    fontSize: { xs: "1.4rem", md: "1.9rem" },
                    fontWeight: 800,
                    color: "#FFACAC",
                    mb: 0.5,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography sx={{ color: "#d7c6e2" }}>{stat.label}</Typography>
              </CardContent>
            </MotionCard>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <MotionCard
            initial={{ opacity: 0, x: -16 }}
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
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={2}
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", md: "center" }}
                mb={2.5}
              >
                <Box>
                  <Stack direction="row" spacing={1} alignItems="center" mb={0.7}>
                    <Avatar sx={{ bgcolor: "rgba(228,90,132,0.18)", color: "#FFACAC" }}>
                      {currentCategory.icon}
                    </Avatar>
                    <Typography variant="h5" sx={{ fontWeight: 800 }}>
                      Skill Explorer
                    </Typography>
                  </Stack>
                  <Typography sx={{ color: "#d8cbe2", lineHeight: 1.7 }}>
                    Click through categories and open each skill card for more detail.
                  </Typography>
                </Box>

                <ToggleButtonGroup
                  exclusive
                  value={category}
                  onChange={(_, value) => {
                    if (value) {
                      setCategory(value);
                      setExpandedSkill(null);
                    }
                  }}
                  sx={{
                    flexWrap: "wrap",
                    gap: 1,
                    "& .MuiToggleButton-root": {
                      color: "#ffd3df",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "999px !important",
                      textTransform: "none",
                      px: 2,
                      bgcolor: "rgba(255,255,255,0.03)",
                    },
                    "& .Mui-selected": {
                      bgcolor: "rgba(228,90,132,0.18) !important",
                      color: "#FFACAC !important",
                      borderColor: "rgba(228,90,132,0.35) !important",
                    },
                  }}
                >
                  <ToggleButton value="programming">Programming</ToggleButton>
                  <ToggleButton value="tools">Tools</ToggleButton>
                  <ToggleButton value="systems">Foundations</ToggleButton>
                </ToggleButtonGroup>
              </Stack>

              <MotionBox
                key={category}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#FFACAC",
                    fontSize: "1.1rem",
                    mb: 0.8,
                  }}
                >
                  {currentCategory.title}
                </Typography>
                <Typography sx={{ color: "#d9cce3", lineHeight: 1.75, mb: 3 }}>
                  {currentCategory.description}
                </Typography>

                <Grid container spacing={2}>
                  {currentCategory.skills.map((skill, index) => {
                    const isOpen = expandedSkill === skill.name;

                    return (
                      <Grid item xs={12} md={6} key={skill.name}>
                        <MotionBox
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.03 }}
                          whileHover={{ y: -4 }}
                          sx={{
                            p: 2,
                            borderRadius: "18px",
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.06)",
                          }}
                        >
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{ mb: 1 }}
                          >
                            <Typography sx={{ fontWeight: 700, color: "#fff" }}>
                              {skill.name}
                            </Typography>
                            <Typography sx={{ color: "#ffbfd0", fontWeight: 700 }}>
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

                          <Button
                            onClick={() =>
                              setExpandedSkill(isOpen ? null : skill.name)
                            }
                            endIcon={
                              <ExpandMoreRoundedIcon
                                sx={{
                                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                                  transition: "0.25s ease",
                                }}
                              />
                            }
                            sx={{
                              mt: 1.2,
                              px: 0,
                              textTransform: "none",
                              color: "#FFACAC",
                              fontWeight: 700,
                              minWidth: "unset",
                            }}
                          >
                            {isOpen ? "Hide details" : "View details"}
                          </Button>

                          <Collapse in={isOpen}>
                            <Typography
                              sx={{
                                mt: 1.2,
                                color: "#d6c8e0",
                                lineHeight: 1.7,
                                fontSize: "0.95rem",
                              }}
                            >
                              {skill.details}
                            </Typography>
                          </Collapse>
                        </MotionBox>
                      </Grid>
                    );
                  })}
                </Grid>
              </MotionBox>
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
                <Avatar sx={{ bgcolor: "rgba(228,90,132,0.18)", color: "#FFACAC" }}>
                  <SchoolRoundedIcon />
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                  Relevant Coursework
                </Typography>
              </Stack>

              <Grid container spacing={2}>
                {coursework.map((course, index) => (
                  <Grid item xs={12} sm={6} key={course}>
                    <MotionBox
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.04 }}
                      whileHover={{ y: -4 }}
                      sx={{
                        p: 2,
                        borderRadius: "18px",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        height: "100%",
                      }}
                    >
                      <Stack direction="row" spacing={1} alignItems="center">
                        <CheckCircleRoundedIcon sx={{ color: "#FFACAC", fontSize: 18 }} />
                        <Typography sx={{ fontWeight: 700, color: "#ffd3df" }}>
                          {course}
                        </Typography>
                      </Stack>
                    </MotionBox>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </MotionCard>
        </Grid>

        <Grid item xs={12} lg={4}>
          <MotionCard
            initial={{ opacity: 0, x: 16 }}
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
                <Avatar sx={{ bgcolor: "rgba(228,90,132,0.18)", color: "#FFACAC" }}>
                  <TerminalRoundedIcon />
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                  Technology Stack
                </Typography>
              </Stack>

              <Typography sx={{ color: "#d7c7e1", lineHeight: 1.75, mb: 2.5 }}>
                Supporting technologies, design tools, productivity platforms, and
                development environments.
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap={1}>
                {technologies.map((tech, index) => (
                  <MotionBox
                    key={tech}
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.02 }}
                    whileHover={{ y: -3, scale: 1.04 }}
                  >
                    <Chip
                      label={tech}
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
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            sx={{
              mb: 3,
              borderRadius: "26px",
              background: "rgba(34, 21, 50, 0.94)",
              border: "1px solid rgba(255,255,255,0.07)",
              color: "#fff",
            }}
          >
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                <Avatar sx={{ bgcolor: "rgba(228,90,132,0.18)", color: "#FFACAC" }}>
                  <MemoryRoundedIcon />
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                  Skills Radar
                </Typography>
              </Stack>

              <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                <svg width="300" height="300" viewBox="0 0 300 300">
                  {[35, 55, 75, 95].map((r) => (
                    <circle
                      key={r}
                      cx="150"
                      cy="150"
                      r={r}
                      fill="none"
                      stroke="rgba(255,255,255,0.08)"
                    />
                  ))}

                  {topRadarSkills.map((skill, index) => {
                    const angle =
                      (Math.PI * 2 * index) / topRadarSkills.length - Math.PI / 2;
                    const x = 150 + Math.cos(angle) * 105;
                    const y = 150 + Math.sin(angle) * 105;

                    return (
                      <g key={skill.label}>
                        <line
                          x1="150"
                          y1="150"
                          x2={x}
                          y2={y}
                          stroke="rgba(255,255,255,0.08)"
                        />
                        <text
                          x={x}
                          y={y}
                          fill="#ffd3df"
                          fontSize="11"
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          {skill.label}
                        </text>
                      </g>
                    );
                  })}

                  <polygon
                    points={polarPoints}
                    fill="rgba(228,90,132,0.25)"
                    stroke="#FFACAC"
                    strokeWidth="2"
                  />
                </svg>
              </Box>

              <Stack spacing={1}>
                {topRadarSkills.map((skill) => (
                  <Stack
                    key={skill.label}
                    direction="row"
                    justifyContent="space-between"
                    sx={{ color: "#d9cae2" }}
                  >
                    <Typography>{skill.label}</Typography>
                    <Typography sx={{ color: "#FFACAC", fontWeight: 700 }}>
                      {skill.value}%
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </CardContent>
          </MotionCard>

          <MotionCard
            initial={{ opacity: 0, x: 16 }}
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
                <Avatar sx={{ bgcolor: "rgba(255,172,172,0.15)", color: "#FFACAC" }}>
                  <TvRoundedIcon />
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                  Media / Broadcast Focus
                </Typography>
              </Stack>

              <Typography sx={{ color: "#f0dfe9", lineHeight: 1.85, mb: 2 }}>
                I also work with broadcast live TV channels, adding a media and
                streaming dimension to my technical profile. This expands my
                experience beyond standard web interfaces into real-time content
                delivery and viewer-facing workflows.
              </Typography>

              <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mb: 2 }} />

              <Stack spacing={1.2}>
                <Stack direction="row" spacing={1.1} alignItems="center">
                  <StorageRoundedIcon sx={{ color: "#FFACAC" }} />
                  <Typography sx={{ color: "#ffe2ea" }}>
                    Experience across web and media-related environments
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1.1} alignItems="center">
                  <DesignServicesRoundedIcon sx={{ color: "#FFACAC" }} />
                  <Typography sx={{ color: "#ffe2ea" }}>
                    Strong eye for viewer-facing presentation and polish
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1.1} alignItems="center">
                  <CodeRoundedIcon sx={{ color: "#FFACAC" }} />
                  <Typography sx={{ color: "#ffe2ea" }}>
                    Comfortable bridging technical implementation with content delivery
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </MotionCard>
        </Grid>
      </Grid>
    </Box>
  );
}