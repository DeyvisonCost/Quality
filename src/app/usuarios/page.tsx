"use client";
import { fetchUsers } from "@/services/api/fetchUsers";
import { FC, useEffect, useState } from "react";
import { PaginationConfig, User } from "./types";
import Table from "@/components/Table";
import { Pagination } from "@/components/Pagination";
import { useForm, Controller } from "react-hook-form";
import { FaSearch, FaTrash } from "react-icons/fa";

const Usuarios: FC = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);

	const itemsPerPage = PaginationConfig.ITEMS_PER_PAGE;

	const { control, handleSubmit, reset, watch } = useForm({
		defaultValues: {
			name: "",
			email: "",
		},
	});

	const nameFilter = watch("name");
	const emailFilter = watch("email");

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const userData = await fetchUsers();
				setUsers(userData);
				setFilteredUsers(userData);
			} catch (error) {
				console.error("Failed to fetch users:", error);
			}
		};
		fetchUserData();
	}, []);

	const applyFilter = () => {
		const lowerCaseNameFilter = nameFilter.toLowerCase();
		const lowerCaseEmailFilter = emailFilter.toLowerCase();

		const filtered = users.filter(
			(user) =>
				user.name.toLowerCase().includes(lowerCaseNameFilter) &&
				user.email.toLowerCase().includes(lowerCaseEmailFilter)
		);
		setFilteredUsers(filtered);
		setCurrentPage(1);
	};

	const clearFilters = () => {
		reset();
		setFilteredUsers(users);
		setCurrentPage(1);
	};

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentUsers = filteredUsers.slice(startIndex, endIndex);
	const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	return (
		<div className="flex min-h-screen flex-col items-center gap-6 p-24 bg-gray-50">
			<h1 className="text-2xl text-black/75 font-bold mb-4">Buscar Usuários</h1>
			<div className="mb-4 flex items-center">
				<Controller
					name="name"
					control={control}
					render={({ field }) => (
						<input
							type="text"
							placeholder="Filtrar por nome"
							{...field}
							className="border rounded-md outline-none border-gray-300 p-2 mr-2"
						/>
					)}
				/>
				<Controller
					name="email"
					control={control}
					render={({ field }) => (
						<input
							type="text"
							placeholder="Filtrar por e-mail"
							{...field}
							className="border rounded-md outline-none border-gray-300 p-2 mr-2"
						/>
					)}
				/>
				<button
					onClick={applyFilter}
					className="flex items-center text-black/75 rounded-md p-2 font-medium"
				>
					<FaSearch className="mr-2" />
					Filtrar usuários
				</button>
				<button
					onClick={clearFilters}
					className="flex items-center text-black/75 border rounded-md p-2 font-medium ml-2 hover:bg-gray-100"
				>
					<FaTrash className="mr-2" />
					Limpar filtros
				</button>
			</div>
			{filteredUsers.length === 0 ? (
				<p className="text-gray-500">Nenhum usuário encontrado</p>
			) : (
				<>
					<Table users={currentUsers} />
					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={handlePageChange}
					/>
				</>
			)}
		</div>
	);
};

export default Usuarios;
