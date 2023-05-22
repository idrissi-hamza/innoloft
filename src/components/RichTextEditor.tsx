import React, { useState, useEffect } from 'react';
import { EditorState, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertToHTML } from 'draft-convert';
import { useGetProductQuery } from '../slices/apiSlice';

const RichTextEditor = () => {
  const { data: product } = useGetProductQuery(6781);
  let content = product.description;
  const initialContentState = ContentState.createFromText(
    'Sample content state lore Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab quae enim beatae aliquam! Ratione, repellendus quod aliquid vel rerum asperiores corrupti autem assumenda, sed itaque provident tenetur facere sunt illum.'
  );
  const initialEditorState = EditorState.createWithContent(initialContentState);
  const [editorState, setEditorState] = useState(initialEditorState);
  return (
    <>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        editorClassName="px-2 z-50"
        wrapperClassName="p-2 border rounded border-2 text-neutral-500"
        toolbarClassName="border-none"
        toolbar={{
          options: ['inline', 'list', 'textAlign', 'link', 'history'],
          inline: { options: ['bold', 'italic'] },
        }}
      />
    </>
  );
};

export default RichTextEditor;
