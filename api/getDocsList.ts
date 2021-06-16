import fs, { readFileSync } from "fs";
import matter from "gray-matter";

export default (req, res) => {
  const testFolder = "documentation";

  const files = [];

  fs.readdirSync(testFolder).forEach((file) => {
    const fileData = readFileSync(`documentation/${file}`, "utf8");

    const { data } = matter(fileData);

    files.push({ ...data });
  });

  res.send(files);
};
