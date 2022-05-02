import { IPad } from './IPad';

describe('IPad', () => {
    let product: IPad;

    beforeEach(() => {
        product = new IPad();
    });

    it('should have the correct SKU', () => {
        expect(product.sku()).toEqual('ipd');
    });

    it('should have the correct name', () => {
        expect(product.name()).toEqual('Super iPad');
    });
});