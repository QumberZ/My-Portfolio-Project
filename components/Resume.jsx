import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Avatar,
  Button,
  Chip,
  Divider,
} from "@mui/material";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import { motion } from "framer-motion";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";


const MotionBox = motion(Box);
const MotionCard = motion(Card);

export default function Resume() {
  const [openPreview, setOpenPreview] = React.useState(false);
  const resumeFile = "/SQRZ_Resume.pdf";
  const stats = [
    { label: "Years of Experience", value: "5+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Technologies Used", value: "20+" },
    { label: "Certifications Earned", value: "5+" },
  ];

  const experience = [
    {
      role: "Innovation and Engineering Services Web Platform Developer / QA Engineer Specialist 2",
      company: "NYS Office of Information Technology Services",
      url: "https://its.ny.gov/services",
      dates: "Mar 2023 – Present",
      description:
        "Worked on the web platform team supporting digital services and collaborating with developers, designers, and QA teams to ensure quality platform releases on 100+ NYS Sites.",
      bullets: [
        "Manage daily HTML and CSS ticket resolution for NYS agency websites, ensuring timely implementation of changes.",
        "Conduct thorough QA for user stories on staging and production sites, using JIRA to ensure accurate web features and content functionality.",
        "Play a pivotal role in configuring and building newly launched websites, ensuring they met performance and functionality standards.",
        "Proficient in performing extensive QA for JavaScript and HTML elements, ensuring compatibility across various browsers and devices.",
        "Maintained effective communication with customers, developers, and QA team members, collaborating to resolve tickets promptly and improve site functionality.",
        "Continous development and QA Testing with the HESC, OMH, DOT, Ethics, Empire Trail, ESD, DCJS, and Drupal/SiteFactory teams to coordinate development efforts, review requirements, and support the successful delivery of web platform features.",
      ],
    },
    {
      role: "Full Stack Software Engineering Intern",
      company: "The Drivers Coop (Ride sharing service)",
      url: "https://drivers.coop/",
      dates: "Jun 2022 – Aug 2022",
      description:
        "Worked as a Full Stack Software Engineer Intern for a ride sharing service in competition to Uber and Lyft. The Drivers Cooperative aims to end exploitative conditions in the for-hire vehicle industry, by putting drivers at the helm of the platform economy.",
      bullets: [
        "Applied React.js, React Native, Docker, GraphQL, and Hasura to implement a meetings feature for admins to create, view, edit, and delete Zoom meetings for drivers.",
        "Constructed Hasura schema junction tables which allowed driver data to be connected and accessed through the admin dispatcher web and driver mobile app for attendance tracking and easy to disperse driver incentives.",
        "Utilized junction schema tables for meetings and Driver attendees from the Hasura server console to extract driver attendance which includes list of past and upcoming zoom meetings scheduled for dispatchers and drivers to view and track attendance for driver incentives and bonuses.",
        "Created GraphQL Queries and Mutations to create, read, update, and delete Driver and Vehicle extractable fields associated with Driver and Vehicle Documents for the driver mobile app and admin dispatcher web app.",
        "Maintained and wrote Docker scripts which allowed the api containers for the driver dispatcher web and driver mobile app’s trips, databases, Hasura, and GraphQL to be synchronized and updated on every device / OS on the engineering team",
      ],
    },
    {
      role: "Software Engineer",
      company: "Tech Talent Pipeline Residency Program",
      url: "https://goatgradecollectibles.netlify.app/",
      dates: "Jan 2022 – May 2024",

      description:
        "Applied React.js, Node.js, Express.js, and MySQL to build an NBA card opening simulation in which the user registers and selects from packs in the store to purchase from using virtual currency. The user can view their collection of cards in their profile and also view the rarity of each card. The user can also sell their cards in the marketplace to other users and also view the rarity of the cards in the marketplace.",

      bullets: [
        "Implemented Bootstrap and React.js to create a user-friendly navigation bar with sections for seamless page navigation.",
        "Set up and tested API functionality, enabling progressive signup and login through Postman and PostgreSQL, ensuring secure client-server communication.",
        "Utilized React Sass, React AOS, and animation frameworks to enhance the front-end visual appeal, including animated cards displaying basketball player information on hover.",
      ],
    },
  ];

  const education = [
    {
      school: "City University of New York, College of Staten Island",
      degree: "Bachelor of Science in Computer Science",
      dates: "Aug 2020 – May 2024",
    },
  ];

  const certifications = [
    "Tech Talent Pipeline Residency Bootcamp",
    "Full Stack Web Development Certification",
  ];

  const achievements = [
    "Developed multiple full-stack web applications using React, Node.js, and PostgreSQL including an e-commerce platform and task management application.",
    "Built an interactive NBA digital trading card pack opening simulation demonstrating UI animation, state management, and frontend engineering skills.",
    "Collaborated with development and QA teams to test platform features, validate UI functionality, and support quality delivery of web applications.",
  ];

  const skillHighlights = [
    "Full Stack Web Development",
    "Frontend Engineering with React",
    "API Development & Integration",
    "UI/UX Implementation",
    "Web Platform Testing & QA",
    "Modern JavaScript Development",
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
      animate={{ x: [0, 12, 0], y: [0, -18, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
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
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "center" }}
        >
          <Box>
            <Stack direction="row" spacing={1} alignItems="center" mb={1.5}>
              <Avatar
                sx={{ bgcolor: "rgba(228,90,132,0.18)", color: "#FFACAC" }}
              >
                <DescriptionRoundedIcon />
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
                Resume / Professional Profile
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
              Qumber Zaidi
            </Typography>

            <Typography
              sx={{
                color: "#e4d8eb",
                lineHeight: 1.85,
                fontSize: { xs: "1rem", md: "1.05rem" },
                maxWidth: "780px",
              }}
            >
              Full-stack web developer and Computer Science student with
              experience developing interactive applications using React,
              Node.js, and modern web technologies. Strong background in
              frontend engineering, API integration, and platform testing,
              with a focus on delivering polished and reliable digital
              experiences.
            </Typography>

            <Stack direction="row" flexWrap="wrap" gap={1.1} mt={2.5}>
              <Chip
                label="Software Engineer"
                sx={{
                  color: "#fff",
                  bgcolor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              />
              <Chip
                label="QA Engineer"
                sx={{
                  color: "#fff",
                  bgcolor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              />
              <Chip
                label="Open to Opportunities"
                sx={{
                  color: "#fff",
                  bgcolor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              />
            </Stack>
          </Box>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
  <MotionBox whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
    <Button
      onClick={() => setOpenPreview(true)}
      variant="contained"
      startIcon={<OpenInNewRoundedIcon />}
      sx={{
        borderRadius: "999px",
        px: 3,
        py: 1.2,
        textTransform: "none",
        fontWeight: 700,
        bgcolor: "#E45A84",
        boxShadow: "0 10px 30px rgba(228,90,132,0.28)",
        "&:hover": { bgcolor: "#cf4d74" },
      }}
    >
      Preview Resume
    </Button>
  </MotionBox>

  <MotionBox whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
    <Button
      href={resumeFile}
      download="SQRZ_Resume.pdf"
      variant="outlined"
      startIcon={<DownloadRoundedIcon />}
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
      Download Resume
    </Button>
  </MotionBox>
</Stack>
        </Stack>
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
              <Stack direction="row" spacing={1} alignItems="center" mb={2.5}>
                <Avatar
                  sx={{ bgcolor: "rgba(228,90,132,0.18)", color: "#FFACAC" }}
                >
                  <WorkRoundedIcon />
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                  Professional Experience
                </Typography>
              </Stack>

              <Stack spacing={2.5}>
                {experience.map((item, index) => (
                  <MotionBox
                    key={`${item.role}-${index}`}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    sx={{
                      p: 2.2,
                      borderRadius: "18px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 800,
                        color: "#fff",
                        fontSize: "1.08rem",
                      }}
                    >
                      {item.role}
                    </Typography>
                    <Typography
                      component="a"
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "#FFACAC",
                        fontWeight: 700,
                        mt: 0.4,
                        textDecoration: "none",
                        cursor: "pointer",
                        "&:hover": {
                          textDecoration: "underline",
                          color: "#ffc6d6",
                        },
                      }}
                    >
                      {item.company}
                    </Typography>
                    <Typography
                      sx={{ color: "#cab8d5", fontSize: "0.95rem", mb: 1 }}
                    >
                      {item.dates}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#e2d5eb",
                        fontSize: "0.95rem",
                        lineHeight: 1.7,
                        mb: 1.5,
                      }}
                    >
                      {item.description}
                    </Typography>

                    <Stack spacing={1}>
                      {item.bullets.map((bullet, i) => (
                        <Typography
                          key={i}
                          sx={{ color: "#d9cae2", lineHeight: 1.75 }}
                        >
                          • {bullet}
                        </Typography>
                      ))}
                    </Stack>
                  </MotionBox>
                ))}
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
                <Avatar
                  sx={{ bgcolor: "rgba(228,90,132,0.18)", color: "#FFACAC" }}
                >
                  <SchoolRoundedIcon />
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                  Education
                </Typography>
              </Stack>

              <Stack spacing={2}>
                {education.map((item, index) => (
                  <MotionBox
                    key={`${item.school}-${index}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.06 }}
                    sx={{
                      p: 2.2,
                      borderRadius: "18px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <Typography sx={{ fontWeight: 800, color: "#fff" }}>
                      {item.school}
                    </Typography>
                    <Typography
                      sx={{ color: "#FFACAC", fontWeight: 700, mt: 0.4 }}
                    >
                      {item.degree}
                    </Typography>
                    <Typography
                      sx={{ color: "#cab8d5", fontSize: "0.95rem", mb: 1.2 }}
                    >
                      {item.dates}
                    </Typography>
                    <Typography sx={{ color: "#d9cae2", lineHeight: 1.75 }}>
                      {item.details}
                    </Typography>
                  </MotionBox>
                ))}
              </Stack>
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
                  <EmojiEventsRoundedIcon />
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                  Achievements & Highlights
                </Typography>
              </Stack>

              <Stack spacing={1.2}>
                {achievements.map((item, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                    sx={{
                      p: 1.6,
                      borderRadius: "16px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <Typography sx={{ color: "#d9cae2", lineHeight: 1.75 }}>
                      • {item}
                    </Typography>
                  </MotionBox>
                ))}
              </Stack>
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
                <Avatar
                  sx={{ bgcolor: "rgba(228,90,132,0.18)", color: "#FFACAC" }}
                >
                  <PersonRoundedIcon />
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                  Professional Snapshot
                </Typography>
              </Stack>

              <Typography sx={{ color: "#d7c7e1", lineHeight: 1.8, mb: 2 }}>
                Computer Science Graduate and full-stack developer with
                experience building interactive web applications and
                collaborating with development teams to deliver reliable
                platform features and polished user experiences.
              </Typography>

              <Stack spacing={1.1}>
                <Typography sx={{ color: "#ffe2ea" }}>
                  • Developed modern web applications using React, Node.js, and database technologies.
                </Typography>
                <Typography sx={{ color: "#ffe2ea" }}>
                  • Developed modern web applications using React, Node.js, and database technologies.
                </Typography>
                <Typography sx={{ color: "#ffe2ea" }}>
                  • Effective collaborator experienced working with developers, designers, and QA teams to deliver high-quality solutions.
                </Typography>
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
                <Avatar
                  sx={{ bgcolor: "rgba(228,90,132,0.18)", color: "#FFACAC" }}
                >
                  <WorkspacePremiumRoundedIcon />
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                  Certifications
                </Typography>
              </Stack>

              <Stack direction="row" flexWrap="wrap" gap={1}>
                {certifications.map((item, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -3, scale: 1.03 }}
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
                <Avatar
                  sx={{ bgcolor: "rgba(255,172,172,0.15)", color: "#FFACAC" }}
                >
                  <AutoAwesomeRoundedIcon />
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                  Core Strengths
                </Typography>
              </Stack>

              <Typography sx={{ color: "#f0dfe9", lineHeight: 1.8, mb: 2 }}>
                Creative and analytical developer with a strong foundation in
                modern web technologies and collaborative software development.
              </Typography>

              <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mb: 2 }} />

              <Stack direction="row" flexWrap="wrap" gap={1}>
                {skillHighlights.map((item, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.04 }}
                    whileHover={{ y: -3, scale: 1.04 }}
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
        </Grid>
      </Grid>
      <Dialog
  open={openPreview}
  onClose={() => setOpenPreview(false)}
  fullWidth
  maxWidth="lg"
  PaperProps={{
    sx: {
      borderRadius: "24px",
      background: "rgba(34, 21, 50, 0.98)",
      border: "1px solid rgba(255,255,255,0.08)",
      overflow: "hidden",
    },
  }}
>
  <Box
    sx={{
      px: 3,
      py: 2,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      background: "rgba(255,255,255,0.03)",
    }}
  >
    <Box>
      <Typography sx={{ fontWeight: 800, color: "#fff" }}>
        Resume Preview
      </Typography>
      <Typography sx={{ color: "#cab8d5", fontSize: "0.92rem" }}>
        Embedded PDF viewer
      </Typography>
    </Box>

    <IconButton onClick={() => setOpenPreview(false)} sx={{ color: "#FFACAC" }}>
      <CloseRoundedIcon />
    </IconButton>
  </Box>

  <Box
    sx={{
      height: { xs: "75vh", md: "85vh" },
      background: "#120c1d",
    }}
  >
    <iframe
      src={resumeFile}
      title="Resume PDF"
      style={{
        width: "100%",
        height: "100%",
        border: "none",
        background: "#fff",
      }}
    />
  </Box>
</Dialog>
    </Box>
  );
}
