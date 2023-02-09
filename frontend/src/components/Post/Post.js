import { useEffect, useState } from "react";
import Body from "../Body/Body";
import Image from "../Image/Image";
import Introduction from "../Introduction/Introduction";
import Subject from "../Subject/Subject";
import Title from "../Title/Title";
import Vote from "../Vote/Vote";
import "./Post.css";

const Post = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://127.0.0.1:8888/new/1");
      const value = await res.json();

      setData(value.data);
    };

    getData();
  }, []);

  console.log(data);
  return (
    <article className="post-article">
      <Title title={data.title} />
      <Introduction introduction={data.introduction} />
      <Image image={data.image} />
      <Body body={data.body} />
      <Subject subject={data.subject} />
      <Vote vote={data.upVote} />
    </article>
  );
};

export default Post;
