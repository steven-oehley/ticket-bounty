'use client';

import { useState } from 'react';

import { format } from 'date-fns';
import { LucideCalendar } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface DatePickerProps {
  id: string;
  name: string;
  defaultValue?: string | undefined;
}

const DatePicker = ({ id, name, defaultValue }: DatePickerProps) => {
  const [date, setDate] = useState<Date | undefined>(
    defaultValue ? new Date(defaultValue) : new Date(),
  );

  const formattedDate = date ? format(date, 'yyyy-MM-dd') : '';

  return (
    <Popover>
      <PopoverTrigger asChild className="w-full" id={id}>
        <Button
          className="justify-start text-left font-normal"
          variant="outline"
        >
          <LucideCalendar className="mr-2 h-4 w-4" />
          {formattedDate}
          <input name={name} type="hidden" value={formattedDate} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          initialFocus
          mode="single"
          selected={date}
          onSelect={setDate}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
