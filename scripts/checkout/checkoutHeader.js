import {cart} from '../../data/cart.js';

export function renderHeader() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    const headerHTML = `
    <div class="checkout-header-left-section">
    <a href="amazon.html">
        <img
            class="amazon-logo"
            alt="amazon logo"
            src="images/amazon-logo.png"
        />
        <img
            class="amazon-mobile-logo"
            src="images/amazon-mobile-logo.png"
            alt="amazon mobile logo"
        />
    </a>
    </div>

    <div class="checkout-header-middle-section">
        Checkout (<a class="return-to-home-link" href="amazon.html"
            >${cartQuantity} items</a
        >)
    </div>

    <div class="checkout-header-right-section">
        <img src="images/icons/checkout-lock-icon.png" />
    </div>
    
    `;

    document.querySelector('.js-header-content').innerHTML = headerHTML;
}
