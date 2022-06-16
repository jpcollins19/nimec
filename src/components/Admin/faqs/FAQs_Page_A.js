import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formatFirstLettertoUpperCase } from "../../../store";
import { useHistory } from "react-router-dom";
import { updateFaq, deleteFaq } from "../../../store";
import Box from "@mui/material/Box";
import FAQ_Listing from "./FAQ_Listing";
import FAQ_Action from "./FAQ_Action";
import "./FAQs_A.css";

const FAQs_Page_A = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [action, setAction] = useState(null);
  const [currentFAQ, setCurrentFAQ] = useState(null);

  const [updateReady, setUpdateReady] = useState(false);
  const [editLinkChecked, setEditLinkChecked] = useState(false);
  const [order, setOrder] = useState(null);
  const [Q, setQ] = useState(null);
  const [A, setA] = useState(null);
  const [linkNeeded, setLinkNeeded] = useState(null);
  const [link, setLink] = useState(null);
  const [linkWord, setLinkWord] = useState(null);
  const [error, setError] = useState(null);

  const [updateNeeded, setUpdateNeeded] = useState(false);
  const [deleteNeeded, setDeleteNeeded] = useState(false);
  const [deleteConfirmed, setDeleteConfirmed] = useState(false);

  const faqs = useSelector((state) => state.faqs).sort(
    (a, b) => a.order - b.order
  );

  const edit = (faq) => {
    setAction("Edit");
    setCurrentFAQ(faq);
  };

  const onChange = (input, value) => {
    setUpdateReady(true);
    setError(null);
    const set = eval(`set${formatFirstLettertoUpperCase(input)}`);
    set(value);
  };

  useEffect(() => {
    if (currentFAQ !== null) {
      setOrder(currentFAQ.order);
      setQ(currentFAQ.Q);
      setA(currentFAQ.A);
      setLinkNeeded(currentFAQ.linkNeeded);
      setLink(currentFAQ.link);
      setLinkWord(currentFAQ.linkWord);

      currentFAQ.linkNeeded
        ? setEditLinkChecked(true)
        : setEditLinkChecked(false);

      setUpdateNeeded(false);
      setDeleteNeeded(false);
      setDeleteConfirmed(false);
    }
  }, [currentFAQ]);

  const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
      if (updateNeeded) {
        if (order.length === 0) {
          return setError("Invalid Order entry");
        }

        if (Q.length === 0) {
          return setError("Invalid Q entry");
        }

        if (A.length === 0) {
          return setError("Invalid A entry");
        }

        if (editLinkChecked) {
          if (link === null || link.length === 0) {
            return setError("Invalid Link entry");
          }

          if (linkWord === null || linkWord.length === 0) {
            return setError("Invalid LinkWord entry");
          }
        }

        const obj = {
          id: currentFAQ.id,
          order: Number(order),
          Q,
          A,
        };

        if (editLinkChecked) {
          (obj.linkNeeded = true), (obj.link = link), (obj.linkWord = linkWord);
        } else {
          obj.linkNeeded = false;
        }

        dispatch(updateFaq(obj, history));
      }

      if (deleteConfirmed) {
        dispatch(deleteFaq({ id: currentFAQ.id }, history));
      }
    } catch (err) {
      console.log(err);
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
      className="faq-page-a"
    >
      <div className="header-admin">FAQs - Admin</div>
      <button
        className="add-butt"
        disabled={action === "Add"}
        onClick={() => {
          setAction("Add");
          setCurrentFAQ(null);
          setUpdateReady(false);
          setEditLinkChecked(false);
          setOrder(null);
          setQ(null);
          setA(null);
          setLinkNeeded(null);
          setLink(null);
          setLinkWord(null);
          setError(null);
          setDeleteNeeded(false);
        }}
      >
        Add FAQ
      </button>
      <FAQ_Listing faqs={faqs} edit={edit} currentFAQ={currentFAQ} />
      {action && (
        <FAQ_Action
          action={action}
          currentFAQ={currentFAQ}
          onChange={onChange}
          updateReady={updateReady}
          order={order}
          Q={Q}
          A={A}
          error={error}
          onSubmit={onSubmit}
          editLinkChecked={editLinkChecked}
          setEditLinkChecked={setEditLinkChecked}
          setUpdateNeeded={setUpdateNeeded}
          setDeleteNeeded={setDeleteNeeded}
          deleteNeeded={deleteNeeded}
          setDeleteConfirmed={setDeleteConfirmed}
        />
      )}
    </Box>
  );
};

export default FAQs_Page_A;
