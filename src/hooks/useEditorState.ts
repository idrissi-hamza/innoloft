import { EditorState } from 'draft-js';
import { useState, useEffect } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { stateFromHTML } from 'draft-js-import-html';
import sanitizeHtml from 'sanitize-html';

export const useEditorState = (text: any) => {

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const getInitialState = (arg: any) => {
    const sanitizedHtml = sanitizeHtml(arg, {
      allowedTags: sanitizeHtml.defaults.allowedTags,
      allowedAttributes: false,
    });
    const contentState = stateFromHTML(sanitizedHtml.replace(/\n/g, '<br/>'));
    const initialState = EditorState.createWithContent(contentState);
    return initialState;
  };
  useEffect(() => {
    let initialState = getInitialState(text);
    setEditorState(initialState);
  }, [text]);

  return { editorState, setEditorState };
};
