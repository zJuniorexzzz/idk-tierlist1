function displayPlayers(playerList = players) {
    const playersList = document.getElementById('players-list');
    playersList.innerHTML = '';

    // Ordenar por puntos (mayor a menor)
    const sortedPlayers = [...playerList].sort((a, b) => b.puntos - a.puntos);

    sortedPlayers.forEach((player, index) => {
        const playerRow = document.createElement('div');
        playerRow.className = 'player-row';
        playerRow.innerHTML = `
            <span>${index + 1}</span>
            <span>${player.nick}</span>
            <span>${player.region}</span>
            <span>${player.tier}</span>
            <span>${player.puntos}</span>
        `;
        playersList.appendChild(playerRow);
    });
}