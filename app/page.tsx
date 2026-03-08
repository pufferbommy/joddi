import { Mic, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Page() {
	return (
		<div className="px-4 lg:px-6 flex flex-col h-full flex-1">
      <div className="flex-1">
ads
      </div>
			<div className="border border-input rounded-md shadow-xs">
				<Textarea
					placeholder="jod here"
					className="border-none shadow-none ring-0! resize-none min-h-auto"
				/>
				<div className="px-2.5 py-2 flex gap-2 justify-end">
					<Button size="icon" className="rounded-full" variant="outline">
						<Mic />
					</Button>
					<Button size="icon" className="rounded-full">
						<Send fill="currentColor" />
					</Button>
				</div>
			</div>
		</div>
	);
}
