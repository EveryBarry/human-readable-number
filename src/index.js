module.exports = function toReadable(number) {
    const numsMin20 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const numsTens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let num = Math.abs(number).toString().split('');
    const numLength = num.length - 1;
    let out = [];

    if (number < 20) {
        return numsMin20[number]
    }

    if (number > 99) {
        out.push(numsMin20[num[numLength - 2]]);
        out.push('hundred');
    };

    if ((number % 100 > 0) && (number % 100 < 20)) {
        out.push(numsMin20[number % 100]);
    } else {
        if ((number % 100 !== 0)) {
            out.push(numsTens[num[numLength - 1]])
        };
        if (num[numLength] != 0) {
            out.push(numsMin20[num[numLength]])
        }
    };

    return out.join(' ');
}
