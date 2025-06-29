"use client";

import { createElement, useState } from "react";
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
	AlertCircle,
	Plus,
	Trash2,
	Upload,
	CreditCard,
	CheckCircle,
	ArrowRight,
	ArrowLeft,
	Users,
	Trophy,
	FileText,
	Smartphone,
	Mail,
	Building,
	User,
	Shield,
	Camera,
	Clock,
	UserCheck,
	FileCheck,
	Award,
	Zap,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

// Zod schemas
const teamMemberSchema = z.object({
	fullName: z.string().min(2, "Full name must be at least 2 characters"),
	jerseySize: z.enum(["S", "M", "L", "XL", "XXL"], {
		required_error: "Please select a jersey size",
	}),
	position: z.enum(["goalkeeper", "defender", "midfielder", "striker"], {
		required_error: "Please select a position",
	}),
});

const basicInfoSchema = z.object({
	teamName: z.string().min(2, "Team name must be at least 2 characters"),
	institution: z
		.string()
		.min(2, "Institution name must be at least 2 characters"),
	managerName: z
		.string()
		.min(2, "Team manager name must be at least 2 characters"),
	phone: z.string().min(10, "Phone number must be at least 10 digits"),
	email: z.string().email("Please enter a valid email address"),
	tournamentType: z.enum(["university", "college"], {
		required_error: "Please select a tournament type",
	}),
});

const teamMembersSchema = z.object({
	teamMembers: z
		.array(teamMemberSchema)
		.min(1, "At least one team member is required")
		.max(15, "Maximum 15 team members allowed"),
});

const paymentSchema = z.object({
	paymentReceipt: z
		.instanceof(File)
		.optional()
		.refine(() => {
			// If tournament is university, payment receipt is required
			return true; // We'll handle this validation separately based on tournament type
		}, "Payment receipt is required for university tournament"),
});

type BasicInfoFormData = z.infer<typeof basicInfoSchema>;
type TeamMembersFormData = z.infer<typeof teamMembersSchema>;
type PaymentFormData = z.infer<typeof paymentSchema>;
type FullRegistrationFormData = BasicInfoFormData &
	TeamMembersFormData &
	PaymentFormData;

