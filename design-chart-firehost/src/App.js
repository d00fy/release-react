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

//----------------スライダー関連
const useStyles = makeStyles(theme => ({
  root: {
    width: 200,
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
  border: "1px solid grey",
  borderRadius: "3px",
  width: "300px",
  height: "200px",
  margin: "auto",
  marginBottom: "20px",
  paddingTop: "10px"
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
    "https://firebasestorage.googleapis.com/v0/b/design-chart.appspot.com/o/test%2F81?alt=media&token=8b63449b-25b2-4700-91b9-3d43778bd9f9"
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
          content={"https://d00fy.github.io/hosting-react/"}
        />
        <meta property="og:type" content={"website"} />
        <meta property="og:site_name" content={"UIUX"} />
        <meta property="og:image" content={twitter} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={`@uchibashi`} />
      </Helmet>
      <div className="App">
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

        {/* //--------------------- スライダー関連*/}
        {/* <div style={centerStyle}> */}
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
            url="https://d00fy.github.io/hosting-react/#本物のデザイナー"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </MediaQuery>
        {/* メディアクエリ分岐 */}
        <MediaQuery query="(max-width: 767px)">
          <div style={divMinStyle}>
            <div className={classes.root}>
              <label>
                Name:
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
          <Canvas svg={svg} name={name} val={handleUrl} />
          <TwitterShareButton
            title="6個の項目を入力し、デザイナーとしてのあなたの適性を自己評価！"
            via="uchibashi"
            url="https://d00fy.github.io/hosting-react/#本物のデザイナー"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </MediaQuery>
      </div>
    </>
  );
}

export default App;
