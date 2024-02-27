//import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import { StarredNew1Pic, StarredNew2Pic, StarredNew3Pic } from "../assets/";

const thenews = [
  {
    id: 1,
    title: "Retrieving Retro PCs",
    content: "Welcome to learning React!",
    picture: { StarredNew1Pic },
  },
  {
    id: 2,
    title: "Top 10 Laptops of 2022",
    content: "You can install React from npm.",
    picture: { StarredNew2Pic },
  },
  {
    id: 3,
    title: "The Growth of Gaming",
    content: "Can install React from npm.",
    picture: { StarredNew3Pic },
  },
];

export default function StarredNews() {
  //let numb = 1;
  const listNews = thenews.map((thenew) => (
    <Grid container md={4}>
      <Grid md={4}>
        <img src="" alt={thenew.id} />
      </Grid>
      <Grid md={8}>
        <h3>{thenew.id}</h3>
        <h3>{thenew.title}</h3>
        <p>{thenew.content}</p>
      </Grid>
    </Grid>
  ));

  return (
    <section>
      <Grid container>{listNews}</Grid>
    </section>
  );
}

//function getNews() {
//  const titles = [
//    "Retrieving Retro PCs",
//    "Top 10 Laptops of 2022",
//    "The Growth of Gaming",
//  ];
//
//  return titles;
//}
