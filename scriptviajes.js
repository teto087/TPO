function $(element_id, src){
    return document.getElementById(element_id);
}

function setSrc(element_id, src){
    var element = $(element_id);
    element.src = src;
}