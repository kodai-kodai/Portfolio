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
    const hobbyImgItems = document.querySelectorAll('.hobby_img_item');

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
                // 全ての画像と要素の状態をリセット
                images.forEach(i => {
                    i.classList.remove('hide', 'selected');
                });
                hobbyImgItems.forEach(item => {
                    item.classList.remove('selected', 'hide');
                });
                descIds.forEach(id => {
                    document.getElementById(id).style.display = 'none';
                });
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

            // hobby_img_itemの選択状態を管理
            hobbyImgItems.forEach((item, i) => {
                if (i === idx) {
                    item.classList.add('selected');
                    item.classList.remove('hide');
                } else {
                    item.classList.remove('selected');
                    item.classList.add('hide');
                }
            });

            hobbyImgDiv.style.justifyContent = 'flex-start';

            // 説明文表示切り替え
            descIds.forEach((id, i) => {
                if (imgToDesc[idx] === id) {
                    document.getElementById(id).style.display = 'block';
                } else {
                    document.getElementById(id).style.display = 'none';
                }
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


const hoverIconSkill = document.getElementById("hoverIconSkill");
const hoverLabelSkill = document.getElementById("hoverLabelSkill");
const skillLinks = document.querySelectorAll("#skillCon a");

// 初期状態：枠は表示、画像はデフォルトにしてうっすら
hoverIconSkill.src = "./img/Screenshot111.png"; // ←初期画像（または空白）
hoverIconSkill.style.opacity = "1";
hoverLabelSkill.style.opacity = "1";
hoverLabelSkill.textContent = "←詳細ページをみる";


skillLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        const imgSrc = link.getAttribute("data-img");
        if (imgSrc && hoverIconSkill.src !== imgSrc) {
            // 一度フェードアウトしてから画像切り替え
            hoverIconSkill.style.opacity = "0";

            setTimeout(() => {
                hoverIconSkill.src = imgSrc;
                hoverIconSkill.style.opacity = "1";
                hoverIconSkill.style.transform = "scale(1.0)";
            }, 100);
        } else {
            // 同じ画像なら即表示（初回など）
            hoverIconSkill.style.opacity = "1";
            hoverIconSkill.style.transform = "scale(1)";
        }
    });

    link.addEventListener("mouseleave", () => {
        hoverIconSkill.src = "./img/Screenshot111.png";  // デフォ画像に戻す
        hoverIconSkill.style.transform = "scale(1)";
    });
});

// // Qualificationsセクション用

const hoverIconQuali = document.getElementById("hoverIconQuali");
const hoverLabelQuali = document.getElementById("hoverLabelQuali");
const qualiLinks = document.querySelectorAll("#qualiCon a");

// 初期状態：枠は表示、画像はデフォルトにしてうっすら
hoverIconQuali.src = "./img/Screenshot111.png"; // ←初期画像（または空白）
hoverIconQuali.style.opacity = "1";
hoverLabelQuali.style.opacity = "1";
hoverLabelQuali.textContent = "←詳細ページをみる";
qualiLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        const imgSrc = link.getAttribute("data-img");
        if (imgSrc && hoverIconQuali.src !== imgSrc) {
            // 一度フェードアウトしてから画像切り替え
            hoverIconQuali.style.opacity = "0";

            setTimeout(() => {
                hoverIconQuali.src = imgSrc;
                hoverIconQuali.style.opacity = "1";
                hoverIconQuali.style.transform = "scale(1.0)";
            }, 100);
        } else {
            // 同じ画像なら即表示（初回など）
            hoverIconQuali.style.opacity = "1";
            hoverIconQuali.style.transform = "scale(1)";
        }
    });

    link.addEventListener("mouseleave", () => {
        hoverIconQuali.src = "./img/Screenshot111.png";  // デフォ画像に戻す
        hoverIconQuali.style.transform = "scale(1.0001)";
    });
});




const fadeSections = document.querySelectorAll('.fadeinSec');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, {
    threshold: 0.1
});

fadeSections.forEach(section => {
    observer.observe(section);
});
