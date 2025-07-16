'use strict';

$(function () {
    $('#hamburger').on('click', function () {
        $('#hamburger').toggleClass("open");
        $('#header-menu').slideToggle();
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.hobby_img img');
    const descIds = ['neko-desc', 'tank-desc', 'music-desc', 'bado-desc'];
    const hobbyImgDiv = document.querySelector('.hobby_img');

    // 画像とpタグの対応表
    const imgToDesc = {
        0: 'neko-desc',
        1: 'tank-desc',
        2: 'music-desc',
        3: 'bado-desc'
    };

    images.forEach((img, idx) => {
        img.addEventListener('click', function () {
            // すでに選択中ならリセット
            if (img.classList.contains('selected')) {
                images.forEach(i => i.classList.remove('hide', 'selected'));
                descIds.forEach(id => document.getElementById(id).style.display = 'none');
                hobbyImgDiv.style.justifyContent = '';
                return;
            }
            // 画像表示切り替え
            images.forEach((other, i) => {
                if (other !== img) {
                    other.classList.add('hide');
                    other.classList.remove('selected');
                } else {
                    other.classList.add('selected');
                    other.classList.remove('hide');
                }
            });
            hobbyImgDiv.style.justifyContent = 'flex-start';
            // 説明文表示切り替え
            descIds.forEach((id, i) => {
                document.getElementById(id).style.display = (imgToDesc[idx] === id) ? 'block' : 'none';
            });
        });
    });

    // 初期状態は説明文非表示
    descIds.forEach(id => document.getElementById(id).style.display = 'none');
});

$('.works').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
});


const hoverIcon = document.getElementById("hoverIcon");
const skillLinks = document.querySelectorAll("#skillCon a");

skillLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        const imgSrc = link.getAttribute("data-img");
        if (imgSrc) {
            hoverIcon.src = imgSrc;
            hoverIcon.style.opacity = "1";
        }
    });

    link.addEventListener("mouseleave", () => {
        hoverIcon.style.opacity = "0";
    });
});






