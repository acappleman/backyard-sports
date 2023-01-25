const newSportDataBase = async (event) => {
  event.preventDefault();

  const sportName = document.querySelector('#sport-name').value.trim();

  if (sportName) {
    const response = await fetch('/api/sport/newSport', {
      method: 'POST',
      body: JSON.stringify({ sportName }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // console.log(sportName)
    if(response.ok) {
        alert('Sport Created!')
    } else {
        alert('Failed to create sport!')
    }
  }
};

document.querySelector('.new-sport').addEventListener('submit', newSportDataBase);