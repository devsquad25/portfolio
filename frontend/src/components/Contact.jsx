import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Link,
  useTheme,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "framer-motion";

function Contact() {
  const theme = useTheme();

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        backgroundColor: "background.paper",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background gradient elements */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.palette.brandColors.purple}22 0%, transparent 70%)`,
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -100,
          left: -100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.palette.brandColors.orange}22 0%, transparent 70%)`,
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="overline"
            component="div"
            sx={{
              color: theme.palette.brandColors.deepPurple,
              fontWeight: 600,
              letterSpacing: 2,
              mb: 2,
            }}
          >
            GET IN TOUCH
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              fontWeight: 400,
            }}
          >
            Have a project in mind? Let's discuss how we can help bring your
            ideas to life.
          </Typography>
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Paper
            elevation={6}
            sx={{
              p: 5,
              borderRadius: 4,
              background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, #252538 100%)`,
              maxWidth: 900,
              mx: "auto",
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
                  Let's Build Something Amazing Together
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 4 }}
                >
                  Whether you need a new website, a custom web application, or
                  help with your existing digital products, our team is ready to
                  assist you at every step of the way.
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: `linear-gradient(135deg, ${theme.palette.brandColors.pink} 20%, ${theme.palette.brandColors.purple} 100%)`,
                        mr: 3,
                        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <EmailIcon sx={{ color: "#fff", fontSize: 28 }} />
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Email
                      </Typography>
                      <Typography variant="h6" fontWeight={500}>
                        <Link
                          href="mailto:devsquad25@gmail.com"
                          color="inherit"
                          underline="hover"
                        >
                          devsquad25@gmail.com
                        </Link>
                      </Typography>
                    </Box>
                  </Box>

                  {/* phone number section */}
                  {/* <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: `linear-gradient(135deg, ${theme.palette.brandColors.orange} 20%, ${theme.palette.brandColors.pink} 100%)`,
                        mr: 3,
                        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <PhoneIcon sx={{ color: "#fff", fontSize: 28 }} />
                    </Box>

                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Phone
                      </Typography>
                      <Typography variant="h6" fontWeight={500}>
                        +213 0000000000
                      </Typography>
                    </Box>
                  </Box> */}

                  <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: `linear-gradient(135deg, ${theme.palette.brandColors.yellow} 20%, ${theme.palette.brandColors.orange} 100%)`,
                        mr: 3,
                        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <LocationOnIcon sx={{ color: "#fff", fontSize: 28 }} />
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Location
                      </Typography>
                      <Typography variant="h6" fontWeight={500}>
                        Constantine, El Khroub
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: `linear-gradient(135deg, ${theme.palette.brandColors.deepPurple} 20%, ${theme.palette.brandColors.purple} 100%)`,
                        mr: 3,
                        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <FacebookIcon sx={{ color: "#fff", fontSize: 28 }} />
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Facebook
                      </Typography>
                      <Typography variant="h6" fontWeight={500}>
                        <Link
                          href="https://web.facebook.com/profile.php?id=61574087163215"
                          target="_blank"
                          rel="noopener noreferrer"
                          color="inherit"
                          underline="hover"
                        >
                          DevSquad25
                        </Link>
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Contact;
