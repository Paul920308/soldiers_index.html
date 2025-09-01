function addDays(rocDate, days) {
    // 1. 拆解民國日期 (輸入格式：YYY/MM/DD)
    let [rocYear, month, day] = rocDate.split("/").map(Number);
    let adYear = rocYear + 1911; // 民國轉西元

    // 2. 建立西元 Date 物件（注意月份要 -1）
    let date = new Date(adYear, month - 1, day);

    // 3. 加上天數
    date.setDate(date.getDate() + days);

    // 4. 轉回民國
    let newRocYear = date.getFullYear() - 1911;
    let newMonth = String(date.getMonth() + 1).padStart(2, "0");
    let newDay = String(date.getDate()).padStart(2, "0");

    return `${newRocYear}/${newMonth}/${newDay}`;
  }

  // 按鈕事件
  document.getElementById("calcBtn").addEventListener("click", function () {
    let rocDate = document.getElementById("rocInput").value;
    if (rocDate) {
      let result = addDays(rocDate, 112);
      document.getElementById("result").textContent = result;
    } else {
      alert("請輸入民國日期，例如 113/08/29");
    }
  });