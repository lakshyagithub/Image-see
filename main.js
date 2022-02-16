function Showimage() {
    data_uri = document.getElementById("file").value;
    document.getElementById("image").innerHTML='<img src="'+data_uri+'"/>'
}