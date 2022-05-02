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

    // The pricing rule to use.
    // Using the Bridge design pattern (https://en.wikipedia.org/wiki/Bridge_pattern)
    _pricingRule: PricingRule;

    get pricingRule() {
        return this._pricingRule;
    }

    set pricingRule(value: PricingRule) {
        this._pricingRule = value;
    }
}