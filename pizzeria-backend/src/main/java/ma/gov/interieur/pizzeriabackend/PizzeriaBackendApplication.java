package ma.gov.interieur.pizzeriabackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * @author KHALIL
 *
 */
@EnableSwagger2
@SpringBootApplication
public class PizzeriaBackendApplication {

	/**
	 * @return void
	 * @param args
	 */
	public static void main(String[] args) {
		SpringApplication.run(PizzeriaBackendApplication.class, args);
	}

}
