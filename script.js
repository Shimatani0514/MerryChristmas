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



let isIlluminating = false;

document.getElementById("ligt-up").addEventListener('click', function() {
    const container = document.querySelector(".lights");

    const lightCountY = 200; // 生成する黄色の光の数
    const lightCountB = 200; // 生成する青色の光の数
    const lightCountR = 200; // 生成する赤色の光の数

    if (!isIlluminating) { // イルミネーションがオフの場合、開始する
        isIlluminating = true;

        function createLights(count, className) {
            for (let i = 0; i < count; i++) {
                const light = document.createElement('span');
                light.classList.add(className);
                container.appendChild(light);

                light.style.left = Math.random() * 70 + 30 + "%";
                light.style.top = Math.random() * 45 + 0 + "%";

                light.classList.add('illumination');
            }
        }

        createLights(lightCountY, 'light-y');
        createLights(lightCountB, 'light-b');
        createLights(lightCountR, 'light-r');
    } else { // イルミネーションがオンの場合、停止する
        isIlluminating = false;

        const lightsY = document.querySelectorAll('.light-y');
        const lightsB = document.querySelectorAll('.light-b');
        const lightsR = document.querySelectorAll('.light-r');

        lightsY.forEach(light => {
            container.removeChild(light);
        });
        lightsB.forEach(light => {
            container.removeChild(light);
        });
        lightsR.forEach(light => {
            container.removeChild(light);
        });
    }
});



