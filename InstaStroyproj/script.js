var arr = [
    {
        dp: "https://media.istockphoto.com/id/1300768137/photo/beautiful-young-woman-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=ZZV-x61zqgil9lC6AOQKvLX_G75upn5If9WoRlykank=",
        story: "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8"

    },
    {
        dp: "https://images.unsplash.com/photo-1536924430914-91f9e2041b83?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
        story: "https://images.unsplash.com/photo-1523944339743-0fe06f079939?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    },
    {
        dp: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
        story: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
    },

    {
        dp: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
        story: "https://images.unsplash.com/photo-1578854955076-970394ef2512?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"

    },
];

var storiya = document.querySelector("#storiya")
var clutter = ""
arr.forEach(function (elem, idx) {
    clutter += ` <div class="story">
    <img id="${idx}" src = "${elem.dp}" alt="">
            </div>`;
});

storiya.innerHTML = clutter;

storiya.addEventListener("click", function (dets) {
    document.querySelector("#fullscreen").style.display = "block";  //PointerEvents
    document.querySelector("#fullscreen").style.backgroundImage = `url(${arr[dets.target.id].story})`;

    setTimeout(function () {
        document.querySelector("#fullscreen").style.display = "none";
    }, 2000);
});

// CSS example for fullscreen
// var css = `
//     #fullscreen {
//         position: fixed;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         background-size: cover;
//         background-position: center;
//         display: none;
//     }
// `;

// var style = document.createElement('style');
// style.appendChild(document.createTextNode(css));
// document.head.appendChild(style);
