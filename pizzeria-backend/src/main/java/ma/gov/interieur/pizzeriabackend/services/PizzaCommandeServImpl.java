package ma.gov.interieur.pizzeriabackend.services;

import java.util.List;

import ma.gov.interieur.pizzeriabackend.domains.PizzaCommande;
import ma.gov.interieur.pizzeriabackend.repositories.PizzaCommandeRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PizzaCommandeServImpl implements PizzaCommandeServ {
 @Autowired
 PizzaCommandeRepo pizzaCommandeRepo;

@Override
public List<PizzaCommande> findAll() {
	// TODO Auto-generated method stub
	return pizzaCommandeRepo.findAll();
}

@Override
public List<PizzaCommande> findBylivreeFalse() {
	// TODO Auto-generated method stub
	return pizzaCommandeRepo.findBylivreeFalse();
}

@Override
public void livrerCommande(Long id) {
	pizzaCommandeRepo.setPizzaCommandeById(id); 
}

@Override
public PizzaCommande saveCommande(PizzaCommande commande) {
	// TODO Auto-generated method stub
	return pizzaCommandeRepo.save(commande);
}

}
