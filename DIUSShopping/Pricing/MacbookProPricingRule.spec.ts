import { MacbookPro } from "../Products/MacbookPro";
import { Product } from "../Products/Product";
import { VGAAdapter } from "../Products/VGAAdapter";
import { MacbookProPricingRule } from "./MacbookProPricingRule";

describe('MacBook Pro pricing rule', () => {
    describe('when there is one MacBook Pro and one VGA adapter in the cart', () => {
        let cart: Product[];
        let vgaAdapter: VGAAdapter;
        let macbookPro: MacbookPro;

        beforeEach(() => {
            vgaAdapter = new VGAAdapter();
            vgaAdapter.unitPrice = 30.00;

            macbookPro = new MacbookPro();

            cart = [vgaAdapter, macbookPro];

            MacbookProPricingRule.getInstance().calculate(cart);
        });

        it('should set the unit price of the VGA adapter to $0.00', () => {
            expect(vgaAdapter.unitPrice).toEqual(0);
        });

        it('should set the price of the MacBook Pro to $1399.99', () => {
            expect(macbookPro.unitPrice).toEqual(1399.99);
        });
    });

    describe('when there is one MacBook Pro and zero VGA adapters in the cart', () => {
        let cart: Product[];

        beforeEach(() => {
            cart = [new MacbookPro()];

            MacbookProPricingRule.getInstance().calculate(cart);
        });

        it('should add a new VGA adapter to the cart with a price of $0.00', () => {
            expect(cart.length).toEqual(2);

            const vgaAdapter = cart[1];
            expect(vgaAdapter.unitPrice).toEqual(0);
        });
    });

    describe('when there is one MacBook Pro and two VGA adapters in the cart', () => {
        let cart: Product[];
        let firstVgaAdapter: VGAAdapter;
        let secondVgaAdapter: VGAAdapter;

        beforeEach(() => {
            firstVgaAdapter = new VGAAdapter();
            secondVgaAdapter = new VGAAdapter();

            cart = [firstVgaAdapter, secondVgaAdapter, new MacbookPro()];

            MacbookProPricingRule.getInstance().calculate(cart);
        });

        it('should set the unit price of the first VGA adapter to $0.00', () => {
            expect(firstVgaAdapter.unitPrice).toEqual(0);
        });
    });
});