const newTeamDataBase = async (event) => {
  event.preventDefault();

  const teamName = document.querySelector('#team-name').value.trim();
  const teamSport = document.querySelector('#team-sport').value.trim();
  const teamZipCode = document.querySelector('#team-zip-code').value.trim();
  const teamCity = document.querySelector('#team-city').value.trim();
  const teamState = document.querySelector('#team-state').value.trim();

  if (teamName && teamSport && teamZipCode && teamCity && teamState) {
    const response = await fetch('/api/team/newTeam', {
      method: 'POST',
      body: JSON.stringify({
        teamName,
        teamSport,
        teamZipCode,
        teamCity,
        teamState,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(teamName, teamSport, teamZipCode, teamCity, teamState)
    
    if (response.ok) {
      alert('Team Created!');
    } else {
      alert('Unable to create team!');
    }
  }
};

document.querySelector('.new-team').addEventListener('submit', newTeamDataBase);