"use client";
import { FC } from "react";

const Sobre: FC = () => {
	return (
		<main className="flex flex-col min-h-screen pt-24 p-8 bg-gray-100">
			<header className="text-center mb-12">
				<h1 className="text-4xl font-bold text-gray-800 mb-4">Sobre Nós</h1>
				<p className="text-lg text-gray-600">
					Conheça mais sobre nossa empresa e o que fazemos.
				</p>
			</header>

			<section className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mb-12 flex flex-col md:flex-row">
				<div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 flex flex-col justify-between">
					<div className=" items-center flex flex-col text-pretty">
						<h2 className="text-3xl font-semibold text-gray-800 mb-4">
							Nossa Missão
						</h2>
						<p className="text-gray-600">
							Estamos comprometidos em fornecer as melhores soluções para nossos
							clientes, combinando inovação e qualidade. Nossa missão é entregar
							produtos e serviços que realmente façam a diferença e atendam às
							necessidades de nossos usuários.
						</p>
					</div>
				</div>

				<div className="md:w-1/2 flex flex-col">
					<div className="mb-8">
						<h2 className="text-3xl font-semibold text-gray-800 mb-4">
							Nossos Valores
						</h2>
						<div className="list-disc text-gray-600 ">
							<p>Integridade: Sempre agimos com ética e honestidade.</p>
							<p>
								Inovação: Buscamos constantemente novas maneiras de melhorar.
							</p>
							<p>
								Qualidade: Comprometemo-nos com a excelência em tudo o que
								fazemos.
							</p>
							<p>
								Cliente em Primeiro Lugar: A satisfação do cliente é nossa
								prioridade.
							</p>
						</div>
					</div>

					<div>
						<h2 className="text-3xl font-semibold text-gray-800 mb-4">
							Nossa História
						</h2>
						<p className="text-gray-600">
							Fundada em 9999, nossa empresa começou com uma simples ideia muito
							inovadora. Desde então, temos trabalhado arduamente para crescer e
							oferecer soluções excepcionais aos nossos clientes.
						</p>
					</div>
				</div>
			</section>

			<footer className="text-center text-gray-500 mt-12">
				<p>&copy; 2024 Seu Nome. Todos os direitos reservados.</p>
			</footer>
		</main>
	);
};

export default Sobre;
