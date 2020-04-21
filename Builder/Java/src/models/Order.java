package models;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.List;

public class Order {
	private String id;

	private List<Product> products;
	private Customer customer;
	private Seller seller;

	public BigDecimal getTotalValue() {
		BigDecimal total = BigDecimal.ZERO;

		for (Product p : products)
			total = total.add(p.getValue().multiply(new BigDecimal(p.getQuant())));

		return total;
	}

	public int getQuantProducts() {
		int quant = 0;

		for (Product p : products)
			quant += p.getQuant();

		return quant;
	}

	public void informations() {
		System.out.println("Seller: " + seller.getName() + ", ID: " + seller.getId());
		System.out.println("Customer: " + customer.getName() + ", ID: " + customer.getId());
		System.out.println("Products: ");
		for (Product p : products)
			System.out.println("- " + p.getName() + ": R$ " + p.getValue().setScale(2, RoundingMode.HALF_EVEN) + " x" + p.getQuant());
		
		System.out.println("Total: R$ " + this.getTotalValue().setScale(2, RoundingMode.HALF_UP));
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(ArrayList<Product> p) {
		this.products = p;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Seller getSeller() {
		return seller;
	}

	public void setSeller(Seller seller) {
		this.seller = seller;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
}
