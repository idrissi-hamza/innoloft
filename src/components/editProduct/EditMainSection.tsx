import { IoRibbonOutline } from 'react-icons/io5';
import { useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor } from 'react-draft-wysiwyg';
import { stateToHTML } from 'draft-js-export-html';

import {
  useEditProductMutation,
  useGetConfigurationQuery,
  useGetProductQuery,
} from '../../slices/apiSlice';
import { useEditorState } from '../../hooks/useEditorState';
import { BsCheck } from 'react-icons/bs';
import { appId } from '../../utils/utils';

const EditMainSection = () => {
  const { data: product } = useGetProductQuery(6781);
  const { data: configuration } = useGetConfigurationQuery(appId);

  const [productName, setProductName] = useState(product.name);
  const { editorState, setEditorState } = useEditorState(product.description);

  const [editProduct, { isLoading }] = useEditProductMutation();

  const saveHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const modifiedContentState = editorState.getCurrentContent();
      const modifiedContent = stateToHTML(modifiedContentState);

      await editProduct({
        ...product,
        description: modifiedContent,
        name: productName,
      }).unwrap();

      console.log('Text saved successfully!');
    } catch (error) {
      console.error('Error saving text:', error);
    }
  };

  return (
    <div className="relative  p-2 flex flex-col  w-full">
      <img
        src={product?.picture}
        className="w-full aspect-[2] mr-3"
        alt="Logo"
      />
      <div className="absolute top-0 left-0  flex rounded-md ">
        <div
          className=" p-2 rounded-tl-md rounded-br-md  flex items-center text-white"
          style={{ backgroundColor: `${configuration?.mainColor}` }}
        >
          <IoRibbonOutline />
        </div>
        <div className="bg-white p-2 pl-3 rounded-br-md font-semibold">
          Patent
        </div>
      </div>
      <form
        className=" px-6 mb-4 mt-10   "
        onSubmit={saveHandler}
      >
        <input
          className="w-full border-2 outline-none px-2 py-1 rounded mb-2 "
          type="text"
          name="productName"
          placeholder="Product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

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
        <div className="  mt-6 flex ml-auto gap-4">
          <button
            type="button"
            className=" text-neutral-600 border-neutral-600 px-3 py-1 rounded-md flex  items-center ml-auto "
          >
            <span>Cancel</span>
          </button>
          <button
            type="submit"
            className="bg-blue-700 disabled:bg-neutral-500 text-white px-3 py-1 rounded-md flex  items-center "
            disabled={isLoading}
          >
            {<BsCheck className="text-2xl " />} <span>Save</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditMainSection;
