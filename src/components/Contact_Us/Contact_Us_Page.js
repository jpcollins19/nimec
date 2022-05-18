import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../store";
import toast, { Toaster } from "react-hot-toast";
import PhotosList from "./PhotosList";
import Alert from "@mui/material/Alert";
import FileUploadImg from "@mui/icons-material/FileUpload";
import { getFiles, uploadFile } from "../../store";
import FileUpload from "./FileUpload";
import "./Contact_Us.css";

const Contact_Us_Page = () => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [photos, setPhotos] = useState([]);
  const [attachments, setAttachments] = useState([]);
  const [names, setNames] = useState([]);

  const messageSent = () => {
    toast(
      `Thank you ${firstName}!
      
      Your information has been sent to a NIMEC representative.`,
      {
        duration: 5000,
      }
    );
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const emailContent = {
        firstName,
        lastName,
        email,
        message,
        attachments,
      };

      dispatch(sendMessage(emailContent));

      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setPhotos([]);
      setAttachments([]);
      //clear namesArr with func
      messageSent();
      evt.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  // const filterFormSubmission = (values) => {
  //   const filteredArr = Object.entries(values).filter((pair) => {
  //     if (typeof pair[1] === "string" || typeof pair[1] === "object") {
  //       return pair[1].length;
  //     } else if (typeof pair[1] === "number") {
  //       return pair[1] !== 0;
  //     } else {
  //       return true;
  //     }
  //   });

  //   const arrToObj = Object.fromEntries(filteredArr);
  //   return arrToObj;
  // };

  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [fileSizeKB, setFileSizeKB] = useState("");
  const [fileType, setFileType] = useState("");
  const [src, setSrc] = useState("");

  const clearFileUpload = () => {
    setFileName("");
    setFileSize("");
    setFileType("");
    setSrc("");
    props.dataChanger("");
  };

  const onPickFile = (e) => {
    e.preventDefault();
    clearFileUpload();
    document.getElementById(props?.name).click();
  };

  const formInitial = {
    thumbImage: "",
  };
  const [formData, setFormData] = useState(formInitial);

  const dataChangerThumbnail = (value) => {
    setFormData({ ...formData, thumbImage: value });
  };

  const [baseImage, setBaseImage] = useState("");

  const convertBase64 = (file) => {
    // return new Promise((resolve, reject) => {
    //   const fileReader = new FileReader();
    //   fileReader.readAsDataURL(file);
    //   fileReader.onload = () => {
    //     resolve(fileReader.result);
    //   };
    //   fileReader.onerror = (error) => {
    //     reject(error);
    //   };
    // });
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    console.log(file);

    // console.log(base64);
  };

  const [fileInfo, setFileInfo] = useState(null);

  const fileToBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      callback(null, reader.result);
    };

    reader.onerror = (err) => {
      callback(error, null);
    };
  };

  const fileChange = (e) => {
    if (e.target.files < 1 || !e.target.validity.valid) {
    }

    fileToBase64(e.target.files[0], (err, result) => {
      if (result) {
        setFileInfo(result);
      }
    });
  };

  const namesArr = [];

  useEffect(() => {
    console.log("attachments", attachments);
  }, [attachments]);

  useEffect(() => {
    console.log("namesArr", namesArr);
  }, [namesArr]);

  const nameConverter = () => {
    files.forEach((file) => {
      const fileReader = new FileReader();
      fileReader.fileName = file.name;
      fileReader.onload = (ev) => {
        if (fileReader.readyState === 2) {
          setNames((prevNames) => [...prevNames, ev.target.fileName]);
        }
      };

      fileReader.readAsText(file);
    });
  };

  const base64Converter = async (e) => {
    // const files = e.target.files;
    // for (let i = 0; i < files.length; i++) {
    //   const file = files[i];
    //   const fileReader = new FileReader();
    //   fileReader.fileName = file.name;
    //   fileReader.onload = (ev) => {
    //     if (fileReader.readyState === 2) {
    //       setFiles((prevFiles) => [...prevFiles, fileReader.result]);
    //       // setFiles((prevFiles) =>
    //       //   prevFiles.filter((word, idx) => {
    //       //     return prevFiles.indexOf(word) === idx;
    //       //   })
    //       // );
    //     }
    //   };
    //   fileReader.readAsDataURL(file);
    // }
    // setTimeout(() => {
    //   nameConverter();
    // }, 500);
  };

  const applyFileName = (idx, name) => {
    for (let i = 0; i < files.length; i++) {
      if (i === idx) {
        files[i].name = name;
      }
    }

    return setFiles(files);
  };

  const onChange = (e) => {
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileReader = new FileReader();
      fileReader.fileName = file.name;
      fileReader.onload = (ev) => {
        if (fileReader.readyState === 2) {
          namesArr.push(ev.target.fileName);
        }
      };

      fileReader.readAsText(file);
    }

    // for (let i = 0; i < files.length; i++) {
    //   const file = files[i];
    //   const fileReader = new FileReader();
    //   fileReader.fileName = file.name;
    //   fileReader.onload = (ev) => {
    //     if (fileReader.readyState === 2) {
    //       console.log("attachment state is running", namesArr);
    //       setAttachments((prevAttachments) => [
    //         ...prevAttachments,
    //         { url: fileReader.result, name: namesArr[i] },
    //       ]);
    //       // setFiles((prevFiles) =>
    //       //   prevFiles.filter((word, idx) => {
    //       //     return prevFiles.indexOf(word) === idx;
    //       //   })
    //       // );
    //     }
    //   };
    //   fileReader.readAsDataURL(file);
    // }

    setTimeout(() => {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileReader = new FileReader();
        fileReader.fileName = file.name;
        fileReader.onload = (ev) => {
          if (fileReader.readyState === 2) {
            console.log("attachment state is running", namesArr);
            setAttachments((prevAttachments) => [
              ...prevAttachments,
              { url: fileReader.result, name: namesArr[i] },
            ]);
            // setFiles((prevFiles) =>
            //   prevFiles.filter((word, idx) => {
            //     return prevFiles.indexOf(word) === idx;
            //   })
            // );
          }
        };
        fileReader.readAsDataURL(file);
      }
    }, 500);

    // for (let i = 0; i < files.length; i++) {
    //   const file = files[i];
    //   const fileReader = new FileReader();
    //   fileReader.fileName = file.name;
    //   fileReader.onload = (ev) => {
    //     if (fileReader.readyState === 2) {
    //       setFiles((prevFiles) => [...prevFiles, fileReader.result]);
    //       // setFiles((prevFiles) =>
    //       //   prevFiles.filter((word, idx) => {
    //       //     return prevFiles.indexOf(word) === idx;
    //       //   })
    //       // );
    //     }
    //   };
    //   fileReader.readAsDataURL(file);
    // }
    // for (let i = 0; i < files.length; i++) {
    //   const file = files[i];
    //   const fileReader = new FileReader();
    //   fileReader.fileName = file.name;
    //   fileReader.onload = (ev) => {
    //     if (fileReader.readyState === 2) {
    //       setNames((prevNames) => [...prevNames, ev.target.fileName]);
    //     }
    //   };

    //   fileReader.readAsText(file);
    // }
  };

  const onChangeA = (e) => {
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileReader = new FileReader();
      fileReader.fileName = file.name;
      fileReader.onload = (ev) => {
        if (fileReader.readyState === 2) {
          console.log("attachment state is running", namesArr);
          setAttachments((prevAttachments) => [
            ...prevAttachments,
            { url: fileReader.result, name: namesArr[i] },
          ]);
          // setFiles((prevFiles) =>
          //   prevFiles.filter((word, idx) => {
          //     return prevFiles.indexOf(word) === idx;
          //   })
          // );
        }
      };
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      height="100vh"
      className="contact-us-page"
    >
      <form onSubmit={onSubmit}>
        <ul className="form-style-1">
          <li>
            <label>
              First Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="field2"
              className="field-divided"
              placeholder="First Name"
              onChange={(ev) => setFirstName(ev.target.value)}
            />
          </li>
          <li>
            <label>
              Last Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="field2"
              className="field-divided"
              placeholder="Last Name"
              onChange={(ev) => setLastName(ev.target.value)}
            />
          </li>
          <li>
            <label>
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              name="field3"
              className="field-long"
              placeholder="Email"
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </li>
          <li>
            <label>
              Your Message <span className="required">*</span>
            </label>
            <textarea
              name="field5"
              id="field5"
              className="field-long field-textarea"
              placeholder="Your Message"
              onChange={(ev) => setMessage(ev.target.value)}
            ></textarea>
          </li>
          <li className="files">
            <input
              type="file"
              accept="application/pdf"
              multiple
              onChange={onChange}
            />
            <div>
              <div>
                Drag your files here or click in this area to select to file
              </div>
            </div>
            {/* <label htmlFor="photo">
              <span>
                Upload Files
                <FileUploadImg className="fileUploadIcon" />
              </span>
              <input
                name="photos"
                accept="image/*"
                type="file"
                multiple
                className="photoInput"
                onChange={(e) => {
                  const files = e.target.files;
                  for (let i = 0; i < files.length; i++) {
                    const file = files[i];
                    const fileReader = new FileReader();
                    fileReader.onload = (ev) => {
                      if (fileReader.readyState === 2) {
                        setPhotos((prevPhotos) => [
                          ...prevPhotos,
                          fileReader.result,
                        ]);
                        setPhotos((prevPhotos) =>
                          prevPhotos.filter((word, idx) => {
                            return prevPhotos.indexOf(word) === idx;
                          })
                        );
                      }
                    };

                    fileReader.readAsDataURL(file);
                  }
                  for (let i = 0; i < files.length; i++) {
                    const file = files[i];

                    const fileReader = new FileReader();
                    fileReader.fileName = file.name;
                    fileReader.onload = (ev) => {
                      if (fileReader.readyState === 2) {
                        setPhotoNames((prevNames) => [
                          ...prevNames,
                          ev.target.fileName,
                        ]);
                        setPhotoNames((prevNames) =>
                          prevNames.filter((word, idx) => {
                            return prevNames.indexOf(word) === idx;
                          })
                        );
                        console.log("file result", ev.target.fileName);
                      }
                    };

                    fileReader.readAsText(file);
                  }
                }}
              />
            </label> */}
          </li>
          {/* <PhotosList photos={photos} photoNames={photoNames} /> */}
          <div className="submit-cont">
            <div>
              <button disabled={firstName.length === 0}>Submit</button>
              <Toaster
                toastOptions={{
                  className: "toaster-submit-confirmation",
                }}
              />
            </div>
            <div className="error-cont">
              <Alert severity="error" className="error-text">
                Error Info goes here
              </Alert>
            </div>
          </div>
        </ul>
      </form>
    </Box>
  );
};

export default Contact_Us_Page;
