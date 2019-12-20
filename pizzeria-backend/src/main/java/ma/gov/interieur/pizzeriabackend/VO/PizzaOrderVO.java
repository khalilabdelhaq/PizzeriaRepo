package ma.gov.interieur.pizzeriabackend.VO;

import java.io.Serializable;

/**
 * @author KHALIL
 *
 */
public class PizzaOrderVO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/**
	 * 
	 */
	private Long id;
	/**
	 * 
	 */
	private String nomClient;
	/**
	 * 
	 */
	private String prenomClient;
	/**
	 * 
	 */
	private String adresse;
	/**
	 * 
	 */
	private String tel;
	/**
	 * 
	 */
	private String typePizza;
	/**
	 * 
	 */
	private String taillePizza;
	/**
	 * 
	 */
	private String saucePizza;
	/**
	 * 
	 */
	private Integer quantite;
	/**
	 * 
	 */
	private Boolean livree = false;
	/**
	 * 
	 */
	private String dateOrder;

	/**
	 * 
	 */
	public PizzaOrderVO() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @return Long
	 * @return
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @return void
	 * @param id
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return String
	 * @return
	 */
	public String getNomClient() {
		return nomClient;
	}

	/**
	 * @return void
	 * @param nomClient
	 */
	public void setNomClient(String nomClient) {
		this.nomClient = nomClient;
	}

	/**
	 * @return String
	 * @return
	 */
	public String getPrenomClient() {
		return prenomClient;
	}

	/**
	 * @return void
	 * @param prenomClient
	 */
	public void setPrenomClient(String prenomClient) {
		this.prenomClient = prenomClient;
	}

	/**
	 * @return String
	 * @return
	 */
	public String getAdresse() {
		return adresse;
	}

	/**
	 * @return void
	 * @param adresse
	 */
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	/**
	 * @return String
	 * @return
	 */
	public String getTel() {
		return tel;
	}

	/**
	 * @return void
	 * @param tel
	 */
	public void setTel(String tel) {
		this.tel = tel;
	}

	/**
	 * @return String
	 * @return
	 */
	public String getTypePizza() {
		return typePizza;
	}

	/**
	 * @return void
	 * @param typePizza
	 */
	public void setTypePizza(String typePizza) {
		this.typePizza = typePizza;
	}

	/**
	 * @return String
	 * @return
	 */
	public String getTaillePizza() {
		return taillePizza;
	}

	/**
	 * @return void
	 * @param taillePizza
	 */
	public void setTaillePizza(String taillePizza) {
		this.taillePizza = taillePizza;
	}

	/**
	 * @return String
	 * @return
	 */
	public String getSaucePizza() {
		return saucePizza;
	}

	/**
	 * @return void
	 * @param saucePizza
	 */
	public void setSaucePizza(String saucePizza) {
		this.saucePizza = saucePizza;
	}

	/**
	 * @return Integer
	 * @return
	 */
	public Integer getQuantite() {
		return quantite;
	}

	/**
	 * @return void
	 * @param quantite
	 */
	public void setQuantite(Integer quantite) {
		this.quantite = quantite;
	}

	/**
	 * @return Boolean
	 * @return
	 */
	public Boolean getLivree() {
		return livree;
	}

	/**
	 * @return void
	 * @param livree
	 */
	public void setLivree(Boolean livree) {
		this.livree = livree;
	}

	/**
	 * @return String
	 * @return
	 */
	public String getDateOrder() {
		return dateOrder;
	}

	/**
	 * @return void
	 * @param dateOrder
	 */
	public void setDateOrder(String dateOrder) {
		this.dateOrder = dateOrder;
	}

}
