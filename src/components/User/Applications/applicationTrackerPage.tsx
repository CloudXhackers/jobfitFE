import { Box, Button, Container, TextField, Typography } from "@mui/material"
import ApplicationsList from "./applicationsList"

export default function ApplicationTrackerPage() {
  const filters = [
    "Applied Date",
    "Source",
    "Job Type",
    "Job Title",
    "Location",
    "Salary Range",
    "Sponsorship",
    "Company",
  ]

  return (
    <Container maxWidth="xl">
      <TextField
        id="search"
        label="Search Jobs, Companies, Roles..."
        variant="outlined"
        fullWidth={true}
        sx={{ ".MuiOutlinedInput-root": { borderRadius: 8, boxShadow: 3 }, my: 3 }}
      />
      <Box display="flex" alignItems="center">
        <Typography variant="h6" mr={2}>Filters</Typography>
        {filters.map(filterName => (
          <Button sx={{ border: '2px dashed #ccc', borderRadius: 8, px:2, mx: 1 }}>
            {filterName}
          </Button>
        ))}
      </Box>
      <ApplicationsList/>
    </Container>
  )
}
