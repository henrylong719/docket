import { PlusIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import React from 'react';
import Button from '../../components/shared/Button';
import Header from '../../components/shared/Header';

const Notes = () => {
  const router = useRouter();

  const onCreateNote = () => {
    router.push('/notes/notes_create');
  };

  return (
    <>
      <Header title="Notes">
        <Button
          label="New Notes"
          Icon={PlusIcon}
          onClickButton={onCreateNote}
        />
      </Header>
    </>
  );
};

export default Notes;
