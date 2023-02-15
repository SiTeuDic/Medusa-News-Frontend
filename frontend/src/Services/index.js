export const registerUserService = async ({ user_name, email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/register`, {
    method: "POST",
    body: JSON.stringify({ user_name, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const logInUserService = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getMyDataService = async (token) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getUserDataService = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user/${id}`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getPostsService = async () => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const postNewService = async ({
  title,
  introduction,
  body,
  subject,
  image,
  token,
}) => {
  const formdata = new FormData();
  formdata.append("title", title);
  formdata.append("introduction", introduction);
  formdata.append("body", body);
  formdata.append("subject", subject);
  formdata.append("image", image);
  console.log("[postNewService]: ", image);
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/`, {
    method: "POST",
    body: formdata,

    headers: {
      Authorization: token,
    },
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const upVotePostService = async (id, token) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/${id}/up`, {
    method: "PUT",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const downVotePostService = async (id, token) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/${id}/donw`, {
    method: "PUT",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getPostsBySubjectService = async (subject) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/${subject}`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};
