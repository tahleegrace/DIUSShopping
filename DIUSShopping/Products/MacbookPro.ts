import { Product } from "./Product";
import { ProductSKU } from "./ProductSKU";

export class MacbookPro extends Product {
    sku(): string {
        return ProductSKU.macbookPro;
    }

    name(): string {
        return 'MacBook Pro';
    }
}