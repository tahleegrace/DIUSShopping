import { AppleTVPricingRule } from "../Pricing/AppleTVPricingRule";
import { IPadPricingRule } from "../Pricing/IPadPricingRule";
import { MacbookProPricingRule } from "../Pricing/MacbookProPricingRule";
import { VGAAdapterPricingRule } from "../Pricing/VGAAdapterPricingRule";
import { AppleTV } from "../Products/AppleTV";
import { IPad } from "../Products/Ipad";
import { MacbookPro } from "../Products/MacbookPro";
import { VGAAdapter } from "../Products/VGAAdapter";
import { Checkout } from "./Checkout";

describe('Checkout', () => {
    describe('when there are 3 apple TVs and 1 VGA adapter', () => {
        let result: string;

        beforeEach(() => {
            const checkout = new Checkout([
                AppleTVPricingRule.getInstance(),
                IPadPricingRule.getInstance(),
                MacbookProPricingRule.getInstance(),
                VGAAdapterPricingRule.getInstance()
            ]);

            checkout.scan(new AppleTV());
            checkout.scan(new AppleTV());
            checkout.scan(new AppleTV());
            checkout.scan(new VGAAdapter());

            result = checkout.total();
        });

        it('should return the correct result', () => {
            expect(result).toEqual('SKUs Scanned: atv, atv, atv, vga Total expected: $249.00');
        });
    });

    describe('when there are 2 apple TVs and 5 iPads', () => {
        let result: string;

        beforeEach(() => {
            const checkout = new Checkout([
                AppleTVPricingRule.getInstance(),
                IPadPricingRule.getInstance(),
                MacbookProPricingRule.getInstance(),
                VGAAdapterPricingRule.getInstance()
            ]);

            checkout.scan(new AppleTV());
            checkout.scan(new IPad());
            checkout.scan(new IPad());
            checkout.scan(new AppleTV());
            checkout.scan(new IPad());
            checkout.scan(new IPad());
            checkout.scan(new IPad());

            result = checkout.total();
        });

        it('should return the correct result', () => {
            expect(result).toEqual('SKUs Scanned: atv, ipd, ipd, atv, ipd, ipd, ipd, atv Total expected: $2,718.95');
        });
    });

    describe('when there is 1 MacBook Pro, 1 VGA adapter and 1 iPad', () => {
        let result: string;

        beforeEach(() => {
            const checkout = new Checkout([
                AppleTVPricingRule.getInstance(),
                IPadPricingRule.getInstance(),
                MacbookProPricingRule.getInstance(),
                VGAAdapterPricingRule.getInstance()
            ]);

            checkout.scan(new MacbookPro());
            checkout.scan(new VGAAdapter());
            checkout.scan(new IPad());

            result = checkout.total();
        });

        it('should return the correct result', () => {
            expect(result).toEqual('SKUs Scanned: mbp, vga, ipd Total expected: $1,949.98');
        });
    });
});