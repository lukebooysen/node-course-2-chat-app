const expect = require('expect');

//import isRealString

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var res = isRealString(98);
        expect(res).toBe(false);
    });
    it('should reject non-string values', () => {
        var res = isRealString('    ');
        expect(res).toBe(false);
    });

    it('Should allow string with non-space characters', () => {
        var res = isRealString('  Luke  ');
        expect(res).toBe(true);
    });
});
//is isRealString
//should reject non-string values
//should reject strings with only spaces
// should allow strings with non-space characters