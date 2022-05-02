// A product that can be added to a shopping cart.
export abstract class Product {
    abstract sku(): string;
    abstract name(): string;

    // How many products are purchased.
    private _quantity: number;

    get quantity() {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }

    // Unit price.
    private _unitPrice: number;

    get unitPrice() {
        return this._unitPrice;
    }

    set unitPrice(value: number) {
        this._unitPrice = value;
    }

    totalPrice() {
        return this.unitPrice * this.quantity;
    }

    toString() {
        return Array(this.quantity).fill(this.sku()).join(',');
    }
}