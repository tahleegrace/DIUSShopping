import { PricingRule } from "../Pricing/PricingRule";
import { Product } from "../Products/Product";

export class Checkout {
    private _cart: Product[] = [];
    private _pricingRules: PricingRule[];

    constructor(rules: PricingRule[]) {
        this._pricingRules = rules;
    }

    scan(product: Product) {
        if (product === null) {
            throw new Error('Product cannot be null.');
        }

        this._cart.push(product);
    }

    total(): string {
        // Run each pricing rule over the cart.
        this._pricingRules.forEach(rule => rule.calculate(this._cart));

        // Get all of the SKUs.
        const skus = this._cart.map(product => product.sku()).join(', ');

        // Get the total price.
        const totalPrice = this._cart.map(product => product.unitPrice)
            .reduce((accumulator, unitPrice) => accumulator + unitPrice);

        return `SKUs Scanned: ${skus} Total expected: ${totalPrice.toLocaleString('en-AU', { style: 'currency', currency: 'AUD', minimumFractionDigits: 2 })}`;
    }
}