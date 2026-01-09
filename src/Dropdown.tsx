import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { BrokenButton, WorkingButton } from "./Button";

export default function Page() {
  return (
    <div className="flex flex-col gap-12 p-10 items-center justify-center h-screen bg-gray-50">
      <div className="flex flex-col items-center gap-2">
        <h3 className="font-bold text-red-600">Broken Trigger</h3>
        <Dropdown>
          <DropdownTrigger>
            <BrokenButton color="primary">Open Menu</BrokenButton>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new">New file</DropdownItem>
            <DropdownItem key="copy">Copy link</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="w-full h-px bg-gray-300" />
      <div className="flex flex-col items-center gap-2">
        <h3 className="font-bold text-green-600">Working Button</h3>
        <Dropdown>
          <DropdownTrigger>
            <WorkingButton color="primary">Open Menu</WorkingButton>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new">New file</DropdownItem>
            <DropdownItem key="copy">Copy link</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}
