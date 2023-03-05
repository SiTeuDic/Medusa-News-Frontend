import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  checkVoteUserServer,
  downVotePostService,
  upVotePostService,
} from "../Services";

const useVote = (idPost, vote) => {
  const initialValue = !isNaN(parseInt(vote)) ? parseInt(vote) : 0;

  const [upVote, setupVote] = useState(initialValue);

  const [btnActive, setBtnActive] = useState(false);

  const { token, user } = useContext(AuthContext);

  const handleLikeClick = () => {
    if (!btnActive) {
      setupVote(upVote + 1);
      upVotePostService(idPost, token);
      setBtnActive(true);
      return;
    }

    if (btnActive) {
      setupVote(upVote - 1);
      downVotePostService(idPost, token);
      setBtnActive(false);
      return;
    }
  };

  useEffect(() => {
    const getcheckvotes = async () => {
      /* console.log("userID", user.id); */
      const voteCheked = await checkVoteUserServer(idPost, user.id);
      if (voteCheked.vote) {
        setBtnActive(true);
      }
    };
    if (user) {
      getcheckvotes();
    }
  }, [idPost, user]);
  //si el id de del user esta en los votos de la noticia, poner el estado a activo

  //ids de usuarios que, votaron la noticia

  return {
    user,
    handleLikeClick,
    btnActive,
    upVote,
  };
};

export default useVote;
