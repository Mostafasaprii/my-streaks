// فتح وإغلاق القائمة الجانبية
function toggleMenu() {
    let sidebar = document.getElementById("sidebar");
    if (sidebar.style.right === "0px") {
        sidebar.style.right = "-250px";
    } else {
        sidebar.style.right = "0px";
    }
}

// إرسال ستريك
function sendStreak() {
    showToast("تم إرسال الستريك! 🔥");
}

// تبديل الوضع الليلي
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    let themeText = document.querySelector(".theme-toggle");
    themeText.innerHTML = document.body.classList.contains("dark-mode") 
        ? '<i class="fa-solid fa-sun"></i> وضع نهاري' 
        : '<i class="fa-solid fa-moon"></i> وضع ليلي';
}

// إظهار إشعار فوري
function showToast(message) {
    let toast = document.getElementById("toast-container");
    toast.innerText = message;
    toast.style.display = "block";
    setTimeout(() => { toast.style.display = "none"; }, 3000);
}

// إرسال رسالة في الدردشة
function sendMessage() {
    let input = document.getElementById("chat-input");
    let messages = document.getElementById("messages");
    if (input.value.trim() !== "") {
        let newMessage = document.createElement("p");
        newMessage.textContent = input.value;
        messages.appendChild(newMessage);
        input.value = "";
        messages.scrollTop = messages.scrollHeight;
    }
}

// إضافة قصة ستريك
function addStory() {
    let storyList = document.getElementById("story-list");
    let newStory = document.createElement("div");
    newStory.classList.add("story");
    newStory.innerHTML = '<i class="fa-solid fa-fire"></i> ستريك جديد';
    storyList.appendChild(newStory);
}

// تعديل الملف الشخصي
function editProfile() {
    alert("ميزة تعديل الملف الشخصي قيد التطوير!");
}