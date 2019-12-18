package ma.gov.interieur.pizzeriabackend.VO;

import java.io.Serializable;

public class PizzaOrderVO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
    
	private Long id;
	private String nomClient;
	private String prenomClient;
	private String adresse;
	private String tel;
	private String typePizza;
	private String taillePizza;
	private String saucePizza;
	private Integer quantite;
	private Boolean livree=false;
	private String dateOrder;
	
	public PizzaOrderVO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNomClient() {
		return nomClient;
	}
	public void setNomClient(String nomClient) {
		this.nomClient = nomClient;
	}
	public String getPrenomClient() {
		return prenomClient;
	}
	public void setPrenomClient(String prenomClient) {
		this.prenomClient = prenomClient;
	}
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	public String getTypePizza() {
		return typePizza;
	}
	public void setTypePizza(String typePizza) {
		this.typePizza = typePizza;
	}
	public String getTaillePizza() {
		return taillePizza;
	}
	public void setTaillePizza(String taillePizza) {
		this.taillePizza = taillePizza;
	}
	public String getSaucePizza() {
		return saucePizza;
	}
	public void setSaucePizza(String saucePizza) {
		this.saucePizza = saucePizza;
	}
	public Integer getQuantite() {
		return quantite;
	}
	public void setQuantite(Integer quantite) {
		this.quantite = quantite;
	}
	public Boolean getLivree() {
		return livree;
	}
	public void setLivree(Boolean livree) {
		this.livree = livree;
	}
	public String getDateOrder() {
		return dateOrder;
	}
	public void setDateOrder(String dateOrder) {
		this.dateOrder = dateOrder;
	}
	
}
