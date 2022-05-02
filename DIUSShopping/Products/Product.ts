// A product that can be added to a shopping cart.
export abstract class Product {
    abstract sku(): string;
    abstract name(): string;

    // Unit price.
    private _unitPrice: number;

    get unitPrice() {
        return this._unitPrice;
    }

    set unitPrice(value: number) {
        this._unitPrice = value;
    }
}