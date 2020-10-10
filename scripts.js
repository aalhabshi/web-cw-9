// 1
// moon.jpg قم بالوصول إلى الصورة وتغيرها إلى

// let lastDay = document.getElementById("lastDay");
// lastDay.src = 'http://127.0.0.1:5500/images/moon.jpg';

// "قم بالوصول إلى كلمة الأرض وتحويلها إلى "القمر

// let title = document.getElementById("caption");
// title.innerHTML = "القمر";

// 3
// بحيث إن ضغطت على البطاقة تتغير الصورة للصورة الأخرى ويتغير الاسم onClick قم بإنشاء دالة واستخدام خاصية
// دون الحاجة إلى الخطوتين 2و1
function planetSwitcher(){
    let body = document.getElementById('body');
    let lastDay = document.getElementById('lastDay');
    let title = document.getElementById('caption');

    if(title.innerHTML == 'الشمس'){
        title.innerHTML = 'القمر';
        lastDay.src = 'http://127.0.0.1:5500/images/moon.jpg';
        body.style.backgroundColor = "#784BA0";
    } else {
        title.innerHTML = 'الشمس';
        lastDay.src = 'http://127.0.0.1:5500/images/sun.jpg';
        body.style.backgroundColor = "#FFE53B";
    }
}
// 4
// Night - Light Mode قم بالتعديل على الدالة بحيث تضم إليها خاصية

/*  الوضع الليلي
    يتغير لون خلفية الصفحة للرمادي
    تتغير الصورة لصورة القمر
    "يتغير الاسم أسفل الصورة ويصبح "القمر
*/

/*  الوضع النهاري
    يتغير لون خلفية الصفحة للأبيض
    تتغير الصورة لصورة الشمس
    "يتغير الاسم أسفل الصورة ويصبح "الشمس
*/
