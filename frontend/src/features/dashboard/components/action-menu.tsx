import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export default function ActionMenu() {
  return (
    <div className="mt-6 ">
      <ButtonGroup className="w-full justify-center">
        <Button variant={"outline"} className="text-lg hover:cursor-pointer">
          รายรับ
        </Button>
        <Button variant={"outline"} className="text-lg hover:cursor-pointer">
          รายจ่าย
        </Button>
        <Button variant={"outline"} className="text-lg hover:cursor-pointer">
          สถิติ
        </Button>
      </ButtonGroup>
    </div>
  );
}
