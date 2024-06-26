import React, { useContext } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Flex,
  Text,
  Icon,
} from "@chakra-ui/react";
import { FaTrophy } from "react-icons/fa";

import { PlayerContext } from "../store/player-context";

const GameOverModal = ({ isOpen, onClose, winner }) => {
  const { players } = useContext(PlayerContext);
  const isWin = winner !== "draw";
  const resultText = isWin
    ? `${winner === "X" ? players[0] : players[1]} wins!`
    : "It's a draw!";

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="4xl"
      isCentered={true}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          fontWeight="bold"
          fontSize="4xl"
          textAlign="center"
          color="teal"
        >
          Game Over
        </ModalHeader>
        <ModalBody>
          <Flex direction="column" align="center">
            <Text fontSize="3xl" fontWeight="bold" mb={4} color="teal">
              {resultText}
            </Text>
            {isWin && (
              <Flex alignContent="center" justifyContent="center">
                <Icon
                  as={FaTrophy}
                  marginRight="10px"
                  boxSize="35px"
                  color="teal"
                />
                <Text fontSize="xl" fontWeight="bold" mb={4} color="teal">
                  Congratulations, {winner === "X" ? players[0] : players[1]}
                </Text>
              </Flex>
            )}
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button bgColor="teal" color="white" mr={3} onClick={onClose}>
            Play Again
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default GameOverModal;
