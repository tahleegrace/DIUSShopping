import { AppleTV } from "../Products/AppleTV";
import { Product } from "../Products/Product";
import { AppleTVPricingRule } from "./AppleTVPricingRule";

describe('Apple TV pricing rule', () => {
    describe('when there is 1 Apple TV in the cart', () => {
        let cart: Product[];
        let tv: AppleTV;

        beforeEach(() => {
            tv = new AppleTV();
            cart = [tv];

            AppleTVPricingRule.getInstance().calculate(cart);
        });

        it('should set the price of the TV to $109.50', () => {
            expect(tv.unitPrice).toEqual(109.50);
        });
    });

    describe('when there are 2 Apple TVs in the cart', () => {
        let cart: Product[];
        let firstTV: AppleTV;
        let secondTV: AppleTV;

        beforeEach(() => {
            firstTV = new AppleTV();
            secondTV = new AppleTV();
            cart = [firstTV, secondTV];

            AppleTVPricingRule.getInstance().calculate(cart);
        });

        it('should set the price of the first TV to $109.50', () => {
            expect(firstTV.unitPrice).toEqual(109.50);
        });

        it('should set the price of the second TV to $109.50', () => {
            expect(secondTV.unitPrice).toEqual(109.50);
        });

        it('should add a free TV to the cart', () => {
            expect(cart.length).toEqual(3);

            const freeTV = cart[2];
            expect(freeTV.unitPrice).toEqual(0);
        });
    });

    describe('when there are 3 Apple TVs in the cart', () => {
        let cart: Product[];
        let firstTV: AppleTV;
        let secondTV: AppleTV;
        let thirdTV: AppleTV;

        beforeEach(() => {
            firstTV = new AppleTV();
            secondTV = new AppleTV();
            thirdTV = new AppleTV();
            cart = [firstTV, secondTV, thirdTV];

            AppleTVPricingRule.getInstance().calculate(cart);
        });

        it('should set the price of the first TV to $109.50', () => {
            expect(firstTV.unitPrice).toEqual(109.50);
        });

        it('should set the price of the second TV to $109.50', () => {
            expect(secondTV.unitPrice).toEqual(109.50);
        });

        it('should set the price of the third TV to $0.00', () => {
            expect(thirdTV.unitPrice).toEqual(0);
        });
    });
});