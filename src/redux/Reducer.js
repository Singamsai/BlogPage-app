const initialdata = {
  homedata: [
    {
      image:
        "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?cs=srgb&dl=apple-mouse-artificial-flowers-blurred-background-1229861.jpg&fm=jpg",
      title: "News App using ReactJS (Parsing XML RSS feed to JSON)",
      description:
        "News App using ReactJS (parsing XML to JSON) Photo by Christina Morillo from Pexels Live Demo: ",
      id: "Aug 12, 2020 04:32",
    },
    {
      image:
        "https://tse2.mm.bing.net/th?id=OIP.EOnWFfOtpAmf3krRmK3tZQHaE7&pid=Api&P=0",
      title: "Medium Like Blogging App Using Angular 9 and Firebase",
      description:
        "Creating a Medium-Like Blog App Using Angular 9 and  Firebsae Photo by Miguel A. Padrinan from pexelslive Demo:",
      id: "Aug 12, 2020 04:35",
    },
    {
      image:
        "https://cdn.mobilesyrup.com/wp-content/uploads/2020/03/covid-19-tracker-scaled.jpg",
      title: "Covid-19 Tracker (Statistics) app Using Angular",
      description:
        "Covid-19 Tracker (Statistics) app Using Angular Dark Mode Demo Introduction: Everyone is aware",
      id: "Aug 12, 2020 04:40",
    },
    {
      image:
        "https://tse2.mm.bing.net/th?id=OIP.EOnWFfOtpAmf3krRmK3tZQHaE7&pid=Api&P=0",
      title: "Medium Like Blogging App Using Angular 9 and Firebase",
      description:
        "Creating a Medium-Like Blog App Using Angular 9 and  Firebsae Photo by Miguel A. Padrinan from pexelslive Demo:",
      id: "Aug 12, 2020 04:45",
    },
  ],
  loginCred: {
    username: "singam",
    password: "12345",
  },
  userdata: [],
  readblog: [],
  setcheck: "",
};

const reducer = (storedata = initialdata, Action) => {
  if (Action.type === "logincheck") {
    return {
      ...storedata,
      check: Action.check,
      setcheck: Action.setcheck,
    };
  } else if (Action.type === "login") {
    return {
      ...storedata,
      userdata: Action.userdata,
    };
  } else if (Action.type === "addpost") {
    return {
      ...storedata,
      homedata: [...storedata.homedata, Action.newdata],
    };
  } else if (Action.type === "readpost") {
    return {
      ...storedata,
      readblog: Action.blog,
    };
  }
  return storedata;
};

export default reducer;
