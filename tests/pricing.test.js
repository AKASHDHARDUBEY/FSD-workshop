const { calculateFinalAmount } = require('../src/pricing');

describe('calculateFinalAmount', () => {
    test('check subtotal less than 1000', () => {
        expect(calculateFinalAmount(500)).toBe(500);
        expect(calculateFinalAmount(999)).toBe(999);
    });

    test('check subtotal 1000 or more', () => {
        expect(calculateFinalAmount(1000)).toBe(950);
        expect(calculateFinalAmount(2000)).toBe(1900);
    });

    test('check save10 coupon', () => {
        expect(calculateFinalAmount(500, 'SAVE10')).toBe(450);
        expect(calculateFinalAmount(1000, 'SAVE10')).toBe(850);
        expect(calculateFinalAmount(2000, 'SAVE10')).toBe(1800);
    });

    test('check save10 with small amount', () => {
        expect(calculateFinalAmount(100, 'SAVE10')).toBe(90);
    });

    test('check flat50 coupon', () => {
        expect(calculateFinalAmount(500, 'FLAT50')).toBe(450);
        expect(calculateFinalAmount(1000, 'FLAT50')).toBe(900);
    });

    test('check coupon case insensitive', () => {
        expect(calculateFinalAmount(500, 'save10')).toBe(450);
        expect(calculateFinalAmount(500, 'flat50')).toBe(450);
    });

    test('check invalid subtotal error', () => {
        expect(() => calculateFinalAmount(-100)).toThrow("Invalid subtotal");
        expect(() => calculateFinalAmount('abc')).toThrow("Invalid subtotal");
        expect(() => calculateFinalAmount(NaN)).toThrow("Invalid subtotal");
    });

    test('check invalid coupon error', () => {
        expect(() => calculateFinalAmount(500, 'INVALID')).toThrow("Invalid Coupon");
    });

    test('check result not negative', () => {
        expect(calculateFinalAmount(40, 'FLAT50')).toBe(0);
    });

    test('check decimal rounding', () => {
        expect(calculateFinalAmount(1000.50)).toBe(950.48);
    });
});
