// ======================================
// Evermist OS Storage
// ======================================

function saveData(key, data){

    localStorage.setItem(key, JSON.stringify(data));

}

function loadData(key){

    const data = localStorage.getItem(key);

    if(data){

        return JSON.parse(data);

    }

    return [];

}

console.log("💾 Storage Ready");