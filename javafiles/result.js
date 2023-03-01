const totalMark = JSON.parse(localStorage.getItem("totalresult"))
        document.querySelector(".score").textContent = totalMark.score
        document.querySelector(".wrong").textContent = totalMark.wrongAnswer