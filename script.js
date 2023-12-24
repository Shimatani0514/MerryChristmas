let merryContainer = document.querySelector(".Merry-container");

const createSnow = () => {
    /* 雪を生成と大きさランダム */
    let snow = document.createElement("span");
    snow.className = "snow" /* style.cssのsnowを呼び出す */

    minSize = 5;
    maxSize = 10;

    let snowSize = Math.random() * (maxSize - minSize) + minSize;

    snow.style.width = snowSize + "px";
    snow.style.height = snowSize + "px";

    /* 雪の降り始めランダム */
    snow.style.left = Math.random() * 100 + "%";
    
    merryContainer.appendChild(snow)

    /* 10秒後に雪を消す */
    setTimeout(() => {
        snow.remove();
    }, 10000);
};

setInterval(createSnow, 100);

