const mapTypeFilter = document.querySelector('#map-type');
const numPlayersFilter = document.querySelector('#num-players');
const stratTypeFilter = document.querySelector('#strat-type');
const avaTypeFilter = document.querySelector('#ava-type');
const strategies = document.querySelectorAll('.strategy');
const message = document.querySelector('#message');
const messageDiv = document.getElementById('message');

function filterStrategies() {
  const selectedMapType = mapTypeFilter.value;
  const selectedNumPlayers = numPlayersFilter.value;
  const selectedStratType = stratTypeFilter.value;
  const selectedAvaType = avaTypeFilter.value;
  let filteredStrategies = 0;
  
  strategies.forEach(strategy => {
    const mapType = strategy.classList.contains(selectedMapType) || selectedMapType === 'all';
    const numPlayers = strategy.classList.contains(selectedNumPlayers) || selectedNumPlayers === 'all';
    const stratType = strategy.classList.contains(selectedStratType) || selectedStratType === 'all';
    const ava = strategy.classList.contains(selectedAvaType) || selectedAvaType === 'all';
    
    if (mapType && numPlayers && stratType && ava) {
      strategy.classList.remove('hidden');
      filteredStrategies++;
    } else {
      strategy.classList.add('hidden');
    }
  });

  if (filteredStrategies === 0) {
    message.innerText = 'No strategies found';
  } else {
    message.innerText = '';
  }
}

mapTypeFilter.addEventListener('change', filterStrategies);
numPlayersFilter.addEventListener('change', filterStrategies);
stratTypeFilter.addEventListener('change', filterStrategies);
avaTypeFilter.addEventListener('change', filterStrategies);

window.onload = function() {
  // Obtenemos el selector de disponibilidad
  var avaSelector = document.getElementById('ava-type');

  // Agregamos un listener al evento "change"
  avaSelector.addEventListener('change', function() {
    // Llamamos a la función que filtra las estrategias según la disponibilidad seleccionada
    filterStrategies();
  });

  // Llamamos a la función que filtra las estrategias según la disponibilidad seleccionada
  filterStrategies();
};

// Agregamos una variable para almacenar el mensaje de "No se encontraron resultados"
const noResultsMessage = document.getElementById('no-results-message');

// Función que filtra las estrategias según la disponibilidad seleccionada
function filterStrategies() {
  const selectedMapType = mapTypeFilter.value;
  const selectedNumPlayers = numPlayersFilter.value;
  const selectedStratType = stratTypeFilter.value;
  const selectedAvaType = avaTypeFilter.value;
  
  let hasResults = false; // variable para verificar si se encontraron resultados
  
  strategies.forEach(strategy => {
    const mapType = strategy.classList.contains(selectedMapType) || selectedMapType === 'all';
    const numPlayers = strategy.classList.contains(selectedNumPlayers) || selectedNumPlayers === 'all';
    const stratType = strategy.classList.contains(selectedStratType) || selectedStratType === 'all';
    const ava = strategy.classList.contains(selectedAvaType) || selectedAvaType === 'all';
    
    if (mapType && numPlayers && stratType && ava) {
      strategy.classList.remove('hidden');
      hasResults = true; // si se encontró al menos un resultado, actualizamos la variable
    } else {
      strategy.classList.add('hidden');
    }
  });
  
  if (!hasResults) {
    noResultsMessage.classList.remove('hidden'); // mostramos el mensaje de "No se encontraron resultados"
  } else {
    noResultsMessage.classList.add('hidden'); // ocultamos el mensaje de "No se encontraron resultados"
  }
}

// Agregamos los listeners para los selectores y llamamos a la función para mostrar los resultados iniciales
mapTypeFilter.addEventListener('change', filterStrategies);
numPlayersFilter.addEventListener('change', filterStrategies);
stratTypeFilter.addEventListener('change', filterStrategies);
avaTypeFilter.addEventListener('change', filterStrategies);
filterStrategies(); // llamamos a la función para mostrar los resultados iniciales
