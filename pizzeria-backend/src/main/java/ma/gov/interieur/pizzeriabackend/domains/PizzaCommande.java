package ma.gov.interieur.pizzeriabackend.domains;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class PizzaCommande {
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
	@Temporal(value = TemporalType.TIMESTAMP)
	private Date dateCommande = new Date();
	@Column(columnDefinition = "boolean default FALSE")
	Boolean livree;

	public PizzaCommande() {
		super();
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

}
