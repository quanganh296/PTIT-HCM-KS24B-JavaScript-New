
var char =prompt("Nhập vào một ký tự bất kì: ");
var isLetter =true;

for(var i=0; i<char.length; i++){
    var c = char[i];
    if(!((c>='a' && c<='z') ||(c>='A' && c<='Z'))){
        isLetter = false;
    break;
    }
}

if (isLetter)
{

    console.log("Ký tự " + char + " là chữ cái.");

}
else {
    console.log("Ký tự " + char + " không phải là chữ cái.");

};