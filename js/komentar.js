let namauser = [];
let teks = [];
let dataHTML = "";
function cekuser(event){
    event.preventDefault();
    let user = document.getElementById("nama").value;
    let komen = document.getElementById("comment").value;

    if (user.length < 1) {
        alert("Silahkan isi nama anda");
    }else if(komen.length < 1){
        alert("Silahkan isi no komen anda");
    }else{
        dataHTML = "";
        namauser.push(user);
        teks.push(komen);
        for(let i = 0; i < namauser.length; i++){
            let komen1 = teks[i];
            dataHTML += "<b>"+namauser[i]+"</b>";
            dataHTML += "<br>";
            dataHTML += komen1;
            dataHTML += "<hr>";          
        }

        document.getElementById("komentar").innerHTML = dataHTML;
        document.getElementById("nama").value = "";
        document.getElementById("comment").value = "";
    }
}