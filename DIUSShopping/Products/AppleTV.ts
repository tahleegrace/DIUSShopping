import { Product } from "./Product";

export class AppleTV extends Product {
    sku(): string {
        return 'atv';
    }

    name(): string {
        return 'Apple TV';
    }
}