import {
    Heading
} from '../../assets/styles/styled'
import Plot from 'react-plotly.js';
import Plotly from 'plotly.js/lib/core';
const groupKeys = [
  {
    name: "bar_1",
    x: [1, 2, 3],
    y: [
        [5, 12, 35],
        [12, 2, 51],
        [3, 3, 17]
    ]
  }
]
const colors = ['red', 'blue', 'green']
var data: any = groupKeys[0].x.map((x: any, index: number) => {
  const names = groupKeys[0].y[index]
  return {
    x: x,
    y: names,
    name: colors[index],
    type: 'bar',
    marker: {
      color: colors[index]
    },
    hovertemplate:  `<b>%{x|YY} </b><br><b>%{y:.2f} tCO2</b><extra></extra>`,
  };
})
export default function BarChart() {
    return  <Plot
            data={data}
            config={{
              displayModeBar: false, displaylogo: false, modeBarButtonsToRemove: ['zoom2d', 'pan2d', "select2d", "lasso2d", "zoomIn2d", "zoomOut2d", "autoScale2d", "resetScale2d"], scrollZoom: false,
            }}
            layout={{
              paper_bgcolor: 'transparent',
              width: 500, height: 170,
              sort: false,
              showlegend: false,
              animate: false,
              modebar: { orientation: 'h' },
              margin: {
                b: 0,
                l: 0,
                r: 300,
                pad: 0,
                t: 0,
              }
            } as any}
          />
}
export {}