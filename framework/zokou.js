var tabCmds = [];
let cm = [];
function zokou(obj, fonctions) {
    let infoComs = obj;
    if (!obj.categorie) {
        infoComs.categorie = "General";
    }
    if (!obj.reaction) {
        infoComs.reaction = "🥰";
    }
    infoComs.fonctionfunctions;
    cm.push(infoComs);
    // console.log('chargement...')
    return infoComs;
}
module.exports { zokou, Module: zokou, cm };

