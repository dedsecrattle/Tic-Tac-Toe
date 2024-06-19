import {
  ButtonGroup,
  useEditableControls,
  IconButton,
  Input,
  EditablePreview,
  Editable,
  EditableInput,
  Text,
  Box,
  Avatar,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";

import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import { string } from "prop-types";
import { PlayerContext } from "../store/player-context";
import { useContext } from "react";

const Player = ({ symbol }) => {
  const [isSmallScreen] = useMediaQuery("(max-width: 950px)");
  const { players, scores, updateX, updateO, onClose } =
    useContext(PlayerContext);

  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <IconButton
        size="sm"
        marginLeft={isSmallScreen ? "0.5rem" : "2rem"}
        icon={<EditIcon />}
        {...getEditButtonProps()}
      />
    );
  }

  return (
    <Box
      border="solid 2px white"
      padding={isSmallScreen ? "0.85rem" : "1.5rem"}
      borderRadius="2rem"
      textAlign="center"
    >
      <Text
        fontSize={isSmallScreen ? "xl" : "3xl"}
        fontWeight="bold"
        color="white"
      >
        {symbol}
      </Text>
      <Text
        fontSize={isSmallScreen ? "xl" : "3xl"}
        fontWeight="bold"
        color="white"
      >
        {`Score - ${symbol === "X" ? scores[0] : scores[1]}`}
      </Text>
      <Flex
        gap={isSmallScreen ? "0.5rem" : "1rem"}
        justifyContent="center"
        align="center"
      >
        <Avatar
          name={symbol === "X" ? players[0] : players[1]}
          color="teal"
          bgColor="white"
          size={isSmallScreen ? "sm" : "md"}
        />
        <Editable
          textAlign="center"
          defaultValue={symbol === "X" ? players[0] : players[1]}
          onChange={(newValue) =>
            symbol === "X" ? updateX(newValue) : updateO(newValue)
          }
          onSubmit={(newValue) => {
            onClose();
          }}
          fontSize={isSmallScreen ? "xl" : "2xl"}
          color="white"
          isPreviewFocusable={false}
        >
          <EditablePreview />
          <Input fontSize="2xl" as={EditableInput} />
          <EditableControls />
        </Editable>
      </Flex>
    </Box>
  );
};

export default Player;

Player.propTypes = {
  name: string,
  symbol: string,
};
