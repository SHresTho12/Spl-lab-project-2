import { Box, Container,Button } from "@chakra-ui/react";
import React from "react";
import "../Css/banner.css"
function Banner() {
  return <Box>
    <header class="header">
        

        <div class="header__text-box">
            <h1 class="heading-primary">
                <span class="heading-primary-main">Teach ME</span>
                <span class="heading-primary-sub">My ability is your disability</span>
            </h1>
            <Button>Discover our topics</Button>
        </div>



    </header>
  </Box>;
}

export default Banner;
