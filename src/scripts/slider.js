const sliders = [{ slider: 1 }, { slider: 2 }, { slider: 3 }];

let newSlider = sliders.filter(slider => slider.slider > 2);

console.log(newSlider);
