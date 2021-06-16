import { readFileSync } from "fs";
import matter from "gray-matter";

export default (req, res) => {
  const { term } = req.query;

  const fileData = readFileSync(`documentation/${term}.mdx`, "utf8");

  const { data, content } = matter(fileData);

  res.send({ data, content });
};
