import { Product } from "./Product";
import { ProductSKU } from "./ProductSKU";

export class AppleTV extends Product {
    sku(): string {
        return ProductSKU.appleTV;
    }

    name(): string {
        return 'Apple TV';
    }
}