package ma.gov.interieur.pizzeriabackend.services;

import java.util.List;

import ma.gov.interieur.pizzeriabackend.VO.PizzaOrderVO;

/**
 * @author KHALIL
 *
 */
public interface PizzaCommandeServ {

	/**
	 * @return List<PizzaOrderVO>
	 * @return
	 */
	List<PizzaOrderVO> findAllOrders();

	/**
	 * @return List<PizzaOrderVO>
	 * @return
	 */
	List<PizzaOrderVO> findBylivreeFalse();

	/**
	 * @return void
	 * @param id
	 */
	void deliverOrder(Long id);

	/**
	 * @return PizzaOrderVO
	 * @param commande
	 * @return
	 */
	PizzaOrderVO saveOrder(PizzaOrderVO commande);

	/**
	 * @return PizzaOrderVO
	 * @param commande
	 * @return
	 */
	PizzaOrderVO updateOrder(PizzaOrderVO commande);

	/**
	 * @return PizzaOrderVO
	 * @param id
	 * @return
	 */
	PizzaOrderVO findById(Long id);
}
