
const x = document.querySelector('#dialog');

const dialogoutside = document.querySelector('#x');

x.addEventListener(
    "click", function(){
    document.querySelector('.dialog').style.display = "none";
});
dialogoutside.addEventListener(
    "click", function(){
    document.querySelector('.dialog').style.display = "flex";
});



// đổi logo "Nối vòng tay lớn"
function changeImage(){
    var img= document.getElementById('myLogo');
    img.src="./img/NVTL_white.png";
};

function changeImageAlanWalker(){
    var img= document.getElementById('AlanWalker');
    img.src="./img/martingarrix2.jpg";
};

function capforAlanWalker(){
    var img= document.getElementById('capforAlanWalker');
    img.style.display = 'block';
};

function changeImage014nnguy3n(){
    var img= document.getElementById('ceo014nnguy3n');
    img.src="./img/014nnguy3n_artist.jpg";
};

function job(){
    var img= document.getElementById('job');
    img.style.display = 'none';
};



function jobForAnNguyen(){
    var img= document.getElementById('jobForAnNguyen');
    img.style.display = 'none';
};
function capforAnNguyen(){
    var img= document.getElementById('capforAnNguyen');
    img.style.display = 'block';
};


function changeImagezekrisemusic(){
    var img= document.getElementById('zekrisemusic');
    img.src="./img/zekrisemusic.jpg";
};
function jobForZekrisemusic(){
    var img= document.getElementById('jobForZekrisemusic');
    img.style.display = 'none'; 
};
function capforZekrisemusic(){
    document.getElementById('capforZekrisemusic').style.display = 'block';
};
//Form đăng ký

function tatDangNhap(){
    var img= document.getElementById('form-dang-nhap');
    img.style.display = 'none';
};
function batDangKy(){
    var img= document.getElementById('form-dang-ky');
    img.style.display = 'grid';
};

//Form đăng nhập
function tatDangKy(){
    var img= document.getElementById('form-dang-ky');
    img.style.display = 'none';
};
function batDangNhap(){
    var img= document.getElementById('form-dang-nhap');
    img.style.display = 'grid';
};

function TatKhungDangNhap(){
   document.getElementById('khungDangNhap').style.display = 'none';
};

function loginBox(){
    document.getElementById('khungDangNhap').style.display = 'flex';
};

//change class
function changeClass(){
    var loginIcon = document.getElementById('loginNav');
    loginIcon.classList.add('fa-beat')
    console.log(loginIcon.classList); 
};
function notChangeClass(){
    var loginIcon = document.getElementById('loginNav');
    loginIcon.classList.remove('fa-beat')
    console.log(loginIcon.classList); 
};


function changeClassChild(){
    var cm1= document.getElementById('iconChild');
    cm1.classList.add('fa-beat')
}
function notChangeClassChild(){
    var cm1= document.getElementById('iconChild');
    cm1.classList.remove('fa-beat')

}
function changeClassChild2(){
    var cm1= document.getElementById('iconChild2');
    cm1.classList.add('fa-beat');
};
function notChangeClassChild2(){
    var cm3= document.getElementById('iconChild2');
    cm3.classList.remove('fa-beat');
    console.log(cm3.className);
};

function tingTing(){
    var cm2= document.getElementById('tingTing');
    cm2.classList.add('fa-bounce');   
}



///////////////////////////////////////////////

// var KichThuoc = document.getElementById("Slider")[0].clientWidth;
// var ChuyenSlide = document.getElementById("chuyen-slide")[0];
// var Img = document.getElementById("imgforSlide");
// var Max = KichThuoc * Img.length;
// Max -= KichThuoc;
// var Chuyen = 0;
// // function Next(){
// //   if(Chuyen < Max) Chuyen += KichThuoc;
// //   else Chuyen = 0;
// //   ChuyenSlide.style.marginLeft = '-' + Chuyen + 'px';   
// // }
// function backToSlide(){
//     var KichThuoc = document.getElementById("Slider")[0].current;
//     var ChuyenSlide= document.getElementById('Slider');
//     var Img = document.getElementById("imgforSlide");
//     var Max = KichThuoc * Img.length;
//     Max -= KichThuoc;
//     var Chuyen = 0;
//     if(Chuyen < Max) Chuyen -= KichThuoc;
//     else Chuyen = 0;
//     ChuyenSlide.style.marginLeft = '-' + Chuyen + 'px';
// };

// function nextToSlide(){
//     var KichThuoc = document.getElementById("Slider")[0].clientWidth;
//     var ChuyenSlide= document.getElementById('Slider');
//     var Img = document.getElementById("imgforSlide");
//     var Max = KichThuoc * Img.length;
//     Max -= KichThuoc;
//     var Chuyen = 0;
//     if(Chuyen < Max) Chuyen += KichThuoc;
//     else Chuyen = 0;
//     ChuyenSlide.style.marginLeft = '-' + Chuyen + 'px';
// };

