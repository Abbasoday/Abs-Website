document.addEventListener("DOMContentLoaded", function () {
    let scrollY = window.scrollY;
    let targetScrollY = window.scrollY;
    let isScrolling = false;

    window.addEventListener("wheel", function (event) {
        event.preventDefault();
        targetScrollY += event.deltaY * 0.7; // تقليل السرعة (كلما قل الرقم صار أبطأ)
        if (!isScrolling) smoothScroll();
    }, { passive: false });

    function smoothScroll() {
        isScrolling = true;
        scrollY += (targetScrollY - scrollY) * 0.1; // جعل الحركة تدريجية وسلسة
        window.scrollTo(0, scrollY);

        if (Math.abs(targetScrollY - scrollY) > 0.5) {
            requestAnimationFrame(smoothScroll);
        } else {
            isScrolling = false;
        }
    }
});



document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ تم تحميل الصفحة بنجاح!");

    // ✅ تحديد جميع العناصر التي تحتاج إلى الظهور التدريجي
    const fadeElements = document.querySelectorAll(".fade-in");

    // ✅ مراقبة العناصر عند التمرير
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); // ✅ إضافة `show` عند التمرير
                observer.unobserve(entry.target); // ✅ يوقف المراقبة بعد ظهور العنصر
            }
        });
    }, { threshold: 0.3 });

    // ✅ تفعيل المراقبة لكل العناصر
    fadeElements.forEach((element) => {
        observer.observe(element);
    });
});



document.getElementById("scroll-btn").addEventListener("click", function(event) {
    event.preventDefault(); // منع القفز الفوري للرابط

    let target = document.getElementById("int-section"); 

    let targetPosition = target.getBoundingClientRect().top + window.scrollY - 50; // إضافة المسافة
    let startPosition = window.scrollY;
    let distance = targetPosition - startPosition;
    let duration = 1000; // مدة الحركة بالمللي ثانية (يمكنك تغييرها)
    let startTime = null;

    function animationScroll(currentTime) {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let scrollAmount = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, scrollAmount);

        if (timeElapsed < duration) requestAnimationFrame(animationScroll);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animationScroll);
});



window.addEventListener("load", function () {
    let progressBar = document.getElementById("progress-bar");
    progressBar.style.width = "100%";
    
    setTimeout(() => {
        progressBar.style.opacity = "0"; // إخفاء الشريط بعد التحميل
    }, 500);
});



