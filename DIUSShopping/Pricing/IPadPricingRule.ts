import { Product } from "../Products/Product";
import { PricingRule } from "./PricingRule";

export class IPadPricingRule extends PricingRule {
    private constructor() {
        super();
    }

    calculate(product: Product, cart: Product[]) {
        if (product === null) {
            throw new Error('product must not be null');
        }

        if (cart === null) {
            throw new Error('cart must not be null');
        }

        if (product.quantity > 4) {
            product.unitPrice = 499.99;
        } else {
            product.unitPrice = 549.99;
        }
    }

    static getInstance(): PricingRule {
        return new IPadPricingRule();
    }
}