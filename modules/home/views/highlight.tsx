import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User } from "@/modules/home/types/general";
import { Bookmark, Share } from "lucide-react";

type Props = {
  user: User;
  comment: string;
};

export const Highlight = ({ comment, user }: Props) => {
  const { avatarUrl, name, role } = user;

  return (
    <section className="mb-12 flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-3xl font-semibold">Iceland’s Highlights</h3>
        <div className="flex flex-wrap justify-end gap-2.5 md:flex-row">
          <Button variant="outline" className="title-base rounded-lg" size="sm">
            <Bookmark className="mr-2 h-4 w-4" /> Add to wishlist
          </Button>
          <Button variant="outline" className="title-base rounded-lg" size="sm">
            <Share className="mr-2 h-4 w-4" /> Share
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Avatar className="h-8 w-8">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <div className="title-base">Curated by {name}</div>
          <div className="font-normal text-light-secondary">{role}</div>
        </div>
      </div>
      <div className="text-base font-normal">{comment}</div>
    </section>
  );
};
