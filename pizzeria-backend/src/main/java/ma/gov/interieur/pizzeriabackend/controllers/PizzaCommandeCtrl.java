package ma.gov.interieur.pizzeriabackend.controllers;

import java.util.List;

import ma.gov.interieur.pizzeriabackend.domains.PizzaCommande;
import ma.gov.interieur.pizzeriabackend.services.PizzaCommandeServ;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/pizzaCommande")
public class PizzaCommandeCtrl {
	@Autowired
	PizzaCommandeServ pizzaCommandeServ;

	@GetMapping
	public ResponseEntity<?> getAll() {
		List<PizzaCommande> result = pizzaCommandeServ.findAll();
		return new ResponseEntity(result, HttpStatus.OK);
	}
	

}
