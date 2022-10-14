const reader = new FileReader();
$("#en").click(function(){
    var key=$("#key").val()
    
    reader.addEventListener('extcarga', function() {
        document.getElementById('text').innerText = this.result;
    });
    console.log(key)
    document.getElementById('text').files[0].text().then(PromiseResult => {
        var msg=PromiseResult
        console.log(msg)
        var en= CryptoJS.AES.encrypt(msg, key)
        $("#res").text(en)
        download("archviocifrado.txt",en)
    })
})
function hex2a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}
$("#de").click(function(){
    var key=$("#key").val()
    
    reader.addEventListener('extcarga', function() {
        document.getElementById('text').innerText = this.result;
    });
    console.log(key)
    document.getElementById('text').files[0].text().then(PromiseResult => {
        var msg=PromiseResult
        console.log(msg)
        var de= CryptoJS.AES.decrypt(msg, key)
        
        $("#res").text(de)
        document.getElementById('res').innerHTML = de.toString(CryptoJS.enc.Utf8);
        download("textosinformatodescifrado.txt",de)
    })
})
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}