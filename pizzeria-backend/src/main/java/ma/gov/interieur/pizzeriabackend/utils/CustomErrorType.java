package ma.gov.interieur.pizzeriabackend.utils;

/**
 * @author KHALIL
 *
 */
public class CustomErrorType {

	/**
     * 
     */
	private String errorMessage;

	/**
	 * @param errorMessage
	 */
	public CustomErrorType(String errorMessage) {
		this.errorMessage = errorMessage;
	}

	/**
	 * @author KHALIL
	 * @return String
	 * @return
	 */
	public String getErrorMessage() {
		return errorMessage;
	}

}