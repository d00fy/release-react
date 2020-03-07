import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList } from "react-window";

import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: 400,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper
  },
  roots: {
    width: 200,
    margin: "auto"
  },
  margin: {
    height: theme.spacing(3)
  }
}));

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`Item ${index + 1}`} />
    </ListItem>
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired
};

//----------------スライダー関連
// const useStyles = makeStyles(theme => ({
//   root: {
//     width: 200,
//     margin: "auto"
//   },
//   margin: {
//     height: theme.spacing(3)
//   }
// }));
const marks = [
  {
    value: 0
  }
];

//-------------------------------スライダー関連

export default function VirtualizedList() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ margin: "0 auto" }}>
      <FixedSizeList height={400} width={100} itemSize={46}>
        {/* <div className={classes.roots}> */}
        {/* <Typography id="discrete-slider-custom" gutterBottom>
            目：美しいものがわかる
          </Typography> */}
        {/* <Slider
            defaultValue={this.props.eye}
            max={100}
            getAriaValueText={value => {
              this.props.eyeCount(value);
            }}
            aria-labelledby="discrete-slider-custom"
            step={1}
            marks={marks}
          /> */}
        {/* <Typography id="discrete-slider-custom" gutterBottom>
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
        /> */}
        {/* </div> */}
      </FixedSizeList>
    </div>
  );
}
