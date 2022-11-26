function DanhSachNhanVien() {
  this.arr = [];
  this.themNV = function (nv) {
    this.arr.push(nv)
  }

  this.timViTriNV = function (taiKhoan) {
    var index = -1;
    for (var i = 0; i <= this.arr.length; i++) {
      var nv = this.arr[i]
      if (nv.taiKhoan === taiKhoan) {
        index = i;
        break;
      }
    }
    return index;
  }
  this.xoaNV = function (taiKhoan) {
    var index = this.timViTriNV(taiKhoan);
    if (index !== -1) {

      this.arr.splice(index, 1);
    }
  }
  this.layThongTinChiTiet = function (taiKhoan) {
    var index = this.timViTriNV(taiKhoan);
    if (index !== -1) {
      var nv = this.arr[index];
      return this.arr[index];
    }
  }
  this.capNhatNV = function (nv) {
    var index = this.timViTriNV(nv.taiKhoan);
    if (index !== -1) {
      this.arr[index] = nv;
    }
  }
  this.timNV = function name(keyword) {
    var mangTimKiem = [];
    for (var i = 0; i < this.arr.length; i++) {
      var nv = this.arr[i];
      var xepLoaiLowerCase = nv.xepLoai.toLowerCase()
      var keywordLowerCase = keyword.toLowerCase()
      if (xepLoaiLowerCase.indexOf(keywordLowerCase) !== -1) {
        mangTimKiem.push(nv);
      }
    }
    return mangTimKiem
  }
}