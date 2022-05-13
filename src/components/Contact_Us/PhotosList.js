import React, { useState, useEffect } from "react";
import { Reorder, AnimatePresence, motion } from "framer-motion";
import { X } from "react-feather";

const PhotosList = ({ photos, photoNames }) => {
  const [items, setItems] = useState([]);
  const [attachments, setAttachments] = useState([]);
  const [attachmentCallNeeded, setAttachmentCallNeeded] = useState(true);

  useEffect(
    (prevPhotos) => {
      setItems(photos);

      if (prevPhotos) {
        if (prevPhotos.length !== photos.length) {
          setAttachmentCallNeeded(true);
        }
      }

      console.log("photos", photos);
    },
    [photos]
  );

  useEffect(() => {
    console.log("photoNames", photoNames);
  }, [photoNames]);

  useEffect(() => {
    console.log("attachments", attachments);
  }, [attachments]);

  const ajustAttachments = (photos, photoNames) => {
    console.log("attachment func called");
    for (let i = 0; i < photos.length; i++) {
      setAttachments((prevAttachs) => [
        ...prevAttachs,
        { url: photos[i], name: photoNames[i] },
      ]);
    }

    setAttachmentCallNeeded(false);
  };

  if (attachmentCallNeeded) {
    ajustAttachments(photos, photoNames);
  }

  return (
    <Reorder.Group
      values={items}
      onReorder={setItems}
      className="photoList-cont"
    >
      <AnimatePresence>
        {items.map((item, idx) => {
          return (
            <Reorder.Item
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
              key={item}
              value={item}
              whileDrag={{
                backgroundColor: "#e3e3e3",
                boxShadow: "5px 5px 10px rgba(0,0,0,0.3)",
              }}
              className="single-photo-cont"
              style={{ backgroundImage: `url("${item}")`, margin: 10 }}
              drag
            >
              <motion.button
                type="button"
                onPointerDown={(event) => {
                  event.stopPropagation();
                  const updatedItems = items.filter((i) => i !== item);
                  setItems(updatedItems);
                }}
                initial={false}
                animate={{ backgroundColor: "#e3e3e3" }}
                className="x"
              >
                <X />
              </motion.button>
              <div key={idx} className="photo-name">
                photo name goes here
              </div>
            </Reorder.Item>
          );
        })}
      </AnimatePresence>
    </Reorder.Group>
  );
};

export default PhotosList;
