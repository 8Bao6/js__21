function Validation() {
  this.kiemTrarong = function (value, errorID) {
    if (value === "") {

      getEle(errorID).style.display = "block";
      return false;
    }
    getEle(errorID).style.display = "none";
    return true;

  }
  this.kiemTraDoDai = function (value, errorID, min, max, mess) {
    if (min <= value.trim().length && value.trim().length <= max) {
      getEle(errorID).style.display = "none";

      return true;
    }
    getEle(errorID).style.display = "block";
    getEle(errorID).innerHTML = mess;
    return false;
  }
  this.kiemTraChuoiKyTu = function name(value, errorID) {
    var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(letter)) {
      getEle(errorID).style.display = "none";
      return true
    }
    getEle(errorID).style.display = "block";

    return false
  }
  this.kiemTraEmail = function name(value, errorID, mess) {
    var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(letter)) {
      getEle(errorID).style.display = "none"
      return true
    }
    getEle(errorID).style.display = "block"
    getEle(errorID).innerHTML = mess;
    return false
  }
  this.kiemTraMatKhau = function name(value, errorID, mess) {
    var letter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if (value.match(letter)) {
      getEle(errorID).style.display = "none";
      return true
    }
    getEle(errorID).style.display = "block";
    getEle(errorID).innerHTML = mess;
    return false
  }
  this.kiemTraChucVu = function name(idSelect, errorID) {
    if (getEle(idSelect).selectedIndex !== 0) {
      getEle(errorID).style.display = "none";
      return true
    }
    getEle(errorID).style.display = "block";
    return false
  }

  this.kiemTraLuong = function name(value, errorID, mess) {
    if (1000000 <= value && value <= 20000000) {
      getEle(errorID).style.display = "none";
      return true;
    }
    getEle(errorID).style.display = "block";
    getEle(errorID).innerHTML = mess;
    return false;
  }
  this.kiemTraNgayLam = function name(value, errorID, mess) {
    if (80 <= value && value <= 200) {
      getEle(errorID).style.display = "none"
      return true
    }
    getEle(errorID).style.display = "block";
    getEle(errorID).innerHTML = mess;
    return false
  }
  this.kiemTraTrungTK = function name(value, errorID, mess, data) {
    var exist = false;
    for (var i = 0; i < data.length; i++) {
      var nv = data[i];
      if (nv.taiKhoan == value) {
        exist = true;
        break;
      }
    }
    if (exist) {
      getEle(errorID).style.display = "block";
      getEle(errorID).innerHTML = mess;
      return false
    }
    getEle(errorID).style.display = "none";
    return true
  }
}