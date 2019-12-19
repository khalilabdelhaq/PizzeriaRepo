package ma.gov.interieur.pizzeriabackend.init;

import ma.gov.interieur.pizzeriabackend.domains.PizzaOrder;
import ma.gov.interieur.pizzeriabackend.repositories.PizzaCommandeRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

/**
 * @author KHALIL
 *
 */
@Component
public class DataInit implements ApplicationRunner {
	/**
	 * 
	 */
	@Autowired
	private PizzaCommandeRepo pizzaRepo;

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * org.springframework.boot.ApplicationRunner#run(org.springframework.boot
	 * .ApplicationArguments)
	 */
	@Override
	public void run(ApplicationArguments args) throws Exception {
		PizzaOrder commande1 = new PizzaOrder();
		commande1.setNomClient("toto");
		commande1.setPrenomClient("prenomToto");
		commande1.setTel("0668531866");
		commande1.setAdresse("Adresse toto");
		commande1.setTypePizza("Margaritta");
		commande1.setSaucePizza("Sauce Tomate");
		commande1.setTaillePizza("XL");
		commande1.setQuantite(2);
		commande1.setLivree(false);

		PizzaOrder commande2 = new PizzaOrder();
		commande2.setNomClient("khalil");
		commande2.setPrenomClient("abdelhak");
		commande2.setTel("0668531866");
		commande2.setAdresse("Adresse khalil");
		commande2.setTypePizza("4 saison");
		commande2.setSaucePizza("Sauce Mixte");
		commande2.setTaillePizza("Medium");
		commande2.setQuantite(4);
		commande2.setLivree(false);

		pizzaRepo.save(commande1);
		pizzaRepo.save(commande2);

	}

}
