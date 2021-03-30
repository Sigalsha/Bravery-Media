import React from "react";
import Link from "../link/Link";
import { NavGroup } from "./style";

const links = [
  { id: 1, to: "/", name: "בית" },
  { id: 2, to: "/movies", name: "סרטים" },
  {
    id: 3,
    to: "/books",
    name: "ספרים",
  },
  { id: 4, to: "/songs", name: "שירים" },
  { id: 5, to: "/articles", name: "מאמרים" },
];

const Navbar = () => {
  return (
    <div>
      <NavGroup>
        {links.map((link) => {
          return <Link to={link.to} name={link.name} key={link.id}></Link>;
        })}
      </NavGroup>
    </div>
  );
};

export default Navbar;
