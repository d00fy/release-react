import "./App.css";
import React, { ReactDOM, useState, useEffect } from "react";

import { Helmet } from "react-helmet";
import Ogp from "./meta";
import TwoLevelPieChart from "./Chart";
import Canvas from "./Canvas";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
// import saveSvgAsPng from "../node_modules/save-svg-as-png/lib/saveSvgAsPng";
import { TwitterShareButton, TwitterIcon } from "react-share";
import MediaQuery from "react-responsive";

import ElevateAppBar from "./parts/elevateAppBar";
import TextField from "@material-ui/core/TextField";

//----------------スライダー関連
const useStyles = makeStyles(theme => ({
  root: {
    width: 160,
    margin: "auto"
  },
  margin: {
    height: theme.spacing(3)
  }
}));
const marks = [
  {
    value: 0
  }
];

const divStyle = {
  overflowY: "scroll",
  border: "1px solid grey",
  borderRadius: "3px",
  width: "500px",
  height: "200px",
  margin: "auto",
  marginBottom: "20px",
  paddingTop: "10px"
};

const divMinStyle = {
  overflowY: "scroll",
  width: "80%",
  height: "400px",
  margin: " auto",
  // paddingTop: "10px",
  padding: "1em 1em",
  boxSizing: "border-box",
  boxShadow: "1px 1px 5px 1px #999",
  backGroudCalor: "#FFFFFF"
};

//-------------------------------スライダー関連

