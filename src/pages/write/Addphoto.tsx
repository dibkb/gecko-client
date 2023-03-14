import React, { useCallback, useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { WaringPortal } from "../../components/Portal";
const Addphoto: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0].type.split("/")[0] === "image") {
        setFile(e.target.files[0]);
        setPreview(URL.createObjectURL(e.target.files[0]));
      } else {
        setShowModal(true);
      }
    },
    []
  );
  return (
    <div>
      {showModal && (
        <WaringPortal
          message={"Please select an image"}
          setShowPortal={setShowModal}
        />
      )}
      {/* image preview */}
      <div className="min-h-[600px] mb-10">
        {file && (
          <img src={preview} className="max-h-[600px] mx-auto shadow-xl" />
        )}
        {!file && <PhotoIcon className="max-h-[600px] mx-auto text-zinc-500" />}
      </div>
      {/* file upload button */}
      <div className="max-w-md mx-auto">
        <label
          htmlFor="filePicker"
          className="group border border-primary rounded-md cursor-pointer py-3 flex justify-center gap-4 hover:bg-primary hover:text-white"
        >
          <p>Add photo from system</p>
          <PhotoIcon className="h-6 w-6 group-hover:text-white" />
        </label>
        <input
          id="filePicker"
          onChange={handleFileChange}
          style={{ visibility: "hidden" }}
          type={"file"}
        />
      </div>
    </div>
  );
};

export default Addphoto;
