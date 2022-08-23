/**
 * Tính tổng lương
 */
var btn = document.getElementById("btn");
btn.onclick = function () {
  //đầu vào
  const LUONG_NGAY = 100000;
  var soNgayCong = document.getElementById("soNgayCong").value * 1;

  //xử lý
  var tongLuong = soNgayCong * LUONG_NGAY;
  //format VN
  var currenFormat = new Intl.NumberFormat("VN-vn");

  var ketQua =
    "<p class='alert alert-danger'>Tổng lương là: " +
    currenFormat.format(tongLuong) +
    " VND</p>";
  //đầu ra
  document.getElementById("tongLuong").innerHTML = ketQua;
};

/**
 * CASE STUDY
 */

var btnSubmit = document.getElementById("btnSubmit");
btnSubmit.onclick = function () {
  //lấy thông tin từ user nhập
  var tenPhim = document.getElementById("tenPhim").value;
  var giaVeNL = document.getElementById("giaVeNL").value * 1;
  var soVeNL = document.getElementById("soVeNL").value * 1;
  var giaVeTE = document.getElementById("giaVeTE").value * 1;
  var soVeTE = document.getElementById("soVeTE").value * 1;
  var phanTramTuThien = document.getElementById("phanTramTuThien").value;

  //Xử lý
  var soVeDaBan = soVeNL + soVeTE;
  var doanhThu = soVeNL * giaVeNL + soVeTE * giaVeTE;
  var tongTienTuThien = (doanhThu * phanTramTuThien) / 100;
  var loiNhuan = doanhThu - tongTienTuThien;
  //format VN
  var currenFormat = new Intl.NumberFormat("VN-vn");

  //Đầu ra
  var ketQua = "<div class='alert alert-danger'>";
  ketQua += "<p>Tên phim: ..........." + tenPhim + "</p>";
  ketQua += "<p>Số vé đã bán:..........." + soVeDaBan + "</p>";
  ketQua +=
    "<p>Doanh thu:..........." + currenFormat.format(doanhThu) + " VND</p>";
  ketQua += "<p>Phần % từ thiện:........" + phanTramTuThien + "</p>";
  ketQua +=
    "<p>Tổng tiền trích từ thiện:........." +
    currenFormat.format(tongTienTuThien) +
    " VND</p>";
  ketQua +=
    "<p>Lợi nhuận:........" + currenFormat.format(loiNhuan) + " VND</p>";
  ketQua += "</div>";

  document.getElementById("showInFoCaseStudy").innerHTML = ketQua;
};

/**
 * Tính giá trị trung bình
 */

var btnTrungBinh = document.getElementById("btnTrungBinh");
btnTrungBinh.onclick = function () {
  //đầu vào
  var number1 = document.getElementById("number1").value * 1;
  var number2 = document.getElementById("number2").value * 1;
  var number3 = document.getElementById("number3").value * 1;
  var number4 = document.getElementById("number4").value * 1;
  var number5 = document.getElementById("number5").value * 1;

  // xử lý
  var trungBinh = "<span class='alert alert-warning'>";
  trungBinh += (number1 + number2 + number3 + number4 + number5) / 5;
  trungBinh += "</span>";

  //đầu ra
  document.getElementById("showAverage").innerHTML = trungBinh;
};

/**
 * Quy đổi tiền
 */

document.getElementById("btnDoiTien").onclick = function () {
  //đầu vào
  const tyGia = 23000;
  var soTienCanDoi = document.getElementById("soTienCanDoi").value * 1;

  //format VN
  var currenFormat = new Intl.NumberFormat("VN-vn");
  //xử lý
  var vnd = soTienCanDoi * tyGia;

  ketQua = "<span>" + currenFormat.format(vnd) + " VND</span>";

  //đầu ra
  document.getElementById("showSoTienDoi").innerHTML = ketQua;
};

/**
 * Tính diện tích, chu vi
 */

document.getElementById("btnTinhKetQua").onclick = function () {
  //đầu vào
  var chieuDai = document.getElementById("chieuDai").value * 1;
  var chieuRong = document.getElementById("chieuRong").value * 1;

  //Xử lý
  var chuVi = (chieuDai + chieuRong) * 2;
  var dienTich = chieuDai * chieuRong;

  var ketQua = "<div class='alert alert-success'>";
  ketQua += "Chu vi là: " + chuVi + "<br>" + "Diện tích là: " + dienTich;
  ketQua += "</div>";

  //đầu ra
  document.getElementById("showChuViDienTich").innerHTML = ketQua;
};

/**
 * Tính tổng 2 ký số
 */

document.getElementById("btnTong2KySo").onclick = function () {
  //đầu vào
  var number = document.getElementById("number").value * 1;
  var soHangChuc = Math.floor(number / 10);
  var soHangDonVi = number % 10;

  //xử lý
  var tong = soHangChuc + soHangDonVi;

  //đầu ra
  document.getElementById("showTong2KySo").innerHTML = tong;
};
