import {
  Flex,
  Image,
  Text,
  Box,
  Stack,
  CardBody,
  Card,
  Avatar,
  Spacer,
} from "@chakra-ui/react";

interface CardProps {
  card:{

    title: string,
    status: boolean,
    brand: boolean,
    image: {
      url: string;
      alt: string;
    },
    text: string,
    mileage: string,
    year: string,
    price: string
  }

  
}

export function CardCars({card}:CardProps) {

  const {status,image,text, mileage,year,price,brand,title} = card
    return (
      <Card
  maxW="350px"
  pointerEvents={!status ? "none" : "auto"}
  _hover={status ? { filter: "brightness(0.9)", cursor: "pointer" } : {}}
  onClick={() => {
    if (status) {
      console.log("Card clicado!")
    }
  }}
>
  {status ? (
    <Box
      position="absolute"
      left={2}
      backgroundColor={"#4529E6"}
      w={16}
      h={6}
      display={"flex"}
      justifyContent={"center"}
      borderRadius={3}
      marginTop={2}
    >
      <Text color={"#FFFFFF"} fontFamily={"inter"}>
        Ativo
      </Text>
    </Box>
  ) : (
    <Box
      position="absolute"
      left={2}
      backgroundColor={"gray"}
      w={16}
      h={6}
      display={"flex"}
      justifyContent={"center"}
      borderRadius={3}
      marginTop={2}
    >
      <Text color={"#FFFFFF"} fontFamily={"inter"}>
        Inativo
      </Text>
    </Box>
  )}
  <Image
    src={image.url}
    alt={image.alt}
    objectFit="cover"
    width="350px"
    height="178.96px"
  />
  <CardBody>
    <Box mt="-3" mb="2">
      <Text
        fontWeight={600}
        fontSize="md"
        fontFamily={"Lexend"}
        marginBottom={2}
      >
        {title}
      </Text>
      <Text color={"#495057"} fontSize="sm" fontFamily={"inter"}>
        {text}
      </Text>
    </Box>
    <Stack direction="row" alignItems="center">
      <Avatar size="sm" name="João Silva" />
      <Text fontWeight="bold" fontSize="sm">
        João Silva
      </Text>
    </Stack>
    <Flex alignItems="center" justifyContent="start" marginTop={3} gap={2}> 
      <Box backgroundColor="#EDEAFD" p="1" borderRadius="md">
        <Text fontWeight="bold" color={" #4529E6"} fontSize="sm">
         {mileage}KM
        </Text>
      </Box>
      <Box backgroundColor="#EDEAFD" p="1" borderRadius="md">
        <Text fontWeight="bold" color={" #4529E6"} fontSize="sm">
          {year}
        </Text>
      </Box>
      <Spacer  />
      <Text color="black" fontSize="14" fontWeight="bold" marginLeft={10}>
        {price}
      </Text>
    </Flex>
  </CardBody>
</Card>
);
}
