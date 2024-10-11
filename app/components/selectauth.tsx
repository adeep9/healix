/**
 * Selectauth is a personalised component that uses the component from the ShadCN components file "select"
 * The select auth component is the dropdown selector where a user can select what hospital they work at and who they are in the auth step
 * As this Select is repeatable I chose to use props as the input fields that appear each <SelectValue> is currently replaced with a placeholder which is on the authform.tsx. 
 */

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define the type for a single item in the Select
type SelectItemType = {
  value: string;
  label: string;
};

// Define the type for a group of items in the Select
type SelectGroupType = {
  label: string;
  items: SelectItemType[];
};

// Define the props type for the SelectInput component
interface SelectInputProps {
  placeholder: string;
  groups: SelectGroupType[];
}

export function SelectInput({ placeholder, groups }: SelectInputProps) {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {groups.map((group, index) => (
          <SelectGroup key={index}>
            <SelectLabel>{group.label}</SelectLabel>
            {group.items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}


