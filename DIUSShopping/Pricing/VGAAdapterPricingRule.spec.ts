import { MacbookPro } from "../Products/MacbookPro";
import { Product } from "../Products/Product";
import { VGAAdapter } from "../Products/VGAAdapter";
import { VGAAdapterPricingRule } from "./VGAAdapterPricingRule";

describe('VGA adapter pricing rule', () => {
    describe('when there is one MacBook Pro and one VGA adapter in the cart', () => {
        let cart: Product[];
        let vgaAdapter: VGAAdapter;

        beforeEach(() => {
            vgaAdapter = new VGAAdapter();

            cart = [vgaAdapter, new MacbookPro()];

            VGAAdapterPricingRule.getInstance().calculate(cart);
        });

        it('should set the unit price of the VGA adapter to $0.00', () => {
            expect(vgaAdapter.unitPrice).toEqual(0);
        });
    });

    describe('when there are zero MacBook Pros and one VGA adapter in the cart', () => {
        let cart: Product[];
        let vgaAdapter: VGAAdapter;

        beforeEach(() => {
            vgaAdapter = new VGAAdapter();

            cart = [vgaAdapter];

            VGAAdapterPricingRule.getInstance().calculate(cart);
        });

        it('should set the unit price of the VGA adapter to $30.00', () => {
            expect(vgaAdapter.unitPrice).toEqual(30.00);
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

            VGAAdapterPricingRule.getInstance().calculate(cart);
        });

        it('should set the unit price of the first VGA adapter to $0.00', () => {
            expect(firstVgaAdapter.unitPrice).toEqual(0);
        });

        it('should set the unit price of the second VGA adapter to $30.00', () => {
            expect(secondVgaAdapter.unitPrice).toEqual(30.00);
        });
    });
});