import React from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import Header from '../../components/shared/Header';
import Button from '../../components/shared/Button';
import { PlusCircleIcon, XCircleIcon } from '@heroicons/react/outline';

const NotesCreate = () => {
  const onSaveNote = () => {
    console.log('Save note');
  };
  const [note, setNote] = React.useState<string>('');
  const mdParser = new MarkdownIt(/* Markdown-it options */);

  const onClearNote = () => {
    setNote('');
  };

  // Initialize a markdown parser
  function handleEditorChange({ html, text }: { html: string; text: string }) {
    setNote(text);
  }

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

      {/* Markdown editor */}

      <div className="mt-10">
        <MdEditor
          style={{ height: '500px' }}
          renderHTML={(text) => mdParser.render(text)}
          onChange={handleEditorChange}
          value={note}
        />
      </div>
    </>
  );
};

export default NotesCreate;
