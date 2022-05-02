// A strategy for working out the pricing and quantity supplied of a product in a shopping cart.
abstract class PricingStrategy {
    // The items in the shopping cart.
    _cart: Product[];

    get cart() {
        return this._cart;
    }

    set cart(value: Product[]) {
        this._cart = value;
    }

    abstract unitPrice(): number;
    abstract totalPrice(): number;
    abstract quantity(): number;
    abstract accessories(): Product[];
    abstract getInstance(): PricingStrategy;
}