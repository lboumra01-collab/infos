document.getElementById('cfeForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;

  const caN2 = parseFloat(form.caN2.value);
  const cfePaye = parseFloat(form.cfePaye.value);
  const zone = form.zone.value;
  const nouvelle = form.nouvelle.value;

  let reduction = 0;

  // Règles d’exonération fictives pour l’exemple
  if (zone !== "aucune") reduction += 0.3;
  if (nouvelle === "oui") reduction += 0.5;

  let cfeEstimee = cfePaye * (1 - reduction);
  let economie = cfePaye - cfeEstimee;

  document.getElementById('resultat').classList.remove('hidden');
  document.getElementById('resultat').innerHTML =
    `<strong>💶 Vous payez actuellement : </strong>${cfePaye.toFixed(2)} €<br>
     🎉 <strong>Bonne nouvelle !</strong> Vous pourriez économiser jusqu’à <strong>${economie.toFixed(2)} €</strong> sur votre CFE !`;
});
