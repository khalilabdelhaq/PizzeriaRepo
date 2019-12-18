package ma.gov.interieur.pizzeriabackend.VO;

public interface VOConverter<E, V> {
	V convertToVO(E e);

	E convertToEntity(V v);

}
