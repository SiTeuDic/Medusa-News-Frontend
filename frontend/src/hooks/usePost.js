import { useEffect, useState } from "react";
import {
  getPostsBySubjectService,
  getPostsService,
  getPostByUser,
} from "../Services";

const usePosts = (subject, userId) => {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        const data = await getPostsService();

        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    const loadPostBySubject = async (subject) => {
      try {
        setLoading(true);
        const data = await getPostsBySubjectService(subject);
        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const loadPostByUser = async (userId) => {
      try {
        setLoading(true);
        const data = await getPostByUser(userId);

        setPost(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (subject) {
      loadPostBySubject(subject);
    } else if (userId) {
      loadPostByUser(userId);
    } else {
      loadPost();
    }
  }, [subject, userId]);
  const removePost = (id) => {
    setPost(posts.filter((post) => post.id !== id));
  };
  return { posts, error, loading, removePost };
};

export default usePosts;
