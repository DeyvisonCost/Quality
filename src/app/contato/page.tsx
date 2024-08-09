"use client";
import { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Schema } from "./types";
import { schema } from "./schema";

const Contato: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const router = useRouter();
  const onSubmit = (data: Schema) => {
    console.log(data);
    router.push("/");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Contato
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Entre em contato conosco preenchendo o formulário abaixo. Responderemos o mais breve possível.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
              <label className="flex flex-col">
                <span className="text-gray-700 font-medium">Nome</span>
                <input
                  {...register("nome")}
                  type="text"
                  placeholder="Seu Nome"
                  className={`p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    errors.nome ? "border-red-500" : ""
                  }`}
                />
              {errors.nome && <p className="text-red-500 p text-sm">{errors.nome.message}</p>}
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <label className="flex flex-col">
                <span className="text-gray-700 font-medium">E-mail</span>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Seu E-mail"
                  className={`p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <label className="flex flex-col">
                <span className="text-gray-700 font-medium">Mensagem</span>
                <textarea
                  {...register("mensagem")}
                  placeholder="Sua Mensagem"
                  rows={4}
                  className={`w-full h-40 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none ${
                    errors.mensagem ? "border-red-500" : ""
                  }`}
                />
              {errors.mensagem && <p className="text-red-500 text-sm">{errors.mensagem.message}</p>}
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-gray-800">Informações de Contato</h2>
            <p className="text-lg text-gray-600">
              <strong>Endereço:</strong> Rua X, 123 - Rio De Janeiro, RJ
            </p>
            <p className="text-lg text-gray-600">
              <strong>Telefone:</strong> (21) 98080-8080
            </p>
            <p className="text-lg text-gray-600">
              <strong>E-mail:</strong> deyvisongtr@gmail.com
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contato;
