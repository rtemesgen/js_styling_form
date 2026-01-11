function submitProcurementForm(item, quantity, supplier, price) {
  // Error checks
  if (!item) {
    console.log("\x1b[31m[ERROR]\x1b[0m Item name is required");
    return;
  } 
  if (quantity <= 0) {
    console.log("\x1b[31m[ERROR]\x1b[0m Quantity must be greater than 0");
    return;
  }
  if (!supplier) {
    console.log("\x1b[31m[ERROR]\x1b[0m Supplier is required");
    return;
    
  }
  if (price <= 0) {
    console.log("\x1b[31m[ERROR]\x1b[0m Price must be greater than 0");
    return;
  }

  // Success
  console.log("\x1b[32m[INFO]\x1b[0m Procurement form submitted successfully!");
}

// Simulate errors
submitProcurementForm("", 10, "ABC Ltd", 100);   // Missing item
submitProcurementForm("Paper", -5, "ABC Ltd", 100); // Invalid quantity
submitProcurementForm("Ink", 10, "", 50);        // Missing supplier
submitProcurementForm("Laptop", 2, "TechWorld", 0); // Invalid price
// Simulate success
submitProcurementForm("Monitor", 5, "DisplayCo", 300);