import { html } from "lit-element";

export function render_filters() {
  return html` <div class="filters">
    <div class="header">
      <wc-sidemodal-header
        .type="filter"
        .fTitle="Filtri"
        .fCancelFiltersText=""
        fCancelFiltersAction="${() => {}}"
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
        <p class="caption">DISPONIBILITÀ</p>
      </div>
    </div>
  </div>`;
}
