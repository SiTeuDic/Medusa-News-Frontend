import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { downVotePostService, upVotePostService } from "../Services";

const useVote = (id, vote) => {
  const initialValue = parseInt(vote) ?? 0;

  const [currentVote, setCurrentVote] = useState(initialValue);
  const [upVote, setupVote] = useState(initialValue);
  const [downVote, setDownVote] = useState(initialValue);
  const [btnActive, setBtnActive] = useState();

  const { token, user } = useContext(AuthContext);

  const handleLikeClick = () => {
    if (btnActive === "none") {
      setupVote(upVote + 1);
      setBtnActive("like");
      return;
    }

    if (btnActive === "like") {
      setupVote(upVote - 1);
      setBtnActive("none");
      return;
    }

    if (btnActive === "dislike") {
      setupVote(upVote + 1);
      setDownVote(downVote - 1);
      setBtnActive("like");
    }
  };

  const handleDisikeClick = () => {
    if (btnActive === "none") {
      setDownVote(downVote + 1);
      setBtnActive("dislike");
      return;
    }

    if (btnActive === "dislike") {
      setDownVote(downVote - 1);
      setBtnActive("none");
      return;
    }

    if (btnActive === "like") {
      setDownVote(downVote + 1);
      setupVote(upVote - 1);
      setBtnActive("dislike");
    }
  };
  return {
    user,
    handleLikeClick,
    handleDisikeClick,
    upVote,
  };
};

export default useVote;
