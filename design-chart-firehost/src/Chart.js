import React, { ReactDOM, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  LabelList,
  Label
} from "recharts";

import MediaQuery from "react-responsive";

class TwoLevelPieChart extends React.Component {
  exportSVG = element => {
    const svg = element;
    const oSerializer = new XMLSerializer();
    const svgString = oSerializer.serializeToString(svg);
    return svgString;
    // generateLink(fileName + '.svg', 'data:image/svg+xml;utf8,' + svgString).click();
  };

  componentDidUpdate(prevProps) {
    // 典型的な使い方(props を比較することを忘れないでください)
    if (this.props !== prevProps) {
      //   console.log(this.exportSVG(document.getElementById("tes")));
      console.log(document.getElementsByClassName("katagaki"));
      this.props.val(this.exportSVG(document.getElementById("tes")));
    }
  }

  render() {
    return (
      <>
        <MediaQuery query="(min-width: 768px)">
          <RadarChart
            id="tes"
            className="App"
            cx={300} //300
            cy={250} //250
            outerRadius={150} //150
            width={600}
            height={450}
            data={[
              { subject: "目", NoName: this.props.eye, fullmark: 100 },
              { subject: "手", NoName: this.props.hand, fullmark: 100 },
              { subject: "頭", NoName: this.props.head, fullmark: 100 },
              { subject: "口", NoName: this.props.mouse, fullmark: 100 },
              { subject: "足", NoName: this.props.leg, fullmark: 100 },
              { subject: "心", NoName: this.props.mental, fullmark: 100 }
            ]}
          >
            <Legend
              id="katagaki"
              verticalAlign={"center"}
              iconType={"star"}
              wrapperStyle={{
                marginTop: "24px"
              }}
            />
            <PolarGrid polarRadius={200} />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar
              name={this.props.name}
              dataKey="NoName"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            ></Radar>
          </RadarChart>
        </MediaQuery>
        <MediaQuery query="(max-width: 767px)">
          <RadarChart
            id="tes"
            className="App"
            cx={150} //300 188
            cy={180} //250 180
            outerRadius={100} //150
            width={300} //375
            height={300} //300
            backgroundColor="beige"
            data={[
              { subject: "目", NoName: this.props.eye, fullmark: 100 },
              { subject: "手", NoName: this.props.hand, fullmark: 100 },
              { subject: "頭", NoName: this.props.head, fullmark: 100 },
              { subject: "口", NoName: this.props.mouse, fullmark: 100 },
              { subject: "足", NoName: this.props.leg, fullmark: 100 },
              { subject: "心", NoName: this.props.mental, fullmark: 100 }
            ]}
          >
            <Legend
              id="katagaki"
              verticalAlign={"center"}
              iconType={"star"}
              wrapperStyle={{
                marginTop: "24px"
              }}
            />
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar
              name={this.props.name}
              dataKey="NoName"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            ></Radar>
          </RadarChart>
        </MediaQuery>
      </>
    );
  }
}

export default TwoLevelPieChart;
