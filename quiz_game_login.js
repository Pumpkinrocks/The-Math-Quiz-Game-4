function adduser() {
    player_1_name = document.getElementById("player1login").value;
    player_2_name = document.getElementById("player2login").value;
    localStorage.setItem("player_1_name", player_1_name);
    localStorage.setItem("player_2_name", player_2_name);
    window.location = "quiz_game_page.html";
}