function App() {
  const [eye, eyeCount] = useState(50);
  const [hand, handCount] = useState(50);
  const [head, headCount] = useState(50);
  const [mouse, mouseCount] = useState(50);
  const [leg, legCount] = useState(50);
  const [mental, mentalCount] = useState(50);
  const [name, setName] = useState("UIデザイナー");
  const [svg, setSvg] = useState("");
  const [url, setUrl] = useState("");
  const [twitter, setTwitter] = useState(
    "https://firebasestorage.googleapis.com/v0/b/design-chart.appspot.com/o/test%2F10?alt=media&token=78e37d31-502d-4792-8fe8-a27af70b4a87"
  );

  const classes = useStyles();

  const handleChange = event => {
    setName(event.target.value);
    console.log(name);
  };
  const handleSvg = sentSvg => {
    setSvg(sentSvg);
  };

  const handleUrl = sentUrl => {
    setUrl(sentUrl);
  };

  const handleTwitter = sentTwitter => {
    setTwitter(sentTwitter);
  };

  // 朱度(prevProps) {
  //   // 典型的な使い方(props を比較することを忘れないでください)
  //   if (this.state.url !== prevState.url) {
  //     handleUrl(url);
  //     console.log("走ってる")
  //   }
  // }

  useEffect(() => {
    handleUrl(url);
    // handleTwitter(twitter);
    console.log("きてる？");
  }, [twitter]);

  return (
    <>
      <Helmet>
        <meta property="og:title" content={"デザイナー自己診断書"} />
        <meta property="og:description" content={"UIUXデザイナー"} />

        <meta
          property="og:url"
          content={"https://release-react.firebaseapp.com"}
        />
        <meta property="og:type" content={"website"} />
        <meta property="og:site_name" content={"UIUX"} />
        <meta property="og:image" content={twitter} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={`@uchibashi`} />
      </Helmet>
      <div className="App">
        <ElevateAppBar />
        <TwoLevelPieChart
          id="testes"
          eye={eye}
          hand={hand}
          head={head}
          mouse={mouse}
          leg={leg}
          mental={mental}
          name={name}
          val={handleSvg}
        />
        <div
          style={{
            marginBottom: "12px"
          }}
        ></div>

        {/* //--------------------- スライダー関連*/}
        {/* <div style={centerStyle}>*/}
        <MediaQuery query="(min-width: 768px)">
          <div style={divStyle}>
            <div className={classes.root}>
              <label>
                肩書き :
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </label>

              <Typography id="discrete-slider-custom" gutterBottom>
                目：美しいものがわかる
              </Typography>
              <Slider
                defaultValue={eye}
                max={100}
                getAriaValueText={value => {
                  eyeCount(value);
                }}
                aria-labelledby="discrete-slider-custom"
                step={1}
                marks={marks}
              />
              <Typography id="discrete-slider-custom" gutterBottom>
                手：思い通りに表現できる
              </Typography>
              <Slider
                defaultValue={hand}
                max={100}
                getAriaValueText={value => {
                  handCount(value);
                }}
                aria-labelledby="discrete-slider-custom"
                step={1}
                marks={marks}
              />
              <Typography id="discrete-slider-custom" gutterBottom>
                頭：ものごとを設計できる
              </Typography>
              <Slider
                defaultValue={head}
                max={100}
                getAriaValueText={value => {
                  headCount(value);
                }}
                aria-labelledby="discrete-slider-custom"
                step={1}
                marks={marks}
              />
              <Typography id="discrete-slider-custom" gutterBottom>
                口：思ったことを伝えられる
              </Typography>
              <Slider
                defaultValue={mouse}
                max={100}
                getAriaValueText={value => {
                  mouseCount(value);
                }}
                aria-labelledby="discrete-slider-custom"
                step={1}
                marks={marks}
              />
              <Typography id="discrete-slider-custom" gutterBottom>
                足：ものごとを実行できる
              </Typography>
              <Slider
                defaultValue={leg}
                max={100}
                getAriaValueText={value => {
                  legCount(value);
                }}
                aria-labelledby="discrete-slider-custom"
                step={1}
                marks={marks}
              />
              <Typography id="discrete-slider-custom" gutterBottom>
                心：人を理解、共感できる
              </Typography>
              <Slider
                defaultValue={mental}
                max={100}
                getAriaValueText={value => {
                  mentalCount(value);
                }}
                aria-labelledby="discrete-slider-custom"
                step={1}
                marks={marks}
              />
            </div>
          </div>
          {/* </div> */}
          <Canvas
            svg={svg}
            name={name}
            val={handleUrl}
            handleTwitter={handleTwitter}
          />
          <TwitterShareButton
            title="6個の項目を入力し、デザイナーとしてのあなたの適性を自己評価！"
            via="uchibashi"
            url="https://release-react.firebaseapp.com/#本物のデザイナー"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </MediaQuery>
        {/* メディアクエリ分岐  スマホ */}
        <MediaQuery query="(max-width: 767px)">
          <div style={divMinStyle}>
            <div className={classes.root}>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  id="standard-basic"
                  label="Name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  style={{ margin: "8px" }}
                />
              </form>

              <Typography id="discrete-slider-custom" gutterBottom>
                目：美しいものを見分ける
              </Typography>
              <Slider
                defaultValue={eye}
                max={100}
                getAriaValueText={value => {
                  eyeCount(value);
                }}
                aria-labelledby="discrete-slider-custom"
                step={20}
                marks={marks}
              />
              <Typography id="discrete-slider-custom" gutterBottom>
                手：思い通りに表現できる
              </Typography>
              <Slider
                defaultValue={hand}
                max={100}
                getAriaValueText={value => {
                  handCount(value);
                }}
                aria-labelledby="discrete-slider-custom"
                step={20}
                marks={marks}
              />
              <Typography id="discrete-slider-custom" gutterBottom>
                頭：ものごとを設計できる
              </Typography>
              <Slider
                defaultValue={head}
                max={100}
                getAriaValueText={value => {
                  headCount(value);
                }}
                aria-labelledby="discrete-slider-custom"
                step={20}
                marks={marks}
              />
              <Typography id="discrete-slider-custom" gutterBottom>
                口：思った事を伝えられる
              </Typography>
              <Slider
                defaultValue={mouse}
                max={100}
                getAriaValueText={value => {
                  mouseCount(value);
                }}
                aria-labelledby="discrete-slider-custom"
                step={20}
                marks={marks}
              />
              <Typography id="discrete-slider-custom" gutterBottom>
                足：ものごとを実行できる
              </Typography>
              <Slider
                defaultValue={leg}
                max={100}
                getAriaValueText={value => {
                  legCount(value);
                }}
                aria-labelledby="discrete-slider-custom"
                step={20}
                marks={marks}
              />
              <Typography id="discrete-slider-custom" gutterBottom>
                心：人を理解、共感できる
              </Typography>
              <Slider
                defaultValue={mental}
                max={100}
                getAriaValueText={value => {
                  mentalCount(value);
                }}
                aria-labelledby="discrete-slider-custom"
                step={20}
                marks={marks}
              />
            </div>
            <Canvas svg={svg} name={name} val={handleUrl} />
          </div>
          <p style={{ fontColor: "#DCDCDC" }}>
            iOS"safari"をお使いの方は、DLできません。
            <br />
            PCかChrome/Brave等にて保存していただけると幸いです！
          </p>
          <TwitterShareButton
            style={{
              margin: 0,
              top: "auto",
              right: 20,
              bottom: 20,
              left: "auto",
              position: "fixed"
            }}
            title="6個の項目を入力し、デザイナーとしてのあなたの適性を自己評価！"
            via="uchibashi"
            url="https://release-react.firebaseapp.com/#本物のデザイナー"
          >
            <TwitterIcon size={48} round />
          </TwitterShareButton>
        </MediaQuery>
      </div>
    </>
  );
}

export default App;
