import { Product } from "../Products/Product";

// A strategy for working out the pricing and quantity supplied of a product in a shopping cart.
export abstract class PricingRule {
    abstract calculate(product: Product, cart: Product[]);
}