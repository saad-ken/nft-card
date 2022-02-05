import React from "react";
import nft from "../images/image-equilibrium.jpg";
import eth from "../images/icon-ethereum.svg";
import clock from "../images/icon-clock.svg";
import avatar from ".././images/image-avatar.png";
import {
  Avatar,
  Card,
  Creator,
  Flex,
  HoverEeffect,
  Image,
  Line,
  Title,
  Value,
} from "./styles/Nft.styled";

const Nft = () => {
  return (
    <Flex>
      <Card>
        <HoverEeffect>
          <Image src={nft} alt="" />
        </HoverEeffect>
        <Title>
          <h1>Equilibrium #3429</h1>
          <p>Our Equilibrium collection promotes balance and calm.</p>
        </Title>
        <Value>
          <img src={eth} alt="" />
          <span className="blue">0.041 ETH</span>

          <img className="clock" src={clock} alt="" />
          <span>3 days left</span>
        </Value>
        <Line></Line>
        <Creator>
          <Avatar src={avatar} alt="" />
          <p>
            <span>Creation of</span> Jules Wyvern
          </p>
        </Creator>
      </Card>
    </Flex>
  );
};

export default Nft;
