anime({
    targets: '#svgText',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 15000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
});

AOS.init();