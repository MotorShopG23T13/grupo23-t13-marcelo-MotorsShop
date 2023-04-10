import { Box, Center, ChakraProvider } from "@chakra-ui/react"
// import { LandingPage } from "./pages/landing/landing"
import MotorTheme from "./styles/theme"
import { CardCars } from "./components/commons/Card"




function App() {
  

  return (
    <ChakraProvider theme={MotorTheme}>

    <Box display={"flex"}
    justifyContent={"center"} alignItems={"center"}>
      <CardCars/>
      <Center>
      </Center>
    </Box>
    </ChakraProvider>
  )
}

export default App