function matchImgId(itemId, a){
    var condition = false;
    var b = 0;
    while(condition == false || b > 3) {
        if(itemId.includes.Asset[b].sys.id == itemId.items[a].fields.imagen.sys.id){
            condition = true;
            var posImg = b;
        }else{
            b ++;
        }
    }
    return posImg;
}

function putProyect(itemId) {
    var tempProyect = document.querySelector("#template-proyect");
    var artProyect = tempProyect.content.querySelector(".article-proyect");
    var insertar = document.querySelector(".content-articles");
    for (let a = 0; a < 3; a++) {    
        artProyect.querySelector(".image-proyect").setAttribute("src", itemId.includes.Asset[matchImgId(itemId, a)].fields.file.url);
        artProyect.querySelector(".title-proyect").textContent = itemId.items[a].fields.titulo;
        artProyect.querySelector(".desc-proyect").textContent = itemId.items[a].fields.descripcion;
        artProyect.querySelector(".link-proyect").setAttribute("href", itemId.items[a].fields.url);
        var clone = document.importNode(tempProyect.content, true)
        insertar.appendChild(clone);
    }
}

function getProyect() {
    fetch(
        "https://cdn.contentful.com/spaces/y738tbpa37ch/environments/master/entries?access_token=Lxz1vntmiaGRlPtpIfLGtL3Fv-ioO1c-vmAbAIlDC2U"
    )
        .then((item) => {
            return item.json();
        })
        .then((itemWithInf) => {
            putProyect(itemWithInf)
        });
    
}

function main() {
    getProyect();
}

main();

