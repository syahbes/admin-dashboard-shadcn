"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

const items = [
    {
        id: "item1",
        label: "lorem ipsum dolor",
        isChecked: true,
    },
    {
        id: "item2",
        label: "sit amet consectetur",
        isChecked: false,
    },
    {
        id: "item3",
        label: "adipiscing elit sed",
        isChecked: true,
    },
    {
        id: "item4",
        label: "do eiusmod tempor",
        isChecked: false,
    },
    {
        id: "item5",
        label: "incididunt ut labore",
        isChecked: true,
    },
    {
        id: "item6",
        label: "et dolore magna",
        isChecked: false,
    },
    {
        id: "item7",
        label: "aliqua ut enim",
        isChecked: true,
    },
];

export default function TodoList() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [open, setOpen] = useState(false);

    return (
        <div className="">
            <h1 className="text-lg font-medium mb-6">Todo List</h1>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button className="w-full">
                        <CalendarIcon />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-auto">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={date => {
                            setDate(date);
                            setOpen(false);
                        }}
                    />
                </PopoverContent>
            </Popover>
            {/* LIST */}
            <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
                <div className="flex flex-col gap-4">
                    {/* LIST ITEM */}
                    {items.map(item => (
                        <Card key={item.id} className="p-4">
                            <div className="flex items-center gap-4">
                                <Checkbox id={item.id} />
                                <label htmlFor={item.id} className="text-sm text-muted-foreground">
                                    {item.label}
                                </label>
                            </div>
                        </Card>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
}
