import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What exactly is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content:
      "React is a very popular and widely used JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "you use react by creating components",
  },
];
export default () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown />
    </div>
  );
};
