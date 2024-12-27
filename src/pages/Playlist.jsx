import {
  Text,
  Heading,
  Box,
  Flex,
  Image,
} from "@chakra-ui/react";
import { FaRegClock, FaPlay } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import ProfilePicture from "../../public/assets/images/UserProfilePicture.png";

import { Button } from "../components/ui/button";
import SongCard from "../components/SongCard";
import { playListMockUp } from "../MockUpData";

import { timeFormatHMS } from "../utils/timeFormatChange";

export default function Playlist() {
  const ID = useParams().id ? useParams().id : 1;

  const playList = playListMockUp.find((item) => item.ID === parseInt(ID));
  const duration = timeFormatHMS(
    playList.songs.reduce((acc, cur) => acc + cur.duration, 0)
  );
  return (
    <>
      <Box
        background="linear-gradient(180deg, rgba(133,31,137,1) 0%, rgba(88,20,91,1) 19%, rgba(49,11,51,1) 47%, rgba(0,0,0,1) 100%)"
        color="white"
        height="100vh"
        padding={{ base: "60px 30px", lg: "60px 40px" }}
        borderRadius="10px"
      >
        <Flex
          flexDir={{ base: "column", lg: "row" }}
          gap={"24px"}
          justifyContent={{ base: "center", lg: "left" }}
          align={{ base: "center", lg: "end" }}
        >
          <Image
            src={playList.cover}
            width={"200px"}
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.3)"
            borderRadius={"8px"}
          ></Image>
          <Box>
            <Text paddingBottom={"15px"}>{playList.type}</Text>
            <Heading
              fontSize={"60px"}
              fontWeight={"bold"}
              paddingBottom={"20px"}
            >
              {playList.title}
            </Heading>
            <Text color={"gray.300"}>{playList.description}</Text>
            <Flex
              color={"gray.400"}
              fontSize={"14px"}
              fontWeight={"600"}
              pt={"10px"}
              gap={"5px"}
            >
              <Image src={ProfilePicture} height={"22px"} />
              <Text>
                {playList.author} - {playList.songs.length} songs, {duration}
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Box paddingTop={"20px"}>
          <Button
            backgroundColor="#af1fb1"
            color="gray.200"
            borderRadius={"100%"}
            width="50px"
            height="50px"
          >
            <FaPlay />
          </Button>
          <Flex
            width={"100%"}
            padding={"10px"}
            align={"center"}
            color={"gray.400"}
          >
            <Text width={"2%"}>#</Text>
            <Text width={"53%"}>Title</Text>
            <Text width={"23%"}>Album</Text>
            <Text width={"17%"}>Date added</Text>
            <Flex width={"3%"} justifyContent={"end"}>
              <FaRegClock />
            </Flex>
          </Flex>
          <Box height={"1.5px"} bgColor={"gray.600"}></Box>
          <Box pt={"16px"}>
            {playList.songs.map((item, index) => (
              <SongCard song={item} index={index} />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
