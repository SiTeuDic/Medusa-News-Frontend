import useFetch from "../../hooks/useFetch";
import PostCard from "../PostCard/PostCard";
import "./PostList.css";

const PostList = () => {
  const data = useFetch("http://127.0.0.1:8888/");

  return (
    <main className="mainPostList">
      <ul>
        {data &&
          data.data.map((post) => {
            return (
              <li key={post.id}>
                <PostCard
                  title={post.title}
                  introduction={post.introduction}
                  image={post.image}
                  body={post.body}
                  subject={post.subject}
                  vote={post.upVote}
                />
              </li>
            );
          })}
      </ul>
    </main>
  );
};

export default PostList;