export default function Registration() {
	const [currentStep, setCurrentStep] = useState(1);
	const [isSubmitted, setIsSubmitted] = useState(false);

	// Form for basic info (Step 1)
	const basicInfoForm = useForm<BasicInfoFormData>({
		resolver: zodResolver(basicInfoSchema),
		defaultValues: {
			teamName: "",
			institution: "",
			managerName: "",
			phone: "",
			email: "",
			tournamentType: undefined,
		},
	});

	// Form for team members (Step 2)
	const teamMembersForm = useForm<TeamMembersFormData>({
		resolver: zodResolver(teamMembersSchema),
		defaultValues: {
			teamMembers: [
				{ fullName: "", jerseySize: undefined, position: undefined },
			],
		},
	});

	const { fields, append, remove } = useFieldArray({
		control: teamMembersForm.control,
		name: "teamMembers",
	});

	// Form for payment (Step 3)
	const paymentForm = useForm<PaymentFormData>({
		resolver: zodResolver(paymentSchema),
		defaultValues: {
			paymentReceipt: undefined,
		},
	});

	// Combined form data for review
	const [formData, setFormData] = useState<Partial<FullRegistrationFormData>>(
		{}
	);

	const steps = [
		{
			id: 1,
			title: "Basic Info",
			icon: Building,
			description: "Team & Institution Details",
			color: "from-blue-600 to-blue-700",
		},
		{
			id: 2,
			title: "Team Members",
			icon: Users,
			description: "Add Your Players",
			color: "from-purple-600 to-purple-700",
		},
		{
			id: 3,
			title: "Payment",
			icon: CreditCard,
			description: "Complete Registration",
			color: "from-green-600 to-green-700",
		},
		{
			id: 4,
			title: "Review",
			icon: Shield,
			description: "Final Confirmation",
			color: "from-orange-600 to-orange-700",
		},
	];

	// Registration Workflow Steps
	const workflowSteps = [
		{
			id: 1,
			title: "Form Submission",
			description: "Complete registration form with team details",
			icon: FileText,
			color: "text-blue-500",
			bgColor: "bg-blue-500/10",
		},
		{
			id: 2,
			title: "Payment Verification",
			description: "Manual verification of payment receipt",
			icon: CreditCard,
			color: "text-green-500",
			bgColor: "bg-green-500/10",
		},
		{
			id: 3,
			title: "Player Verification",
			description: "Validate student IDs and eligibility",
			icon: UserCheck,
			color: "text-purple-500",
			bgColor: "bg-purple-500/10",
		},
		{
			id: 4,
			title: "Document Review",
			description: "Final review of all submitted documents",
			icon: FileCheck,
			color: "text-orange-500",
			bgColor: "bg-orange-500/10",
		},
		{
			id: 5,
			title: "Final Approval",
			description: "Official registration confirmation",
			icon: Award,
			color: "text-yellow-500",
			bgColor: "bg-yellow-500/10",
		},
		{
			id: 6,
			title: "Event Ready",
			description: "Team confirmed for tournament",
			icon: Trophy,
			color: "text-red-500",
			bgColor: "bg-red-500/10",
		},
	];

	const addTeamMember = () => {
		if (fields.length < 15) {
			append({
				fullName: "",
				jerseySize: "M" as const,
				position: "midfielder" as const,
			});
		}
	};

	const removeTeamMember = (index: number) => {
		if (fields.length > 1) {
			remove(index);
		}
	};

	const nextStep = () => {
		if (currentStep < 4) {
			setCurrentStep(currentStep + 1);
		}
	};

	const prevStep = () => {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
		}
	};

	const onBasicInfoSubmit = (data: BasicInfoFormData) => {
		setFormData((prev) => ({ ...prev, ...data }));
		nextStep();
	};

	const onTeamMembersSubmit = (data: TeamMembersFormData) => {
		setFormData((prev) => ({ ...prev, ...data }));
		nextStep();
	};

	const onPaymentSubmit = (data: PaymentFormData) => {
		setFormData((prev) => ({ ...prev, ...data }));
		nextStep();
	};

	const onFinalSubmit = () => {
		console.log("Final registration data:", formData);
		setIsSubmitted(true);
	};

	if (isSubmitted) {
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
										setIsSubmitted(false);
										setCurrentStep(1);
										setFormData({});
										basicInfoForm.reset();
										teamMembersForm.reset();
										paymentForm.reset();
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
							<div className="flex items-center justify-between mb-8">
								{steps.map((step, index) => (
									<div key={step.id} className="flex items-center flex-1">
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
													className={`text-sm font-semibold ${currentStep >= step.id ? "text-foreground" : "text-muted-foreground"}`}
												>
													{step.title}
												</p>
											</div>
										</div>
										{index < steps.length - 1 && (
											<div
												className={`
                          flex-1 h-1 mx-4 rounded-full transition-all duration-300
                          ${currentStep > step.id ? "bg-gradient-to-r from-blue-600 to-purple-600" : "bg-border"}
                        `}
											/>
										)}
									</div>
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
									className={`bg-gradient-to-r ${steps[currentStep - 1].color} text-white`}
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
										{/* Step 1: Basic Information */}
										{currentStep === 1 && (
											<motion.div
												key="step1"
												initial={{ opacity: 0, x: 20 }}
												animate={{ opacity: 1, x: 0 }}
												exit={{ opacity: 0, x: -20 }}
												transition={{ duration: 0.3 }}
											>
												<Alert className="bg-blue-500/10 border-blue-500/50 mb-6">
													<AlertCircle className="h-5 w-5 text-blue-500" />
													<AlertDescription className="text-blue-700 dark:text-blue-300">
														University teams: 6,000 BDT registration fee •
														College teams: Free registration
													</AlertDescription>
												</Alert>

												<Form {...basicInfoForm}>
													<form
														onSubmit={basicInfoForm.handleSubmit(
															onBasicInfoSubmit
														)}
														className="space-y-6"
													>
														<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
															<FormField
																control={basicInfoForm.control}
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
																control={basicInfoForm.control}
																name="institution"
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
																control={basicInfoForm.control}
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
																control={basicInfoForm.control}
																name="phone"
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
																control={basicInfoForm.control}
																name="email"
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

															<FormField
																control={basicInfoForm.control}
																name="tournamentType"
																render={({ field }) => (
																	<FormItem>
																		<FormLabel className="mb-2 text-foreground flex items-center">
																			<Trophy className="h-4 w-4 mr-2 text-orange-500" />
																			Tournament Type
																		</FormLabel>
																		<Select
																			onValueChange={field.onChange}
																			defaultValue={field.value}
																		>
																			<FormControl>
																				<SelectTrigger className="input-professional !h-12 w-full">
																					<SelectValue placeholder="Select tournament type" />
																				</SelectTrigger>
																			</FormControl>
																			<SelectContent className="bg-card border-border">
																				<SelectItem
																					value="university"
																					className="text-foreground hover:bg-accent h-12 input-professional"
																				>
																					<div className="flex items-center justify-between w-full">
																						<span>University Tournament</span>
																						<Badge className="ml-2 bg-red-500/20 text-red-500">
																							6,000 BDT
																						</Badge>
																					</div>
																				</SelectItem>
																				<SelectItem
																					value="college"
																					className="text-foreground hover:bg-accent h-12 input-professional"
																				>
																					<div className="flex items-center justify-between w-full">
																						<span>College Tournament</span>
																						<Badge className="ml-2 bg-green-500/20 text-green-500">
																							FREE
																						</Badge>
																					</div>
																				</SelectItem>
																			</SelectContent>
																		</Select>
																		<FormMessage />
																	</FormItem>
																)}
															/>
														</div>

														<div className="flex justify-end pt-6">
															<Button
																type="submit"
																className="btn-professional px-6 py-2"
															>
																Next Step
																<ArrowRight className="h-4 w-4 ml-2" />
															</Button>
														</div>
													</form>
												</Form>
											</motion.div>
										)}

										{/* Step 2: Team Members */}
										{currentStep === 2 && (
											<motion.div
												key="step2"
												initial={{ opacity: 0, x: 20 }}
												animate={{ opacity: 1, x: 0 }}
												exit={{ opacity: 0, x: -20 }}
												transition={{ duration: 0.3 }}
											>
												<div className="flex items-center justify-between mb-6">
													<h3 className="text-xl font-semibold text-foreground">
														Team Roster
													</h3>
													<Badge
														variant="outline"
														className="border-border text-foreground px-4 py-2"
													>
														{fields.length}/15 Players
													</Badge>
												</div>

												<Form {...teamMembersForm}>
													<form
														onSubmit={teamMembersForm.handleSubmit(
															onTeamMembersSubmit
														)}
														className="space-y-6"
													>
														<div className="space-y-4 max-h-96 overflow-y-auto">
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
																						onClick={() =>
																							removeTeamMember(index)
																						}
																						className="text-red-500 hover:text-red-400 hover:bg-red-500/10"
																					>
																						<Trash2 className="h-4 w-4" />
																					</Button>
																				)}
																			</div>

																			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
																				<FormField
																					control={teamMembersForm.control}
																					name={`teamMembers.${index}.fullName`}
																					render={({ field }) => (
																						<FormItem>
																							<FormLabel className="text-foreground">
																								Full Name *
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
																					control={teamMembersForm.control}
																					name={`teamMembers.${index}.jerseySize`}
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
																									<SelectTrigger className="input-professional h-12">
																										<SelectValue placeholder="Select size" />
																									</SelectTrigger>
																								</FormControl>
																								<SelectContent className="bg-card border-border">
																									{[
																										"S",
																										"M",
																										"L",
																										"XL",
																										"XXL",
																									].map((size) => (
																										<SelectItem
																											key={size}
																											value={size}
																											className="text-foreground hover:bg-accent"
																										>
																											{size}
																										</SelectItem>
																									))}
																								</SelectContent>
																							</Select>
																							<FormMessage />
																						</FormItem>
																					)}
																				/>

																				<FormField
																					control={teamMembersForm.control}
																					name={`teamMembers.${index}.position`}
																					render={({ field }) => (
																						<FormItem>
																							<FormLabel className="text-foreground">
																								Position *
																							</FormLabel>
																							<Select
																								onValueChange={field.onChange}
																								defaultValue={field.value}
																							>
																								<FormControl>
																									<SelectTrigger className="input-professional h-12">
																										<SelectValue placeholder="Select position" />
																									</SelectTrigger>
																								</FormControl>
																								<SelectContent className="bg-card border-border">
																									<SelectItem
																										value="goalkeeper"
																										className="text-foreground hover:bg-accent"
																									>
																										Goalkeeper
																									</SelectItem>
																									<SelectItem
																										value="defender"
																										className="text-foreground hover:bg-accent"
																									>
																										Defender
																									</SelectItem>
																									<SelectItem
																										value="midfielder"
																										className="text-foreground hover:bg-accent"
																									>
																										Midfielder
																									</SelectItem>
																									<SelectItem
																										value="striker"
																										className="text-foreground hover:bg-accent"
																									>
																										Striker
																									</SelectItem>
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

														{fields.length < 15 && (
															<Button
																type="button"
																variant="outline"
																onClick={addTeamMember}
																className="w-full border-2 border-dashed border-border text-foreground hover:bg-accent hover:border-purple-500 h-12"
															>
																<Plus className="h-5 w-5 mr-2" />
																Add Team Member
															</Button>
														)}

														<div className="flex justify-between pt-6">
															<Button
																type="button"
																variant="outline"
																onClick={prevStep}
																className="px-6 py-2"
															>
																<ArrowLeft className="h-4 w-4 mr-2" />
																Previous
															</Button>

															<Button
																type="submit"
																className="btn-professional px-6 py-2"
															>
																Next Step
																<ArrowRight className="h-4 w-4 ml-2" />
															</Button>
														</div>
													</form>
												</Form>
											</motion.div>
										)}

										{/* Step 3: Payment */}
										{currentStep === 3 && (
											<motion.div
												key="step3"
												initial={{ opacity: 0, x: 20 }}
												animate={{ opacity: 1, x: 0 }}
												exit={{ opacity: 0, x: -20 }}
												transition={{ duration: 0.3 }}
											>
												<Form {...paymentForm}>
													<form
														onSubmit={paymentForm.handleSubmit(onPaymentSubmit)}
														className="space-y-6"
													>
														{formData.tournamentType === "university" ? (
															<>
																<Card className="card-professional bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-blue-500/50">
																	<CardContent className="p-6">
																		<div className="flex items-center mb-4">
																			<CreditCard className="h-6 w-6 text-blue-500 mr-3" />
																			<h4 className="font-semibold text-xl text-foreground">
																				Payment Instructions
																			</h4>
																		</div>
																		<div className="grid grid-cols-2 gap-4">
																			<div className="space-y-3">
																				<div className="flex items-center justify-between p-3 bg-card rounded-lg border">
																					<span className="text-muted-foreground">
																						Method:
																					</span>
																					<span className="text-foreground font-semibold">
																						Bkash Send Money
																					</span>
																				</div>
																				<div className="flex items-center justify-between p-3 bg-card rounded-lg border">
																					<span className="text-muted-foreground">
																						Account:
																					</span>
																					<span className="text-foreground font-semibold">
																						01XXXXXXXXX
																					</span>
																				</div>
																			</div>
																			<div className="space-y-3">
																				<div className="flex items-center justify-between p-3 bg-card rounded-lg border">
																					<span className="text-muted-foreground">
																						Amount:
																					</span>
																					<span className="text-green-500 font-bold text-lg">
																						6,000 BDT
																					</span>
																				</div>
																				<div className="flex items-center justify-between p-3 bg-card rounded-lg border">
																					<span className="text-muted-foreground">
																						Reference:
																					</span>
																					<span className="text-foreground font-semibold text-sm">
																						{formData.teamName}
																					</span>
																				</div>
																			</div>
																		</div>
																	</CardContent>
																</Card>

																<FormField
																	control={paymentForm.control}
																	name="paymentReceipt"
																	render={({
																		field: { onChange, value, ...field },
																	}) => (
																		<FormItem>
																			<FormLabel className="text-foreground flex items-center">
																				<Camera className="h-4 w-4 mr-2 text-green-500" />
																				Upload Payment Receipt *
																			</FormLabel>
																			<FormControl>
																				<div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-green-500 transition-all duration-300">
																					<Input
																						type="file"
																						accept="image/*"
																						onChange={(e) => {
																							const file = e.target.files?.[0];
																							onChange(file);
																						}}
																						className="hidden"
																						{...field}
																					/>
																					<Button
																						type="button"
																						variant="outline"
																						onClick={() => {
																							const input =
																								document.querySelector(
																									'input[type="file"]'
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
															</>
														) : (
															<Card className="card-professional bg-gradient-to-r from-green-500/10 to-green-600/10 border-green-500/50">
																<CardContent className="p-8 text-center">
																	<Trophy className="h-12 w-12 text-green-500 mx-auto mb-4" />
																	<h3 className="text-2xl font-bold text-foreground mb-3">
																		Free Registration!
																	</h3>
																	<p className="text-lg text-green-600 dark:text-green-400 mb-4">
																		College teams register for free. No payment
																		required!
																	</p>
																	<Badge className="bg-green-500/20 text-green-500 px-4 py-2">
																		Ready to proceed
																	</Badge>
																</CardContent>
															</Card>
														)}

														<div className="flex justify-between pt-6">
															<Button
																type="button"
																variant="outline"
																onClick={prevStep}
																className="px-6 py-2"
															>
																<ArrowLeft className="h-4 w-4 mr-2" />
																Previous
															</Button>

															<Button
																type="submit"
																className="btn-professional px-6 py-2"
															>
																Next Step
																<ArrowRight className="h-4 w-4 ml-2" />
															</Button>
														</div>
													</form>
												</Form>
											</motion.div>
										)}

										{/* Step 4: Review */}
										{currentStep === 4 && (
											<motion.div
												key="step4"
												initial={{ opacity: 0, x: 20 }}
												animate={{ opacity: 1, x: 0 }}
												exit={{ opacity: 0, x: -20 }}
												transition={{ duration: 0.3 }}
												className="space-y-6"
											>
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
														<CardContent className="space-y-3">
															<div className="flex justify-between">
																<span className="text-muted-foreground">
																	Team Name:
																</span>
																<span className="text-foreground font-semibold">
																	{formData.teamName}
																</span>
															</div>
															<div className="flex justify-between">
																<span className="text-muted-foreground">
																	Institution:
																</span>
																<span className="text-foreground font-semibold">
																	{formData.institution}
																</span>
															</div>
															<div className="flex justify-between">
																<span className="text-muted-foreground">
																	Manager:
																</span>
																<span className="text-foreground font-semibold">
																	{formData.managerName}
																</span>
															</div>
															<div className="flex justify-between">
																<span className="text-muted-foreground">
																	Tournament:
																</span>
																<Badge
																	className={
																		formData.tournamentType === "university"
																			? "bg-red-500/20 text-red-500"
																			: "bg-green-500/20 text-green-500"
																	}
																>
																	{formData.tournamentType === "university"
																		? "University (6,000 BDT)"
																		: "College (Free)"}
																</Badge>
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
																	{formData.teamMembers?.length || 0}
																</span>
															</div>
															<div className="space-y-2 max-h-32 overflow-y-auto">
																{formData.teamMembers?.map((member, index) => (
																	<div
																		key={index}
																		className="flex items-center justify-between text-sm"
																	>
																		<span className="text-muted-foreground">
																			{index + 1}.{" "}
																			{member.fullName || "Unnamed Player"}
																		</span>
																		<span className="text-muted-foreground">
																			{member.position}
																		</span>
																	</div>
																))}
															</div>
														</CardContent>
													</Card>
												</div>

												<Alert className="bg-green-500/10 border-green-500/50">
													<CheckCircle className="h-5 w-5 text-green-500" />
													<AlertDescription className="text-green-700 dark:text-green-300">
														By submitting this registration, you agree to the
														tournament rules and code of conduct.
													</AlertDescription>
												</Alert>

												<div className="flex justify-between pt-6">
													<Button
														type="button"
														variant="outline"
														onClick={prevStep}
														className="px-6 py-2"
													>
														<ArrowLeft className="h-4 w-4 mr-2" />
														Previous
													</Button>

													<Button
														onClick={onFinalSubmit}
														className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-2"
													>
														Complete Registration
														<CheckCircle className="h-4 w-4 ml-2" />
													</Button>
												</div>
											</motion.div>
										)}
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
							className="sticky top-8"
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
