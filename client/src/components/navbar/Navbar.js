import React from "react";
import Link from "../link/Link";
import { NavGroup } from "./style";

const links = [
  { id: 1, to: "/", name: "Home" },
  { id: 2, to: "/movies", name: "Movies" },
  {
    id: 3,
    to: "/books",
    name: "Books",
  },
  { id: 4, to: "/songs", name: "Songs" },
  { id: 5, to: "/articles", name: "Articles" },
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
