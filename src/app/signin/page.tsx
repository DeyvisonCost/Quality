"use client";
import { FC, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { setUserEmail, setUserPassword } from "@/commons/storage/user";
import { Schema } from "./types";
import { schema } from "./schema";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn: FC = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isValid },
	} = useForm<Schema>({
		resolver: zodResolver(schema),
		mode: "onChange",
	});

	const router = useRouter();

	const onSubmit = (data: Schema) => {
		setUserEmail(data.email);
		setUserPassword(data.password);
		router.push("/login");
	};

	const password = watch("password");
	const confirmPassword = watch("confirmPassword");

	const passwordsMatch = password === confirmPassword && password !== "";

	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-4">
			<h1 className="text-2xl font-bold mb-8">Crie sua conta</h1>
			<form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="email"
					>
						Email
					</label>
					<input
						{...register("email")}
						id="email"
						type="email"
						placeholder="Digite seu email"
						className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
							errors.email ? "border-red-500" : ""
						}`}
					/>
					{errors.email && (
						<p className="text-red-500 text-sm">{errors.email.message}</p>
					)}
				</div>
				<div className="mb-4 relative">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="password"
					>
						Senha
					</label>
					<div className="relative">
						<input
							{...register("password")}
							id="password"
							type={showPassword ? "text" : "password"}
							placeholder="Digite sua senha"
							className={`shadow appearance-none border rounded w-full py-2 px-3 pr-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
								errors.password ? "border-red-500" : ""
							}`}
						/>
						<button
							type="button"
							onClick={() => setShowPassword(!showPassword)}
							className="absolute inset-y-0 right-0 flex items-center px-3"
						>
							{showPassword ? <FaEyeSlash /> : <FaEye />}
						</button>
					</div>
					{errors.password && (
						<p className="text-red-500 text-sm">{errors.password.message}</p>
					)}
				</div>
				<div className="mb-6 relative">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="confirm-password"
					>
						Confirme sua Senha
					</label>
					<div className="relative">
						<input
							{...register("confirmPassword")}
							id="confirm-password"
							type={showConfirmPassword ? "text" : "password"}
							placeholder="Confirme sua senha"
							className={`shadow appearance-none border rounded w-full py-2 px-3 pr-12 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
								errors.confirmPassword ? "border-red-500" : ""
							}`}
						/>
						<button
							type="button"
							onClick={() => setShowConfirmPassword(!showConfirmPassword)}
							className="absolute inset-y-0 right-0 flex items-center px-3"
						>
							{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
						</button>
					</div>
					{errors.confirmPassword && (
						<p className="text-red-500 text-sm">
							{errors.confirmPassword.message}
						</p>
					)}
				</div>
				<div className="mb-6">
					<button
						type="submit"
						className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline ${
							!isValid || !passwordsMatch ? "opacity-50 cursor-not-allowed" : ""
						}`}
						disabled={!isValid || !passwordsMatch}
					>
						Confirmar
					</button>
				</div>
			</form>
		</main>
	);
};

export default SignIn;
