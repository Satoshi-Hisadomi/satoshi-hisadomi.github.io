


function buttonClick(){
    let checkValue = "";
    let likeRadio = document.getElementsByName("like");
    let len = likeRadio.length;

    for (let i = 0; i < len; i++){
        if (likeRadio.item(i).checked){
            checkValue = likeRadio.item(i).value;
        }
    }
    console.log("選択されているのは"+checkValue+"です");
    if (checkValue == "food"){
        alert("好きな食べ物は豚骨らーめんです🍜");
    }else if(checkValue == "drink"){
        alert("好きな飲み物はビールです🍺");
    }else if(checkValue == "sport"){
        alert("好きなスポーツはサッカー⚽️ テニス🎾 ボウリングです🎳");
    }else if(checkValue == "color"){
        alert("好きな色は緑です🟢");
    }else if(checkValue == "artist"){
        alert("好きなアーティストは back number です🎸");
    }else if(checkValue == "actor"){
        alert("好きな女優は吉岡里帆です");
    }else if(checkValue == "brand"){
        alert("好きなブランドはBurberryです");
    }else if(checkValue == "manga"){
        alert("好きな漫画はHUNTER×HUNTERです");
    }else{
        alert("選択出来ていません");
    }
}