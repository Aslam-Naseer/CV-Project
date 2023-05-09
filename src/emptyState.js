const exampleState = {
  personalInfo: {
    name: "John Doe",
    title: "Senior Web Developer",
    phone: "123456789",
    mail: "john.doe@gmail.com",
    place: "Mumbai, India",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.",
  },
  education: [
    {
      university: "Engineering College, Pune",
      city: "Pune, India",
      degree: "B-Tech",
      subject: "CSE",
      from: "2014",
      to: "2018",
    },
  ],
  experience: [
    {
      position: "Web Developer",
      company: "server z inc",
      city: "Dubai, UAE",
      from: "2022",
      to: "Present",
    },
    {
      position: "Software Engineer",
      company: "A software company",
      city: "Banglore, India",
      from: "2018",
      to: "2022",
    },
  ],
};

const emptyState = {
  personalInfo: {
    name: "",
    title: "",
    phone: "",
    mail: "",
    place: "",
    about: "",
  },
  education: [
    {
      university: "",
      city: "",
      degree: "",
      from: "",
      to: "",
    },
  ],
  experience: [
    {
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    },
  ],
};

const states = { emptyState, exampleState };

export default states;
