import {
  ButtonGroup,
  useEditableControls,
  IconButton,
  Flex,
  Input,
  EditablePreview,
  Editable,
  EditableInput,
} from "@chakra-ui/react";

import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import { string } from "prop-types";

const Player = ({ name }) => {
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
        marginLeft="2rem"
        icon={<EditIcon />}
        {...getEditButtonProps()}
      />
    );
  }

  return (
    <Editable
      textAlign="center"
      defaultValue={name}
      fontSize="2xl"
      isPreviewFocusable={false}
    >
      <EditablePreview />
      {/* Here is the custom input */}
      <Input as={EditableInput} />
      <EditableControls />
    </Editable>
  );
};

export default Player;

Player.propTypes = {
  name: string,
};
