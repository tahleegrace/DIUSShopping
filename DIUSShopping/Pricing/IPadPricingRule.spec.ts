import { IPad } from "../Products/Ipad";
import { Product } from "../Products/Product";
import { IPadPricingRule } from "./IPadPricingRule";

describe('iPad pricing rule', () => {
    describe('when the quantity is less than or equal to 4', () => {
        var cart: Product[];

        beforeEach(() => {
            cart = Array(4).fill(new IPad());

            IPadPricingRule.getInstance().calculate(cart);
        });

        it('should set the unit price for each iPad to $549.99', () => {
            cart.forEach(item => {
                expect(item.unitPrice).toEqual(549.99);
            });
        });
    });

    describe('when the quantity is greater than 4', () => {
        var cart: Product[];

        beforeEach(() => {
            cart = Array(5).fill(new IPad());

            IPadPricingRule.getInstance().calculate(cart);
        });

        it('should set the unit price for each iPad to $499.99', () => {
            cart.forEach(item => {
                expect(item.unitPrice).toEqual(499.99);
            });
        });
    });
});