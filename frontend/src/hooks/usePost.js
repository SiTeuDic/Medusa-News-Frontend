import { useEffect, useState } from "react";
import { getPostsBySubjectService, getPostsService } from "../Services";

const usePosts = (subject) => {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        const data = await getPostsService();
        console.log("[usePost]:", data);
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
    if (subject) {
      loadPostBySubject(subject);
    } else {
      loadPost();
    }
  }, [subject]);

  return { posts, error, loading };
};

export default usePosts;
