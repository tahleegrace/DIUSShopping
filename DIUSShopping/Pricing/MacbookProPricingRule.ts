import { Product } from "../Products/Product";
import { ProductSKU } from "../Products/ProductSKU";
import { VGAAdapter } from "../Products/VGAAdapter";
import { PricingRule } from "./PricingRule";

export class MacbookProPricingRule extends PricingRule {
    private static _instance = new MacbookProPricingRule();

    private constructor() {
        super();
    }

    calculate(cart: Product[]) {
        if (cart === null) {
            throw new Error('Cart must not be null');
        }

        // Find the total amount of VGA adapters in the cart. If we have less VGA adapters than Macbook Pros, then add additional free adapters.
        // Otherwise make the same amount of VGA adapters free.
        const macbooksInCart = cart.filter(item => item.sku() === ProductSKU.macbookPro);
        const vgaAdaptersInCart = cart.filter(item => item.sku() === ProductSKU.vgaAdapter);

        if (macbooksInCart.length > vgaAdaptersInCart.length) {
            const numberOfVGAAdaptersToAdd = macbooksInCart.length - vgaAdaptersInCart.length;

            for (let i = 0; i < numberOfVGAAdaptersToAdd; i++) {
                const adapter = new VGAAdapter();
                adapter.unitPrice = 0;
                cart.push(adapter);
            }
        }

        // Make sure at least the same amount of VGA adapters as Macbook Pros are free in the cart.
        for (let i = 0; (i < macbooksInCart.length) && (i < vgaAdaptersInCart.length); i++) {
            vgaAdaptersInCart[i].unitPrice = 0;
        }

        // Set the price of each MacBook Pro to $1399.99.
        macbooksInCart.forEach(item => item.unitPrice = 1399.99);
    }

    static getInstance(): MacbookProPricingRule {
        return this._instance;
    }
}