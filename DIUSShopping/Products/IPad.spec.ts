import { IPad } from './IPad';

describe('IPad', () => {
    it('should return the correct string for a specified quantity', () => {
        const product = new IPad();
        product.quantity = 5;
        expect(product.toString()).toEqual('ipd,ipd,ipd,ipd,ipd');
    });
});