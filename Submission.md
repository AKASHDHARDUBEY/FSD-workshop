# Jest Workshop Submission

## Student Details
- Name:Akash Dhar Dubey
- Roll Number: 2024-B-21122004B
- GitHub Username: AKASHDHARDUBEY

---

## Tests Written

List each test you wrote and briefly explain **what bug or regression it prevents**.

### 1. Test Name: check subtotal less than 1000
**What it protects against:**  
Ensures that no discount is applied when the subtotal is below the threshold, preventing revenue loss from accidental discounts.

---

### 2. Test Name: check subtotal 1000 or more
**What it protects against:**  
Verifies that the 5% automatic discount is correctly applied for large orders, ensuring customers get the promised deal.

---

### 3. Test Name: check save10 coupon / check flat50 coupon
**What it protects against:**  
Ensures coupon codes function correctly, applying the proper discount logic and caps (e.g., max 100 for SAVE10), preventing financial discrepancies.

---

### 4. Test Name: check coupon case insensitive
**What it protects against:**  
Prevents user frustration by ensuring coupons like "save10" work just as well as "SAVE10", improving user experience.

---

### 5. Test Name: check invalid subtotal / coupon error
**What it protects against:**  
Ensures the system fails gracefully and safely when given bad data (negative numbers, invalid codes), preventing crashes or weird calculations.

---

## CI Pipeline (if implemented)
- Did CI pass successfully? (Yes / No)
- GitHub Actions Run URL: https://github.com/AKASHDHARDUBEY/FSD-workshop/actions/runs/21825924444

---

## Reflection (1–2 lines)
What is **one thing** you understood better about testing or CI after this workshop?

I learned how to write comprehensive test cases to cover edge cases and how to automate this testing process using GitHub Actions to ensure code quality on every push.

