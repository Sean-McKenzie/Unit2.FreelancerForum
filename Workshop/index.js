/* State */
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.

const freelancerNames = [
  "JohnDoe",
  "MikeJones",
  "DrWho",
  "GuyMcFace",
  "DannyZuko",
  "AvatarAang",
];
const freelancerPrices = [25, 30, 45, 20, 10, 15, 100, 500, 80, 60];

const freelancerOccupations = [
  "teacher",
  "mover",
  "doctor",
  "trainer",
  "programmer",
  "engineer",
];

const maxFreelancers = 10;
const freeLancer = [
  {
    name: "JimJones",
    price: 2,
    occupation: "prophet",
  },
];

// `setInterval` will call `addShape` every 1000 milliseconds (1 second)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addShapeIntervalId)` will stop the interval.
const addFreelancerIntervalId = setInterval(addFreelancer, 5000);

render(); // We call this function once to render the initial state

/**
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
 */
function render() {
  // Render the squares
  const freelance = document.querySelector("#freelance");
  const avg = document.querySelector("#averagePriceText");
  const freelanceElements = freeLancer.map((freelancer) => {
    const element = document.createElement("p");
    element.classList.add(
      freelancer.name,
      freelancer.occupation,
      freelancer.price
    );
    element.textContent = `${freelancer.name} ${freelancer.occupation} $${freelancer.price}`;
    return element;
  });
  freelance.replaceChildren(...freelanceElements);
  avg.textContent = `The average starting price is $${averagePrices()}`;
  averagePrices();
}

/**
 * Add a random shape to the `shapes` array
 */
function addFreelancer() {
  const name =
    freelancerNames[Math.floor(Math.random() * freelancerNames.length)];
  const price =
    freelancerPrices[Math.floor(Math.random() * freelancerPrices.length)];
  const occupation =
    freelancerOccupations[
      Math.floor(Math.random() * freelancerOccupations.length)
    ];
  freeLancer.push({ name, price, occupation });

  render();

  // TODO: Stop adding shapes if we've reached the maximum number of shapes
  if (freeLancer.length >= maxFreelancers) {
    clearInterval(addFreelancerIntervalId);
  }
}

function averagePrices() {
  let sum = 0;
  freeLancer.forEach((ele) => {
    sum = sum + ele.price;
  });
  const avgPrice = sum / freeLancer.length;
  console.log(avgPrice);
  return avgPrice.toFixed(2);
}
