package ma.gov.interieur.pizzeriabackend.controllers;

import java.util.List;

import ma.gov.interieur.pizzeriabackend.VO.PizzaOrderVO;
import ma.gov.interieur.pizzeriabackend.services.PizzaCommandeServ;
import ma.gov.interieur.pizzeriabackend.utils.CustomErrorType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PizzaCommandeCtrl {
	@Autowired
	PizzaCommandeServ pizzaCommandeServ;

	@RequestMapping(method = RequestMethod.GET, value = "/orders", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<PizzaOrderVO>> getAllOrders() {
		List<PizzaOrderVO> result = pizzaCommandeServ.findAllOrders();
		return new ResponseEntity<List<PizzaOrderVO>>(result, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/undeliveredOrders", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<PizzaOrderVO>> getNonLivree() {
		List<PizzaOrderVO> result = pizzaCommandeServ.findBylivreeFalse();
		return new ResponseEntity<List<PizzaOrderVO>>(result, HttpStatus.OK);
	}

	@RequestMapping(value = "/orders/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> deliverOrder(@PathVariable("id") long id) {
		
		PizzaOrderVO currentCommande = pizzaCommandeServ.findById(id);

		if (currentCommande == null) {
			return new ResponseEntity<CustomErrorType>(
					new CustomErrorType("Unable to update. Pizzeria with id "
							+ id + " not found."), HttpStatus.NOT_FOUND);
		}
		// On marque la commande Livrée
		currentCommande.setLivree(true);
		pizzaCommandeServ.updateOrder(currentCommande);
		return new ResponseEntity<PizzaOrderVO>(currentCommande, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/orders",consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<PizzaOrderVO> saveCommande(
			@RequestBody PizzaOrderVO pizzaCommande) {
		PizzaOrderVO inserted = pizzaCommandeServ.saveOrder(pizzaCommande);
		return new ResponseEntity<PizzaOrderVO>(inserted, new HttpHeaders(),
				HttpStatus.OK);
	}
}
