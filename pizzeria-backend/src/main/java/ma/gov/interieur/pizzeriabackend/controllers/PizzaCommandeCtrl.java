package ma.gov.interieur.pizzeriabackend.controllers;

import java.util.List;

import ma.gov.interieur.pizzeriabackend.domains.PizzaCommande;
import ma.gov.interieur.pizzeriabackend.services.PizzaCommandeServ;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PizzaCommandeCtrl {
	@Autowired
	PizzaCommandeServ pizzaCommandeServ;

	@RequestMapping(method = RequestMethod.GET, value = "/pizzaCommande", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<PizzaCommande>> getAll() {
		List<PizzaCommande> result = pizzaCommandeServ.findAll();
		return new ResponseEntity<List<PizzaCommande>>(result, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/commandeNonLivree", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<PizzaCommande>> getNonLivree() {
		List<PizzaCommande> result = pizzaCommandeServ.findBylivreeFalse();
		return new ResponseEntity<List<PizzaCommande>>(result, HttpStatus.OK);
	}

	// ici on va simuler la livraison de la commande
	@DeleteMapping("/livrerCommande/{id}")
	public void livrerCommande(@PathVariable Long id) {
		pizzaCommandeServ.livrerCommande(id);

	}

	@RequestMapping(method = RequestMethod.POST, value = "/saveCommande")
	public ResponseEntity<PizzaCommande> saveCommande(
			PizzaCommande employee) {
		PizzaCommande inserted = pizzaCommandeServ.saveCommande(employee);
		return new ResponseEntity<PizzaCommande>(inserted, new HttpHeaders(),
				HttpStatus.OK);
	}
}
