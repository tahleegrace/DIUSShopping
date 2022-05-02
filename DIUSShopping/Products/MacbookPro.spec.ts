import { MacbookPro } from './MacbookPro';

describe('MacBook Pro', () => {
    it('should return the correct string for a specified quantity', () => {
        const product = new MacbookPro();
        product.quantity = 5;
        expect(product.toString()).toEqual('mbp,mbp,mbp,mbp,mbp');
    });
});