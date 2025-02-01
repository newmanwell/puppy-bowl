// create state object 
const state = {
  pups: []
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
  });
  // add the ul to main
  main.append(ul);
}

getRoster();
