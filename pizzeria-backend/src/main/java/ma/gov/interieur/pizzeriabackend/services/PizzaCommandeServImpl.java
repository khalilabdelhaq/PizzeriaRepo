package ma.gov.interieur.pizzeriabackend.services;

import java.util.List;
import java.util.stream.Collectors;

import ma.gov.interieur.pizzeriabackend.VO.PizzaOrderVO;
import ma.gov.interieur.pizzeriabackend.VO.VOConverter;
import ma.gov.interieur.pizzeriabackend.domains.PizzaOrder;
import ma.gov.interieur.pizzeriabackend.repositories.PizzaCommandeRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author KHALIL
 *
 */
@Service
public class PizzaCommandeServImpl implements PizzaCommandeServ {
	@Autowired
	PizzaCommandeRepo pizzaCommandeRepo;
	@Autowired
	VOConverter<PizzaOrder, PizzaOrderVO> converter;

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * ma.gov.interieur.pizzeriabackend.services.PizzaCommandeServ#findAllOrders
	 * ()
	 */
	@Override
	public List<PizzaOrderVO> findAllOrders() {
		// TODO Auto-generated method stub
		return pizzaCommandeRepo.findAll().stream().map(converter::convertToVO)
				.collect(Collectors.toList());
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * ma.gov.interieur.pizzeriabackend.services.PizzaCommandeServ#findBylivreeFalse
	 * ()
	 */
	@Override
	public List<PizzaOrderVO> findBylivreeFalse() {
		// TODO Auto-generated method stub
		return pizzaCommandeRepo.findBylivreeFalse().stream()
				.map(converter::convertToVO).collect(Collectors.toList());
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * ma.gov.interieur.pizzeriabackend.services.PizzaCommandeServ#deliverOrder
	 * (java.lang.Long)
	 */
	@Override
	public void deliverOrder(Long id) {
		pizzaCommandeRepo.setOrderDelivred(id);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * ma.gov.interieur.pizzeriabackend.services.PizzaCommandeServ#saveOrder
	 * (ma.gov.interieur.pizzeriabackend.VO.PizzaOrderVO)
	 */
	@Override
	public PizzaOrderVO saveOrder(PizzaOrderVO commande) {
		// TODO Auto-generated method stub
		return converter.convertToVO(pizzaCommandeRepo.save(converter
				.convertToEntity(commande)));
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * ma.gov.interieur.pizzeriabackend.services.PizzaCommandeServ#findById(
	 * java.lang.Long)
	 */
	@Override
	public PizzaOrderVO findById(Long id) {
		// TODO Auto-generated method stub
		return converter.convertToVO(pizzaCommandeRepo.findById(id).get());
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * ma.gov.interieur.pizzeriabackend.services.PizzaCommandeServ#updateOrder
	 * (ma.gov.interieur.pizzeriabackend.VO.PizzaOrderVO)
	 */
	@Override
	public PizzaOrderVO updateOrder(PizzaOrderVO commande) {
		// TODO Auto-generated method stub
		return converter.convertToVO(pizzaCommandeRepo.save(converter
				.convertToEntity(commande)));
	}

}
