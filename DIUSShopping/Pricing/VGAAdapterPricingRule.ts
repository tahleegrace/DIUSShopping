import { Product } from "../Products/Product";
import { ProductSKU } from "../Products/ProductSKU";
import { PricingRule } from "./PricingRule";

export class VGAAdapterPricingRule extends PricingRule {
    private static _instance = new VGAAdapterPricingRule();

    private constructor() {
        super();
    }

    calculate(cart: Product[]) {
        if (cart === null) {
            throw new Error('Cart must not be null');
        }

        // Find the total amount of MacBooks in the cart. If we have more VGA adapters than MacBooks, then charge for the additional adapters.
        const totalMacbooksInCart = cart.filter(item => item.sku() === ProductSKU.macbookPro).length;
        const vgaAdaptersInCart = cart.filter(item => item.sku() === ProductSKU.vgaAdapter);

        // Free adapters.
        for (let i = 0; (i < totalMacbooksInCart) && (i < vgaAdaptersInCart.length); i++) {
            vgaAdaptersInCart[i].unitPrice = 0;
        }

        // Charged for adapters.
        for (let i = totalMacbooksInCart; i < vgaAdaptersInCart.length; i++) {
            vgaAdaptersInCart[i].unitPrice = 30.00;
        }
    }

    static getInstance(): VGAAdapterPricingRule {
        return this._instance;
    }
}