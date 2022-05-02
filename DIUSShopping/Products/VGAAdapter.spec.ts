import { VGAAdapter } from './VGAAdapter';

describe('VGA Adapter', () => {
    it('should return the correct string for a specified quantity', () => {
        const product = new VGAAdapter();
        product.quantity = 5;
        expect(product.toString()).toEqual('vga,vga,vga,vga,vga');
    });
});