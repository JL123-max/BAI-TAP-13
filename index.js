function showTab(index) {
  let tabContents =
    document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active");
  }
  tabContents[index].classList.add("active");
}

// Problem 1
let DSKV = () => {
  let dkv = document.getElementsByName("diemKhuVuc");
  for (i = 0; i < dkv.length; i++) {
    if (dkv[i].checked) {
      switch (dkv[i].value) {
        case "Khu vực A":
          return 2 * 1;
          break;
        case "Khu vực B":
          return 1 * 1;
          break;
        case "Khu vực C":
          return 0.5 * 1;
          break;
        default:
          console.log("DO nothing.")
      }
    }
  }
}

let DSDT = () => {
  let ddt = document.getElementsByName("diemDoiTuong");
  for (j = 0; j < ddt.length; j++) {
    if (ddt[j].checked) {
      switch (ddt[j].value) {
        case "đối tượng 1":
          return 2.5 * 1;
          break;
        case "đối tượng 2":
          return 1.5 * 1;
          break;
        case "đối tượng 3":
          return 1 * 1;
          break;
        default:
          console.log("DO nothing.")
      }
    }
  }
}

function displayArea(khuVuc) {
  document.getElementById("HT-khuVuc").value = khuVuc;
}

function displayTarget(doiTuong) {
  document.getElementById("HT-DoiTuong").value = doiTuong;
}


let result1 = () => {
  let diemChuan = document.getElementById("DiemChuan").value * 1;
  let diemMon1 = document.getElementById("diemMon1").value * 1;
  let diemMon2 = document.getElementById("diemMon2").value * 1;
  let diemMon3 = document.getElementById("diemMon3").value * 1;
  let diemKhuVuc = DSKV();
  let diemDoiTuong = DSDT();
  let tongDiem = diemMon1 + diemMon2 + diemMon3 + diemDoiTuong + diemKhuVuc;
  let divString = "";

  if (tongDiem >= diemChuan) {
    divString = "Passed. Congratulation!!!"
  } else { divString = "Failed!!!" }
  document.getElementById("KetQua-1").innerHTML = divString;
}
// 

// 
let number = (order) => {
  if (order <= 0) { order = 0 }
  return order;
}
// 

// Problem 2
let result2 = () => {
  let fullName = document.getElementById("full_name_2").value;
  let soKW = document.getElementById("so_kW").value * 1;

  let sum = number(soKW - 350) * 200 + number(soKW - 200) * 250 + number(soKW - 100) * 150 + number(soKW - 100) * 150 + number(soKW - 50) * 50 + soKW * 500;
  document.getElementById("KetQua-2").innerHTML = `
  <span>Ho Ten: ${fullName}</span> - <span>Tien dien: ${sum.toLocaleString()} VND</span>`;
}

// Problem 3
let result3 = () => {
  let fullname = document.getElementById("full_name_3").value;
  let tongLuong = document.getElementById("tong_luong").value;
  let soNguoiPT = document.getElementById("so_nguoi_PT").value;
  tongLuong -= 4 + soNguoiPT * 1.6;
  let sum = number(tongLuong - 960) * 0.05 + number(tongLuong - 624) * 0.05 + number(tongLuong - 384) * 0.05 + number(tongLuong - 210) * 0.05 + number(tongLuong - 120) * 0.05 + number(tongLuong - 60) * 0.05 + tongLuong * 0.05
  document.getElementById("KetQua-3").innerHTML = `
  <span>Ho Ten: ${fullname}</span> - <span>So tien thue phai nop: ${sum.toLocaleString()}  trieu VND</span>`;
}

// Problem 4
function displayTarget4(LoaiKH) {
  document.getElementById("HT-LoaiKH").value = LoaiKH;
}

function displayTarget41(val) {
  document.getElementById("HT-LoaiKH").value = val;
  const box = document.getElementById('collapseButton42');
  if (val === 'Doanh Nghiệp') {
    box.classList.remove('max-h-0');
    box.classList.add('max-h-screen'); // or max-h-screen, etc.
  } else {
    box.classList.remove('max-h-screen');
    box.classList.add('max-h-0');
  }
  
}



//
// 

