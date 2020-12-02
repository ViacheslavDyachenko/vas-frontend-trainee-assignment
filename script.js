const btn = document.getElementById('btnForm');
const imgBanner = document.getElementById('imgBanner');
const textBanner = document.getElementById('textBanner');
const colorBanner = document.getElementById('colorBanner');
const linkBanner = document.getElementById('linkBanner')
const linkBannerImg = document.getElementById("screenBtn");
const massage = document.getElementById('massage');

const color = document.getElementById('Color');
color.addEventListener("input", watchColorPicker, false);
color.addEventListener("change", watchColorPicker, false);
function watchColorPicker(event) {
    color.style.color = event.target.value;
    };

btn.onclick = () => {
    const bannerForm = document.forms.configBanner;
    const img = configBanner.img.value;
    const text = configBanner.text.value;
    const BGC = configBanner.Color.style.color;
    const link = configBanner.link.value;
    imgBanner.src = img;
    textBanner.innerHTML = text;
    colorBanner.style.backgroundImage = 'linear-gradient(to top, ' + BGC + ', transparent)';
    linkBanner.href = link;
    html2canvas(document.querySelector("#banner")).then(function(canvas) {
        var dataURL = canvas.toDataURL("image/png");
        imgPNG = dataURL.replace("image/png", "application/octet");
        linkBannerImg.href = imgPNG;
        massage.classList.remove("error");
        massage.innerText = '';
    });
}

document.getElementById("screenBtn").onclick = function() {
    if(linkBannerImg.href === ""){
        massage.classList.add("error");
        massage.innerText = 'Перед сохранением картинки необходимо сохранить конфигурацию(нажать ОТПРАВИТЬ)';
    }
}

document.getElementById("copyHTML").onclick = function() {
    const bannerHTML = document.getElementById('bannerHTML');
    bannerHTMLStr = bannerHTML.innerHTML + `
<style>
    .bannerBlock {
        width: 60vh;
        height: 90vh;
        background-color: #ddd;
        border-radius: 15px;
        -webkit-border-radius: 15px;
        -moz-border-radius: 15px;
        -ms-border-radius: 15px;
        -o-border-radius: 15px;
        margin-top: 50px;
        
    }
    .bannerLink {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-direction: column;
        position: relative;
        text-align: center;
        height: 100%;
        border-radius: 15px;
        -webkit-border-radius: 15px;
        -moz-border-radius: 15px;
        -ms-border-radius: 15px;
        -o-border-radius: 15px;
        text-decoration: none;
        font-family: sans-serif;
        font-size: 25px;
        color: black;
        line-height: 30px;
    }
    .bannerImg {
        width: 100%;
        height: auto;
        position: absolute;
        top: 0;
        border-radius: 15px;
        -webkit-border-radius: 15px;
        -moz-border-radius: 15px;
        -ms-border-radius: 15px;
        -o-border-radius: 15px;
        max-height: 90vh;
        z-index: 1;
    }
    .gradient {
        height: 100%;
        width: 100%;
        border-radius: 15px;
        -webkit-border-radius: 15px;
        -moz-border-radius: 15px;
        -ms-border-radius: 15px;
        -o-border-radius: 15px;
        background-image: linear-gradient(to top, #444, transparent);
        z-index: 2;
        position: absolute;
    }
    .bannerText {
        z-index: 3;
        margin-bottom: 100px;
        max-height: 90px;
        overflow: hidden;
        position: absolute;
    }
</style>`
    navigator.clipboard.writeText(bannerHTMLStr);
    massage.classList.remove("error");
    massage.innerText = 'Разметка успешно сохранена в буфер обмена';
}

function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}

document.getElementById("copyJSON").onclick = function() {
    let $form = $("#configBanner");
    let data = getFormData($form);
    dataJSON = JSON.stringify(data);
    console.log(dataJSON);
    navigator.clipboard.writeText(dataJSON);
    massage.classList.remove("error");
    massage.innerText = 'JSON строка успешно сохранена в буфер обмена';
}