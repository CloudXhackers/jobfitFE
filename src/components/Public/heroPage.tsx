import {
  AutoAwesome,
  CheckCircle,
  KeyboardArrowDown,
  Star,
} from "@mui/icons-material"
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Link,
  Stack,
  Switch,
  Typography,
} from "@mui/material"
import Container from "@mui/material/Container"
import { Link as RouterLink } from "react-router-dom"
import { BaseButton, StartButton } from "../../common/buttonStyles"
import LeftImage from "../../images/BgHomePage.jpeg"
import RightImage from "../../images/ai-research-scientist-abstract-concept-600nw-2368588939.webp"
import ResumeIcon from "../../images/container-md (1).png"
import LockIcon from "../../images/container-md (2).png"
import LoveIcon from "../../images/container-md (3).png"
import JobSearchIcon from "../../images/container-md.png"
import TypeImg from "../../images/m_image.png"
const footerItems = [
  {
    title: "Features",
    links: [
      { label: "AI Job Scraper", href: "#" },
      { label: "Resume Enhancer", href: "#" },
      { label: "Cover Letter Wizard", href: "#" },
      { label: "Application Tracker", href: "#" },
      { label: "Insights & Analytics", href: "#" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Job Automation Tool", href: "#" },
      { label: "Resume Builder", href: "#" },
      { label: "Cover Letter Generator", href: "#" },
      { label: "Job Application Tracker", href: "#" },
      { label: "Career Insights", href: "#" },
    ],
  },
  {
    title: "About Us",
    links: [
      { label: "Our Mission", href: "#" },
      { label: "Our Vision", href: "#" },
      { label: "Meet the Team", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { label: "Facebook", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "YouTube", href: "#" },
    ],
  },
]
const faq = [
  {
    question: "What features does the AI job application tool offer?",
    answer:
      "The AI Job Application Assistant streamlines job searching by automatically finding and submitting applications, customizing resumes based on job descriptions, and generating tailored cover letters. It also supports networking by suggesting connections and offers interview preparation with practice questions and resources. Built with React/Next.js, Python, and powered by CrewAI/Autogen, the tool provides an end-to-end, personalized job application experience for users.",
  },
  {
    question: "How does the resume modification work?",
    answer:
      "Our resume modification feature analyzes your existing resume and suggests improvements tailored to job descriptions. This ensures that your resume stands out and highlights the skills that are most relevant to each job application.",
  },
  {
    question: "How does the job application process work?",
    answer:
      "The job application process is streamlined within our application. Once you have your resume and cover letter ready, you can apply directly to listings with just a few clicks, making the process efficient and straightforward.",
  },
]
const features = [
  {
    icon: JobSearchIcon,
    title: "Job Search",
    description:
      "Discover new opportunities tailored to your skills and  preferences.",
    linkText: "Explore Job Opportunities",
    linkUrl: "/job-search",
  },
  {
    icon: ResumeIcon,
    title: "Resume & Cover Letter Builder",
    description:
      "Craft a standout resume with our easy-to-use modification tools.",
    linkText: "Build Your Resume",
    linkUrl: "/resume-builder",
  },
  {
    icon: LockIcon,
    title: "AutoBot Assist",
    description: "Use AI Bot to go FSD on application streak.",
    linkText: "Get Cover Letter Help",
    linkUrl: "/cover-letter-help",
  },
  {
    icon: LoveIcon,
    title: "Application Tracker",
    description:
      "Effortlessly manage and track your job applications in one place.",
    linkText: "Manage Applications Easily",
    linkUrl: "/application-tracker",
  },
]
const plans = [
  {
    title: "Free Starter",
    subtitle: "For personal use only, no strings attached.",
    features: [
      "Job Search Automation - 10 Application Limit",
      "Resume Builder Access - 10 Revamps",
      "Cover Letter Support - 10 Drafts",
      "Dashboard Tracking",
    ],
    unavailableFeatures: [
      "Limited Job Applications",
      "No Auto-Bot AI Access",
      "Community Access",
      "Interview Prep Assistant",
    ],
    buttonText: "Get Started for Free",
    icon: <Star color="primary" />,
  },
  {
    title: "Pro-Apply Member",
    subtitle: "Tailored for Mass Applications.",
    features: [
      "Job Automation - Max 1000 Application/Day",
      "Resume Builder Access - Unlimited Revamps",
      "Cover Letter Support - Unlimited Drafts",
      "Mass Applications",
      "Auto-Bot AI Assist",
      "Dashboard Tracking + 24/7 Support",
      "Networking Assist - Referrals, Connections",
      "Interview Prep Assistant",
    ],
    buttonText: "Contact Us for Pro-Access",
    icon: <AutoAwesome color="primary" />,
  },
]
export default function HeroPage() {
  return (
    <>
      <Container>
        <Box component="div">
          <BaseButton className="h-[2rem]">
            <Typography variant="inherit" className="text-sm">
              Unlock Your Career Potential with AI
            </Typography>
            <Typography
              component="span"
              variant="inherit"
              color="primary"
              sx={{ pl: 3 }}
              className="text-sm font-bold pl-3 text-blue-500"
            >
              Discover More
            </Typography>
          </BaseButton>
          <Typography
            variant="h2"
            sx={{ fontWeight: "800", p: 4, lineHeight: 2 }}
          >
            Revolutionize Your Job Hunt <br />
            with{" "}
            <Typography component="span" variant="inherit" color="primary">
              AI Automation
            </Typography>
            !
          </Typography>
          <Typography color="primary">
            Streamline your job search, enhance your resume, and apply
            effortlessly with our powerful tools.
          </Typography>
          <Box sx={{ p: 5 }}>
            <BaseButton>
              <Typography className="text-base font-black text-gray-700">
                Learn More
              </Typography>
            </BaseButton>
            <StartButton>
              <Typography className="text-lg text-white font-bold">
                Start Your Journey
              </Typography>
            </StartButton>
          </Box>
          <Box
            component="img"
            src={LeftImage}
            alt="Bottom Left"
            sx={{
              position: "absolute",
              bottom: 0,
              left: 80,
              width: "600px", // Adjust width as needed
              height: "auto",
            }}
          />
          <Box
            component="img"
            src={RightImage}
            alt="Bottom Right"
            sx={{
              position: "absolute",
              bottom: 0,
              right: 100,
              width: "500px", // Adjust width as needed
              height: "auto",
            }}
          />
        </Box>
        <Box className="h-72"></Box>
      </Container>
      <Typography variant="h4" sx={{ fontWeight: "750", p: 4 }}>
        Transform Your Job Application Experience
      </Typography>
      <Container className="h-[700px] w-full flex justify-between px-32">
        <Box component="div" className="w-1/2">
          <BaseButton
            className="h-[3rem] flex items-start justify-start text-left"
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              p: 1,
            }}
          >
            <Typography variant="inherit" className="text-base font-bold">
              Unlock Your Career Potential Today!
            </Typography>
          </BaseButton>
          <Typography
            variant="h4"
            sx={{
              textAlign: "left",
              fontWeight: "800",
              paddingLeft: 2,
              paddingBottom: 4,
              paddingTop: 5,
              lineHeight: 1.5,
            }}
          >
            Automate Your Job Application <br />
            Process with Ease.
          </Typography>
          <Typography
            className="font-normal text-xl text-left px-4"
            sx={{ textAlign: "left", lineHeight: 2 }}
          >
            Navigate the job market effortlessly with our AI-driven <br />
            application that simplifies job searching, resume crafting, <br />
            and cover letter writing.
          </Typography>
          <Box sx={{ paddingTop: 8 }}>
            <BaseButton
              className="h-[3rem] flex items-center"
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              {" "}
              <PlayCircleOutlineIcon />
              <Typography className="text-base font-black text-gray-700 pl-2">
                Watch Our Demo Video
              </Typography>
            </BaseButton>
          </Box>
        </Box>
        <Box
          component="img"
          className="w-[600px] h-[624px] object-cover"
          src={TypeImg}
          alt="Bottom Right"
        />
      </Container>
      <Typography variant="h6" sx={{ fontWeight: "750", paddingTop: 6 }}>
        Automate Your Job Hunt
      </Typography>
      <Typography
        variant="h4"
        sx={{ fontWeight: "750", p: 1, paddingBottom: 8 }}
      >
        Unlock Your Career Potential Today
      </Typography>
      <Container className="h-[650px]  justify-center text-center items-center ">
        <Grid
          container
          spacing={3}
          sx={{
            maxWidth: 1200,
            height: 500,
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {features.map((feature, index) => (
            <Grid item xs={6} sm={6} key={index}>
              <Box
                sx={{
                  border: "1px solid #ddd",
                  borderRadius: 4,
                  padding: 4,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  height: "100%",
                  bgcolor: "white",
                }}
              >
                <Box
                  component="img"
                  src={feature.icon}
                  alt={feature.title}
                  sx={{ width: 45, height: 45, mb: 4 }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    className="flex pl-4 pb-2"
                    color="text.primary"
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="h7"
                    color="text.secondary"
                    className="flex pl-4 text-start"
                    mb={4}
                  >
                    {feature.description}
                  </Typography>
                  <Link
                    href={feature.linkUrl}
                    variant="body2"
                    color="primary"
                    className="flex pl-4 font-bold text-blue-600"
                  >
                    {feature.linkText}
                  </Link>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container className="h-[700px] w-full ">
        <Typography>Under Construction</Typography>
      </Container>
      <Container className="h-[700px] w-full ">
        <Typography variant="h4" sx={{ fontWeight: "750" }}>
          Affordable Plans for Everyone
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Choose a pricing plan that suits your needs and budget.
        </Typography>
        <Box sx={{ maxWidth: 800, margin: "auto", padding: 4 }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            mb={3}
          >
            <Switch defaultChecked />
            <Typography variant="h6" className="font-semibold">
              Save up to 20% annually!
            </Typography>
          </Stack>
        </Box>
        <Container className="flex justify-between px-32">
          <Grid container spacing={4}>
            {plans.map((plan, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box
                  sx={{
                    border: "1px solid #ddd",
                    borderRadius: 2,
                    padding: 3,
                    bgcolor: "#f9f9f9",
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    {plan.icon}
                    <Typography variant="h5" fontWeight="bold" ml={1}>
                      {plan.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" mb={2}>
                    {plan.subtitle}
                  </Typography>
                  <Box textAlign="left" mb={3}>
                    {plan.features.map((feature, i) => (
                      <Box key={i} display="flex" alignItems="center" mb={1}>
                        <CheckCircle color="primary" fontSize="small" />
                        <Typography variant="body2" ml={1}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                    {plan.unavailableFeatures &&
                      plan.unavailableFeatures.map((feature, i) => (
                        <Box key={i} display="flex" alignItems="center" mb={1}>
                          <CheckCircle color="disabled" fontSize="small" />
                          <Typography
                            variant="body2"
                            color="text.disabled"
                            ml={1}
                          >
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                  </Box>
                  <BaseButton className="h-[3rem] w-full flex text-center items-center justify-center border-zinc-800 bg-slate-200">
                    <Typography className="text-base font-bold text-center items-center justify-center">
                      {plan.buttonText}
                    </Typography>
                  </BaseButton>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
      <Container className="h-[700px] w-full  justify-between px-32">
        <Typography variant="h4" sx={{ fontWeight: "750" }}>
          FAQ
        </Typography>
        <Typography variant="h6" color="text.secondary">
          All You Need to Know
        </Typography>
        {faq.map((item, index) => (
          <Accordion
            key={index}
            className="p-5 mb-5"
            sx={{ borderWidth: 3, borderRadius: 5 }}
          >
            <AccordionSummary
              expandIcon={<KeyboardArrowDown />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography className="font-semibold">{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="h8"
                color="text.secondary"
                sx={{ textAlign: "left" }}
              >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
      <Container className="h-[100px] w-full ">
        <footer className="bg-[#4379F2] text-white text-left py-10">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            {footerItems.map((item, index) => (
              <div key={index}>
                <h4 className="mb-5 font-bold">{item.title}</h4>
                <ul className="space-y-3">
                  {item.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="hover:underline font-medium text-small"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Typography
            variant="h4"
            noWrap
            component={RouterLink}
            to={"./"}
            className="w-[20%] justify-center"
            sx={{
              paddingTop: 4,
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Nunito Sans",
              fontWeight: 900,
              color: "white",
              textDecoration: "none",
            }}
          >
            Job
            <Typography color="black" variant="inherit">
              Fit.
            </Typography>
            AI
          </Typography>
          <div className="mt-8 ml-24">
            <p>&copy; 2024 JobFit.AI. All rights reserved.</p>
          </div>
        </footer>
      </Container>
    </>
  )
}
