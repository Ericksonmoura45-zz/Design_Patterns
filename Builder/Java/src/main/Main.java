package main;

import java.math.BigDecimal;
import java.util.ArrayList;

import models.*;

/**
 * Building an Order without a builder class. 
 * There's too much code here compared to the Builder approach seen in MainWithBuilder. 
 */
public class Main {

	public static void main(String[] args) {
		
		Customer c = new Customer();
		c.setId(0);
		c.setName("Godofredo");
		c.setPhone("9 9944-4241");
		
		Seller s = new Seller();
		s.setId(1);
		s.setName("Schwarzenegger");
		
		Product p1 = new Product();
		p1.setName("Caderno");
		p1.setQuant(2);
		p1.setValue(new BigDecimal(30.99));
		
		Product p2 = new Product();
		p2.setName("Caneta");
		p2.setQuant(3);
		p2.setValue(new BigDecimal(10.99));
		
		Order o = new Order();
		o.setCustomer(c);
		o.setSeller(s);
		o.setProducts(new ArrayList<>());
		o.getProducts().add(p1);
		o.getProducts().add(p2);
		
		o.informations();
	}

}
