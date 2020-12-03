import { html } from "lit-element";
// import { requestMobilityMeteoStationLatestDetails } from "../api/meteoStations";
// import { CUSTOMstationCompetenceTypes } from "../webcomp-meteo-generic";

export function render_details() {
  const { CUSTOMstationCompetence } = this.currentStation;
  console.log(CUSTOMstationCompetence, this.currentStation);
  const data = {
    title: "",
    subtitle: "",
    measurements: [],
  };
  // if (CUSTOMstationCompetence === CUSTOMstationCompetenceTypes.mobility) {
  //   const { sname, tdescription, stype, scode, tname } = this.currentStation;
  //   data.title = sname;
  //   // data.subtitle = tdescription;
  //   data.linkedTagText = stype;
  //   data.measurements = this.mobilityStationMeasurements;

  //   // requestMobilityMeteoStationLatestDetails({
  //   //   scode,
  //   //   tname,
  //   // }).then((details) => {
  //   //   if (details) {
  //   //     console.log(details.data[0]);
  //   //     data.measurements = [
  //   //       {
  //   //         name: tdescription,
  //   //         value: `${details.data[0].mvalue} ${details.data[0].tunit}`,
  //   //       },
  //   //     ];
  //   //   }
  //   // });
  // }

  // if (CUSTOMstationCompetence === CUSTOMstationCompetenceTypes.tourism) {
  //   const { Shortname, Temperature } = this.currentStation;
  //   data.title = Shortname;
  //   data.linkedTagText = "Measuring Point";
  //   // data.subtitle = tdescription;
  //   data.measurements = [{ name: "Temperature", value: Temperature }];
  // }

  return html` <div class="details">
    <div class="header">
      <wc-sidemodal-header
        .type="title"
        .tTitle="${data.title}"
        .tSubtitle="${data.subtitle}"
        .tLinkedTagText="${data.linkedTagText}"
        .closeModalAction="${() => {
          this.detailsOpen = false;
        }}"
      ></wc-sidemodal-header>
    </div>

    <div>
      ${data.measurements.map((o) => {
        return html`<wc-sidemodal-row
          .type="horizontal"
          .title="${o.name}"
          .text="${o.value}"
        ></wc-sidemodal-row> `;
      })}
    </div>
  </div>`;
}

// .tOptionalLink="${args.tOptionalLink}"
// .tIcon="${args.tIcon}"
