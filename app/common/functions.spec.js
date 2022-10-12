import { shuffle,checkSelection } from "./Functions";

describe('app/common/function', () => {
    test('should shuffle the given array', () => {
        let array = ['a','b','c']
        expect(shuffle(array)).not.toBe(array)
    });

    test('should check ', () => {
        let item = 'Seven'
        let item2 = 'Eight'
        let selected = 'Eight'
        expect(checkSelection(item,selected)).toBe(false)
        expect(checkSelection(item2,selected)).toBe(true)
        expect(checkSelection()).toBe(false)
    });
});