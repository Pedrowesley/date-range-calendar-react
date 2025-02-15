"use client"

import * as React from "react"
import { subMonths, startOfMonth, endOfMonth, format, isBefore, isAfter, isValid } from "date-fns"
import { ptBR } from "date-fns/locale"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function DateRangeCalendar() {
  const [dateRange, setDateRange] = React.useState<{
    from: Date | undefined
    to: Date | undefined
  }>({
    from: undefined,
    to: undefined,
  })
  const [maxMonths, setMaxMonths] = React.useState<number>(3)
  const [isOpen, setIsOpen] = React.useState(false)
  const [calendarMonths, setCalendarMonths] = React.useState<Date[]>([])

  React.useEffect(() => {
    updateCalendarMonths()
  }, [maxMonths])

  const updateCalendarMonths = () => {
    const today = new Date()
    const months = Array.from({ length: maxMonths }, (_, i) => startOfMonth(subMonths(today, maxMonths - 1 - i)))
    setCalendarMonths(months)
  }

  const handleSelect = (selectedRange: { from: Date | undefined; to: Date | undefined } | undefined) => {
    if (!selectedRange) return
    setDateRange(selectedRange)
  }

  const handleMaxMonthsChange = (value: string) => {
    setMaxMonths(Number(value))
    setDateRange({ from: undefined, to: undefined })
    updateCalendarMonths()
  }

  const formatDateRange = () => {
    if (!dateRange.from) return "Selecione as datas"
    if (!isValid(dateRange.from)) return "Data inválida"
    if (!dateRange.to) return format(dateRange.from, "dd 'de' MMMM", { locale: ptBR })
    if (!isValid(dateRange.to)) return "Data inválida"
    return `${format(dateRange.from, "dd 'de' MMMM", { locale: ptBR })} - ${format(dateRange.to, "dd 'de' MMMM", { locale: ptBR })}`
  }

  const formatSelectedRange = () => {
    if (!dateRange.from || !dateRange.to) return ""
    if (!isValid(dateRange.from) || !isValid(dateRange.to)) return "Intervalo de datas inválido"
    return `${format(dateRange.from, "dd/MM/yyyy")} - ${format(dateRange.to, "dd/MM/yyyy")}`
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-4">
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !dateRange.from && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {formatDateRange()}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <div className="flex">
              {calendarMonths.map((month, index) => (
                <div key={index} className="border-r last:border-r-0">
                  <div className="p-2 text-center font-semibold">{format(month, "MMMM yyyy", { locale: ptBR })}</div>
                  <Calendar
                    mode="range"
                    selected={dateRange}
                    onSelect={handleSelect}
                    month={month}
                    disabled={(date) =>
                      isBefore(date, startOfMonth(calendarMonths[0])) ||
                      isAfter(date, endOfMonth(calendarMonths[calendarMonths.length - 1]))
                    }
                    locale={ptBR}
                    numberOfMonths={1}
                  />
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
        <Select value={maxMonths.toString()} onValueChange={handleMaxMonthsChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Número de meses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 mês</SelectItem>
            <SelectItem value="2">2 meses</SelectItem>
            <SelectItem value="3">3 meses</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="text-sm text-muted-foreground">
        {dateRange.from && dateRange.to && <p>Período selecionado: {formatSelectedRange()}</p>}
      </div>
    </div>
  )
}

