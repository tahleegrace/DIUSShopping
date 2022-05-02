import { AppleTV } from './AppleTV';

describe('Apple TV', () => {
    let product: AppleTV;

    beforeEach(() => {
        product = new AppleTV();
    });

    it('should have the correct SKU', () => {
        expect(product.sku()).toEqual('atv');
    });

    it('should have the correct name', () => {
        expect(product.name()).toEqual('Apple TV');
    });
});