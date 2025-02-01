// create state object 
const state = {
  pups: []
}

// create async function to grab roser
const renderRoser = async() => {
  try {
    // fetch roster from api
  const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2105-ftb-et-web-ft/players`);
  // convert to json
  const allPups = await response.json();
  // store roster in state object
  state.pups = allPups.data.players;
  // invoke render function
  } catch (error) {
    alert(error);
  }
}

renderRoser();
