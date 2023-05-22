import { useEditProductMutation, useGetProductQuery } from '../slices/apiSlice';
import { Editor } from 'react-draft-wysiwyg';
import { stateToHTML } from 'draft-js-export-html';
import { useEditorState } from '../hooks/useEditorState';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const MyEditor = () => {
  const { data: product } = useGetProductQuery(6781);
  const { editorState, setEditorState } = useEditorState(product.description);
  const [editProduct, { isLoading }] = useEditProductMutation();

  const saveText = async () => {
    try {
      const modifiedContentState = editorState.getCurrentContent();
      const modifiedContent = stateToHTML(modifiedContentState);

      await editProduct({
        id: product.id,
        description: modifiedContent,
      }).unwrap();

      console.log('Text saved successfully!');
    } catch (error) {
      console.error('Error saving text:', error);
    }
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
      />
      <button onClick={saveText}>Save</button>
    </div>
  );
};

export default MyEditor;
