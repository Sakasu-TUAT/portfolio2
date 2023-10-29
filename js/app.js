
// ダークモードの設定を行う関数
function setDarkMode() {
    // sessionStorageに保存されている値を取得し、nullでなければ、true/falseに変換する
    const storedDarkMode = sessionStorage.getItem('dark-mode');
    const isDarkMode = storedDarkMode !== null ? storedDarkMode === 'true' : window.matchMedia("(prefers-color-scheme: dark)").matches;
  
    // data-theme属性にダークモード用の値を設定する
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
}
  // 初期化時にダークモードの設定を行う
setDarkMode();

// ダークモードの切り替えを行う関数
function toggleDarkMode() {
    // 現在のダークモードの状態を取得する
    const isDarkMode = document.documentElement.getAttribute("data-theme") === 'dark' | false;
    console.log(isDarkMode);
    // ダークモードの状態を反転させ、sessionStorageに保存する
    document.documentElement.setAttribute("data-theme", isDarkMode ? "light" : "dark");
    sessionStorage.setItem('dark-mode', !isDarkMode);
}
