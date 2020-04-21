package builders;

import java.math.BigDecimal;
import java.util.ArrayList;

import models.*;

/**
 * This Builder
 *
 */
public class OrderBuilder {
	private Order o; // Order that will be built;

	public OrderBuilder() {
		this.o = new Order();
	}

	public OrderBuilder setOrder(String order_id) {
		this.o.setId(order_id);
		return this;
	}

	public OrderBuilder setCustomer(int id, String name, String phone) {
		Customer c = new Customer();
		c.setId(id);
		c.setName(name);
		c.setPhone(phone);

		this.o.setCustomer(c);

		return this;
	}

	public OrderBuilder setSeller(int id, String name) {
		Seller s = new Seller();
		s.setId(id);
		s.setName(name);
		
		this.o.setSeller(s);

		return this;
	}

	public OrderBuilder addProduct(String name, BigDecimal value, int quant) {
		Product p = new Product();
		p.setName(name);
		p.setQuant(quant);
		p.setValue(value);

		if (this.o.getProducts() == null)
			this.o.setProducts(new ArrayList<>());

		this.o.getProducts().add(p);

		return this;
	}
	
	public Order build() {
		return this.o;
	}
}
