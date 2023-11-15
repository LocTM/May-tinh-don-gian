let hienThi = document.getElementById("hienThi")
// hien thi ra input
function inputValue(value){
    hienThi.value += value;
}
//tinh toan
function result() {
    let result = eval(hienThi.value);
    hienThi.value = result;
}
//xoa
function xoa() {
    hienThi.value="";
}