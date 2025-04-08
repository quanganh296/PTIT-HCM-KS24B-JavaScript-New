const text = document.getElementById("text");
        const hideBtn = document.getElementById("hideBtn");
        const showBtn = document.getElementById("showBtn");

       
        hideBtn.onclick = function() {
            text.style.display = "none";
        };

       
        showBtn.onclick = function() {
            text.style.display = "block";
        };