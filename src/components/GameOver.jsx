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
} from "@chakra-ui/react";

import { PlayerContext } from "../store/player-context";

const GameOverModal = ({ isOpen, onClose, winner }) => {
  const { players } = useContext(PlayerContext);
  const isWin = winner !== "draw";
  const resultText = isWin
    ? `${winner === "X" ? players[0] : players[1]} wins!`
    : "It's a draw!";

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="20px" textAlign="center">
          Game Over
        </ModalHeader>
        <ModalBody>
          <Flex direction="column" align="center">
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
              {resultText}
            </Text>
            {isWin && (
              <Text>
                Congratulations, {winner === "X" ? players[0] : players[1]}!
              </Text>
            )}
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default GameOverModal;
