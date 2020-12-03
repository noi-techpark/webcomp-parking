export const observedProperties = {
  height: { type: String },
  width: { type: String },
  fontFamily: { type: String },
  language: { type: String },
  tiles_url: { type: String, attribute: "tiles-url" },

  showFilters: { type: Boolean },
  isLoading: { type: Boolean },

  hereMapsQuery: { type: String },
  hereMapsPlacesFound: { type: Array },

  mapAttribution: { type: String },

  currentStation: { type: Object },

  currentTab: { type: Number },

  currentLocation: { type: Object },

  // mobile_open: { type: Boolean },
  // // Select places
  // from: { type: Object },
  // search_results_height: { type: Number },
  // search_results: { type: Array },
  // car_results: { type: Array },
  // destination_name: { type: String, attribute: "destination-name" },
  // destination: { type: String },
  // destination_place: { type: Object },

  // // Departure time
  // departure_time: { type: Number },
  // departure_time_hour: { type: Number },
  // departure_time_select_visible: { type: Boolean },
  // departure_time_select_timings_visible: { type: Boolean },

  // // Details
  // details_data: { type: Object },

  // car_disabled: { type: Boolean, attribute: "disable-car" },

  // is_travel_options_panel_open: { type: Boolean },
  // travel_options: { type: Object },
  detailsOpen: { type: Boolean },
  mobilityStationMeasurements: { type: Array },

  // attribution: { type: String },
};
