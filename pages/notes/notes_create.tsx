import { PlusCircleIcon } from '@heroicons/react/outline';
import React from 'react';
import Button from '../../components/shared/Button';
import Header from '../../components/shared/Header';

const NotesCreate = () => {
  const onSaveNote = () => {};
  return (
    <>
      <Header title=" New Note">
        <Button label="Save" Icon={PlusCircleIcon} onClickButton={onSaveNote} />
      </Header>
    </>
  );
};

export default NotesCreate;
