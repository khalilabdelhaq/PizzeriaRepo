package ma.gov.interieur.pizzeriabackend.repositories;

import java.util.List;
import java.util.Optional;

import ma.gov.interieur.pizzeriabackend.domains.PizzaOrder;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface PizzaCommandeRepo extends JpaRepository<PizzaOrder, Long>,
		CrudRepository<PizzaOrder, Long> {
	
	List<PizzaOrder> findBylivreeFalse();
	
	Optional<PizzaOrder> findById(Long fooIn);

	@Modifying
	@Query("update PizzaOrder p set p.livree = FALSE where p.id = ?1")
	void setOrderDelivred(Long orderId);
	
}
