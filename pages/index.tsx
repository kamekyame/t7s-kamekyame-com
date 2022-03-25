import type { NextPage } from "next";
import { Box } from "@mui/material";

import Title from "../src/title";
import Link from "../src/link";

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Title name="Top" />
      <Box component="h1">すずとものブログ</Box>
      <Box component="h2">～ナナシス編～</Box>
      <Box>
        味気ないですがとりあえずナナシス布教用の「すずとものブログ～ナナシス編～」を作ってみました。
        <br />
        まずは手始めにTokyo 7thでの出来事をまとめているので見ていってください。
      </Box>
      <Box
        sx={{
          m: 3,
          p: 3,
          width: "90%",
          maxWidth: "1000px",
          border: "2px solid",
          borderColor: (t) => t.palette.primary.main,
          borderRadius: "0.5em",
        }}
      >
        <Box component="h3" sx={{ m: 1 }}>
          {" "}
          Contents
        </Box>
        <Box>
          <Box>
            <Link href="/history/tokyo-7th">Tokyo 7thでの出来事</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
