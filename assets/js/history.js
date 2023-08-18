function loadData() {
    fetch("http://localhost:3000/expense")
      .then((res) => res.json())
      .then((data) => {
        let h = "";
        for (let c of data) {
          h += `
          <div class="lS flex">
              <ul class="lichS">
                  <li class="day">
                  ${c.date}
  
                  </li>
                  <li class="type flex">
                  ${
                    c.type === "Lương tháng"
                      ? "<span>Thu:  </span>"
                      : "<span>Chi vào: </span>"
                  }
                  ${c.type}               
                  </li>
                  <li class="cmt flex">
                  <span>Chú thích:</span>
                  ${c.note}
                  </li>
                  <li class="money flex">
                  <span>Số tiền: </span>
                  ${c.money}
                  </li>
                  <li class="time flex">
                  <span>Thời gian: </span>
                  ${c.time}
  
                  </li>
              </ul>
          </div>
          `;
        }
        let e = document.getElementById("lichSu");
        e.insertAdjacentHTML("afterbegin", h);
      });
  }
  
  window.onload = function () {
    loadData();
  };
  