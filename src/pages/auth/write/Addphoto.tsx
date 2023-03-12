import React, { useCallback, useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
const Addphoto: React.FC = () => {
  const [file, setFile] = useState<File>();
  const [preview, setPreview] = useState<string>("");
  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        setFile(e.target.files[0]);
        setPreview(URL.createObjectURL(e.target.files[0]));
      }
    },
    []
  );
  console.log(file);
  return (
    <div>
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
