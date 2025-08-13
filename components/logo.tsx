import Image from "next/image";

export default function Logo() {
	return (
		<Image
			src={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}/Awake%20Nation%20Logo.png?updatedAt=1755093822575`}
			alt="AwakeNation Logo"
			width={50}
			height={50}
		/>
	);
}
