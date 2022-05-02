import { VGAAdapter } from './VGAAdapter';

describe('VGA Adapter', () => {
    let product: VGAAdapter;

    beforeEach(() => {
        product = new VGAAdapter();
    });

    it('should have the correct SKU', () => {
        expect(product.sku()).toEqual('vga');
    });

    it('should have the correct name', () => {
        expect(product.name()).toEqual('VGA adapter');
    });
});