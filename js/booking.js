let namauser = [];
let nohp = [];
let dataHTML = "";
function cekuser(event){
    event.preventDefault();
    let user = document.getElementById("nama").value;
    let hp = document.getElementById("hp").value;

    if (user.length < 1) {
        alert("Silahkan isi nama anda");
    }else if(hp.length < 1){
        alert("Silahkan isi no hp anda");
    }else{
        dataHTML = "";
        namauser.push(user);
        nohp.push(hp);
        for(let i = 0; i < namauser.length; i++){
            let hp1 = nohp[i];
            dataHTML += "<tr>";
            dataHTML += "<td>" + namauser[i] + "</td>";
            dataHTML += "<td>" + hp1 + "</td>";
            dataHTML += "</tr>";            
        }

        alert("Terima kasih admin kami akan menghubungi anda.");

        document.getElementById("booking").innerHTML = dataHTML;
        document.getElementById("nama").value = "";
        document.getElementById("hp").value = "";
    }
}