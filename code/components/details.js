import { html } from "lit-element";
import { SIDE_MODAL_ROW_TYPES } from "../shared_components/sideModalRow/sideModalRow";
import { t } from "../translations";
import Chart from "chart.js";
import dayjs from "dayjs";
// import { requestMobilityMeteoStationLatestDetails } from "../api/meteoStations";
// import { CUSTOMstationCompetenceTypes } from "../webcomp-meteo-generic";

export function render_details() {
  console.log(this.currentStation);
  const { scoordinate, sname, smetadata, sdatatypes } = this.currentStation;

  const occupiedSpots = sdatatypes["occupied"]
    ? sdatatypes["occupied"]["tmeasurements"][0]["mvalue"]
    : "---";
  const parkingCapacity = smetadata.capacity;
  const { mainaddress, municipality } = smetadata;

  const forecast1 =
    sdatatypes["parking-forecast-60"]["tmeasurements"][0]["mvalue"];
  const forecast2 =
    sdatatypes["parking-forecast-120"]["tmeasurements"][0]["mvalue"];
  const forecast3 =
    sdatatypes["parking-forecast-180"]["tmeasurements"][0]["mvalue"];
  const forecast4 =
    sdatatypes["parking-forecast-240"]["tmeasurements"][0]["mvalue"];

  const now = dayjs();

  const checkIfTagInterval = setInterval(() => {
    if (this.shadowRoot.getElementById("IDForecastChart")) {
      console.log(this.shadowRoot.getElementById("IDForecastChart"));
      const forecastChart = new Chart(
        this.shadowRoot.getElementById("IDForecastChart"),
        {
          type: "line",
          data: {
            labels: [
              "Now",
              now.add(1, "hour").format("hh:mm"),
              now.add(2, "hour").format("hh:mm"),
              now.add(3, "hour").format("hh:mm"),
              now.add(4, "hour").format("hh:mm"),
            ],
            datasets: [
              {
                backgroundColor: "white",
                borderColor: "#333333",
                data: [
                  occupiedSpots,
                  forecast1,
                  forecast2,
                  forecast3,
                  forecast4,
                ],
                fill: false,
                pointRadius: 4,
                pointHoverRadius: 5,
                showLine: true,
              },
            ],
          },
          options: {
            responsive: false,
            title: {
              display: false,
            },
            legend: {
              display: false,
            },
          },
        }
      );
      clearInterval(checkIfTagInterval);
    }
  }, 100);

  return html` <div class="details">
    <div class="header">
      <wc-sidemodal-header
        .type="title"
        .tTitle="${sname}"
        .tLinkedTagText="${typeof occupiedSpots === "number" &&
        parkingCapacity - occupiedSpots <= 0
          ? t["tag__free"][this.language]
          : ""}"
        .tOptionalLink="${{
          text: t["directions"][this.language],
          url: `http://www.google.com/maps/place/${scoordinate.y},${scoordinate.x}`,
        }}"
        .closeModalAction="${() => {
          this.detailsOpen = false;
        }}"
      ></wc-sidemodal-header>
    </div>
    <div>
      <wc-divider></wc-divider>
    </div>
    <div>
      <div>
        <p class="caption">DETTAGLI</p>
      </div>
      <wc-sidemodal-row
        .type="${SIDE_MODAL_ROW_TYPES.horizontal}"
        .title="${"Posti totali"}"
        .text="${parkingCapacity}"
      ></wc-sidemodal-row>
      <wc-sidemodal-row
        .type="${SIDE_MODAL_ROW_TYPES.horizontal}"
        .title="${"Posti occupati"}"
        .text="${occupiedSpots}"
      ></wc-sidemodal-row>
      <wc-sidemodal-row
        .type="${SIDE_MODAL_ROW_TYPES.vertical}"
        .title="${"Indirizzo"}"
        .text="${mainaddress || municipality}"
      ></wc-sidemodal-row>
      <div>
        <p class="caption">PREVISIONI</p>
      </div>
      <div class="forecast_graph__container">
        <canvas id="IDForecastChart" width="260" height="132"></canvas>
      </div>
    </div>
  </div>`;
}

// .tOptionalLink="${args.tOptionalLink}"
// .tIcon="${args.tIcon}"
// .tSubtitle="${data.subtitle}"
