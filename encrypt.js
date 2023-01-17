function encrypt(){
    var texto = document.getElementById("text-encrypt").value.toLowerCase();
    var textoencriptado = texto.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
    
    document.getElementById("person").style.display = "none";
    document.getElementById("title-notfound").style.display = "none";
    document.getElementById("text").innerHTML = textoencriptado;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit"
}

function decrypt(){
    var texto = document.getElementById("text-encrypt").value.toLowerCase();
    var textoencriptado = texto.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
    
    document.getElementById("person").style.display = "none";
    document.getElementById("title-notfound").style.display = "none";
    document.getElementById("text").innerHTML = textoencriptado;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit"
}

function copy(){
    var contenido = document.querySelector("#text").innerHTML;
    var textAreaProv = document.createElement("textarea");
    textAreaProv.value = contenido;
    textAreaProv.setAttribute('readonly', '');
    textAreaProv.style = { position: 'absolute', left: '-9999px' };
    document.body.appendChild(textAreaProv);
    textAreaProv.select();
    document.execCommand("copy");
    alert("Texto copiado");
    document.body.removeChild(textAreaProv);
}