package ma.gov.interieur.pizzeriabackend.repositories;

import ma.gov.interieur.pizzeriabackend.domains.PizzaCommande;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PizzaCommandeRepo extends JpaRepository<PizzaCommande, Long> { 

}
