package ma.gov.interieur.pizzeriabackend.domains;

import java.util.Calendar;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * @author KHALIL
 *
 */
@Entity
public class PizzaOrder {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nomClient;
	private String prenomClient;
	private String adresse;
	private String tel;
	private String typePizza;
	private String taillePizza;
	private String saucePizza;
	private Integer quantite;
	@Column(columnDefinition = "boolean default FALSE")
	private Boolean livree = false;
	@Temporal(TemporalType.DATE)
	private Calendar orderDate = Calendar.getInstance();

	/**
	 * 
	 */
	public PizzaOrder() {
		super();
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
	 * @return Calendar
	 * @return
	 */
	public Calendar getOrderDate() {
		return orderDate;
	}

	/**
	 * @return void
	 * @param orderDate
	 */
	public void setOrderDate(Calendar orderDate) {
		this.orderDate = orderDate;
	}

}
