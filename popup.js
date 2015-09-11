
function sortAscend(text) {
    var result;


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

    return resultText || '';
}


// bind event
document.addEventListener('DOMContentLoaded', function() {
    // sort button click then sort
    $('#sortButton').click(onClickSortButton);
});
