import React, { useState, useEffect } from "react";
import {
  Reorder,
  AnimatePresence,
  useDragControls,
  motion,
} from "framer-motion";
import { X } from "react-feather";

const PhotosList = ({ photos }) => {
  const controls = useDragControls();
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(photos);
  }, [photos]);

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
                className="kelly"
              >
                <X />
              </motion.button>
            </Reorder.Item>
          );
        })}
      </AnimatePresence>
    </Reorder.Group>
  );
};

export default PhotosList;
