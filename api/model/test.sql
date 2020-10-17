CREATE TYPE Sexe AS ENUM('M','F');
CREATE TABLE Utilisateur (
  id_Utilisateur serial PRIMARY KEY,
  username_Utilisateur VARCHAR(50) UNIQUE NOT NULL,
  sexe_Utilisateur Sexe NOT NULL
);
INSERT INTO Utilisateur(username_Utilisateur,sexe_Utilisateur) VALUES('guiguie34','M');
INSERT INTO Utilisateur(username_Utilisateur,sexe_Utilisateur) VALUES('guiguie340','X');
