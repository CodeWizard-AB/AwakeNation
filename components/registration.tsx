"use client";

import { createElement, Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
	Plus,
	Trash2,
	Upload,
	CreditCard,
	CheckCircle,
	ArrowRight,
	ArrowLeft,
	Users,
	Trophy,
	Smartphone,
	Mail,
	Building,
	User,
	Camera,
	Clock,
	Zap,
	AlertCircleIcon,
	Loader2,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	playerSchema,
	RegistrationFormData,
	registrationSchema,
} from "@/lib/zod";
import { steps, workflowSteps } from "@/content";
import { createRegistration } from "@/actions/sanity";

const JERSEY_SIZES = playerSchema.shape.jerseySize.options;
const PLAYER_POSITIONS = playerSchema.shape.position.options;

export default function Registration() {
	const [currentStep, setCurrentStep] = useState(1);

	const form = useForm<RegistrationFormData>({
		resolver: zodResolver(registrationSchema),
		mode: "onChange",
		defaultValues: {
			teamName: "",
			institutionName: "",
			managerName: "",
			managerPhone: "",
			managerWhatsApp: "",
			managerEmail: "",
			players: Array.from({ length: 1 }, () => ({
				name: "",
				jerseySize: undefined,
				position: undefined,
			})),
			paymentReceipt: undefined,
			universityLogo: undefined,
		},
	});

	const {
		handleSubmit,
		control,
		trigger,
		formState: { isSubmitSuccessful, isSubmitting, errors },
		getValues,
		reset,
	} = form;

	const { fields, append, remove } = useFieldArray({
		control,
		name: "players",
	});

	const handleNext = async () => {
		let isValid = false;

		switch (currentStep) {
			case 1:
				isValid = await trigger([
					"teamName",
					"institutionName",
					"managerName",
					"managerPhone",
					"managerWhatsApp",
					"managerEmail",
				]);
				break;
			case 2:
				isValid = await trigger("players");
				break;
			case 3:
				isValid = await trigger(["paymentReceipt", "universityLogo"]);
				break;
			default:
				isValid = true;
		}

		if (isValid) {
			setCurrentStep((prev) => prev + 1);
		}
	};

	if (isSubmitSuccessful) {
		return (
			<section id="registration" className="container">
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6 }}
					className="max-w-2xl mx-auto"
				>
					<Card className="card-professional overflow-hidden border-green-500/20 pt-0">
						<CardContent className="p-0">
							<div className="bg-gradient-to-r from-green-600 to-green-700 p-8 text-center">
								<motion.div
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
									className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
								>
									<CheckCircle className="h-12 w-12 text-white" />
								</motion.div>
								<h3 className="text-4xl font-bold text-white mb-4">
									Registration Complete!
								</h3>
								<p className="text-xl text-green-100">
									Welcome to AwakeNation Sports Fest 2025
								</p>
							</div>
							<div className="p-8 text-center">
								<p className="text-muted-foreground mb-8 text-lg leading-relaxed">
									Thank you for registering! We&apos;ll review your submission
									and send confirmation details to your email within 24 hours.
								</p>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
									{[
										{
											icon: Mail,
											label: "Check Email",
											color: "text-blue-500",
										},
										{
											icon: Smartphone,
											label: "SMS Updates",
											color: "text-green-500",
										},
										{
											icon: Trophy,
											label: "Event Ready",
											color: "text-yellow-500",
										},
									].map((item, index) => (
										<motion.div
											key={index}
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.5 + index * 0.1 }}
											className="bg-card rounded-xl p-4 border"
										>
											<item.icon
												className={`h-8 w-8 mx-auto mb-2 ${item.color}`}
											/>
											<p className="text-sm text-muted-foreground">
												{item.label}
											</p>
										</motion.div>
									))}
								</div>
								<Button
									onClick={() => {
										setCurrentStep(1);
										reset();
									}}
									variant="outline"
									className="hover-lift"
								>
									Register Another Team
								</Button>
							</div>
						</CardContent>
					</Card>
				</motion.div>
			</section>
		);
	}

	return (
		<section id="registration" className="container">
			{/* Header */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-center max-w-2xl mx-auto mb-16"
			>
				<h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
					Join the Revolution
				</h2>
				<p className="mt-6 text-base sm:text-lg">
					Register your team for the ultimate sports experience
				</p>
			</motion.div>

			<div>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
					{/* Left Side - Registration Form */}
					<div className="lg:col-span-2">
						{/* Progress Steps */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2, duration: 0.6 }}
							className="mb-8"
						>
							<div className="flex items-center justify-between">
								{steps.map((step, index) => (
									<Fragment key={step.id}>
										<div className="flex flex-col items-center">
											<motion.div
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
												className={`
                      w-12 h-12 rounded-xl flex items-center justify-center mb-2 transition-all duration-300
                      ${
												currentStep >= step.id
													? `bg-gradient-to-r ${step.color} text-white shadow-lg`
													: "bg-muted text-muted-foreground"
											}
                    `}
											>
												<step.icon className="h-6 w-6" />
											</motion.div>
											<div className="text-center">
												<p
													className={`text-sm font-semibold ${
														currentStep >= step.id
															? "text-foreground"
															: "text-muted-foreground"
													}`}
												>
													{step.title}
												</p>
											</div>
										</div>
										{index < steps.length - 1 && (
											<div
												className={`
                      flex-1 h-1 rounded-full transition-all duration-300 ml-2 mr-2 mb-5
                      ${
												currentStep > step.id
													? "bg-gradient-to-r from-blue-600 to-purple-600"
													: "bg-border"
											}
                    `}
											/>
										)}
									</Fragment>
								))}
							</div>
						</motion.div>

						{/* Form Content */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4, duration: 0.6 }}
						>
							<Card className="card-professional backdrop-blur-sm overflow-hidden pt-0">
								<CardHeader
									className={`bg-gradient-to-r ${
										steps[currentStep - 1].color
									} text-white`}
								>
									<div className="flex items-center space-x-4 py-4">
										<div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
											{createElement(steps[currentStep - 1].icon, {
												className: "h-6 w-6",
											})}
										</div>
										<div>
											<CardTitle className="text-2xl">
												{steps[currentStep - 1].title}
											</CardTitle>
											<p className="text-lg opacity-90">
												{steps[currentStep - 1].description}
											</p>
										</div>
									</div>
								</CardHeader>

								<CardContent className="px-8 pt-4">
									<AnimatePresence mode="wait">
										<Form {...form}>
											<form
												onSubmit={handleSubmit(createRegistration)}
												className="space-y-6"
											>
												<motion.div
													initial={{ opacity: 0, x: 20 }}
													animate={{ opacity: 1, x: 0 }}
													exit={{ opacity: 0, x: -20 }}
													transition={{ duration: 0.3 }}
												>
													{/* Step 1: Basic Information */}
													{currentStep === 1 && (
														<div
															key={steps[0].id}
															className="grid grid-cols-1 md:grid-cols-2 gap-6"
														>
															<FormField
																control={control}
																name="teamName"
																render={({ field }) => (
																	<FormItem>
																		<FormLabel className="mb-2 text-foreground flex items-center">
																			<Trophy className="h-4 w-4 mr-2 text-yellow-500" />
																			Team Name
																		</FormLabel>
																		<FormControl>
																			<Input
																				placeholder="Enter your team name"
																				className="input-professional h-12"
																				{...field}
																			/>
																		</FormControl>
																		<FormMessage />
																	</FormItem>
																)}
															/>

															<FormField
																control={control}
																name="institutionName"
																render={({ field }) => (
																	<FormItem>
																		<FormLabel className="mb-2 text-foreground flex items-center">
																			<Building className="h-4 w-4 mr-2 text-blue-500" />
																			Institution Name
																		</FormLabel>
																		<FormControl>
																			<Input
																				placeholder="Enter your institution name"
																				className="input-professional h-12"
																				{...field}
																			/>
																		</FormControl>
																		<FormMessage />
																	</FormItem>
																)}
															/>

															<FormField
																control={control}
																name="managerName"
																render={({ field }) => (
																	<FormItem>
																		<FormLabel className="mb-2 text-foreground flex items-center">
																			<User className="h-4 w-4 mr-2 text-green-500" />
																			Team Manager Name
																		</FormLabel>
																		<FormControl>
																			<Input
																				placeholder="Enter team manager name"
																				className="input-professional h-12"
																				{...field}
																			/>
																		</FormControl>
																		<FormMessage />
																	</FormItem>
																)}
															/>

															<FormField
																control={control}
																name="managerPhone"
																render={({ field }) => (
																	<FormItem>
																		<FormLabel className="mb- text-foreground flex items-center">
																			<Smartphone className="h-4 w-4 mr-2 text-purple-500" />
																			Phone Number
																		</FormLabel>
																		<FormControl>
																			<Input
																				type="tel"
																				placeholder="Enter phone number"
																				className="input-professional h-12"
																				{...field}
																			/>
																		</FormControl>
																		<FormMessage />
																	</FormItem>
																)}
															/>

															<FormField
																control={control}
																name="managerWhatsApp"
																render={({ field }) => (
																	<FormItem>
																		<FormLabel className="mb- text-foreground flex items-center">
																			<Smartphone className="h-4 w-4 mr-2 text-purple-500" />
																			WhatsApp Number
																		</FormLabel>
																		<FormControl>
																			<Input
																				type="tel"
																				placeholder="Enter WhatsApp number"
																				className="input-professional h-12"
																				{...field}
																			/>
																		</FormControl>
																		<FormMessage />
																	</FormItem>
																)}
															/>

															<FormField
																control={control}
																name="managerEmail"
																render={({ field }) => (
																	<FormItem>
																		<FormLabel className="mb-2 text-foreground flex items-center">
																			<Mail className="h-4 w-4 mr-2 text-red-500" />
																			Email Address
																		</FormLabel>
																		<FormControl>
																			<Input
																				type="email"
																				placeholder="Enter email address"
																				className="input-professional h-12"
																				{...field}
																			/>
																		</FormControl>
																		<FormMessage />
																	</FormItem>
																)}
															/>
														</div>
													)}

													{/* Step 2: Team Members */}
													{currentStep === 2 && (
														<div>
															<div className="flex items-center justify-between mb-6">
																<h3 className="text-xl font-semibold text-foreground">
																	Team Roster
																</h3>
																<Badge
																	variant="outline"
																	className="border-border text-foreground px-4 py-2"
																>
																	{fields.length}/10 Players
																</Badge>
															</div>

															<div className="space-y-4 max-h-96 overflow-y-auto hide-scrollbar">
																{fields.map((field, index) => (
																	<motion.div
																		key={field.id}
																		initial={{ opacity: 0, y: 20 }}
																		animate={{ opacity: 1, y: 0 }}
																		transition={{ delay: index * 0.1 }}
																	>
																		<Card className="card-professional">
																			<CardContent className="p-4">
																				<div className="flex items-center justify-between mb-4">
																					<div className="flex items-center space-x-3">
																						<div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
																							<span className="text-white font-bold text-sm">
																								{index + 1}
																							</span>
																						</div>
																						<h4 className="font-semibold text-foreground">
																							Player {index + 1}
																						</h4>
																					</div>
																					{fields.length > 1 && (
																						<Button
																							type="button"
																							variant="ghost"
																							size="sm"
																							onClick={() => remove(index)}
																							className="text-red-500 hover:text-red-400 hover:bg-red-500/10"
																						>
																							<Trash2 className="h-4 w-4" />
																						</Button>
																					)}
																				</div>

																				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
																					<FormField
																						control={control}
																						name={`players.${index}.name`}
																						render={({ field }) => (
																							<FormItem>
																								<FormLabel className="text-foreground">
																									Full Name
																								</FormLabel>
																								<FormControl>
																									<Input
																										placeholder="Enter full name"
																										className="input-professional"
																										{...field}
																									/>
																								</FormControl>
																								<FormMessage />
																							</FormItem>
																						)}
																					/>

																					<FormField
																						control={control}
																						name={`players.${index}.jerseySize`}
																						render={({ field }) => (
																							<FormItem>
																								<FormLabel className="text-foreground">
																									Jersey Size *
																								</FormLabel>
																								<Select
																									onValueChange={field.onChange}
																									defaultValue={field.value}
																								>
																									<FormControl>
																										<SelectTrigger className="w-full input-professional h-12">
																											<SelectValue placeholder="Select size" />
																										</SelectTrigger>
																									</FormControl>
																									<SelectContent className="bg-card border-border">
																										{JERSEY_SIZES.map(
																											(size) => (
																												<SelectItem
																													key={size}
																													value={size}
																													className="text-foreground hover:bg-accent"
																												>
																													{size}
																												</SelectItem>
																											)
																										)}
																									</SelectContent>
																								</Select>
																								<FormMessage />
																							</FormItem>
																						)}
																					/>

																					<FormField
																						control={control}
																						name={`players.${index}.position`}
																						render={({ field }) => (
																							<FormItem>
																								<FormLabel className="text-foreground">
																									Position
																								</FormLabel>
																								<Select
																									onValueChange={field.onChange}
																									defaultValue={field.value}
																								>
																									<FormControl>
																										<SelectTrigger className="w-full input-professional h-12">
																											<SelectValue placeholder="Select position" />
																										</SelectTrigger>
																									</FormControl>
																									<SelectContent className="bg-card border-border">
																										{PLAYER_POSITIONS.map(
																											(position) => (
																												<SelectItem
																													key={position}
																													value={position}
																													className="text-foreground hover:bg-accent"
																												>
																													{position}
																												</SelectItem>
																											)
																										)}
																									</SelectContent>
																								</Select>
																								<FormMessage />
																							</FormItem>
																						)}
																					/>
																				</div>
																			</CardContent>
																		</Card>
																	</motion.div>
																))}
															</div>

															{fields.length < 10 && (
																<Button
																	type="button"
																	variant="outline"
																	onClick={() =>
																		append({
																			name: "",
																			jerseySize: undefined,
																			position: undefined,
																		} as never)
																	}
																	className="w-full mt-6 border-2 border-dashed border-border text-foreground hover:bg-accent hover:border-purple-500 h-12"
																>
																	<Plus className="h-5 w-5 mr-2" />
																	Add Team Member
																</Button>
															)}

															{errors?.players?.message && (
																<Alert
																	variant="destructive"
																	className="mt-6 bg-red-500/10 border-red-500/50"
																>
																	<AlertCircleIcon />
																	<AlertDescription>
																		{errors.players.message}
																	</AlertDescription>
																</Alert>
															)}
														</div>
													)}

													{/* Step 3: Payment */}
													{currentStep === 3 && (
														<div className="space-y-6">
															<Card className="card-professional bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-blue-500/50">
																<CardContent className="p-6">
																	<div className="flex items-center mb-4">
																		<CreditCard className="h-6 w-6 text-blue-500 mr-3" />
																		<h4 className="font-semibold text-lg md:text-xl text-foreground">
																			Payment Instructions
																		</h4>
																	</div>
																	<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
																		<div className="space-y-3">
																			<div className="flex items-center justify-between p-3 bg-card rounded-lg border">
																				<span className="text-muted-foreground">
																					Method:
																				</span>
																				<span className="text-foreground font-semibold text-sm md:text-base">
																					Bkash Send Money
																				</span>
																			</div>
																			<div className="flex items-center justify-between p-3 bg-card rounded-lg border">
																				<span className="text-muted-foreground">
																					Account:
																				</span>
																				<span className="text-foreground font-semibold text-sm md:text-base">
																					01772432706
																				</span>
																			</div>
																		</div>
																		<div className="space-y-3">
																			<div className="flex items-center justify-between p-3 bg-card rounded-lg border">
																				<span className="text-muted-foreground">
																					Amount:
																				</span>
																				<span className="text-green-500 font-bold text-sm md:text-base">
																					6,999 BDT
																				</span>
																			</div>
																			<div className="flex items-center justify-between p-3 bg-card rounded-lg border">
																				<span className="text-muted-foreground">
																					Reference:
																				</span>
																				<span className="text-foreground font-semibold text-sm md:text-base">
																					{getValues("teamName")}
																				</span>
																			</div>
																		</div>
																	</div>
																</CardContent>
															</Card>

															<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
																<FormField
																	control={control}
																	name="paymentReceipt"
																	render={({
																		field: { onChange, value, ...field },
																	}) => (
																		<FormItem>
																			<FormLabel
																				htmlFor="paymentReceipt"
																				className="text-foreground flex items-center"
																			>
																				<Camera className="h-4 w-4 mr-2 text-green-500" />
																				Upload Payment Receipt
																			</FormLabel>
																			<FormControl>
																				<div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-green-500 transition-all duration-300">
																					<Input
																						id="paymentReceipt"
																						type="file"
																						accept="image/*"
																						onChange={(e) => {
																							onChange(e.target.files?.[0]);
																						}}
																						className="hidden"
																						{...field}
																					/>
																					<Button
																						type="button"
																						variant="outline"
																						onClick={() => {
																							const input =
																								document.getElementById(
																									"paymentReceipt"
																								) as HTMLInputElement;
																							input?.click();
																						}}
																						className="border-border text-foreground hover:bg-accent h-12 px-6"
																					>
																						<Upload className="h-5 w-5 mr-2" />
																						{value
																							? value.name
																							: "Choose Payment Receipt"}
																					</Button>
																					{value && (
																						<p className="text-green-500 mt-3">
																							✓ Receipt uploaded successfully
																						</p>
																					)}
																				</div>
																			</FormControl>
																			<FormMessage />
																		</FormItem>
																	)}
																/>

																<FormField
																	control={control}
																	name="universityLogo"
																	render={({
																		field: { onChange, value, ...field },
																	}) => (
																		<FormItem>
																			<FormLabel
																				htmlFor="universityLogo"
																				className="text-foreground flex items-center"
																			>
																				<Camera className="h-4 w-4 mr-2 text-green-500" />
																				Upload University Logo
																			</FormLabel>
																			<FormControl>
																				<div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-green-500 transition-all duration-300">
																					<Input
																						id="universityLogo"
																						type="file"
																						accept="image/*"
																						onChange={(e) => {
																							onChange(e.target.files?.[0]);
																						}}
																						className="hidden"
																						{...field}
																					/>
																					<Button
																						type="button"
																						variant="outline"
																						onClick={() => {
																							const input =
																								document.getElementById(
																									"universityLogo"
																								) as HTMLInputElement;
																							input?.click();
																						}}
																						className="border-border text-foreground hover:bg-accent h-12 px-6"
																					>
																						<Upload className="h-5 w-5 mr-2" />
																						{value
																							? value.name
																							: "Choose University Logo"}
																					</Button>
																					{value && (
																						<p className="text-green-500 mt-3">
																							✓ Logo uploaded successfully
																						</p>
																					)}
																				</div>
																			</FormControl>
																			<FormMessage />
																		</FormItem>
																	)}
																/>
															</div>
														</div>
													)}

													{/* Step 4: Review */}
													{currentStep === 4 && (
														<div className="space-y-6">
															<h3 className="text-xl font-semibold text-foreground mb-4">
																Review Your Registration
															</h3>

															<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
																<Card className="card-professional">
																	<CardHeader>
																		<CardTitle className="text-foreground flex items-center">
																			<Building className="h-5 w-5 mr-2 text-blue-500" />
																			Team Information
																		</CardTitle>
																	</CardHeader>
																	<CardContent className="space-y-3 *:flex-wrap">
																		<div className="flex justify-between">
																			<span className="text-muted-foreground">
																				Team Name:
																			</span>
																			<span className="text-foreground font-semibold">
																				{getValues("teamName")}
																			</span>
																		</div>
																		<div className="flex justify-between">
																			<span className="text-muted-foreground">
																				Institution Name:
																			</span>
																			<span className="text-foreground font-semibold">
																				{getValues("institutionName")}
																			</span>
																		</div>
																		<div className="flex justify-between">
																			<span className="text-muted-foreground">
																				Manager Name:
																			</span>
																			<span className="text-foreground font-semibold">
																				{getValues("managerName")}
																			</span>
																		</div>
																		<div className="flex justify-between">
																			<span className="text-muted-foreground">
																				Manager Email:
																			</span>
																			<span className="text-foreground font-semibold">
																				{getValues("managerEmail")}
																			</span>
																		</div>
																		<div className="flex justify-between">
																			<span className="text-muted-foreground">
																				Manager Phone:
																			</span>
																			<span className="text-foreground font-semibold">
																				{getValues("managerPhone")}
																			</span>
																		</div>
																		<div className="flex justify-between">
																			<span className="text-muted-foreground">
																				Manager WhatsApp:
																			</span>
																			<span className="text-foreground font-semibold">
																				{getValues("managerWhatsApp")}
																			</span>
																		</div>
																		<div className="flex justify-between">
																			<span className="text-muted-foreground">
																				University Logo:
																			</span>
																			<span className="text-foreground font-semibold">
																				{getValues("universityLogo")?.name ||
																					"Not Uploaded"}
																			</span>
																		</div>
																		<div className="flex justify-between">
																			<span className="text-muted-foreground">
																				Payment Receipt:
																			</span>
																			<span className="text-foreground font-semibold">
																				{getValues("paymentReceipt")?.name ||
																					"Not Uploaded"}
																			</span>
																		</div>
																	</CardContent>
																</Card>

																<Card className="card-professional">
																	<CardHeader>
																		<CardTitle className="text-foreground flex items-center">
																			<Users className="h-5 w-5 mr-2 text-purple-500" />
																			Team Members
																		</CardTitle>
																	</CardHeader>
																	<CardContent>
																		<div className="flex items-center justify-between mb-4">
																			<span className="text-muted-foreground">
																				Total Players:
																			</span>
																			<span className="text-foreground font-bold text-xl">
																				{getValues("players")?.length}
																			</span>
																		</div>
																		<div className="space-y-2">
																			{getValues("players")?.map(
																				(member, index) => (
																					<div
																						key={index}
																						className="flex items-center flex-wrap justify-between text-sm"
																					>
																						<span className="text-muted-foreground">
																							{index + 1}.{" "}
																							{member.name || "Unnamed Player"}
																						</span>
																						<span className="text-muted-foreground">
																							{member.position}
																						</span>
																						<span className="text-muted-foreground">
																							{member.jerseySize}
																						</span>
																					</div>
																				)
																			)}
																		</div>
																	</CardContent>
																</Card>
															</div>

															<Alert className="bg-green-500/10 border-green-500/50">
																<CheckCircle className="h-5 w-5 text-green-500" />
																<AlertDescription className="text-green-700 dark:text-green-300">
																	By submitting this registration, you agree to
																	the tournament rules and code of conduct.
																</AlertDescription>
															</Alert>
														</div>
													)}
												</motion.div>

												<div className="flex justify-between pt-6">
													{currentStep > 1 && (
														<Button
															type="button"
															variant="outline"
															onClick={() => setCurrentStep((prev) => prev - 1)}
															className="px-6 py-2"
														>
															<ArrowLeft className="h-4 w-4 mr-2" />
															Previous
														</Button>
													)}

													{currentStep < 4 && (
														<Button
															type="button"
															onClick={handleNext}
															className="btn-professional px-6 py-2 ml-auto"
														>
															Next Step
															<ArrowRight className="h-4 w-4 ml-2" />
														</Button>
													)}

													{currentStep === 4 && (
														<Button
															type="submit"
															disabled={isSubmitting}
															className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
														>
															{isSubmitting ? (
																<>
																	<Loader2 className="h-4 w-4 mr-2 animate-spin" />
																	Submitting...
																</>
															) : (
																<>
																	Complete Registration
																	<CheckCircle className="h-4 w-4 ml-2" />
																</>
															)}
														</Button>
													)}
												</div>
											</form>
										</Form>
									</AnimatePresence>
								</CardContent>
							</Card>
						</motion.div>
					</div>

					{/* Right Side - Registration Process */}
					<div className="lg:col-span-1">
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.6, duration: 0.6 }}
							className="sticky top-40"
						>
							<Card className="card-professional">
								<CardHeader>
									<CardTitle className="text-foreground flex items-center">
										<Zap className="h-5 w-5 mr-2 text-blue-500" />
										Registration Process
									</CardTitle>
								</CardHeader>
								<CardContent className="p-6">
									<div className="space-y-4">
										{workflowSteps.map((step, index) => (
											<motion.div
												key={step.id}
												initial={{ opacity: 0, y: 10 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ delay: 0.1 * index }}
												className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-all duration-300"
											>
												<div
													className={`w-8 h-8 ${step.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
												>
													<step.icon className={`h-4 w-4 ${step.color}`} />
												</div>
												<div className="flex-1 min-w-0">
													<h4 className="text-sm font-semibold text-foreground">
														{step.title}
													</h4>
													<p className="text-xs text-muted-foreground mt-1">
														{step.description}
													</p>
												</div>
											</motion.div>
										))}
									</div>

									{/* Timeline Info */}
									<div className="mt-6 pt-6 border-t border-border">
										<h4 className="text-sm font-semibold text-foreground mb-3 flex items-center">
											<Clock className="h-4 w-4 mr-2 text-green-500" />
											Processing Timeline
										</h4>
										<div className="space-y-2">
											<div className="flex justify-between text-xs">
												<span className="text-muted-foreground">
													Total Processing
												</span>
												<span className="text-blue-500 font-semibold">
													Within 24hrs
												</span>
											</div>
											<div className="flex justify-between text-xs">
												<span className="text-muted-foreground">
													Confirmation Email
												</span>
												<span className="text-green-500 font-semibold">
													After Approval
												</span>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
