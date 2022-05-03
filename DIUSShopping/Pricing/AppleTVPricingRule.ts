import { AppleTV } from "../Products/AppleTV";
import { Product } from "../Products/Product";
import { ProductSKU } from "../Products/ProductSKU";
import { PricingRule } from "./PricingRule";

export class AppleTVPricingRule extends PricingRule {
    private static _instance = new AppleTVPricingRule();

    private constructor() {
        super();
    }

    calculate(cart: Product[]) {
        if (cart === null) {
            throw new Error('Cart must not be null');
        }

        // Every third Apple TV (e.g. 3 for the price of 2) should be free otherwise the unit price should be $109.50.
        const appleTVsInCart = cart.filter(item => item.sku() === ProductSKU.appleTV);

        for (let i = 0; i < appleTVsInCart.length; i++) {
            const tv = appleTVsInCart[i];

            if ((i + 1) % 3 === 0) {
                tv.unitPrice = 0;
            } else {
                tv.unitPrice = 109.50;
            }
        }

        // If we have a remainder of 2 Apple TVs (for example: buy 5 Apple TVs, get 6) then add another free Apple TV.
        if (appleTVsInCart.length % 3 === 2) {
            const freeTV = new AppleTV();
            freeTV.unitPrice = 0;
            cart.push(freeTV);
        }
    }

    static getInstance(): AppleTVPricingRule {
        return this._instance;
    }
}