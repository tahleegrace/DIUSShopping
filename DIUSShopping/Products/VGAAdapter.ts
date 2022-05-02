import { Product } from "./Product";
import { ProductSKU } from "./ProductSKU";

export class VGAAdapter extends Product {
    sku(): string {
        return ProductSKU.vgaAdapter;
    }

    name(): string {
        return 'VGA adapter';
    }
}