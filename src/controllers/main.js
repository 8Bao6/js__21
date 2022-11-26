function getEle(id) {
  return document.getElementById(id);
}

var dsnv = new DanhSachNhanVien();

var kiemTra = new Validation();
function layThongTin() {
  var taiKhoan = getEle("tknv").value;
  var tenNV = getEle("tenNV").value;
  var email = getEle("email").value;
  var matKhau = getEle("password").value;
  var ngayLam = getEle("datepicker").value;
  var luongCB = getEle("luongCB").value;
  var chucVu = getEle("chucvu").value;
  var gioLam = getEle("gioLam").value;
  var isValid = true;
  isValid &= kiemTra.kiemTrarong(taiKhoan, "errorTaiKhoan") && kiemTra.kiemTraDoDai(taiKhoan, "errorTaiKhoan", 4, 6, "(*)Vui lòng nhập tài khoản từ 4-6 ký tự") && kiemTra.kiemTraTrungTK(taiKhoan, "errorTaiKhoan", "(*)Tài khoản đã tồn tại", dsnv.arr);
  isValid &= kiemTra.kiemTrarong(tenNV, "errorTenNV") && kiemTra.kiemTraChuoiKyTu(tenNV, "errorTenNV");
  isValid &= kiemTra.kiemTrarong(email, "errorEmail") && kiemTra.kiemTraEmail(email, "errorEmail", "(*)Vui lòng nhập email đúng định dạng");
  isValid &= kiemTra.kiemTrarong(matKhau, "errorMatKhau") && kiemTra.kiemTraDoDai(matKhau, "errorMatKhau", 6, 20, "(*)Vui lòng nhập mật khẩu từ 6-10 ký tự") && kiemTra.kiemTraMatKhau(matKhau, "errorMatKhau", "(*)Vui lòng kiểm tra lại mật khẩu");
  isValid &= kiemTra.kiemTrarong(ngayLam, "errorNgayLam");
  isValid &= kiemTra.kiemTrarong(luongCB, "errorLuongCB") && kiemTra.kiemTraLuong(luongCB, "errorLuongCB", "(*)Vui lòng kiểm tra lại lương");
  isValid &= kiemTra.kiemTraChucVu("chucvu", "errorChucVu");
  isValid &= kiemTra.kiemTrarong(gioLam, "errorGioLam") && kiemTra.kiemTraNgayLam(gioLam, "errorGioLam", "(*)Vui lòng nhập giờ làm hợp lệ");



  if (!isValid) return;
  var nv = new NhanVien(taiKhoan, tenNV, email, matKhau, ngayLam, luongCB, chucVu, gioLam);
  nv.xepLoaiNhanVien();
  nv.tongLuong();

  return nv;

}
document.getElementById("btnThemNV").onclick = function () {
  var nv = layThongTin();
  if (nv) {
    dsnv.themNV(nv);
    showTable(dsnv.arr);
    console.log(dsnv.arr);

    setLocalStorage();
  }
};



function showTable(data) {
  var content = "";

  for (var i = 0; i < data.length; i++) {
    var nv = data[i];
    content += `<tr>
    <td>${nv.taiKhoan}</td>
    <td>${nv.tenNV}</td>
    <td>${nv.email}</td>
    <td>${nv.ngayLam}</td>
    <td>${nv.chucVu}</td>
    <td>${nv.luongTong}</td>
    <td>${nv.xepLoai}</td>
    <td>
    <button class="btn btn-warning" onclick="deleteNV('${nv.taiKhoan}')">Xóa</button>
    <button data-toggle="modal" data-target="#myModal" class="btn btn-primary" onclick="editNV('${nv.taiKhoan}')">Sửa</button>
    </td>
    </tr>`;
  }
  getEle("tableDanhSach").innerHTML = content;
}
function deleteNV(taiKhoan) {
  dsnv.xoaNV(taiKhoan);
  showTable(dsnv.arr);
  setLocalStorage();
}
function editNV(taiKhoan) {
  console.log(taiKhoan);
  var nv = dsnv.layThongTinChiTiet(taiKhoan);
  console.log(nv);
  if (nv) {
    getEle("tknv").value = nv.taiKhoan;
    getEle("tknv").disabled = true;
    getEle("tenNV").value = nv.tenNV;
    getEle("email").value = nv.email;
    getEle("password").value = nv.matKhau;
    getEle("datepicker").value = nv.ngayLam;
    getEle("luongCB").value = nv.luongCB;
    getEle("chucvu").value = nv.chucVu;
    getEle("gioLam").value = nv.gioLam;

    getEle("btnThemNV").style.display = "none";
  }

}


getEle("btnThem").onclick = function () {
  getEle("btnThemNV").style.display = "inline-block";
  getEle("tknv").disabled = false;
  getEle("email").value = ""
  getEle("password").value = ""
  getEle("datepicker").value = ""
  getEle("errorTaiKhoan").style.display = "none";
  getEle("errorTenNV").style.display = "none";
  getEle("errorEmail").style.display = "none";
  getEle("errorMatKhau").style.display = "none";
  getEle("errorNgayLam").style.display = "none";
  getEle("errorLuongCB").style.display = "none";
  getEle("errorChucVu").style.display = "none";
  getEle("errorGioLam").style.display = "none";
}
getEle("btnCapNhat").addEventListener("click", function () {
  var nv = layThongTin();
  dsnv.capNhatNV(nv);
  showTable(dsnv.arr);
})

getEle("searchName").addEventListener("keyup", function () {
  var keyword = getEle("searchName").value;

  var mangTimKiem = dsnv.timNV(keyword);
  showTable(mangTimKiem);
})

function setLocalStorage() {
  var dataString = JSON.stringify(dsnv.arr)
  localStorage.setItem("DSNV", dataString)
}
function getLocalStorage() {
  var dataString = localStorage.getItem("DSNV");
  dsnv.arr = JSON.parse(dataString);
  showTable(data.arr)
}