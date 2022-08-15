import PropTypes from "prop-types";
import React, { memo } from "react";
import { Layout } from "../components/Layout";
import {
  Box,
  Container,
  SimpleGrid,
  chakra,
  Code,
  Heading,
  List,
  ListItem,
  OrderedList,
  Tag,
  Text,
  Image,
  WrapItem,
  Wrap,
  Center,
  VStack,
} from "@chakra-ui/react";

import drink from "../images/VoiceCard/drink.jpg";
import food from "../images/VoiceCard/food.jpg";
import tire from "../images/VoiceCard/tired.jpg";
import hurt from "../images/VoiceCard/hurt.jpg";
import happy from "../images/VoiceCard/happy.jpg";
import angry from "../images/VoiceCard/angry.jpg";
import sad from "../images/VoiceCard/sad.jpg";
import home from "../images/VoiceCard/home.jpg";
import school from "../images/VoiceCard/school.jpg";
import grandma from "../images/VoiceCard/grandma.jpg";
import outside from "../images/VoiceCard/outside.jpg";
import scared from "../images/VoiceCard/scared.jpg";
function VoiceCards() {

const message = new SpeechSynthesisUtterance();

//set the message
function setTextMessage(text){
  message.text = text;
}

//speak the text
function speakText(){
  speechSynthesis.speak(message);
}

function clickEvent(text){


  setTextMessage(text);
  speakText();
}







  return (
    <Layout>
      <Wrap spacing="30px" justify="center">
        <WrapItem onClick={()=>clickEvent("   I am Hungry, I want food")}>
          <Center w="380px" h="280px" bg="tomato">
            <VStack>
              <Image
                m={0}
                boxSize="250px"
                w="380px"
                src={food}
                alt="Dan Abramov"
              />
              <Container m={0} maxW="md" h="30px" bg="tomato" color="white">
                <Center bg="tomato" h="30px" color="white">
                  I am Hungry, I want food
                </Center>
              </Container>
            </VStack>
          </Center>
        </WrapItem>
        <WrapItem onClick={()=>clickEvent("   I am Tired, I wanna sleep")}>
          <Center w="380px" h="280px" bg="tomato">
            <VStack>
              <Image
                m={0}
                boxSize="250px"
                w="380px"
                src={tire}
                alt="Dan Abramov"
              />
              <Container m={0} maxW="md" h="30px" bg="tomato" color="white">
                <Center bg="tomato" h="30px" color="white">
                  I am Tired, I wanna sleep
                </Center>
              </Container>
            </VStack>
          </Center>
        </WrapItem>
        <WrapItem onClick={()=>clickEvent("   I am hurt")} >
          <Center w="380px" h="280px" bg="tomato">
            <VStack>
              <Image
                m={0}
                boxSize="250px"
                w="380px"
                src={hurt}
                alt="Dan Abramov"
              />
              <Container m={0} maxW="md" h="30px" bg="tomato" color="white">
                <Center bg="tomato" h="30px" color="white">
                  I am hurt
                </Center>
              </Container>
            </VStack>
          </Center>
        </WrapItem>
        <WrapItem onClick={()=>clickEvent("  I am Thirsty, I want Water")}>
          <Center w="380px" h="280px" bg="tomato">
            <VStack>
              <Image
                m={0}
                boxSize="250px"
                w="380px"
                src={drink}
                alt="Dan Abramov"
              />
              <Container m={0} maxW="md" h="30px" bg="tomato" color="white">
                <Center bg="tomato" h="30px" color="white">
                  I am Thirsty, I want Water
                </Center>
              </Container>
            </VStack>
          </Center>
        </WrapItem>
        <WrapItem onClick={()=>clickEvent(" I am feeling happy")}>
          <Center w="380px" h="280px" bg="tomato">
            <VStack>
              <Image
                m={0}
                boxSize="250px"
                w="380px"
                src={happy}
                alt="Dan Abramov"
              />
              <Container m={0} maxW="md" h="30px" bg="tomato" color="white">
                <Center bg="tomato" h="30px" color="white">
                  I am feeling happy
                </Center>
              </Container>
            </VStack>
          </Center>
        </WrapItem>
        <WrapItem onClick={()=>clickEvent(" I am angry on you")}>
          <Center w="380px" h="280px" bg="tomato">
            <VStack>
              <Image
                m={0}
                boxSize="250px"
                w="380px"
                src={angry}
                alt="Dan Abramov"
              />
              <Container m={0} maxW="md" h="30px" bg="tomato" color="white">
                <Center bg="tomato" h="30px" color="white">
                  I am angry on you
                </Center>
              </Container>
            </VStack>
          </Center>
        </WrapItem>
        <WrapItem onClick={()=>clickEvent("I am feeling  sad.")}>
          <Center w="380px" h="280px" bg="tomato">
            <VStack>
              <Image
                m={0}
                boxSize="250px"
                w="380px"
                src={sad}
                alt="Dan Abramov"
              />
              <Container m={0} maxW="md" h="30px" bg="tomato" color="white">
                <Center bg="tomato" h="30px" color="white">
                  I am feeling  sad.
                </Center>
              </Container>
            </VStack>
          </Center>
        </WrapItem>
        <WrapItem onClick={()=>clickEvent(" I wanna go home.")}>
          <Center w="380px" h="280px" bg="tomato">
            <VStack>
              <Image
                m={0}
                boxSize="250px"
                w="380px"
                src={home}
                alt="Dan Abramov"
              />
              <Container m={0} maxW="md" h="30px" bg="tomato" color="white">
                <Center bg="tomato" h="30px" color="white">
                  I wanna go home.
                </Center>
              </Container>
            </VStack>
          </Center>
        </WrapItem>
        <WrapItem onClick={()=>clickEvent(" I don't wanna go to school.")}>
          <Center w="380px" h="280px" bg="tomato">
            <VStack>
              <Image
                m={0}
                boxSize="250px"
                w="380px"
                src={school}
                alt="Dan Abramov"
              />
              <Container m={0} maxW="md" h="30px" bg="tomato" color="white">
                <Center bg="tomato" h="30px" color="white">
                  I don't wanna go to school.
                </Center>
              </Container>
            </VStack>
          </Center>
        </WrapItem>
        <WrapItem onClick={()=>clickEvent("  I want to go outside.")}>
          <Center w="380px" h="280px" bg="tomato">
            <VStack>
              <Image
                m={0}
                boxSize="250px"
                w="380px"
                src={outside}
                alt="Dan Abramov"
              />
              <Container m={0} maxW="md" h="30px" bg="tomato" color="white">
                <Center bg="tomato" h="30px" color="white">
                  I want to go outside.
                </Center>
              </Container>
            </VStack>
          </Center>
        </WrapItem>
          <WrapItem onClick={()=>clickEvent("I am happy to see grandma")}>
          <Center w="380px" h="280px" bg="tomato">
            <VStack>
              <Image
                m={0}
                boxSize="250px"
                w="380px"
                src={grandma}
                alt="Dan Abramov"
              />
              <Container m={0} maxW="md" h="30px" bg="tomato" color="white">
                <Center bg="tomato" h="30px" color="white">
                  I am happy to see grandma
                </Center>
              </Container>
            </VStack>
          </Center>
        </WrapItem>
        <WrapItem onClick={()=>clickEvent("I am feeling scared")}>
          <Center w="380px" h="280px" bg="tomato">
            <VStack>
              <Image
                m={0}
                boxSize="250px"
                w="380px"
                src={scared}
                alt="Dan Abramov"
              />
              <Container m={0} maxW="md" h="30px" bg="tomato" color="white">
                <Center bg="tomato" h="30px" color="white">
                  I am feeling scared
                </Center>
              </Container>
            </VStack>
          </Center>
        </WrapItem>
      </Wrap>
    </Layout>
  );
}
export default VoiceCards;
