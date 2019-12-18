package ma.gov.interieur.pizzeriabackend.services;

import java.util.List;

import ma.gov.interieur.pizzeriabackend.VO.PizzaOrderVO;

public interface PizzaCommandeServ {

	List<PizzaOrderVO> findAllOrders();

	List<PizzaOrderVO> findBylivreeFalse();

	void deliverOrder(Long id);

	PizzaOrderVO saveOrder(PizzaOrderVO commande);
	
	PizzaOrderVO updateOrder(PizzaOrderVO commande);
	
	PizzaOrderVO findById(Long id);
}
