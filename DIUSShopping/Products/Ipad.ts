import { Product } from "./Product";
import { ProductSKU } from "./ProductSKU";

export class IPad extends Product {
    sku(): string {
        return ProductSKU.iPad;
    }

    name(): string {
        return 'Super iPad';
    }
}