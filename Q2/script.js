class Product {
  static total = 0;
  constructor(brand, price, rating, color) {
    this.brand = brand;
    this.price = price;
    this.rating = rating;
    this.color = color;
    Product.total += 1;
  }
  getDescription() {
    return (
      "Brand : " +
      this.brand +
      " Price : " +
      this.price +
      " Color : " +
      this.color +
      " Rating : " +
      this.rating
    );
  }
}
class Shoes extends Product {
  static total = 0;
  constructor(brand, price, rating, color, gender, type, material) {
    super(brand, price, rating, color);
    this.gender = gender;
    this.type = type;
    this.material = material;
    Shoes.total += 1;
  }
}
class Watches extends Product {
  static total = 0;
  constructor(
    brand,
    price,
    rating,
    color,
    gender,
    isWaterResistant,
    displayType
  ) {
    super(brand, price, rating, color);
    this.gender = gender;
    this.isWaterResistant = isWaterResistant;
    this.displayType = displayType;
    Watches.total += 1;
  }
}
class Mobile extends Product {
  static total = 0;
  constructor(brand, price, rating, color, memory, processor, operatingSystem) {
    super(brand, price, rating, color);
    this.memory = memory;
    this.processor = processor;
    this.operatingSystem = operatingSystem;
    Mobile.total += 1;
  }
}
