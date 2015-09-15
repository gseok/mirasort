
function _ascend(a, b) {
    console.log('sort ascend');
    var i;
    var length;
    var aChar;
    var bChar;
    var aCode;
    var bCode;
    var result = 0;

    // get short length
    length = (a.length >= b.length) ? b.length : a.length;

    // exceptional case
    // dojo/text!
    // xstyle/css!
    if (a.includes('dojo/text') || a.includes('xstyle/css!')) {
        if (!b.includes('dojo/text!') || !b.includes('xstyle/css!')) {
            return 1;
        }
    }
    if (b.includes('dojo/text') || b.includes('xstyle/css!')) {
        if (!a.includes('dojo/text!') || !a.includes('xstyle/css!')) {
            return -1;
        }
    }

    // dojo/domReady!
    if (a.includes('dojo/domReady!')) {
        return 1;
    }
    if (b.includes('dojo/domReady!')) {
        return -1;
    }

    // trim space and change lower case
    a = a.trim().toLowerCase();
    b = b.trim().toLowerCase();

    // check
    for (i = 0; i < length; i++) {
        aChar = a.charAt(i);
        bChar = b.charAt(i);
        aCode = aChar.charCodeAt();
        bCode = bChar.charCodeAt();

        // A: 65, Z:90, a:97, z:122
        if (aCode === bCode) {
            continue;
        } else if (aCode < bCode) {
            result = -1;
            break;
        } else if (aCode > bCode) {
            result = 1;
            break;
        }
    }
    return result;
}

function sortAscend(text) {
    var texts;
    var result = '';

    if (text) {
        texts = text.split('\n');
        texts.sort(_ascend);
    }

    // reassemble \n
    while(texts && texts.length > 0) {
        result += texts.shift() + '\n';
    }

    return result;
}

// sort buttonclick handler
function onClickSortButton() {
    var srcText;
    var resultText;

    // get data
    srcText = $('#textSource').val();

    // srcText is exsit then 
    if (srcText) {
        resultText = sortAscend(srcText);
    }

    // set text
    $('#textResult').val(resultText || '');
}


// bind event
document.addEventListener('DOMContentLoaded', function() {
    // sort button click then sort
    $('#sortButton').click(onClickSortButton);
});
