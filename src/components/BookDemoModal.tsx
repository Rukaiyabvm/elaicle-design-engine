import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookDemoModal = ({ isOpen, onClose }: BookDemoModalProps) => {
  const [date, setDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    time: "",
  });

  // Simple state → city mapping
  const stateOptions: Record<string, string[]> = {
    "Tamil Nadu": ["Coimbatore", "Chennai", "Madurai", "Other"],
    Karnataka: ["Bengaluru", "Mysuru", "Mangaluru", "Other"],
    Telangana: ["Hyderabad", "Warangal", "Other"],
    Maharashtra: ["Pune", "Mumbai", "Nagpur", "Other"],
    "Other State": ["Other"],
  };

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  // Today at midnight (so “today” is allowed, earlier dates disabled)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !date ||
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.state ||
      !formData.city ||
      !formData.time
    ) {
      setStatus("error");
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch("https://formsubmit.co/ajax/office@elaicle.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Type: "Demo Booking",
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          State: formData.state,
          City: formData.city,
          Date: date ? format(date, "PPP") : "",
          Time: formData.time,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          state: "",
          city: "",
          time: "",
        });
        setDate(undefined);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const citiesForSelectedState =
    formData.state && stateOptions[formData.state]
      ? stateOptions[formData.state]
      : [];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background">
        <DialogHeader>
          <DialogTitle className="heading-3">Book a Demo Ride</DialogTitle>
          <DialogDescription className="body-regular text-muted-foreground">
            Experience the Trike 2π firsthand. Choose your preferred location, date, and time.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Status Messages */}
          {status === "success" && (
            <div className="rounded-lg border border-emerald-500 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
              Your demo request has been submitted successfully. We&apos;ll contact you soon.
            </div>
          )}

          {status === "error" && (
            <div className="rounded-lg border border-red-500 bg-red-50 px-4 py-3 text-sm text-red-700">
              Please fill in all fields correctly or try again in a moment.
            </div>
          )}

          {/* Personal Information */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="body-regular font-medium">
                Full Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="Enter your full name"
                className="mt-2"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email" className="body-regular font-medium">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder="your.email@example.com"
                  className="mt-2"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="body-regular font-medium">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  placeholder="+91 XXXXX XXXXX"
                  className="mt-2"
                  required
                />
              </div>
            </div>
          </div>

          {/* State & City Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label className="body-regular font-medium">State *</Label>
              <Select
                value={formData.state}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, state: value, city: "" }))
                }
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(stateOptions).map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="body-regular font-medium">City *</Label>
              <Select
                value={formData.city}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, city: value }))
                }
                disabled={!formData.state}
              >
                <SelectTrigger className="mt-2">
                  <SelectValue
                    placeholder={
                      formData.state ? "Select city" : "Select state first"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {citiesForSelectedState.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Date and Time Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label className="body-regular font-medium">Preferred Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className={cn(
                      "w-full mt-2 justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent
  className="w-auto p-0 bg-white border border-gray-200"
  align="start"
>
  <div className="p-2 text-gray-900">
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      disabled={(day) => day < today}
      initialFocus
      className="pointer-events-auto bg-white"
      classNames={{
        caption_label: "text-sm font-medium text-gray-900",
        head_cell: "text-xs text-gray-500 font-normal",
        day: "h-9 w-9 text-sm text-gray-900 hover:bg-gray-100 aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_disabled: "text-gray-300",
      }}
    />
  </div>
</PopoverContent>

              </Popover>
            </div>

            <div>
              <Label htmlFor="time" className="body-regular font-medium">
                Preferred Time *
              </Label>
              <Select
                value={formData.time}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, time: value }))
                }
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select time slot" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        {time}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="default"
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Confirm Booking"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookDemoModal;


  );
};

export default BookDemoModal;
