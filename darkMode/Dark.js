var onDark = false;
var darkButton = document.getElementById('darkMode');
darkButton.addEventListener('click', function () {
    var css = document.getElementById('darkStyles');
    if (onDark) {
        css.setAttribute('href', 'darkMode/LightStyle.css');
        document.getElementById('headerCharaka').setAttribute('src', 'img/background/header/CharakaLight.png');
        document.getElementById('bannerImg').setAttribute('src', 'img/background/banner-image.gif');
        document.getElementById('imgBanner2').setAttribute('src', 'img/background/AboutUs.gif');
        onDark = false;
    } else {
        css.setAttribute('href', 'darkMode/DarkStyle.css');
        document.getElementById('headerCharaka').setAttribute('src', 'img/background/header/CharakaDark.png');
        document.getElementById('bannerImg').setAttribute('src', 'img/dark/DarkBanner.png');
        document.getElementById('imgBanner2').setAttribute('src', 'img/dark/DarkBanner2.png');
        onDark = true;
    }
});