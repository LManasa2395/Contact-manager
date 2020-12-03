import uuid from "uuid/v4";
export const initialContacts = [
  {
    id: uuid(),
    firstName: "Kevin",
    lastName: "Gunj",
    email: "gunj.kevin@gmail.com",
    numbers: [{ id: `${uuid()}`, type: "Other", num: 9910210211 }],
  },
  {
    id: uuid(),
    firstName: "Aadya",
    lastName: "Gupta",
    email: "aadhya.g@gmail.com",
    numbers: [
      { id: `${uuid()}`, type: "Home", num: 9910210211 },
      { id: `${uuid()}`, type: "Mobile", num: 9912340076 },
    ],
  },
  {
    id: uuid(),
    firstName: "Ravi",
    lastName: "Kumar",
    email: "",
    numbers: [
      { id: `${uuid()}`, type: "Home", num: 9910210211 },
      { id: `${uuid()}`, type: "Mobile", num: 8384655837 },
      { id: `${uuid()}`, type: "Other", num: 7294673928 },
    ],
  },
];
