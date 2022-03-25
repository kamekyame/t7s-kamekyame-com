import { Box, Tooltip } from "@mui/material";

import Title from "../../src/title";
import Link from "../../src/link";

const events: {
  date?: string;
  title: string;
  description?: string;
  supplement?: string;
  source?: string;
}[] = [
  {
    date: "2027~2030",
    title: "セブンスシスターズ 結成",
    supplement: "七咲二コルが中学生の時にセブンスシスターズが結成された。",
    source: "EPISODE 0.7 - Melt in the Snow- 後編",
  },
  {
    date: "2030-07-07",
    title: "セブンスストライク",
    description:
      "第七新東京区全域で停電が起こり、その夜にセブンスシスターズが起こした事件。これを機にセブンスシスターズが世に広まる。",
    source: "EPISODE.4U-006 第4話 ロスト・アイドル 後編",
  },
  {
    date: "2031-11",
    title: "セブンスシスターズ ライブ開催",
    supplement: "クリスマスライブ1ヶ月前にもライブを開催した。",
    source: "EPISODE 0.7 - Melt in the Snow- 前編",
  },
  {
    date: "2031-12-24",
    title: "セブンスシスターズ 全世界同時生中継 クリスマス野外ライブ 開催",
    supplement: "ライブ直前に羽生田ミトの祖母が亡くなった。",
    source: "EPISODE 0.7 - Melt in the Snow- 後編",
  },
  {
    date: "2032-07-07",
    title: "セブンスシスターズ ラストライブ in セブンスドーム",
    description:
      "セブンスシスターズの引退ライブ。セブンスドーム上空にスカイドームも設置したネオ・セブンスドーム（別名：Tokyoスカイドーム）で開催された。",
    source: "EPISODE 0.7 - Melt in the Snow- 後編",
  },
  {
    date: "2034",
    title: "ナナスタ 2代目支配人 任命",
    description:
      "次世代アイドル劇場型スタジオ【スリーセブン】（通称：ナナスタ）の初代支配人から、2代目支配人が任命された。同時に、マネージャーの「六咲コニー」も現れる。",
    source: "EPISODE.1.0-000 第0話 始まりの日",
  },
  {
    title: "春日部ハル 加入",
    supplement: "当初はナナシス清掃スタッフとして内定が決まっていた。",
    source: "EPISODE.1.0-001 ノッキン・オン・セブンス・ドア",
  },
  {
    title: "天堂寺ムスビ 加入",
    source: "EPISODE.1.0-002 スクール・オブ・アイドル",
  },
  {
    title: "角森ロナ 加入",
    source: "EPISODE.1.0-003 オール・アバウト・マイ・アイドル",
  },
  {
    title: "野々原ヒメ 加入",
    source: "EPISODE.1.0-004 プリンセス・シタマチ",
  },
  {
    title: "芹沢モモカ 加入",
    source: "EPISODE.1.0-005 モモカ・ゴー・ホーム！",
  },
  {
    title: "臼田スミレ 加入",
    source: "EPISODE.1.0-006 ギャル・ライク・イット・ホット",
  },
  {
    title: "神城スイ 加入",
    source: "EPISODE.1.0-007 マイ・プリンス・フォーエバー",
  },
  {
    title: "久遠寺シズカ 加入",
    source: "EPISODE.1.0-008 ザ・タレンテッド・ナデシコ",
  },
  {
    title: "アレサンドラ・スース 加入",
    source: "EPISODE.1.0-009 ザ・ニンフ・カムズ・トゥ・ナナスタ",
  },
  {
    title: "晴海サワラ・カジカ・シンジュ 加入",
    source: "EPISODE.1.0-010 ザ・スリー・リトル・マーメイド",
  },
  {
    title: "4Uと777☆SISTERSが出会う",
    description: "角森ロナ誘拐騒ぎや、対決、ライブへの乱入などが起きた。",
    source: "EPISODE.4U",
  },
  // {
  //   title: "4Uによる角森ロナ誘拐騒ぎ",
  //   description: "7thコーストにて4Uとの対決で777☆SISTERSが勝つ。",
  //   source: "EPISODE.4U-000 PROLOGUE ～九条ウメ～",
  // },
  // {
  //   title: "4Uとの再対決",
  //   description:
  //     "7thコーストにて再度4Uとの対決を行い、またも777☆SISTERSが勝つ。",
  //   source: "EPISODE.4U-000 PROLOGUE ～鰐淵エモコ～",
  // },
  // {
  //   title: "サンボンリボンのライブで4Uと対決",
  //   description:
  //     "イベントを邪魔しに来ていた4Uをステージに上げ、晴海サワラがサンボンリボンの解散を賭けて対決を申し込む。",
  //   source: "EPISODE.4U-005 第3話",
  // },
  // { title: "ナナスタの配信ライブに4Uが乱入", source: "EPISODE.4U-007 第5話" },
  { title: "KARAKURIと777☆SISTERSが出会う", source: "EPISODE.KARAKURI" },
  {
    title: "WITCH NUMBER 4 結成",
    description:
      "春日部ハル、角森ロナ、野々原ヒメ、芹沢モモカによるユニット「WITCH NUMBER 4」が結成された。",
    source: "EPISODE.2.0-002 始動！WITCH NUMBER 4！",
  },
  /*{
    title: "SiSH 結成",
    description:
      "臼田スミレ、神城スイ、久遠寺シズカによるユニット「SiSH」が結成された。",
    source: "EPISODE 2.0-003 シー・イズ・ソー......？",
  },
  {
    title: "NI+CORA 結成",
    description:
      "天堂寺ムスビ、アレサンドラ・スースによるユニット「NI+CORA」が結成された。",
    source: "EPISODE 2.0-044 トゥルーネーム・オブ・マイ・シスター",
  },*/
  {
    title: "Ci+LUS 結成",
    description:
      "打倒NI+CORAを目指して、玉坂マコト、折笠アユムによるナナスタ2つ目の2人組ユニット「Ci+LUS」が結成された。",
    source: "EPISODE 3.0-011 シトラスは片想い",
  },
  {
    title: "CASQUETTE'S 結成",
    description:
      "川澄シサラ、浅見ミワコ、鳳チャチャ、二川ミミによるユニット「CASQUETTE'S」が結成された。",
    source: "EPISODE 3.0-013 Take Off, CASQUETTE'S",
  },
  {
    title: "七花少女 結成",
    description:
      "白鳥トモエ、前園リシュリ、逢原ミウ、夜舞サヲリ、榎並マドカ、雲巻モナカ、シャオ・ヘイフォンによる7人組ユニット「七花少女」が結成された。",
    source: "EPISODE 3.0-014 咲け、花のように",
  },
  {
    title: "桂木カヅミ ソロデビュー",
    description: "デビュー曲は「恋セヨ乙女」",
    supplement: "現実でのデビュー日（ゲーム内先行リリース日）は2021年8月26日。",
    source: "EPISODE 3.0-015 恋とはどんなものですか？",
  },
  {
    title: "ジェダ・ダイヤモンド ソロデビュー",
    description: "デビュー曲は「Striking Diamond」",
    supplement: "現実でのデビュー日（ゲーム内先行リリース日）は2022年1月25日。",
    source: "EPISODE 3.0-016 ダイヤモンド・ファミリー",
  },
];

