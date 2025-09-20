let sessionsList : string[] = [];
const savedList : string | null = (localStorage.getItem('sessionsList'));
if (savedList) {
    sessionsList = JSON.parse(savedList);
}
sessionsList.push(new Date().toISOString());
localStorage.setItem('sessionsList', JSON.stringify(sessionsList));
