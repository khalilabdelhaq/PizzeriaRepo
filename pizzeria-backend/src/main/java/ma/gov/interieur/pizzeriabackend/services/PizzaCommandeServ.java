package ma.gov.interieur.pizzeriabackend.services;

import java.util.List;

import ma.gov.interieur.pizzeriabackend.domains.PizzaCommande;

public interface PizzaCommandeServ {

	List<PizzaCommande> findAll();

	List<PizzaCommande> findBylivreeFalse();

	void livrerCommande(Long id);

	PizzaCommande saveCommande(PizzaCommande commande);
}
