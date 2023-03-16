import Resizer from "react-image-file-resizer";
export const resizeFile: any = (file: File) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      400,
      400,
      "PNG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });
