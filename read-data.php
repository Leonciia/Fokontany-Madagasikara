<?php
// echo "teste";
// Chemin vers le fichier CSV
$FicherCSV = "data.csv";
// Vérifie si le fichier existe
if (!file_exists($FicherCSV )) {
    header("HTTP/1.1 404 Not Found");
    die(json_encode(array("error" => "Le fichier CSV n'existe pas.")));
}
// Ouvre le fichier en lecture
$ouvrire = fopen($FicherCSV , 'r');
// Vérifie si l'ouverture du fichier a réussi
if (!$ouvrire) {
    die("Impossible d'ouvrir le fichier CSV.");
}
// Initialise un tableau pour stocker les données du CSV
$data = [];
// Boucle pour lire le contenu du fichier ligne par ligne
while (($ligne = fgetcsv($ouvrire, 2000, ';')) !== false) {
    // La fonction fgetcsv renvoie un tableau pour chaque ligne du fichier CSV
    // Ici, nous utilisons le point-virgule (;) comme séparateur
    // print_r($ligne);
    $data[] = $ligne;

}
// print_r($data);
// fremer les fichier
fclose($ouvrire);
// retourner les donner en tant que json
header('Content-type:application/json');
 $jsonData = json_encode($data);

// Vérifie si la conversion en JSON a réussi
if ($jsonData === false) {
    $errorMessage = json_last_error_msg();
    die("Erreur lors de la conversion en JSON : $errorMessage");
} 
// else {
//     die("coversion reusite");
// }

// envoyer  les données JSON
 header('Content-Type: application/json');
 echo ($jsonData);
 
?>
