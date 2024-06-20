import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";

export const TopPanel = () => (
  <section className="mb-6 flex items-center justify-between">
    <div className="title-base flex h-8 rounded-2xl border">
      <div className="border-r px-4 py-1">Trips</div>
      <div className="border-r px-4 py-1">Iceland</div>
      <div className="px-4 py-1">
        <Select defaultValue="5">
          <SelectTrigger className="h-6 border-none p-0">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: 6 }).map((_, idx) => (
              <SelectItem key={idx} value={`${idx + 5}`}>
                {idx + 5} days
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
    <Button variant="outline" size="sm" className="title-base rounded-3xl">
      <Plus className="mr-2 h-4 w-4" /> Create
    </Button>
  </section>
);
