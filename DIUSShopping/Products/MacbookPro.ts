import { Product } from "./Product";

export class MacbookPro extends Product {
    sku(): string {
        return 'mbp';
    }

    name(): string {
        return 'MacBook Pro';
    }
}