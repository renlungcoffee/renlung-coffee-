
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Coffee Blend #1",
    description: "Rich and smooth with a hint of cocoa and berry.",
    image: "/product-1.jpg",
    price: "$18",
  },
  {
    id: 2,
    name: "Coffee Blend #2",
    description: "Bright acidity with floral and citrus notes.",
    image: "/product-2.jpg",
    price: "$20",
  },
  {
    id: 3,
    name: "Coffee Blend #3",
    description: "Full body with caramel sweetness and spice.",
    image: "/product-3.jpg",
    price: "$22",
  },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="bg-white text-gray-900">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center space-x-2">
          <Image src="/Ren Lung Coffee白邊去背拷貝.png" alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold">仁隆咖啡</span>
        </div>
        <nav className="space-x-6 text-sm font-medium hidden md:block">
          <Link href="#story">品牌故事</Link>
          <Link href="#products">精選商品</Link>
          <Link href="#store">門市資訊</Link>
          <a href="https://www.facebook.com/RenLongCoffee/?locale=zh_TW" target="_blank" rel="noopener noreferrer">
            <img src="/facebook-icon.svg" alt="Facebook" className="w-5 h-5 inline-block" />
          </a>
        </nav>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("/hero.jpg")' }}>
          <div className="mb-6">
            <Image
              src="/Ren Lung Coffee白邊去背拷貝.png"
              alt="仁隆咖啡 Logo"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>
          <div className="bg-white bg-opacity-70 p-10 rounded-2xl shadow-xl text-center">
            <h1 className="text-4xl font-bold mb-4">仁隆咖啡 Ren Lung Coffee</h1>
            <p className="text-lg">體驗一杯誠意十足、職人精神的咖啡。</p>
          </div>
        </section>

        {/* Brand Introduction */}
        <motion.section
          id="story"
          className="py-20 px-6 max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-6">品牌故事</h2>
          <p className="text-gray-700 leading-relaxed">
            仁隆咖啡堅持簡約而不簡單的哲學，以職人精神選豆烘焙，帶來一杯杯充滿溫度的咖啡體驗。
          </p>
        </motion.section>

        {/* Product Showcase */}
        <section id="products" className="py-10 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-10">精選商品</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer" onClick={() => router.push(`/product/${product.id}`)}>
                  <img src={product.image} alt={product.name} className="rounded-t-2xl w-full h-60 object-cover" />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-2">{product.description}</p>
                    <p className="text-gray-800 font-semibold mb-4">{product.price}</p>
                    <Button>View Details</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Store Info */}
        <motion.section
          id="store"
          className="py-20 px-6 max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-6">歡迎蒞臨仁隆咖啡</h2>
          <p className="text-gray-700 mb-6">雲林縣麥寮鄉中興村仁德西路二段</p>
          <p className="text-gray-700">每日 09:00 - 18:00｜電話：05-6912777</p>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 text-center">
        <p>&copy; {new Date().getFullYear()} 仁隆咖啡 Ren Lung Coffee. All rights reserved.</p>
        <div className="mt-4">
          <a href="https://www.facebook.com/RenLongCoffee/?locale=zh_TW" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            Facebook 粉絲專頁
          </a>
        </div>
      </footer>
    </div>
  );
}
