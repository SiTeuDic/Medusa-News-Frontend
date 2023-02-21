import useTimeAgo from "../../hooks/useTimeAgo";

const RegistredAt = ({ date }) => {
  const timeAgo = useTimeAgo(date);

  return <p className="regitredAtP"> Se unió a la comunidad {timeAgo}</p>;
};

export default RegistredAt;
