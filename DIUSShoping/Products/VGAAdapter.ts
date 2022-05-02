import { Product } from "./Product";

export class VGAAdapter extends Product {
    sku(): string {
        return 'vga';
    }

    name(): string {
        return 'VGA adapter';
    }
}