document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // تحقق من بيانات المستخدم
    if (username === "admin" && password === "1234") {
        document.getElementById("message").innerText = "تم تسجيل الدخول بنجاح!";
        document.getElementById("dashboard").classList.remove("hidden");
        document.querySelector(".container").classList.add("hidden");
    } else {
        document.getElementById("message").innerText = "اسم المستخدم أو كلمة المرور غير صحيحة.";
    }
});

document.getElementById("createAccountBtn").addEventListener("click", function() {
    const newUsername = prompt("أدخل اسم المستخدم الجديد:");
    const newPassword = prompt("أدخل كلمة المرور الجديدة:");
    // هنا يمكنك حفظ البيانات في قاعدة بيانات
    alert(`تم إنشاء حساب جديد باسم المستخدم: ${newUsername}`);
});

function showSection(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.add('hidden'));
    document.getElementById(section).classList.remove('hidden');
}

function addSupplier() {
    // منطق لإضافة مورد جديد
    alert("إضافة مورد جديد");
}

function addClient() {
    // منطق لإضافة عميل جديد
    alert("إضافة عميل جديد");
}

function createSubAccount() {
    const subAccountName = document.getElementById("subAccountName").value;
    // هنا يمكنك حفظ الحساب الفرعي في قاعدة بيانات
    document.getElementById("subAccountMessage").innerText = `تم إنشاء الحساب الفرعي: ${subAccountName}`;
}