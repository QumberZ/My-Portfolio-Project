import React, { useRef, useState, useMemo } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
  IconButton,
  Snackbar,
  Alert,
  Chip,
  Divider,
  Avatar,
  Tooltip,
  Slide,
} from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function SlideLeftTransition(props) {
  return <Slide {...props} direction="left" />;
}

function TypeCycleText() {
  const words = useMemo(
    () => [
      "Let’s build something.",
      "Let’s connect.",
      "Let’s create.",
      "Let’s collaborate.",
    ],
    []
  );

  const [index, setIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentWord = words[index];
    const speed = isDeleting ? 35 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = currentWord.slice(0, displayText.length + 1);
        setDisplayText(next);

        if (next === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        const next = currentWord.slice(0, displayText.length - 1);
        setDisplayText(next);

        if (next === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, index, isDeleting, words]);

  return (
    <Typography
      sx={{
        fontWeight: 800,
        lineHeight: 1.1,
        fontSize: { xs: "2rem", md: "3rem" },
        background:
          "linear-gradient(90deg, #FFFFFF 0%, #FFACAC 50%, #E45A84 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        minHeight: { xs: "88px", md: "110px" },
      }}
    >
      {displayText}
      <Box
        component="span"
        sx={{
          display: "inline-block",
          width: "10px",
          ml: 0.5,
          color: "#FFACAC",
          animation: "blink 1s steps(1) infinite",
        }}
      >
        |
      </Box>
    </Typography>
  );
}

export default function Contact() {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [copied, setCopied] = useState("");
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [showSuccessBurst, setShowSuccessBurst] = useState(false);

  const contactLinks = [
    {
      label: "Email",
      value: "qumberraza786@gmail.com",
      icon: <EmailRoundedIcon />,
      href: "mailto:qumberraza786@gmail.com",
      color: "#FFACAC",
    },
    {
      label: "GitHub",
      value: "https://github.com/QumberZ",
      icon: <GitHubIcon />,
      href: "https://github.com/QumberZ",
      color: "#d8c8e6",
    },
    {
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/qumberzaidi/",
      icon: <LinkedInIcon />,
      href: "https://www.linkedin.com/in/qumberzaidi/",
      color: "#b9d8ff",
    },
  ];

  const quickFacts = [
    {
      icon: <LocationOnRoundedIcon />,
      text: "Based in New York / Remote-friendly",
    },
    {
      icon: <AccessTimeRoundedIcon />,
      text: "Usually replies within 24–48 hours",
    },
    {
      icon: <AutoAwesomeRoundedIcon />,
      text: "Open to creative builds and frontend work",
    },
  ];

  const handleChange = (field) => (event) => {
    setForm((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleCopy = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(`${label} copied`);
    } catch (error) {
      setCopied("Copy failed");
    }
  };

  const validateForm = () => {
    if (!form.from_name.trim()) return "Please enter your name.";
    if (!form.from_email.trim()) return "Please enter your email.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.from_email)) {
      return "Please enter a valid email address.";
    }
    if (!form.subject.trim()) return "Please enter a subject.";
    if (!form.message.trim()) return "Please enter a message.";
    return "";
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    const errorMessage = validateForm();
    if (errorMessage) {
      setSubmitError(errorMessage);
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setSubmitError("Email service is not configured. Check your .env values.");
      return;
    }

    setIsSending(true);
    setSubmitError("");

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      setSent(true);
      setShowSuccessBurst(true);

      setForm({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
      });

      if (formRef.current) {
        formRef.current.reset();
      }

      setTimeout(() => setShowSuccessBurst(false), 1800);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitError("Message failed to send. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        px: { xs: 1, md: 2 },
        py: 1,
        color: "#fff",
        overflow: "hidden",
      }}
    >
      <style>
        {`
          @keyframes blink {
            0%, 49% { opacity: 1; }
            50%, 100% { opacity: 0; }
          }
        `}
      </style>

      <MotionBox
        animate={{ x: [0, 14, 0], y: [0, -16, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          top: 20,
          right: -20,
          width: 220,
          height: 220,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(228,90,132,0.25) 0%, rgba(228,90,132,0) 70%)",
          filter: "blur(10px)",
          pointerEvents: "none",
        }}
      />

      <MotionBox
        animate={{ x: [0, -10, 0], y: [0, 20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          bottom: 0,
          left: -40,
          width: 260,
          height: 260,
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
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              <MotionBox
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45 }}
              >
                <Stack direction="row" spacing={1} alignItems="center" mb={1.5}>
                  <Avatar
                    sx={{ bgcolor: "rgba(228,90,132,0.18)", color: "#FFACAC" }}
                  >
                    <ChatBubbleOutlineRoundedIcon />
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
                    Contact / Connect
                  </Typography>
                </Stack>

                <TypeCycleText />

                <Typography
                  sx={{
                    mt: 1.5,
                    color: "#e4d8eb",
                    lineHeight: 1.85,
                    maxWidth: "560px",
                  }}
                >
                  Whether you want to discuss a project, collaborate on an idea,
                  or just say hello, this space is designed to make reaching out
                  feel smooth and memorable.
                </Typography>

                <Stack direction="row" flexWrap="wrap" gap={1.1} mt={3} mb={3}>
                  <Chip
                    label="Frontend Projects"
                    sx={{
                      color: "#fff",
                      bgcolor: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  />
                  <Chip
                    label="Creative UI Work"
                    sx={{
                      color: "#fff",
                      bgcolor: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  />
                  <Chip
                    label="Open to Collaboration"
                    sx={{
                      color: "#fff",
                      bgcolor: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  />
                </Stack>

                <Stack spacing={1.4}>
                  {quickFacts.map((fact, index) => (
                    <MotionBox
                      key={fact.text}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.08 }}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.2,
                        color: "#dbcde5",
                      }}
                    >
                      <Box
                        sx={{
                          color: "#FFACAC",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {fact.icon}
                      </Box>
                      <Typography>{fact.text}</Typography>
                    </MotionBox>
                  ))}
                </Stack>

                <Divider
                  sx={{ my: 3, borderColor: "rgba(255,255,255,0.08)" }}
                />

                <Stack spacing={1.4}>
                  {contactLinks.map((item, index) => (
                    <MotionBox
                      key={item.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + index * 0.08 }}
                    >
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: "18px",
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.07)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 1.5,
                          transition: "0.25s ease",
                          "&:hover": {
                            transform: "translateY(-3px)",
                            background: "rgba(255,255,255,0.07)",
                          },
                        }}
                      >
                        <Stack
                          direction="row"
                          spacing={1.4}
                          alignItems="center"
                        >
                          <Avatar
                            sx={{
                              bgcolor: "rgba(255,255,255,0.06)",
                              color: item.color,
                            }}
                          >
                            {item.icon}
                          </Avatar>
                          <Box>
                            <Typography sx={{ fontWeight: 700 }}>
                              {item.label}
                            </Typography>
                            <Typography
                              sx={{ color: "#d6c6e0", fontSize: "0.95rem" }}
                            >
                              {item.value}
                            </Typography>
                          </Box>
                        </Stack>

                        <Stack direction="row" spacing={0.5}>
                          <Tooltip title="Copy">
                            <IconButton
                              onClick={() => handleCopy(item.value, item.label)}
                              sx={{ color: "#FFACAC" }}
                            >
                              <ContentCopyRoundedIcon />
                            </IconButton>
                          </Tooltip>

                          <Tooltip title="Open">
                            <IconButton
                              component="a"
                              href={item.href}
                              target={
                                item.href.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              rel="noreferrer"
                              sx={{ color: "#FFACAC" }}
                            >
                              <LaunchRoundedIcon />
                            </IconButton>
                          </Tooltip>
                        </Stack>
                      </Box>
                    </MotionBox>
                  ))}
                </Stack>
              </MotionBox>
            </Grid>

            <Grid item xs={12} lg={7}>
              <MotionCard
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45 }}
                sx={{
                  borderRadius: "26px",
                  background: "rgba(15, 10, 24, 0.45)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
                }}
              >
                <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                  <Stack
                    direction="row"
                    spacing={1.2}
                    alignItems="center"
                    mb={2.5}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "rgba(228,90,132,0.18)",
                        color: "#FFACAC",
                      }}
                    >
                      <SendRoundedIcon />
                    </Avatar>
                    <Box>
                      <Typography sx={{color: "#FFACAC", fontWeight: 800, fontSize: "1.25rem" }}>
                        Send me a Message!
                      </Typography>
                      <Typography
                        sx={{ color: "#FFACAC", fontWeight: 600, fontSize: "0.85rem" }}
                      >
                        Make sure to fill out all fields!
                      </Typography>
                    </Box>
                  </Stack>

                  <Box component="form" ref={formRef} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          label="Your Name"
                          name="from_name"
                          value={form.from_name}
                          onChange={handleChange("from_name")}
                          sx={textFieldStyles}
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          label="Your Email"
                          name="from_email"
                          type="email"
                          value={form.from_email}
                          onChange={handleChange("from_email")}
                          sx={textFieldStyles}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Subject"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange("subject")}
                          sx={textFieldStyles}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          multiline
                          minRows={6}
                          label="Your Message"
                          name="message"
                          value={form.message}
                          onChange={handleChange("message")}
                          sx={textFieldStyles}
                        />
                      </Grid>
                    </Grid>

                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      justifyContent="space-between"
                      alignItems={{ xs: "flex-start", sm: "center" }}
                      spacing={2}
                      mt={3}
                    >
                      <Typography
                        sx={{ color: "#E45A84", fontWeight: 600, fontSize: "0.85rem"  }}
                      >
                        Looking forward to connecting!
                      </Typography>

                      <motion.div
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          onClick={handleSubmit}
                          variant="contained"
                          endIcon={<SendRoundedIcon />}
                          disabled={isSending}
                          sx={{
                            borderRadius: "999px",
                            px: 3,
                            py: 1.2,
                            textTransform: "none",
                            fontWeight: 700,
                            bgcolor: isSending ? "#b94a6c" : "#E45A84",
                            boxShadow: isSending
                              ? "0 0 25px rgba(228,90,132,0.45)"
                              : "0 10px 30px rgba(228,90,132,0.28)",
                            position: "relative",
                            overflow: "hidden",
                            "&:hover": {
                              bgcolor: "#cf4d74",
                            },
                          }}
                        >
                          {isSending ? "Launching..." : "Launch Message"}
                        </Button>
                      </motion.div>
                    </Stack>
                  </Box>
                </CardContent>
              </MotionCard>
            </Grid>
          </Grid>
        </CardContent>
      </MotionCard>

      <Snackbar
        open={Boolean(copied)}
        autoHideDuration={2200}
        onClose={() => setCopied("")}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        TransitionComponent={SlideLeftTransition}
        sx={{
          bottom: { xs: 110, md: 95 },
          right: 20,
        }}
      >
        <Alert
          onClose={() => setCopied("")}
          severity="success"
          variant="filled"
          sx={{
            borderRadius: "14px",
            boxShadow: "0 12px 30px rgba(0,0,0,0.28)",
            alignItems: "center",
          }}
        >
          {copied}
        </Alert>
      </Snackbar>

      <Snackbar
        open={sent}
        autoHideDuration={2800}
        onClose={() => setSent(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        TransitionComponent={SlideLeftTransition}
        sx={{
          bottom: { xs: 110, md: 95 },
          right: 20,
        }}
      >
        <Alert
          onClose={() => setSent(false)}
          severity="success"
          variant="filled"
          icon={<CheckCircleRoundedIcon fontSize="inherit" />}
          sx={{
            borderRadius: "14px",
            boxShadow: "0 12px 30px rgba(0,0,0,0.28)",
            alignItems: "center",
          }}
        >
          Thank you for reaching out! Your message has been sent successfully.
          I’ll get back to you soon.
        </Alert>
      </Snackbar>

      <Snackbar
        open={Boolean(submitError)}
        autoHideDuration={3200}
        onClose={() => setSubmitError("")}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        TransitionComponent={SlideLeftTransition}
        sx={{
          bottom: { xs: 110, md: 95 },
          right: 20,
        }}
      >
        <Alert
          onClose={() => setSubmitError("")}
          severity="error"
          variant="filled"
          icon={<ErrorOutlineRoundedIcon fontSize="inherit" />}
          sx={{
            borderRadius: "14px",
            boxShadow: "0 12px 30px rgba(0,0,0,0.28)",
            alignItems: "center",
          }}
        >
          {submitError}
        </Alert>
      </Snackbar>

      <AnimatePresence>
        {showSuccessBurst && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "fixed",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
              zIndex: 2000,
            }}
          >
            <div
              style={{
                width: 180,
                height: 180,
                borderRadius: "999px",
                background:
                  "radial-gradient(circle, rgba(228,90,132,0.35) 0%, rgba(228,90,132,0) 70%)",
                position: "absolute",
              }}
            />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              style={{
                position: "relative",
                padding: "16px 24px",
                borderRadius: "20px",
                background: "rgba(34,21,50,0.96)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#fff",
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 8 }}>✈️</div>
              <div style={{ fontWeight: 800, color: "#FFACAC" }}>
                Message Launched
              </div>
              <div style={{ fontSize: 14, color: "#d8cae2", marginTop: 6 }}>
                Your message is on its way.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}

const textFieldStyles = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "18px",
    color: "#fff",
    background: "rgba(255,255,255,0.04)",
    transition: "0.25s ease",
    "& fieldset": {
      borderColor: "rgba(255,255,255,0.08)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255,172,172,0.35)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#E45A84",
      boxShadow: "0 0 0 3px rgba(228,90,132,0.12)",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#d7c6e2",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#FFACAC",
  },
};