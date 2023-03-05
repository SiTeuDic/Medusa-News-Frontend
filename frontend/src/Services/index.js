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

export const getSinglePostService = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/new/${id}`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const postNewService = async (data, token) => {
  const formdata = new FormData();
  formdata.append("title", data.title);
  formdata.append("introduction", data.introduction);
  formdata.append("body", data.body);
  formdata.append("subject", data.subject);
  formdata.append("image", data.image);
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

export const EditPostService = async (data, token, id) => {
  const formdata = new FormData();
  formdata.append("title", data.title);
  formdata.append("image", data.image);
  formdata.append("introduction", data.introduction);
  formdata.append("body", data.body);
  formdata.append("subject", data.subject);
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/new/${id}`, {
    method: "PUT",
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
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/${id}/down`, {
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
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/subject/${subject}`
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const checkVoteUserServer = async (postId, userId) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/infoVotes/${postId}/${userId}`
  );
  const json = await response.json();

  return json;
};

export const getPostByUser = async (userId) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/newUser/${userId}`
  );
  const json = await response.json();

  return json;
};

export const updateProfileService = async (
  userId,
  name,
  bio,
  image,
  newPassword,
  confirmPassword,
  token
) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("bio", bio);
  formData.append("image", image);
  formData.append("password1", newPassword);
  formData.append("password2", confirmPassword);

  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/editProfile/${userId}`,
    {
      method: "PUT",
      body: formData,
      headers: {
        authorization: token,
      },
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const responseData = await response.json();
  return responseData.data;
};

export const deletePostServer = async (postId, token) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/new/${postId}`,
    {
      method: "DELETE",

      headers: {
        authorization: token,
      },
    }
  );

  const json = await response.json();

  return json;
};
