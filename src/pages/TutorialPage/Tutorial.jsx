import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, SimpleGrid, Container } from "@chakra-ui/react";
import '../../Css/tutorialPage.css'
import { Layout } from "../../components/Layout";
import TutorialCards from "../../components/TutorialCards";
import animalImage from "../../images/Videos/animals.jpg"
import alphabetImage from "../../images/Videos/alphabets.jpg"
import colorsImage from "../../images/Videos/colors.jpg"
import numbersImage from "../../images/Videos/numbers.jpg"
import pattersImage from "../../images/Videos/shapes.jpg"
import shapesImage from "../../images/Videos/shapes.jpg"
function Tutorial() {
    const dataList = [
    {
      id: "1",
      product: "Alphabets",
      summary: "Learn Alphabets with animation and interactive videos",
      longLine: "There are lots of animations and videos about the alphabets",
      image:alphabetImage,
      link:"/AlphabetsTutorials"
    },
    {
      id: "2",
      product: "Animals",
      summary:
        "Teach your child animal names easily with simple cartoons",
      longLine: "There are lots of animations and videos about the animals",
      image:animalImage,
      link:"/AnimalsTutorials"
    },
    {
      id: "3",
      product: "Colors",
      summary: "Colors are fun",
      longLine: "Try our fun videos about colors and have fun with colors",
      image:colorsImage,
      link:"/ColorsTutorials"
    },
    {
      id: "4",
      product: "Numbers",
      summary:
        "Numbers are fun",
      longLine: "Learning numbers can be fun with all fun activities",
      image:numbersImage,
      link:"/NumberTutorial"
    },
    {
      id: "5",
      product: "Shapes",
      summary:
        "LEarn all kinds of shapes",
      longLine: "Circle to square all can be fun with animations and fun videos",
      image:shapesImage,
      link:"/ShapesTutorials"
    },
    {
      id: "6",
      product: "Patterns",
      summary:
        "Help your child to learn patterns ",
      longLine: "All the patterns simplified",
      image:pattersImage,
      link:"/PatternsTutorials"
    }
  ];
  return (
      <Layout>
    <Container maxW="100rem" centerContent>
        <SimpleGrid columns={[1, 2, 3, 1, 2 , 3]}>
          {dataList.map(function (data) {
            const { id, product, summary, longLine,image,link } = data;
            return (
              <div className="tutorial-cards"><TutorialCards
                key={id}
                product={product}
                summary={summary}
                longLine={longLine}
                image={image}
                link={link}
              /></div>
            );
          })}
        </SimpleGrid>
      </Container></Layout>
  )
}

export default Tutorial