
function NhanVien(_taiKhoan, _tenNV, _email, _matKhau, _ngayLam, _luongCB, _chucVu, _gioLam) {
  this.taiKhoan = _taiKhoan;
  this.tenNV = _tenNV;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCB = _luongCB;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;
  this.luongTong = 0;
  this.xepLoai = "";
  this.tongLuong = function () {
    if (this.chucVu == "Sếp") {
      this.luongTong = (this.luongCB * 3);
    } if (this.chucVu == "Trưởng phòng") {
      this.luongTong = (this.luongCB * 2);
    } if (this.chucVu == "Nhân viên") {
      this.luongTong = this.luongCB;

    }

  }
  this.xepLoaiNhanVien = function () {
    if (this.gioLam >= 192) {
      this.xepLoai = "Xuất sắc";
    } if (this.gioLam >= 176 && this.gioLam < 192) {
      this.xepLoai = "Giỏi";
    } if (this.gioLam >= 160 && this.gioLam < 176) {
      this.xepLoai = "Khá";
    } if (this.gioLam < 160) {
      this.xepLoai = "Trung bình";
    }
  }
}
