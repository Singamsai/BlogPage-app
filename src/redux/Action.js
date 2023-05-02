export const loginCheck = (a, b) => {
  return {
    type: "logincheck",
    check: a,
    setcheck: b,
  };
};
const login = (userdata) => {
  return {
    type: "login",
    userdata: userdata,
  };
};
export const addpost = (input, sub, date, images) => {
  return {
    type: "addpost",
    newdata: {
      image: images[Math.floor(Math.random() * images.length)],
      title: input,
      description: sub,
      id: date,
    },
  };
};

export const readpost = (ele) => {
  return {
    type: "readpost",
    blog: ele,
  };
};

export default login;
