// create state object 
const state = {
  pups: [],
  pupDetails: {}
}

// grab main 
const main = document.querySelector(`main`);

// create async function to grab roser
const getRoster = async() => {
  try {
    // fetch roster from api
  const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2105-ftb-et-web-ft/players`);
  // convert to json
  const allPups = await response.json();
  // store roster in state object
  state.pups = allPups.data.players;
  // invoke render function
  renderRoster();
  } catch (error) {
    alert(error);
  }
}

// render roster function
const renderRoster = () => {
  // clear out main
  main.innerHTML = ``;
  // create h2
  const h2 = document.createElement(`h2`);
  // add inner text to h2
  h2.innerText = `The Pups`;
  // create ul
  const ul = document.createElement(`ul`);
  // iterate through roster
  state.pups.forEach((onePup) => {
    // create li for each pup
    const li = document.createElement(`li`);
    // add name to the li
    li.innerText = onePup.name;
    // add the li to the ul
    ul.append(li);
    // click event listner for the LIs
    li.addEventListener(`click`, () => {
      // add puppy details to state object
      state.pupDetails = onePup;
      renderPupDetail();
    })
  });
  // add the h2 and ul to main
  main.append(h2);
  main.append(ul);
}

const renderPupDetail = () => {
  // git pup details and add HTML
  const details = `
  <h2>Pup Card</h2>
  <h3>Name: ${state.pupDetails.name}</h3>
  <h3>Breed: ${state.pupDetails.breed}</h3>
  <h4>Status: ${state.pupDetails.status}</h4>
  <img src="${state.pupDetails.imageUrl}" alt="puppy image"></img>
  `;
  // create button
  const button = document.createElement(`button`);
  // set inner text of button
  button.innerText = `Back to Pups`
  button.addEventListener(`click`, () => {
    renderRoster();
  })
  // repace main with details
  main.innerHTML = details;
  // add button to details
  main.append(button);
}

getRoster();
