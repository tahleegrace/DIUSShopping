import { MacbookPro } from './MacbookPro';

describe('MacBook Pro', () => {
    let product: MacbookPro;

    beforeEach(() => {
        product = new MacbookPro();
    });

    it('should have the correct SKU', () => {
        expect(product.sku()).toEqual('mbp');
    });

    it('should have the correct name', () => {
        expect(product.name()).toEqual('MacBook Pro');
    });
});