import useFetch from "../../hooks/useFetch";
import PostCard from "../PostCard/PostCard";
import "./PostList.css";

const PostList = () => {
  const data = useFetch("http://127.0.0.1:8888/");
  console.log("[PostList]: ", data);
  return (
    <main className="mainPostList">
      <ul>
        {data &&
          data.data.map((post) => {
            return (
              <li key={post.id}>
                <PostCard
                  title={post.title}
                  id={post.id}
                  introduction={post.introduction}
                  image={post.image}
                  body={post.body}
                  subject={post.subject}
                  userId={post.user_id}
                  vote={post.upVote}
                  date={post.create_date}
                  imgName={post.image}
                />
              </li>
            );
          })}
      </ul>
    </main>
  );
};

export default PostList;
