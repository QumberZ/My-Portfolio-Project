import React, { useMemo, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  Avatar,
  Divider,
  Button,
} from "@mui/material";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import MovieFilterRoundedIcon from "@mui/icons-material/MovieFilterRounded";
import SportsBasketballRoundedIcon from "@mui/icons-material/SportsBasketballRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

export default function Info() {
  const [selectedFact, setSelectedFact] = useState(0);
  const [selectedPersonalityCard, setSelectedPersonalityCard] = useState(null);

  const factCards = useMemo(
    () => [
      {
        title: "Builder Mindset",
        icon: <CodeRoundedIcon />,
        text: "I enjoy creating polished digital experiences that feel interactive, modern, and memorable.",
      },
      {
        title: "Creative + Technical",
        icon: <AutoAwesomeRoundedIcon />,
        text: "I like combining technical problem-solving with design, motion, and UI polish.",
      },
      {
        title: "Security Interest",
        icon: <SecurityRoundedIcon />,
        text: "I’m also interested in cybersecurity and the balance between usability, performance, and reliability.",
      },
      {
        title: "Always Learning",
        icon: <SchoolRoundedIcon />,
        text: "I’m constantly improving my skills through projects, experimentation, and building new ideas.",
      },
    ],
    []
  );

  const funFacts = [
    {
      label: "What drives me",
      value:
        "I enjoy building things that are both useful and visually impressive.",
    },
    {
      label: "What I like creating",
      value:
        "Interactive websites, portfolio experiences, animated interfaces, and creative web apps.",
    },
    {
      label: "What I value",
      value:
        "Clean code, thoughtful UI, collaboration, and products that feel smooth and intentional.",
    },
    {
      label: "How I work",
      value:
        "I like structured problem-solving, experimenting with ideas, and refining details until they feel right.",
    },
  ];

  const interests = [
    "Frontend Development",
    "Full Stack Apps",
    "Cybersecurity",
    "UI/UX",
    "Interactive Design",
    "Media Technology",
    "Creative Coding",
    "Motion Interfaces",
  ];

  const personalityCards = [
  {
    id: 1,
    title: "How I Build",
    short: "I like turning ideas into polished, interactive experiences.",
    full: "I enjoy taking an idea from concept to execution and refining it until it feels clean, modern, and memorable. I care about both how something works and how it feels to use.",
    icon: <CodeRoundedIcon />,
  },
  {
    id: 2,
    title: "How I Think",
    short: "I balance creativity with logic.",
    full: "I like solving problems in a structured way, but I also enjoy experimenting creatively. That mix helps me build projects that are both technically solid and visually engaging.",
    icon: <PsychologyRoundedIcon />,
  },
  {
    id: 3,
    title: "How I Collaborate",
    short: "I work well with teams and like building together.",
    full: "I value clear communication, collaboration, and shared progress. I enjoy working with developers, designers, and stakeholders to move ideas forward and improve outcomes together.",
    icon: <FavoriteRoundedIcon />,
  },
  {
    id: 4,
    title: "What Excites Me",
    short: "Interactive UI, full stack apps, and meaningful technical growth.",
    full: "I’m excited by modern frontend development, smooth motion, strong UI structure, and projects that let me keep growing technically while building something interesting and useful.",
    icon: <RocketLaunchRoundedIcon />,
  },
];

  const journey = [
    {
      title: "Computer Science Background",
      text: "Built a strong technical base through coursework, software development, and hands-on project work.",
      icon: <SchoolRoundedIcon />,
    },
    {
      title: "Interactive Web Development",
      text: "Focused on building modern web experiences with React, animation libraries, and strong UI structure.",
      icon: <TerminalRoundedIcon />,
    },
    {
      title: "Creative Portfolio Building",
      text: "Exploring ways to make technical work feel personal, polished, and visually memorable.",
      icon: <RocketLaunchRoundedIcon />,
    },
    {
      title: "Future Direction",
      text: "Continuing to grow in software engineering, frontend systems, and security-focused thinking.",
      icon: <ExploreRoundedIcon />,
    },
  ];

  const strengths = [
    "Problem Solving",
    "UI Polish",
    "Component Design",
    "Fast Learning",
    "Collaboration",
    "Attention to Detail",
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
        animate={{ x: [0, 16, 0], y: [0, -18, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          top: 0,
          right: 20,
          width: 220,
          height: 220,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(228,90,132,0.24) 0%, rgba(228,90,132,0) 72%)",
          filter: "blur(12px)",
          pointerEvents: "none",
        }}
      />

      <MotionBox
        animate={{ x: [0, -14, 0], y: [0, 18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          bottom: 0,
          left: -20,
          width: 240,
          height: 240,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,172,172,0.18) 0%, rgba(255,172,172,0) 74%)",
          filter: "blur(14px)",
          pointerEvents: "none",
        }}
      />

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
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            opacity: 0.2,
            background:
              "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.12) 35%, transparent 70%)",
            backgroundSize: "200% 100%",
            animation: "shine 7s linear infinite",
          }}
        />

        <CardContent sx={{ p: { xs: 2.5, md: 4 }, position: "relative", zIndex: 2 }}>
          <Stack direction="row" spacing={1} alignItems="center" mb={1.5}>
            <Avatar sx={{ bgcolor: "rgba(228,90,132,0.18)", color: "#FFACAC" }}>
              <PersonRoundedIcon />
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
              About Me / Personal Snapshot
            </Typography>
          </Stack>

          <Typography
            sx={{
              fontWeight: 800,
              lineHeight: 1.08,
              mb: 1.4,
              fontSize: { xs: "2rem", md: "3rem" },
              background:
                "linear-gradient(90deg, #FFFFFF 0%, #FFACAC 50%, #E45A84 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            I like building experiences that feel alive.
          </Typography>

          <Typography
            sx={{
              color: "#e4d8eb",
              lineHeight: 1.85,
              fontSize: { xs: "1rem", md: "1.05rem" },
              maxWidth: "840px",
            }}
          >
            I’m someone who enjoys mixing code, design, and creativity to make
            digital experiences feel engaging instead of ordinary. I’m especially
            drawn to modern frontend development, interactive UI, full stack
            projects, and thoughtful technical problem-solving. I like building
            things that look clean, work well, and leave a strong impression.
          </Typography>

          <Stack direction="row" flexWrap="wrap" gap={1.1} mt={2.5}>
            {["Creative Developer", "Interactive UI", "Problem Solver", "Always Learning"].map(
              (item) => (
                <Chip
                  key={item}
                  label={item}
                  sx={{
                    color: "#fff",
                    bgcolor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                />
              )
            )}
          </Stack>
        </CardContent>
      </MotionCard>

      <Grid container spacing={3}>
        <Grid item xs={12} lg={7}>
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
                <Avatar sx={{ bgcolor: "rgba(228,90,132,0.18)", color: "#FFACAC" }}>
                  <PsychologyRoundedIcon />
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                  Interactive About Cards
                </Typography>
              </Stack>

              <Grid container spacing={2}>
                {factCards.map((item, index) => (
                  <Grid item xs={12} sm={6} key={item.title}>
                    <MotionCard
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      sx={{
                        height: "100%",
                        borderRadius: "20px",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        color: "#fff",
                      }}
                    >
                      <CardContent>
                        <Stack direction="row" spacing={1.2} alignItems="center" mb={1.2}>
                          <Avatar
                            sx={{
                              bgcolor: "rgba(255,255,255,0.06)",
                              color: "#FFACAC",
                            }}
                          >
                            {item.icon}
                          </Avatar>
                          <Typography sx={{ fontWeight: 800 }}>{item.title}</Typography>
                        </Stack>

                        <Typography sx={{ color: "#d8cae2", lineHeight: 1.75 }}>
                          {item.text}
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
                  <LightbulbRoundedIcon />
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                  Clickable Fun Facts
                </Typography>
              </Stack>

              <Stack
                direction="row"
                flexWrap="wrap"
                gap={1}
                mb={2.5}
              >
                {funFacts.map((fact, index) => (
                  <Button
                    key={fact.label}
                    onClick={() => setSelectedFact(index)}
                    sx={{
                      borderRadius: "999px",
                      textTransform: "none",
                      px: 2,
                      py: 1,
                      color: selectedFact === index ? "#221532" : "#ffd7e1",
                      bgcolor:
                        selectedFact === index
                          ? "#FFACAC"
                          : "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      "&:hover": {
                        bgcolor:
                          selectedFact === index
                            ? "#FFACAC"
                            : "rgba(255,255,255,0.08)",
                      },
                    }}
                  >
                    {fact.label}
                  </Button>
                ))}
              </Stack>

              <AnimatePresence mode="wait">
                <MotionBox
                  key={selectedFact}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  sx={{
                    p: 2.2,
                    borderRadius: "18px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFACAC",
                      fontWeight: 800,
                      mb: 1,
                    }}
                  >
                    {funFacts[selectedFact].label}
                  </Typography>
                  <Typography sx={{ color: "#d8cae2", lineHeight: 1.8 }}>
                    {funFacts[selectedFact].value}
                  </Typography>
                </MotionBox>
              </AnimatePresence>
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
                  <RocketLaunchRoundedIcon />
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                  My Journey So Far
                </Typography>
              </Stack>

              <Stack spacing={2}>
                {journey.map((item, index) => (
                  <MotionBox
                    key={item.title}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ x: 6 }}
                    sx={{
                      p: 2,
                      borderRadius: "18px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <Stack direction="row" spacing={1.3} alignItems="center" mb={0.8}>
                      <Avatar
                        sx={{
                          bgcolor: "rgba(255,255,255,0.06)",
                          color: "#FFACAC",
                        }}
                      >
                        {item.icon}
                      </Avatar>
                      <Typography sx={{ fontWeight: 800 }}>{item.title}</Typography>
                    </Stack>
                    <Typography sx={{ color: "#d8cae2", lineHeight: 1.75 }}>
                      {item.text}
                    </Typography>
                  </MotionBox>
                ))}
              </Stack>
            </CardContent>
          </MotionCard>
        </Grid>

        <Grid item xs={12} lg={5}>
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
                <Avatar sx={{ bgcolor: "rgba(228,90,132,0.18)", color: "#FFACAC" }}>
                  <FavoriteRoundedIcon />
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                  Things I’m Into
                </Typography>
              </Stack>

              <Typography sx={{ color: "#d7c7e1", lineHeight: 1.75, mb: 2.5 }}>
                A few areas that genuinely excite me and shape the kind of work I enjoy doing.
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap={1}>
                {interests.map((item, index) => (
                  <MotionBox
                    key={item}
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.03 }}
                    whileHover={{ y: -4, scale: 1.05 }}
                  >
                    <Chip
                      label={item}
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
                  <BoltRoundedIcon />
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                  Core Strengths
                </Typography>
              </Stack>

              <Grid container spacing={1.5}>
                {strengths.map((item, index) => (
                  <Grid item xs={6} key={item}>
                    <MotionBox
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -4 }}
                      sx={{
                        p: 1.6,
                        borderRadius: "16px",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        textAlign: "center",
                      }}
                    >
                      <Typography sx={{ color: "#ffd8e2", fontWeight: 700 }}>
                        {item}
                      </Typography>
                    </MotionBox>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </MotionCard>

          <MotionCard
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
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
                  <MovieFilterRoundedIcon />
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                  Currently Exploring
                </Typography>
              </Stack>

              <Typography sx={{ color: "#f0dfe9", lineHeight: 1.85, mb: 2 }}>
                I’m continuing to explore better ways to combine clean engineering,
                motion, usability, and technical depth in the projects I build.
              </Typography>

              <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mb: 2 }} />

              <Stack spacing={1.2}>
                <Stack direction="row" spacing={1.1} alignItems="center">
                  <CodeRoundedIcon sx={{ color: "#FFACAC" }} />
                  <Typography sx={{ color: "#ffe2ea" }}>
                    Richer frontend interactions and motion systems
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1.1} alignItems="center">
                  <SecurityRoundedIcon sx={{ color: "#FFACAC" }} />
                  <Typography sx={{ color: "#ffe2ea" }}>
                    Security-minded development and stronger technical foundations
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1.1} alignItems="center">
                  <SportsBasketballRoundedIcon sx={{ color: "#FFACAC" }} />
                  <Typography sx={{ color: "#ffe2ea" }}>
                    Creative niche apps with personality and interactivity
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </MotionCard>
        </Grid>
      </Grid>

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
      <Typography variant="h5" sx={{ fontWeight: 800 }}>
        Choose a Card to Learn About Me
      </Typography>
    </Stack>

    <Typography sx={{ color: "#d8cae2", lineHeight: 1.75, mb: 2.5 }}>
      Pick a card to reveal a little more about how I work, what motivates me,
      and the kind of builder I am.
    </Typography>

    <Grid container spacing={2} sx={{ mb: 2.5 }}>
      {personalityCards.map((card) => {
        const isActive = selectedPersonalityCard?.id === card.id;

        return (
          <Grid item xs={12} sm={6} key={card.id}>
            <MotionBox whileHover={{ y: -6, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Box
                onClick={() => setSelectedPersonalityCard(card)}
                sx={{
                  p: 2.2,
                  borderRadius: "20px",
                  background: isActive
                    ? "linear-gradient(135deg, rgba(228,90,132,0.22), rgba(255,172,172,0.12))"
                    : "rgba(255,255,255,0.04)",
                  border: isActive
                    ? "1px solid rgba(255,172,172,0.35)"
                    : "1px solid rgba(255,255,255,0.06)",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  minHeight: "150px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Stack direction="row" spacing={1.2} alignItems="center" mb={1.2}>
                  <Avatar
                    sx={{
                      bgcolor: "rgba(255,255,255,0.06)",
                      color: "#FFACAC",
                    }}
                  >
                    {card.icon}
                  </Avatar>
                  <Typography sx={{ fontWeight: 800, color: "#fff" }}>
                    {card.title}
                  </Typography>
                </Stack>

                <Typography sx={{ color: "#d9cbe3", lineHeight: 1.7 }}>
                  {card.short}
                </Typography>
              </Box>
            </MotionBox>
          </Grid>
        );
      })}
    </Grid>

    <AnimatePresence mode="wait">
      {selectedPersonalityCard && (
        <MotionBox
          key={selectedPersonalityCard.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          sx={{
            p: 2.4,
            borderRadius: "20px",
            background:
              "linear-gradient(135deg, rgba(54,31,84,0.95), rgba(75,38,101,0.95))",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
          }}
        >
          <Stack direction="row" spacing={1.2} alignItems="center" mb={1.2}>
            <Avatar sx={{ bgcolor: "rgba(255,172,172,0.15)", color: "#FFACAC" }}>
              {selectedPersonalityCard.icon}
            </Avatar>
            <Typography sx={{ fontWeight: 800, color: "#fff", fontSize: "1.1rem" }}>
              {selectedPersonalityCard.title}
            </Typography>
          </Stack>

          <Typography sx={{ color: "#f0dfe9", lineHeight: 1.85 }}>
            {selectedPersonalityCard.full}
          </Typography>
        </MotionBox>
      )}
    </AnimatePresence>
  </CardContent>
</MotionCard>

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