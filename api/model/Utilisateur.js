const db = require('./index');

async function getAllUtilisateur(){
  try{
    const res = await db.query("SELECT * FROM Utilisateur");
    return res.rows;

  }
  catch (e){
    console.log(e)
    return e
  }
}

async function getAllUtilisateurByUsername(username){
  try{
    if(typeof username === "string"){

      const res = await db.query("SELECT * FROM Utilisateur WHERE username_Utilisateur=$1",[username]);
      return res.rows;
    }

  }
  catch (e){
    console.log(e)
    return e
  }
}

exports.getAllUtilisateur= getAllUtilisateur
exports.getAllUtilisateurByUsername= getAllUtilisateurByUsername
