import { useMediaQuery } from "@chakra-ui/react";

export const DetermineSize = () => {
    const [isMobileDevices, isLaptop] = useMediaQuery([
      "(min-width: 320px)",
      "(min-width: 768px)",
    ])
      return isLaptop
        ? "laptop"
        : "mobile"
}