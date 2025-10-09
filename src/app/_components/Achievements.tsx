"use client";
import { AchievementsCardStack } from "./helper/AchievementsCardStack";

const CARDS = [
	{
		id: 0,
		name: "Devthon 2.0 Finalists",
		shortDescription:
			"Participated in Devthon 2.0, a web development competition. Our team designed a UI/UX interface, developed a web app, and presented it to a panel of judges, reaching the finals.",
		content:
			"Participated in Devthon 2.0, a web design competition organized by the Leo Club of the University of Moratuwa, in collaboration with the Rotaract Club of the University of Moratuwa and the Leo Club of Sri Lanka Technological Campus. First, we had to come up with a project proposal, then design a UI/UX interface, develop a web application, and present it to a panel of judges. We were able to reach the finals. Even though we didn’t win any places, I’m very happy looking back because we also participated in Devthon 1.0 but couldn’t make it to the finals then.",
		image: "/devthon.jpeg",
		award: "Finalists",
	},
	{
		id: 1,
		name: "Idealize 2025 Semifinalists",
		shortDescription:
			"Participated in Idealize 2025, an app development competition consisting of four stages: Ideathon, Datathon, Designathon, and Go-to-Market. Our team Binary Bandits was able to reach the semifinals.",
		content:
			"Participated in Idealize 2025, an app development competition organized by the AIESEC Society of the University of Moratuwa. It consisted of four stages: Ideathon, where we had to come up with a proposal; Datathon, where we trained a model for lung cancer patient survival prediction; Designathon, where we developed a prototype; and finally, the Go-to-Market phase, where we hosted the web application for public access.We were able to reach the semifinals. Even though we didn’t win any awards, I’m very happy looking back because we also participated in Idealize 2024, but couldn’t even complete a prototype back then.",
		image: "/idealize.png",
		award: "Semifinalists ",
	},
	{
		id: 2,
		name: "InnovateX University Edition Finalists",
		shortDescription:
			"Participated in InnovateX University Edition. Developed algorithms to detect supermarket anomalies using sensor data and provided insights through a dashboard for shopkeepers. We were able to reach the finals",
		content:
			"Participated in InnovateX University Edition, an algorithm coding and web development competition organized by Zebra Technologies. It consisted of two stages: a quiz round, where we answered 10 MCQs and advanced to the finals among 200 participants, and in the finals, we developed algorithms to detect anomalies in supermarkets based on sensor data, such as scan avoidance, weight discrepancies, and long queues. We also created a dashboard for shopkeepers to visualize these anomalies and make operational decisions.This was a different experience because, although we were familiar with web development, it was a challenge to implement algorithms to solve real-world problems. As software engineers, we must also be problem solvers. Even though we didn’t win any places, the experience was exciting.",
		image: "/innovatex.jpeg",
		award: "Finalists",
	},
	{
		id: 3,
		name: "CodeRally Beginner Tier Finalists",
		shortDescription:
			"Participated in CodeRally 6.0, a hackathon that consisted of 4 weeks of training. Advanced through multiple rounds and reached the Beginner Tier Finals.",
		content:
			"We participated in CodeRally 6.0, a hackathon organized by the IEEE Computer Society Student Branch Chapter of IIT. It consisted of 4 weeks of intensive training to sharpen our coding skills, followed by a selection round, after which we were placed in the Beginner Tier. We advanced through multiple selection rounds and reached the Beginner Tier Finals, a 24-hour hackathon.Although we didn’t win, the learning journey, teamwork, and exposure we gained were truly rewarding. This was our first-ever hackathon, so no regrets!",
		image: "/coderally.jpeg",
		award: "Beginner tier finalists",
	},
];

export default function Achievements() {
	return (
		<section id="achievements" className="pt-5 md:pt-8 lg:pt-10">
			<div className="mx-auto px-5 md:px-10 lg:px-5 xl:px-10 overflow-hidden">
				<h2 className="text-[clamp(1.6rem,4vw,2.6rem)] pb-15 font-semibold tracking-tight bg-gradient-to-r from-indigo-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
					Achievements
				</h2>

				<div className="flex justify-center items-center w-full">
					<AchievementsCardStack items={CARDS} className="max-w-7xl w-full" />
				</div>
			</div>
		</section>
	);
}
