function showGameInfo(gameId) {
    // Скрыть все элементы с классом 'game-details'
    const gameDetails = document.querySelectorAll('.game-details');
    gameDetails.forEach(detail => {
        detail.style.display = 'none';
    });

    // Показать выбранный элемент
    const selectedGame = document.getElementById(gameId);
    if (selectedGame) {
        selectedGame.style.display = 'block';
        document.getElementById('game-info').style.display = 'block';
    }
}
