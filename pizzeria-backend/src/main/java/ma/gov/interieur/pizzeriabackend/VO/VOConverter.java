package ma.gov.interieur.pizzeriabackend.VO;

/**
 * @author KHALIL
 *
 * @param <E>
 * @param <V>
 */
public interface VOConverter<E, V> {
	/**
	 * @return V
	 * @param e
	 * @return
	 */
	V convertToVO(E e);

	/**
	 * @return E
	 * @param v
	 * @return
	 */
	E convertToEntity(V v);

}
