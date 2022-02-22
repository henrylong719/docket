import { PlusCircleIcon, XCircleIcon } from '@heroicons/react/outline';
import React from 'react';
import Button from '../../components/shared/Button';
import Header from '../../components/shared/Header';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const NotesCreate = () => {
  const onSaveNote = () => {
    console.log('Save note');
  };
  const [note, setNote] = React.useState<string>('');

  const onClearNote = () => {
    setNote('');
  };

  const onChangeNote = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(event.target.value);
  };

  return (
    <>
      <Header title=" New Note">
        <div className="flex">
          <div className="mr-4">
            <Button
              label="Clear"
              Icon={XCircleIcon}
              onClickButton={onClearNote}
            />
          </div>
          <Button
            label="Save"
            Icon={PlusCircleIcon}
            onClickButton={onSaveNote}
          />
        </div>
      </Header>
      <div className="mt-20 flex">
        <textarea
          onChange={onChangeNote}
          id="about"
          name="about"
          rows={30}
          className="shadow-sm w-2/4 focus:ring-gray-500 outline-none focus:border-gray-500  sm:text-sm border-2 border-gray-300 rounded-md"
        ></textarea>
        <ReactMarkdown
          className="w-2/4 border-2 ml-4 rounded-md"
          children={note}
          remarkPlugins={[remarkGfm]}
        />
        ,
      </div>
    </>
  );
};

export default NotesCreate;
