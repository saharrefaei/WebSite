import {
    Heading
} from '../../assets/styles/styled'
import Plot from 'react-plotly.js';
import Plotly from 'plotly.js/lib/core';
var data: Plotly.Data[] = [{
  labels: ["group_1", "group_2","group_3"],
  values: [10,20,30],
  "textposition": [],
  type: 'pie',
  hole: 0.7,
  textinfo: "percent",
  marker: {
    colors: ["red", "blue", "green"]
  },
  sort: false,
  text: "",
  insidetextorientation: "auto",
  hovertemplate: "<b>%{label} </b><br><b>%{value:.2f} GW</b><br>\n<b>%{percent}</b><extra></extra>"
}]
export default function PieChart() {
    return <Plot
            // revision={revision}
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