var RAJ00008 = {
   init: function () {
        let d = document.createElement("div");//div created
        d.classList.add("box");//Box class added to div fron CSS
        d.textContent = "RAJ00008";//Text added to div
        let boxes = document.querySelector("#boxes");//boxes id
        d.addEventListener("click", RAJ00008.Click);//click event
        d.addEventListener("mouseover", RAJ00008.MouseOver);//mouseOver event
        d.addEventListener("mouseout", RAJ00008.MouseOut);//mouseout event
        boxes.appendChild(d);
    },
    Click: function (ev) {
        ev.currentTarget.style.borderColor = "#7E4B7F";//bodercolour changed
        ev.currentTarget.style.backgroundColor = "#FC8AFF";//background changed
    },
    MouseOver: function (ev) {
        ev.currentTarget.classList.toggle("highlight");
    },
    MouseOut: function (ev) {
        ev.currentTarget.classList.toggle("highlight");
    }
};