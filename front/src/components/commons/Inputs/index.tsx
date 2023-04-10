
import { useState } from "react";
import { Input } from "@chakra-ui/react";

export function InputComponents({size , height}:any) {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
      <Input
        placeholder="Digite algo..."
        bg={isFocused ? "white" : "gray.100"}
        transition="background-color 0.3s"
        _placeholder={{ color: "gray.400" }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        w={size.size || "315px"}
        h={height.height || "45px"}
      />
  );
}

export function InputComponentsBig({size , height}:any){

    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    return(
        
        <Input
        placeholder="Digite algo..."
        bg={isFocused ? "white" : "gray.100"}
        transition="background-color 0.3s"
        _placeholder={{ 
            color: "gray.400"
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        textAlign="left"
        pl="4"
        paddingBottom="10"
        defaultValue=""
        w={size.size || "315px"}
        h={height.height || "80px"}
    />
    )
}

