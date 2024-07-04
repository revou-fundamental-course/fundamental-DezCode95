// username interactive
function validateForm() {
    const name = document.forms["message-form"]["name-input"].value
    if (name == ""){
        document.getAnimations("errorrname").innerHTML = "Tidak Boleh Kosong"

        return false 
    }
    document.getElementById("name").innerHTML = name;
        document.getElementById("errorrname").innerHTML = "";
    setName (name);
    return false;
}


function setName (name) {
    document.getElementById("name").innerHTML = name;
    document.getElementById("errorrname").innerHTML = ""

}