/* ユニット結成順
1-777☆SISTERS
2-NI+CORA（初めてのナナスタ正式2人組ユニット。限定ユニットのはる☆じかとどっちが先かは不明）
2-Le☆S☆Ca
3-QOP
4-Ci+LUS（NI+CORAとはる☆じかの後）
5-CASQUETTE'S
6-七花少女


*/

export default function Page() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mb: 3,
      }}
    >
      <Title name="Tokyo 7thでの出来事" />
      <Box component="h1">Tokyo 7thでの出来事</Box>
      <Box sx={{ m: 2 }}>
        Tokyo
        7th（ナナシス内での世界線）で起きた出来事について時系列でまとめています。
        <br />
        各事象をマウスホバー（PC）またはホールド（スマホ）で出典元（エピソード名等）が確認できます。
        <br />
        各ユニットの結成順序、2043年、2053年についての情報がまだまだ足りていないので、すずとものTwitter
        DM（<Link href="https://twitter.com/SuzuTomo2001">@SuzuTomo2001</Link>
        ）まで情報提供お願いしますm(__)m
        <br />
        その際は、出典元となるエピソードやホロコンのメールなども教えていただけると助かります。
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "max-content 2em 1fr",
          gridTemplateRows: `repeat(${events.length}, max-content)`,
          m: 1,
          "& .title": {
            pt: "0.25em",
            height: "min-content", //"2em",
            minHeight: "2em",
            display: "flex",
            // alignItems: "center",
          },
        }}
      >
        <Box
          sx={{
            gridColumn: "2",
            gridRow: "1 / -1",
            backgroundColor: (t) => t.palette.primary.main,
            width: "3px",
            mx: "auto",
            // mx: 2,
            // p: "0 !important",
          }}
        ></Box>

        {events.map((event, i) => (
          <>
            {event.date && (
              <Box sx={{ gridColumn: "1", gridRow: i + 1 }} className="title">
                {event.date}
              </Box>
            )}
            <Box
              sx={{
                gridColumn: "2",
                gridRow: i + 1,
                justifyContent: "center",
                alignItems: "center",
                color: "#ff87ff",
                p: "0 !important",
              }}
              className="title"
            >
              <Box
                sx={{
                  width: "0.7em",
                  height: "0.7em",
                  backgroundColor: "#ff87ff",
                  borderRadius: "100%",
                }}
              />
            </Box>
            <Tooltip title={event.source || ""} placement="bottom-start">
              <Box
                sx={{
                  gridColumn: "3",
                  gridRow: i + 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <Box
                  sx={{
                    fontWeight: "bold",
                  }}
                  className="title"
                >
                  {event.title}
                </Box>
                {event.description && (
                  <Box sx={{ fontSize: "0.8em", my: 1, color: "#444" }}>
                    {event.description}
                  </Box>
                )}
                {event.supplement && (
                  <Box sx={{ fontSize: "0.5em", my: 0.5, color: "#444" }}>
                    NOTE : {event.supplement}
                  </Box>
                )}
              </Box>
            </Tooltip>
          </>
        ))}
      </Box>
    </Box>
  );
}
