import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.updateMap = this.updateMap.bind(this);
  }

  componentDidMount() {
    const { arrondissementsGroup } = this.props;
    this.updateMap(arrondissementsGroup);
  }

  updateMap(arrondissementsGroup) {
    const { updateCurrentArrondissements } = this.props;
    const colorClass = [
      'many', // 0
      'middle', // 1
      'Few', // 2
    ];

    arrondissementsGroup.forEach((arrondissements, i) => {
      arrondissements.forEach((arrondissement) => {
        const elementArrondissements = document.getElementsByClassName(arrondissement.className)[0];
        elementArrondissements.classList.add(colorClass[i]);
        elementArrondissements.addEventListener(('mouseenter'), () => {
          this.mapSvg.append(elementArrondissements);
        });
        elementArrondissements.addEventListener(('click'), () => {
        //  console.log(this.props.updateCurrentArrondissements(arrondissements))
          updateCurrentArrondissements(arrondissement);
        });
      });
    });
  }


  render() {
    return (
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="577.645" height="391.181" viewBox="0 0 577.645 391.181">
          <g ref={(el) => { this.mapSvg = el; }} className="map__svg" data-name="map-paris 1 3" transform="translate(-3.171 -4.578)">
            <g className="1_arrondissement" data-name="_arrondissement">
              <path className="Tracé_952" data-name="Tracé 952" d="M362.252,219.671l-32.579-22.425L296.08,181.323l13.878-27.279,5.871-1.351L379.756,180.2l-2.114,5.888Z" fill="#ccc" />
              <path className="Tracé_972" data-name="Tracé 972" d="M344.3,194.182h2.412V182.518h-2.16l-3.852,3.06,1.08,1.692,2.52-1.638Z" fill="#fff" />
            </g>
            <g className="2_arrondissement" data-name="_arrondissement">
              <path className="Tracé_953" data-name="Tracé 953" d="M381.587,177.577,317.965,150.2l55.25-3.235,17.416,5.692Z" fill="#ccc" />
              <path className="Tracé_973" data-name="Tracé 973" d="M367.071,165.965h8.64v-2.142h-4.752c2.16-1.62,4.392-3.96,4.392-6.174,0-2.3-1.836-3.528-4.05-3.528a5.555,5.555,0,0,0-4.05,1.818l1.224,1.584A4.1,4.1,0,0,1,371.1,156.3a1.534,1.534,0,0,1,1.71,1.566c0,1.512-1.8,3.366-5.742,6.552Z" fill="#fff" />
            </g>
            <g className="3_arrondissement" data-name="_arrondissement">
              <path className="Tracé_954" data-name="Tracé 954" d="M435.125,211.58l-51.38-26.413,2.131-5.931,9.154-25.225,27.316,7.84Z" fill="#ccc" />
              <path className="Tracé_974" data-name="Tracé 974" d="M409.02,186.03c2.628,0,4.824-1.3,4.824-3.942a3.261,3.261,0,0,0-2.484-3.222,4.1,4.1,0,0,0-.936-.18l2.772-2.43v-2.07h-7.6v2.142h4.5l-3.528,2.988.81,1.422a3.105,3.105,0,0,1,1.656-.414c1.458,0,2.3.756,2.3,1.674,0,1.188-1.026,1.944-2.538,1.944a4.144,4.144,0,0,1-2.772-.936l-1.026,1.656A5.868,5.868,0,0,0,409.02,186.03Z" fill="#fff" />
            </g>
            <g className="4_arrondissement" data-name="_arrondissement">
              <path className="Tracé_955" data-name="Tracé 955" d="M423.47,255.621l-56.339-33.843,15.763-34.4,52.248,26.863,1.719,10.871Z" fill="#ccc" />
              <path className="Tracé_975" data-name="Tracé 975" d="M402.9,227.671h2.322v-2.25h1.386v-2.142h-1.386v-2.538H402.9v2.538h-2.664l3.564-6.624-2.016-1.008-4.374,8.136v1.638h5.49Z" fill="#fff" />
            </g>
            <g className="5_arrondissement" data-name="_arrondissement">
              <path className="Tracé_956" data-name="Tracé 956" d="M426.812,263.242l-40.624,34.6-26.912-6.3L343.87,285.6l22.505-61.253,55.814,33.528Z" fill="#ccc" />
              <path className="Tracé_976" data-name="Tracé 976" d="M376.328,272.327c2.862,0,4.806-1.566,4.806-4.068,0-2.43-2-3.69-4.32-3.69a4.738,4.738,0,0,0-1.368.2v-2.142h5.022v-2.142h-7.434v5.832l.882.81a4.564,4.564,0,0,1,2.142-.594c1.44,0,2.574.612,2.574,1.854,0,.972-.756,1.872-2.376,1.872a4.836,4.836,0,0,1-2.754-.9l-.918,1.782A5.92,5.92,0,0,0,376.328,272.327Z" fill="#fff" />
            </g>
            <g className="6_arrondissement" data-name="_arrondissement">
              <path className="Tracé_957" data-name="Tracé 957" d="M339.907,284.6l-33.866-16.485-22.786-13.945,35.984-26.142L329.3,200.156l33.232,22.874Z" fill="#ccc" />
              <path className="Tracé_977" data-name="Tracé 977" d="M331.9,249.851a4.135,4.135,0,0,0,4.428-4.266,3.866,3.866,0,0,0-3.96-3.888,2.458,2.458,0,0,0-.342.036l2.034-2.682-1.908-1.3-3.546,4.77a5.4,5.4,0,0,0-1.116,3.186A4.054,4.054,0,0,0,331.9,249.851Zm0-2.124a2,2,0,0,1,0-4,2,2,0,0,1,0,4Z" fill="#fff" />
            </g>
            <g className="7_arrondissement" data-name="_arrondissement">
              <path className="Tracé_958" data-name="Tracé 958" d="M279.976,253.147l-26.763-4.1-50.568-45.524,33.906-23.4,55.373,1.749,34.767,16.48-10.2,28.273Z" fill="#ccc" />
              <path className="Tracé_978" data-name="Tracé 978" d="M266.806,221.343h2.628l4.932-10.152v-1.512h-8.928v2.142h6.138Z" fill="#fff" />
            </g>
            <g className="8_arrondissement" data-name="_arrondissement">
              <path className="Tracé_959" data-name="Tracé 959" d="M291.8,177.85l-55.176-1.741-18.4-45.206,19.136-21.756,72.614-20.1L306.11,149.72Z" fill="#ccc" />
              <path className="Tracé_979" data-name="Tracé 979" d="M269.146,147.163c2.772,0,4.464-1.476,4.464-3.6a3.011,3.011,0,0,0-1.89-2.88,2.734,2.734,0,0,0,1.188-2.412c0-1.782-1.422-3.15-3.762-3.15-2.358,0-3.78,1.368-3.78,3.15a2.734,2.734,0,0,0,1.188,2.412,3.011,3.011,0,0,0-1.89,2.88C264.664,145.687,266.356,147.163,269.146,147.163Zm0-2.124a1.722,1.722,0,0,1-1.944-1.692,1.945,1.945,0,0,1,3.87,0A1.707,1.707,0,0,1,269.146,145.039Zm0-5.04a1.435,1.435,0,1,1,1.548-1.44A1.409,1.409,0,0,1,269.146,140Z" fill="#fff" />
            </g>
            <g className="9_arrondissement" data-name="_arrondissement">
              <path className="Tracé_960" data-name="Tracé 960" d="M310.45,148.65l3.826-60.045,63.7-.6L373.1,143.956l-56.657,3.315Z" fill="#ccc" />
              <path className="Tracé_980" data-name="Tracé 980" d="M343.878,114.482a4.135,4.135,0,0,0-4.428,4.266,3.866,3.866,0,0,0,3.96,3.888,2.46,2.46,0,0,0,.342-.036l-2.034,2.682,1.908,1.3,3.546-4.77a5.4,5.4,0,0,0,1.116-3.186A4.054,4.054,0,0,0,343.878,114.482Zm0,2.124a2,2,0,0,1,0,4,2,2,0,0,1,0-4Z" fill="#fff" />
            </g>
            <g className="10_arrondissement" data-name="0_arrondissement">
              <path className="Tracé_961" data-name="Tracé 961" d="M423.16,158.6l-28.18-8.089L376.8,144.565l4.972-56.978,43.752-2.937L438.886,88.9l22.321,50.029Z" fill="#ccc" />
              <path className="Tracé_981" data-name="Tracé 981" d="M415.878,129.287h2.412V117.623h-2.16l-3.852,3.06,1.08,1.692,2.52-1.638Zm9.792.18c2.736,0,4.644-2.484,4.644-6.012s-1.908-6.012-4.644-6.012c-2.754,0-4.662,2.484-4.662,6.012S422.916,129.467,425.67,129.467Zm0-2.16c-1.422,0-2.16-1.584-2.16-3.852s.738-3.852,2.16-3.852c1.4,0,2.124,1.584,2.124,3.852S427.074,127.307,425.67,127.307Z" fill="#fff" />
            </g>
            <g className="11_arrondissement" data-name="1_arrondissement">
              <path className="Tracé_962" data-name="Tracé 962" d="M525.333,245.857l-85.82-22.233-1.727-10.885L424.775,162.09l37.562-19.415Z" fill="#ccc" />
              <path className="Tracé_982" data-name="Tracé 982" d="M457,200h2.412V188.336h-2.16L453.4,191.4l1.08,1.692L457,191.45Zm8.6,0h2.412V188.336h-2.16l-3.852,3.06,1.08,1.692,2.52-1.638Z" fill="#fff" />
            </g>
            <g className="12_arrondissement" data-name="2_arrondissement">
              <path className="Tracé_963" data-name="Tracé 963" d="M503.71,350.682,543.036,334.7l30.8-36.017,6.9-42.4L530.482,249.7l-89.366-23.145-13.967,31.824,4.869,5.658Z" fill="#ccc" />
              <path className="Tracé_983" data-name="Tracé 983" d="M478.722,278.931h2.412V267.267h-2.16l-3.852,3.06,1.08,1.692,2.52-1.638Zm5.2,0h8.64v-2.142h-4.752c2.16-1.62,4.392-3.96,4.392-6.174,0-2.3-1.836-3.528-4.05-3.528a5.555,5.555,0,0,0-4.05,1.818l1.224,1.584a4.1,4.1,0,0,1,2.628-1.224,1.534,1.534,0,0,1,1.71,1.566c0,1.512-1.8,3.366-5.742,6.552Z" fill="#fff" />
            </g>
            <g className="13_arrondissement">
              <path className="Tracé_964" data-name="Tracé 964" d="M366.01,394.027l-5.386-98.781,27.525,6.44L429.7,266.3l69.65,84.175-74.9,40.794-22.488,1.86-10.076-9.876Z" fill="#ccc" />
              <path className="Tracé_984" data-name="Tracé 984" d="M408.612,341.345h2.412V329.681h-2.16l-3.852,3.06,1.08,1.692,2.52-1.638Zm9.041.18c2.628,0,4.824-1.3,4.824-3.942a3.261,3.261,0,0,0-2.484-3.222,4.1,4.1,0,0,0-.936-.18l2.772-2.43v-2.07h-7.6v2.142h4.5l-3.528,2.988.81,1.422a3.105,3.105,0,0,1,1.656-.414c1.458,0,2.3.756,2.3,1.674,0,1.188-1.026,1.944-2.538,1.944a4.144,4.144,0,0,1-2.772-.936l-1.026,1.656A5.868,5.868,0,0,0,417.653,341.525Z" fill="#fff" />
            </g>
            <g className="14_arrondissement" data-name="4_arrondissement">
              <path className="Tracé_965" data-name="Tracé 965" d="M361.91,395.759,326.336,390.1l-52.648-23.729L235.662,353.6l69.189-82.671,35.365,17.213,16.17,6.248Z" fill="#ccc" />
              <path className="Tracé_985" data-name="Tracé 985" d="M304.22,347.556h2.412V335.892h-2.16l-3.852,3.06,1.08,1.692,2.52-1.638Zm10.8,0h2.322v-2.25h1.386v-2.142h-1.386v-2.538H315.02v2.538h-2.664l3.564-6.624-2.016-1.008-4.374,8.136v1.638h5.49Z" fill="#fff" />
            </g>
            <g className="15_arrondissement" data-name="5_arrondissement">
              <path className="Tracé_966" data-name="Tracé 966" d="M233.437,350.556l-34.375-14.074-24.625-13.025-25.745,10.691L136.26,310.91l-13.893,1.2,77.806-105.8,50.618,45.57,26.795,4.1,23.143,14.166Z" fill="#ccc" />
              <path className="Tracé_986" data-name="Tracé 986" d="M206.417,294.147h2.412V282.483h-2.16l-3.852,3.06,1.08,1.692,2.52-1.638Zm9.162.18c2.862,0,4.806-1.566,4.806-4.068,0-2.43-2-3.69-4.32-3.69a4.738,4.738,0,0,0-1.368.2v-2.142h5.022v-2.142h-7.434v5.832l.882.81a4.564,4.564,0,0,1,2.142-.594c1.44,0,2.574.612,2.574,1.854,0,.972-.756,1.872-2.376,1.872a4.836,4.836,0,0,1-2.754-.9l-.918,1.782A5.92,5.92,0,0,0,215.579,294.327Z" fill="#fff" />
            </g>
            <g className="16_arrondissement" data-name="6_arrondissement">
              <path className="Tracé_967" data-name="Tracé 967" d="M118.134,312.319,90.6,299.057,74.2,256.29,3.171,223.78,7.5,197.142l18.059-43.671L67.17,120.058l28.577,9.534,14.016-26.387,59.48,7.3,45.3,21.281,19.106,46.946-35.085,24.218Z" fill="#ccc" />
              <path className="Tracé_987" data-name="Tracé 987" d="M113.331,194.266h2.412V182.6h-2.16l-3.852,3.06,1.08,1.692,2.52-1.638Zm9.524.18a4.135,4.135,0,0,0,4.428-4.266,3.866,3.866,0,0,0-3.96-3.888,2.459,2.459,0,0,0-.342.036l2.034-2.682-1.908-1.3-3.546,4.77a5.4,5.4,0,0,0-1.116,3.186A4.054,4.054,0,0,0,122.855,194.446Zm0-2.124a2,2,0,0,1,0-4,2,2,0,0,1,0,4Z" fill="#fff" />
            </g>
            <g className="17_arrondissement" data-name="7_arrondissement">
              <path className="Tracé_968" data-name="Tracé 968" d="M216.527,129.287l-44.814-21.055,13.3-31.582,56.963-38.063L289.471,10.38l29.776-3.152-8.456,79.054-74.6,20.653Z" fill="#ccc" />
              <path className="Tracé_988" data-name="Tracé 988" d="M250.031,76.258h2.412V64.594h-2.16l-3.852,3.06,1.08,1.692,2.52-1.638Zm6.284,0h2.628l4.932-10.152V64.594h-8.928v2.142h6.138Z" fill="#fff" />
            </g>
            <g className="18_arrondissement" data-name="8_arrondissement">
              <path className="Tracé_969" data-name="Tracé 969" d="M314.1,85.647l8.436-78.884,64.4-1.607,41.135-.379,13.042-.2,2.9,26.875L424.6,82.034l-44.51,2.989Z" fill="#ccc" />
              <path className="Tracé_989" data-name="Tracé 989" d="M368.631,57.258h2.412V45.594h-2.16l-3.852,3.06,1.08,1.692,2.52-1.638Zm9.63.2c2.772,0,4.464-1.476,4.464-3.6a3.011,3.011,0,0,0-1.89-2.88,2.734,2.734,0,0,0,1.188-2.412c0-1.782-1.422-3.15-3.762-3.15-2.358,0-3.78,1.368-3.78,3.15a2.734,2.734,0,0,0,1.188,2.412,3.011,3.011,0,0,0-1.89,2.88C373.779,55.98,375.471,57.456,378.261,57.456Zm0-2.124a1.722,1.722,0,0,1-1.944-1.692,1.945,1.945,0,0,1,3.87,0A1.707,1.707,0,0,1,378.261,55.332Zm0-5.04a1.435,1.435,0,1,1,1.548-1.44A1.409,1.409,0,0,1,378.261,50.292Z" fill="#fff" />
            </g>
            <g className="19_arrondissement" data-name="9_arrondissement">
              <path className="Tracé_970" data-name="Tracé 970" d="M464.155,137.412l-22.526-50.49-13.486-4.291L447.4,32.45l-2.88-26.662L500.443,8l20.592,21.946,6.279,30.026,4.926,25.088,30.225,23.32Z" fill="#ccc" />
              <path className="Tracé_990" data-name="Tracé 990" d="M480.47,79.258h2.412V67.594h-2.16l-3.852,3.06,1.08,1.692,2.52-1.638Zm9.63-11.844a4.135,4.135,0,0,0-4.428,4.266,3.866,3.866,0,0,0,3.96,3.888,2.46,2.46,0,0,0,.342-.036l-2.034,2.682,1.908,1.3,3.546-4.77a5.4,5.4,0,0,0,1.116-3.186A4.054,4.054,0,0,0,490.1,67.414Zm0,2.124a2,2,0,0,1,0,4,2,2,0,0,1,0-4Z" fill="#fff" />
            </g>
            <g className="20_arrondissement" data-name="0_arrondissement">
              <path className="Tracé_971" data-name="Tracé 971" d="M579.728,254.248l-50.151-6.568L464.109,140.444l99.952-29.514,7.666,24.116,6.06,80.735,3.028,26.724Z" fill="#ccc" />
              <path className="Tracé_991" data-name="Tracé 991" d="M525.255,183.266h8.64v-2.142h-4.752c2.16-1.62,4.392-3.96,4.392-6.174,0-2.3-1.836-3.528-4.05-3.528a5.555,5.555,0,0,0-4.05,1.818l1.224,1.584a4.1,4.1,0,0,1,2.628-1.224,1.534,1.534,0,0,1,1.71,1.566c0,1.512-1.8,3.366-5.742,6.552Zm15.032.18c2.736,0,4.644-2.484,4.644-6.012s-1.908-6.012-4.644-6.012c-2.754,0-4.662,2.484-4.662,6.012S537.533,183.446,540.287,183.446Zm0-2.16c-1.422,0-2.16-1.584-2.16-3.852s.738-3.852,2.16-3.852c1.4,0,2.124,1.584,2.124,3.852S541.691,181.286,540.287,181.286Z" fill="#fff" />
            </g>
          </g>
        </svg>
      </div>
    );
  }
}


Map.propTypes = {
  arrondissementsGroup: PropTypes.array.isRequired,
  updateCurrentArrondissements: PropTypes.func.isRequired,
};
