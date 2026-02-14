import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import wineImg from "@/assets/wine-glass.jpg";
import spiritsImg from "@/assets/spirits-glass.jpg";
import beerImg from "@/assets/beer-glass.jpg";
import cafeImg from "@/assets/cafe-essentials.jpg";
import champagneImg from "@/assets/champagne-glass.jpg";

const allProducts = [
  { name: "Bordeaux Wine Glass", category: "Wine & Champagne", image: wineImg, capacity: "650ml", height: "235mm" },
  { name: "Champagne Flute", category: "Wine & Champagne", image: champagneImg, capacity: "210ml", height: "225mm" },
  { name: "Burgundy Wine Glass", category: "Wine & Champagne", image: wineImg, capacity: "730ml", height: "240mm" },
  { name: "Crystal Whiskey Tumbler", category: "Spirits & Liquor", image: spiritsImg, capacity: "300ml", height: "100mm" },
  { name: "Old Fashioned Glass", category: "Spirits & Liquor", image: spiritsImg, capacity: "350ml", height: "95mm" },
  { name: "Highball Glass", category: "Spirits & Liquor", image: spiritsImg, capacity: "400ml", height: "150mm" },
  { name: "Pilsner Glass", category: "Beer", image: beerImg, capacity: "500ml", height: "200mm" },
  { name: "Craft Beer Goblet", category: "Beer", image: beerImg, capacity: "400ml", height: "180mm" },
  { name: "Cappuccino Cup & Saucer", category: "Café Essentials", image: cafeImg, capacity: "200ml", height: "80mm" },
  { name: "Espresso Cup Set", category: "Café Essentials", image: cafeImg, capacity: "90ml", height: "60mm" },
  { name: "Latte Glass", category: "Café Essentials", image: cafeImg, capacity: "350ml", height: "140mm" },
];

const categories = ["All", "Wine & Champagne", "Spirits & Liquor", "Beer", "Café Essentials"];

const Products = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? allProducts : allProducts.filter((p) => p.category === active);

  return (
    <Layout>
      <section className="pt-28 pb-8 section-padding bg-secondary/30">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Our <span className="gradient-gold-text">Products</span>
          </motion.h1>
          <p className="text-muted-foreground font-serif text-lg mb-8">
            Premium glassware and hospitality essentials for discerning establishments
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat
                    ? "gradient-gold text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((product) => (
                <motion.div
                  key={product.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover-lift"
                >
                  <div className="relative aspect-square overflow-hidden bg-secondary/30">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full text-primary">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold mb-2">{product.name}</h3>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span>Capacity: {product.capacity}</span>
                      <span>Height: {product.height}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
