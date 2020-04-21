package main;

import java.math.BigDecimal;

import builders.OrderBuilder;

import models.*;

/**
 * Building an order using a self-made builder.
 */
public class MainWithBuilder {

	public static void main(String[] args) {
		Order o =  new OrderBuilder()
					  .setSeller(0, "Schwazenegger")
					  .setCustomer(1, "BuildedCustomer", "9 9944-4241")
					  .addProduct("Caderno", new BigDecimal(30.99), 2)
					  .addProduct("Caneta", new BigDecimal(10.99), 3)
					  .build();
		
		o.informations();	
	}
}
