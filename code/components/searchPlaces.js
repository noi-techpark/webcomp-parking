import { html } from "lit-element";
import findPositionBlueIcon from "../assets/find-position-blue.svg";
import { t } from "../translations";

export function render_searchPlaces() {
  const handle_onchange = (value) => {
    if (value) {
      this.hereMapsQuery = value;
      this.debounced__request__get_coordinates_from_search(value);
      this.filtersOpen = false;
    } else {
      this.searchPlacesFound = [];
    }
  };

  const manageMap = (lat, lng) => {
    this.currentLocation = { lat: parseFloat(lat), lng: parseFloat(lng) };
    this.current_station = {};
    this.searchPlacesFound = [];
    this.filtersOpen = false;
    this.map.flyTo([lat, lng], 15);
    this.map.removeLayer(this.layer_user);
    this.drawMap();
    this.isLoading = false;
  };

  const handleMoveToCurrentPosition = () => {
    try {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted") {
          this.isLoading = true;
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              const { latitude, longitude } = pos.coords;
              manageMap(latitude, longitude);
            },
            () => {}
          );
        } else {
          this.isLoading = false;
        }
      });
    } catch (error) {
      console.log(error);
      this.isLoading = false;
    }
  };

  const handleMoveToPlace = (lat, lng) => {
    this.isLoading = true;
    this.searchPlacesFound = [];
    this.hereMapsQuery = "";
    manageMap(lat, lng);
  };

  const handleFocusInput = () => {
    this.debounced__request__get_coordinates_from_search(this.hereMapsQuery);
    if (this.hereMapsQuery.length) {
      this.filtersOpen = false;
    }
  };

  const renderPlacesList = () => {
    return html`
      <div class="searchBox__resoult_list">
        <ul>
          <li @click="${handleMoveToCurrentPosition}" class="">
            <img class="" src="${findPositionBlueIcon}" alt="" />
            ${t.my_location[this.language]}
          </li>
          ${this.searchPlacesFound.map((o) => {
            return html`
              <li
                @click="${() =>
                  handleMoveToPlace(o.position[0], o.position[1])}"
                class=""
              >
                ${o.title}
              </li>
            `;
          })}
        </ul>
      </div>
    `;
  };

  let filtersNumber = 0;
  if (this.filters.availability) {
    filtersNumber = filtersNumber + 1;
  }

  return html`
    <div class="searchBox">
      <wc-searchbar
        .searchValue="${this.hereMapsQuery}"
        placeHolder="${t.search[this.language]}..."
        .filtersNumber="${filtersNumber}"
        .filtersAction="${this.handleSearchBarFilterAction}"
        .action="${handle_onchange}"
        @focus=${handleFocusInput}
      ></wc-searchbar>

      ${this.searchPlacesFound.length && this.hereMapsQuery.length
        ? renderPlacesList()
        : ""}
    </div>
  `;
}
