import { IPad } from "../Products/Ipad";
import { IPadPricingRule } from "./IPadPricingRule";

describe('IPad pricing rule', () => {
    describe('when the quantity is less than or equal to 4', () => {
        var product: IPad;

        beforeEach(() => {
            product = new IPad();
            product.quantity = 4;

            IPadPricingRule.getInstance().calculate(product, []);
        });

        it('should set the unit price to $549.99', () => {
            expect(product.unitPrice).toEqual(549.99);
        });
    });

    describe('when the quantity is greater than 4', () => {
        var product: IPad;

        beforeEach(() => {
            product = new IPad();
            product.quantity = 5;

            IPadPricingRule.getInstance().calculate(product, []);
        });

        it('should set the unit price to $499.99', () => {
            expect(product.unitPrice).toEqual(499.99);
        });
    });
});