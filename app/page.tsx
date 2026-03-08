"use client";

import { Mic, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Page() {
	const [prompt, setPrompt] = useState("");

	return (
		<div className="max-w-2xl mx-auto w-full h-full pt-8 md:pt-16">
			<h1 className="text-4xl mb-8 text-center">Hello, Pufferbommy</h1>
			<div className="border border-input rounded-md shadow-xs">
				<Textarea
					value={prompt}
					onChange={(event) => setPrompt(event.target.value)}
					placeholder="jod here"
					className="border-none shadow-none ring-0! resize-none min-h-auto"
				/>
				<div className="px-2.5 py-2 flex gap-2 justify-end">
					{prompt ? <Button size="icon" className="rounded-full">
						<Send fill="currentColor" />
					</Button> : <Button size="icon" className="rounded-full" variant="outline">
						<Mic />
					</Button>}
				</div>
			</div>
		</div>
	);
}
