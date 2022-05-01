// A product that can be added to a shopping cart.
abstract class Product {
    abstract sku(): string;
    abstract name(): string;

    // How many products are purchased.
    _quantity: number;

    get quantity() {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }

    // The pricing stategy to use.
    // Using the Bridge design pattern (https://en.wikipedia.org/wiki/Bridge_pattern)
    _pricingStrategy: PricingStrategy;

    get pricingStrategy() {
        return this._pricingStrategy;
    }

    set pricingStrategy(value: PricingStrategy) {
        this._pricingStrategy = value;
    }
}