import { useParams } from "react-router-dom";
import MenuUser from "../components/menuUser/menuUser";
import PostCard from "../components/PostCard/PostCard";
import SearchBySubject from "../components/SearchBySubject/SearchBySubject";
import useFetch from "../hooks/useFetch";

const SinglePostPage = () => {
  const param = useParams();
  const post = useFetch(`${process.env.REACT_APP_BACKEND}/new/${param.id}`);
  return (
    post && (
      <section className="singlePageSection">
        <PostCard post={post.data} intro={true} />
        <aside>
          <SearchBySubject />
          <MenuUser />
        </aside>
      </section>
    )
  );
};

export default SinglePostPage;
