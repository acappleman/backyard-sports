const searchFormHandler = async (event) => {
  event.preventDefault();

  const state = document.querySelector('#search-state').value.trim();
  const zip = document.querySelector('#search-zip').value.trim();
  const city = document.querySelector('#search-city').value.trim();
  const sport = document.querySelector('#search-sport').value.trim();

  document.location.assign(
    `/?state=${state}&zip=${zip}&city=${city}&sport=${sport}`
  );
};

document
  .querySelector('.search-form')
  .addEventListener('submit', searchFormHandler);

getTeamData = async () => {
  const response = await fetch(`/api/search${document.location.search}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  let teams = [];
  if (response.ok) {
    // document.location.reload();
    teams = await response.json();
  } else {
    alert('Failed to get the team data');
  }

  if (teams.length > 0) {
    let map;
    for (let i = 0; i < teams.length; i++) {
      const team = teams[i];
      if (i === 0) {
        const options = {
          zoom: 8,
          center: {
            lat: Number(team.geocode.latitude),
            lng: Number(team.geocode.longitude),
          },
        };
        map = new google.maps.Map(document.getElementById('map'), options);
      }
      new google.maps.Marker({
        position: {
          lat: Number(team.geocode.latitude),
          lng: Number(team.geocode.longitude),
        },
        map: map,
        title: team.name, //Marker shows fullname of team on hover over marker
      });
    }
  }
};

joinTeam = async (teamId) => {
  const response = await fetch('/api/team/join', {
    method: 'PUT',
    body: JSON.stringify({
      teamId: teamId
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    $(`#joinTeam${teamId}`).prop('disabled', true);
    $(`#joinTeam${teamId}`).text('Team Joined!');
  } else {
    alert('Failed to join team.');
  }
}

getTeamData();
