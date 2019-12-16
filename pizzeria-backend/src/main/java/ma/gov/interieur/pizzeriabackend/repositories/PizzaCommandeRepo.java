package ma.gov.interieur.pizzeriabackend.repositories;

import java.util.List;

import ma.gov.interieur.pizzeriabackend.domains.PizzaCommande;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface PizzaCommandeRepo extends JpaRepository<PizzaCommande, Long>,
		CrudRepository<PizzaCommande, Long> {
	List<PizzaCommande> findBylivreeFalse();

	@Modifying
	@Query("update PizzaCommande p set p.livree = FALSE where p.id = ?1")
	void setPizzaCommandeById(Long userId);
	

    @Query("SELECT p FROM PizzaCommande p WHERE p.id = ?1")
    PizzaCommande findByIde(Long fooIn);
}
