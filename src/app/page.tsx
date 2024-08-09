"use client";
import Link from "next/link";
import { FC } from "react";

const Home: FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Bem-vindo ao Nosso Site</h1>
        <p className="text-lg text-gray-600">A melhor plataforma para suas necessidades. Descubra mais abaixo.</p>
      </header>

      <section className="flex flex-col items-center bg-white p-12 rounded-lg shadow-lg max-w-xl w-full mx-auto mb-10"> 
        <Link href='/sobre'>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sobre Nós</h2>
        </Link>
        <p className="text-gray-600 mb-6">Oferecemos soluções inovadoras e serviços de alta qualidade.</p>
        <Link
          href="/contato"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Entre em Contato
        </Link>
      </section>

      <footer className="text-center text-gray-500">
        <p>&copy; 2024 World. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
};

export default Home;
