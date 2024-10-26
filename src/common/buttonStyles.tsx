import { styled } from "@mui/material/styles"
import { Button } from "@mui/material"

export const CustomButton = styled(Button)`
  color: black;
  font-size: 1.1rem;
  border: 2px solid;
  border-radius: 1rem;
  border-color: #AD9B9B;
  background-color: #F4F6FF;
  padding: .5rem 1rem;
  margin: 1rem;
  &:hover {
    background-color: #e7e7e7
  } as typeof Button;
`