import { AppleTV } from './AppleTV';

describe('Apple TV', () => {
    it('should return the correct string for a specified quantity', () => {
        const product = new AppleTV();
        product.quantity = 5;
        expect(product.toString()).toEqual('atv,atv,atv,atv,atv');
    });
});