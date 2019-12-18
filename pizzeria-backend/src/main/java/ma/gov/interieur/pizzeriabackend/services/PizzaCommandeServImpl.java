package ma.gov.interieur.pizzeriabackend.services;

import java.util.List;
import java.util.stream.Collectors;

import ma.gov.interieur.pizzeriabackend.VO.PizzaOrderVO;
import ma.gov.interieur.pizzeriabackend.VO.VOConverter;
import ma.gov.interieur.pizzeriabackend.domains.PizzaOrder;
import ma.gov.interieur.pizzeriabackend.repositories.PizzaCommandeRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PizzaCommandeServImpl implements PizzaCommandeServ {
	@Autowired
	PizzaCommandeRepo pizzaCommandeRepo;
	@Autowired
	VOConverter<PizzaOrder, PizzaOrderVO> converter;

	@Override
	public List<PizzaOrderVO> findAllOrders() {
		// TODO Auto-generated method stub
		return pizzaCommandeRepo.findAll().stream().map(converter::convertToVO)
				.collect(Collectors.toList());
	}

	@Override
	public List<PizzaOrderVO> findBylivreeFalse() {
		// TODO Auto-generated method stub
		return pizzaCommandeRepo.findBylivreeFalse().stream()
				.map(converter::convertToVO).collect(Collectors.toList());
	}

	@Override
	public void deliverOrder(Long id) {
		pizzaCommandeRepo.setOrderDelivred(id);
	}

	@Override
	public PizzaOrderVO saveOrder(PizzaOrderVO commande) {
		// TODO Auto-generated method stub
		return converter.convertToVO(pizzaCommandeRepo.save(converter
				.convertToEntity(commande)));
	}

	@Override
	public PizzaOrderVO findById(Long id) {
		// TODO Auto-generated method stub
		return converter.convertToVO(pizzaCommandeRepo.findById(id).get());
	}

	@Override
	public PizzaOrderVO updateOrder(PizzaOrderVO commande) {
		// TODO Auto-generated method stub
		return converter.convertToVO(pizzaCommandeRepo.save(converter
				.convertToEntity(commande)));
	}

}
