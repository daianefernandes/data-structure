const trafficLight = [
  { light: "red", timer: 30 },
  { light: "yellow", timer: 20 },
  { light: "green", timer: 60 },
];

let currentIndex = 0;

function switchLight() {
  trafficLight.forEach(({ light }) => {
    document.getElementById(light).classList.remove("active");
  });

  const currentLight = trafficLight[currentIndex];
  document.getElementById(currentLight.light).classList.add("active");

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % trafficLight.length;
    switchLight();
  }, currentLight.timer * 1000);
}

switchLight();
