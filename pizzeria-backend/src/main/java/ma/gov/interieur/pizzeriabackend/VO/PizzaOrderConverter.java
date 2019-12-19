package ma.gov.interieur.pizzeriabackend.VO;

import org.springframework.stereotype.Component;

import ma.gov.interieur.pizzeriabackend.domains.PizzaOrder;

/**
 * @author KHALIL
 *
 */
@Component
public class PizzaOrderConverter implements
		VOConverter<PizzaOrder, PizzaOrderVO> {

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * ma.gov.interieur.pizzeriabackend.VO.VOConverter#convertToEntity(java.
	 * lang.Object)
	 */
	@Override
	public PizzaOrder convertToEntity(PizzaOrderVO vo) {
		PizzaOrder entity = new PizzaOrder();
		entity.setId(vo.getId());
		entity.setNomClient(vo.getNomClient());
		entity.setPrenomClient(vo.getPrenomClient());
		entity.setAdresse(vo.getPrenomClient());
		entity.setTel(vo.getTel());
		entity.setTypePizza(vo.getTypePizza());
		entity.setTaillePizza(vo.getTaillePizza());
		entity.setQuantite(vo.getQuantite());
		entity.setLivree(vo.getLivree());
		entity.setSaucePizza(vo.getSaucePizza());
		return entity;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * ma.gov.interieur.pizzeriabackend.VO.VOConverter#convertToVO(java.lang
	 * .Object)
	 */
	@Override
	public PizzaOrderVO convertToVO(PizzaOrder entity) {
		PizzaOrderVO vo = new PizzaOrderVO();
		vo.setId(entity.getId());
		vo.setNomClient(entity.getNomClient());
		vo.setPrenomClient(entity.getPrenomClient());
		vo.setAdresse(entity.getPrenomClient());
		vo.setTel(entity.getTel());
		vo.setTypePizza(entity.getTypePizza());
		vo.setTaillePizza(entity.getTaillePizza());
		vo.setQuantite(entity.getQuantite());
		vo.setLivree(entity.getLivree());
		vo.setSaucePizza(entity.getSaucePizza());
		vo.setDateOrder(entity.getOrderDate().toString());
		return vo;
	}

}
