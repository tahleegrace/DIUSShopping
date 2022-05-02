import { Product } from "./Product";

export class IPad extends Product {
    sku(): string {
        return 'ipd';
    }

    name(): string {
        return 'Super iPad';
    }
}