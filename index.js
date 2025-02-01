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
  console.log(state.pups);
  renderRoster();
  } catch (error) {
    alert(error);
  }
}

// render roster function
const renderRoster = () => {
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
  // add the ul to main
  main.append(ul);
}

const renderPupDetail = () => {
  const details = `
  <h2>${state.pupDetails.name}</h2>
  <h3>${state.pupDetails.breed}</h3>
  <h4>${state.pupDetails.status}</h4>
  <img src="${state.pupDetails.imageUrl}"></img>
  `;

  main.innerHTML = details;
}

getRoster();
