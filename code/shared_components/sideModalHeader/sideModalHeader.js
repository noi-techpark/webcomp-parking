import { css, html, LitElement, unsafeCSS } from 'lit-element';
import XBlackIcon from '../assets/x-black.svg';
import style from './sideModalHeader.scss';

export const SIDE_MODAL_HEADER_TYPES = { title: 'title', filter: 'filter' };

export class SideModalHeader extends LitElement {
  constructor() {
    super();

    this.type = SIDE_MODAL_HEADER_TYPES.title;
    this.fTitle = '---';
    this.fCancelFiltersText = '---';

    this.tIcon = '';
    this.tLinkedTagText = '---';
    this.tTitle = '---';
    this.tSubtitle = '';
    this.tOptionalLink = { text: '', url: '' };

    this.closeModalAction = () => {
      console.log('-- Default message --');
    };

    this.fCancelFiltersAction = () => {
      console.log('-- Default message --');
    };
  }

  static get styles() {
    return css`
      ${unsafeCSS(style)}
    `;
  }

  static get properties() {
    return {
      type: { type: String },

      fTitle: { type: String },
      fCancelFiltersText: { type: String },
      fCancelFiltersAction: { type: Function },

      tTitle: { type: String },
      tIcon: { type: String },
      tLinkedTagText: { type: String },
      tSubtitle: { type: String },
      tOptionalLink: { type: Object },

      closeModalAction: { type: Function }
    };
  }

  handleCloseAction = () => {
    this.closeModalAction();
  };

  handleCancelFilterAction = () => {
    this.fCancelFiltersAction();
  };

  render() {
    return html`<div class="sideModalHeader">
      <!-- Close action and f header title -->
      <div class="first_row">
        ${this.type === SIDE_MODAL_HEADER_TYPES.title && this.tLinkedTagText
          ? html`<wc-tag type="primary" content="${this.tLinkedTagText}"></wc-tag>`
          : ''}
        ${this.type === SIDE_MODAL_HEADER_TYPES.filter ? html`<div><p class="fTitle">${this.fTitle}</p></div>` : ''}
        ${this.type === SIDE_MODAL_HEADER_TYPES.filter
          ? html`<div>
              <p class="fCancelFiltersText" @click="${this.handleCancelFilterAction}">${this.fCancelFiltersText}</p>
            </div>`
          : ''}

        <div class="close_icon_container"><img src="${XBlackIcon}" alt="" @click="${this.handleCloseAction}" /></div>
      </div>
      <!-- t header title -->
      <div class="second_row">
        ${this.type === SIDE_MODAL_HEADER_TYPES.title && this.tIcon
          ? html`<div><img src="${this.tIcon}" alt="" /></div>`
          : ''}
        ${this.type === SIDE_MODAL_HEADER_TYPES.title ? html`<div><p class="tTitle">${this.tTitle}</p></div>` : ''}
      </div>
      <!-- Optional link -->
      <div class="third_row">
        ${this.type === SIDE_MODAL_HEADER_TYPES.title && this.tSubtitle
          ? html`<div><p class="tSubtitle">${this.tSubtitle}</p></div>`
          : ''}
        ${this.type === SIDE_MODAL_HEADER_TYPES.title && this.tOptionalLink.url
          ? html`<div><a class="tOptionalLink" href="${this.tOptionalLink.url}">${this.tOptionalLink.text}</a></div>`
          : ''}
      </div>
    </div>`;
  }
}

customElements.get('wc-sidemodal-header') || customElements.define('wc-sidemodal-header', SideModalHeader);
