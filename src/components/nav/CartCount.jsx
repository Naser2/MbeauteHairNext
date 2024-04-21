"use client";
import { useCart } from "../../../state";

export function CartCount() {
  const cart = useCart((s) => s.cart);
  console.log("CART-ADDED", cart)
  return <span>{cart}</span>;
}


export function Cart({items}) {
return<div
className="header-item header-layer header-item-minicart"
id="header-item-minicart"
>
<div className="header-link-wrapper">
  <input id="cart-quantity" type="hidden" defaultValue={0.0} />
  <a
    className="header-link empty"
    href="https://www.sephora.fr/panier/"
    title="Commander"
  >
    <span className="header-link-icon">
      <img
        className="basket-icon"
        src="https://www.sephora.fr/on/demandware.static/Sites-Sephora_FR-Site/-/default/dwf63e629f/images/svg-icons/basket-icon-bold.svg"
      />
      <span className="header-link-quantity-wrap">
        <span className="header-link-quantity"></span>
      </span>
    </span>
  </a>
  <div className="arrow" />
</div>
<div className="mini-cart-notification" data-show-time={3.0}>
  <div className="header">
    <div className="icon-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={26}
        className="svg-inline check-icon"
      >
        <path
          fill="#6dcf63"
          d="M3.9 15.5c-.1-.1-.1 0-.1 0zm-.5.1c-.1 0-.1 0 0 0zm.4 0l.3.2-.3-.3zm.4 1l.1.2.2.2v-.3l-.3-.2zm.1.4v.1zm.5.3l-.1-.2v-.2l-.1.3.2.1zm-.1.1a.4.4 0 0 0-.1-.1V17.4zm.2.3l-.1-.2a.2.2 0 0 0 0 .1v.1zm0 0v.1zm.4.1v.1c-.1 0-.2-.1-.1-.2 0-.1 0-.2-.2-.3l.1.5.3.4c0-.1.1-.3 0-.4h-.1zm0 .7zm-2.2.7zm2.7-.1h-.1zm.2-.4h-.2a.7.7 0 0 1 0-.2h-.2v-.2-.2c-.1.3 0 .5.1.7.2.1.3.3.3.5h.2a.9.9 0 0 1-.2-.6zm.5.9c-.1 0-.1 0 0 0zm.7 1c.1 0 .1 0 0 0zm-3 1.5h.1zm.5 1.7s0 .1.1 0zm8.5-5.1c0-.1 0-.1 0 0-.1 0 0 0 0 0zm0 .1H13zm-4.3 5.7l-1-3.4a74.6 74.6 0 0 0 1 3.4zm3.9-5v0zm-.8.7l-.1.1v-.1zm.4.5v-.1zm-.2.3l-.1-.1v.1s.1 0 0 0zm-.2.3c-.1 0-.1 0 0 0 0 .1 0 0 0 0zm-.1.3v-.2l-.1-.1-.1.1v.1h.1v.1zm-.2.3zm-.4.3V22l.1.1zm0 .1zm.2 0v.1zm-.2 0v.1zm0 .2zm0 0zm0 .1zm-.4.1zm.1.4V23h.1v.1zm-.4 0l-.1-.1v.1s0 .1 0 0zm.2.3v-.1h.1v.1zm-.5.2c.2 0 .2 0 .1-.2l-.1.2zm-.2 0v.1h.1v-.1-.2a.8.8 0 0 1 .2-.2v-.1-.2c0-.1 0-.2.2-.3l.1.1a.5.5 0 0 1 0 .1l-.2.1h.2l.1-.2v-.2h-.1c-.1 0 0 0 0-.2l.2-.2v-.2a.6.6 0 0 0-.3.4.4.4 0 0 1-.3.3l-.2.2a.8.8 0 0 0 0 .3h-.2a.2.2 0 0 1-.2.1v.2l.1.2v-.2c.2 0 .3 0 .2.1 0 .1 0 0 0 0s.1 0 0 .1zm-.3.4zm.7-.2v.1zm-.5.2zm-.3 0v.1zm0 0zm0 .3v-.1zm-1.1.4h-.1.2c0-.1-.1 0-.1 0zm1.4-.2zm-1.3.3c-.1 0-.1 0 0 0zm.3 0zm.7 0v-.1h.1v.1zm-1 .2h-.2zm1-.1zm-4.1.6zM9 25zm-.2 0l.1.1zm.6.1zm-1.6.3v.1zm1.4 0v-.1h.1zm-2 .2zm1.7 0v-.2H9v.1zm-.2.2c0-.1 0-.1.1 0zm1-8.5l.2-.2V17v-.1a.4.4 0 0 0 .2-.5c0-.1 0-.3.2-.3 0-.2 0-.4.2-.4v-.5l.3-.4v-.2l.1-.3.1-.4c.2-.1.2-.3.2-.5a.9.9 0 0 0 .2-.6c0-.2.1-.4.3-.5 0-.3 0-.5.2-.7l.3-.6a83.4 83.4 0 0 1 2-6.3h.2c0-.4 0-.7.3-1v-.4c.2-.1.2-.3.2-.5l.2-.1-.1-.1.4-1.2c0-.3.2-.7.5-1l-.2-.1c0-.2 0-.3.3-.2l.4-.1c.1.2.3.2.5 0l1 .2 1.3.2v.1l-.1.2.4.2h.2c.2 0 .3.2.3.2-.1 0-.2 0-.2.2a.3.3 0 0 1-.1.1v.3h.1l.1-.1-.1.3a.8.8 0 0 1-.2.3v.2h-.1L19 3.5l-.5 1.3-2.3 6.2-.2.6v.4h-.1v.1h-.2l-.2.7-.3.6a28 28 0 0 1-.8 2.3 37 37 0 0 0-.8 2.2h-.1v.2l-.2.3v-.1V18.6a.4.4 0 0 0 0 .3H13v.4l-.2.4h-.2v.3a.9.9 0 0 1-.2.4v-.1c0 .1 0 .2-.2.3v.3l-.2.5-.1.3h-.1v.1c-.1 0-.1 0 0-.1l-.2-.1v.2c-.1 0-.1.1 0 .2h-.2v.1-.5a.7.7 0 0 0-.4.3l-.4.5.1.1.2.1v-.2l.2-.2a.3.3 0 0 0 0 .2v.2h.1a.8.8 0 0 0 0 .2l-.1.2h-.3c-.2.2-.2.4 0 .5h-.2-.1l-.3.3V24H10a.4.4 0 0 0-.1.3c-.1 0-.1 0 0 0l-.1-.2a.4.4 0 0 0 0 .2v.1h-.3v.3a1 1 0 0 1-.6.4l-.6.3a.4.4 0 0 1-.1 0l-.2.2h.3a.4.4 0 0 1 .2-.2c0 .1 0 .1 0 0H9a3 3 0 0 1-.5.3l-.5.1-.2-.1a.3.3 0 0 1-.2 0H7l-.2.1h-.1l-.3-.1h-.1l-.2.2H6h-.2v-.1h-.1c0-.1 0-.1-.1 0h-.2a.4.4 0 0 1-.2-.2H5h-.2a.3.3 0 0 1-.1-.2v-.3c-.1 0-.2-.1-.2-.3-.1 0-.2-.1-.2-.3a.9.9 0 0 0-.1-.5.7.7 0 0 1-.1-.4c0-.2 0-.3-.2-.4v-.1a16 16 0 0 1-.4-2.3c0-.5 1.2 3.9 1 3.4a5.8 5.8 0 0 1-.1-1.4 2 2 0 0 1-.1-.8h-.1l-.4-.6a1.8 1.8 0 0 1-.2-.6 1 1 0 0 1-.4-1v-.1l-.2-.3H3v-.1a1 1 0 0 1-.3-.2v-.1-.3a.1.1 0 0 0-.1 0h-.1v-.2a.4.4 0 0 1 0-.3c-.2 0-.3-.2-.3-.4 0-.1 0-.3-.3-.4V17.8c-.1 0-.1 0 0-.1a.6.6 0 0 1 0-.3 1.7 1.7 0 0 0-.2-.2l-.1-.3h-.1l-.7-.8c-.2-.3-.3-.6-.3-1l-.1-.3-.1-.1h.1c.1 0 0 .2.2.2l-.1-.2-.1-.2v-.2l-.2-.6A.9.9 0 0 0 0 13h.8c.3 0 .5 0 .8.2h-.4L1 13s-.1 0 0 .1l.3.2h.3c0 .1.1.2 0 .2.3 0 .4.2.5.3.1.2.3.3.5.3 0 .2.2.3.5.4 0 .2 0 .3.2.3.1 0 .2 0 .2.2s.1 0 .2 0v.2a2.2 2.2 0 0 1 .7 1l.4.5c0 .2.2.4.3.5v.2l.2.1v.2h.1l.2.5.3.3.3.5c.2.1.3.3.3.5l.3.4.3.3v.3l.5 1 .2-.5-.1-.7.2.6 1-2 .2-.4c0-.2 0-.3.2-.4l.2-.5c.1-.2.1-.3 0-.4zm-1.8 4.6l.5 1.4.2.8-.7-3-.2.5.2.3zm-.1-1.2a17 17 0 0 1-.2-.9l.2.9zm.3.3l.4-1-.5 1zm.8 3.5zM7.6 26h.2c0 .1 0 .1 0 0s0 0-.1 0zm.5 0h.2zm.3 0c.1 0 .1 0 0 0 0 0-.1 0 0 0zm.2 0z"
        />
      </svg>
    </div>
    <div className="message-wrapper">
      <div className="heading">C’est ajouté !</div>
    </div>
  </div>
  <div className="product" data-canaddmore="null"></div>
  <div className="actions">
    <a
      className="mini-cart-button"
      href="https://www.sephora.fr/panier/"
    >
      <button className="button button-revamp">
        Voir mon panier
      </button>
    </a>
    <button
      className="button mini-cart-button secondary-button-revamp"
      data-close=""
    >
      Continuer mon shopping
    </button>
  </div>
</div>
<div className="mini-cart-overlay" />
</div>
}