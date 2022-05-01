// A strategy for working out the pricing and quantity supplied of a product in a shopping cart.
abstract class PricingStrategy {
    abstract unitPrice(): number;
    abstract totalPrice(): number;
    abstract accessories(): Product[];
    abstract getInstance(): PricingStrategy;
}