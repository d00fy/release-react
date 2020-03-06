import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import MediaQuery from "react-responsive";

//yarn add firebase & config.js をinitするのみ。
import firebase from "firebase";
import { firebaseConfig } from "./firebase-config";
firebase.initializeApp(firebaseConfig);

const style = {
  border: "1px solid gray",
  backgroundColor: "white",
  display: "none"
};

const btnStyle = {
  margin: "4px"
};

class Canvas extends Component {
  constructor() {
    super();
    this.state = { drawing: "" };
  }

  canvas = document.getElementById("canvas");

  getContext() {
    return this.refs.canvas.getContext("2d");
  }
  //   ctx = this.getContext();
  //   image = new Image();

  test() {
    const ctx = this.getContext();
    const image = new Image();
    image.src =
      "data:image/svg+xml;charset=utf-8;base64," +
      btoa(unescape(encodeURIComponent(this.props.svg)));

    image.onload = () => {
      // SVGデータをPNG形式に変換する
      ctx.font = "24px serif";
      ctx.textBaseline = "hanging";
      ctx.drawImage(image, 0, 0, image.width, image.height);
      ctx.fillText(this.props.name, 40, 50);

      var canvas = document.getElementById("canvas");
      var url = canvas.toDataURL();
      this.props.val(url);
      this.setState({ drawing: url });
      // console.log(this.state.drawing);

      const storage = firebase.storage();
      url = url.substring(22);
      var a = Math.floor(Math.random() * 101);
      const storageRef = storage.ref().child(`test/${a}`);
      const handleTwitter = this.props.handleTwitter;
      storageRef.putString(url, "base64").then(function(snapshot) {
        storageRef.getDownloadURL().then(function(url) {
          console.log(url);
          handleTwitter(url);
          console.log("ok");
        });
      });
    };
  }

  //   shouldComponentUpdate(nextProps) {
  //     if (this.props.svg !== nextProps) {
  //       this.test();
  //     }
  //   }

  render() {
    return (
      <>
        <MediaQuery query="(min-width: 768px)">
          <canvas
            id="canvas"
            ref="canvas"
            width="600px"
            height="450px"
            onMouseUp={() => {
              // this.test();
            }}
            style={style}
          />
        </MediaQuery>
        <MediaQuery query="(max-width: 767px)">
          <canvas
            id="canvas"
            ref="canvas"
            width="375px"
            height="300px"
            onMouseUp={() => {
              // this.test();
            }}
            style={style}
          />
        </MediaQuery>
        <div>
          <Button
            style={btnStyle}
            variant="contained"
            onClick={() => {
              this.test();

              alert("done!!!!");
            }}
          >
            画像を生成
          </Button>
          <Button
            style={btnStyle}
            variant="contained"
            color="white"
            component="span"
          >
            <a
              onClick={() => {}}
              href={this.state.drawing}
              download={new Date().getTime() + ".png"}
            >
              ダウンロード
            </a>
          </Button>
          <p>
            ※スマートフォンのSafariだとダウンロードできない場合がございます。
          </p>
        </div>
      </>
    );
  }
}
export default Canvas;
