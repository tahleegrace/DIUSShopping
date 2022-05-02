import { Product } from "../Products/Product";
import { PricingRule } from "./PricingRule";

export class IPadPricingRule extends PricingRule {
    ipadSku = 'ipd';

    private constructor() {
        super();
    }

    calculate(cart: Product[]) {
        if (cart === null) {
            throw new Error('Cart must not be null');
        }

        // Find out how many IPads are in the cart.
        const ipadsInCart = cart.filter(item => item.sku() === this.ipadSku);
        let unitPrice: number;

        if (ipadsInCart.length > 4) {
            unitPrice = 499.99;
        } else {
            unitPrice = 549.99;
        }

        ipadsInCart.forEach(item => item.unitPrice = unitPrice);
    }

    static getInstance(): PricingRule {
        return new IPadPricingRule();
    }
}