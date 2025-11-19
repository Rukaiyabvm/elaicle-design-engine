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
    location: "",
    time: "",
  });

  const locations = [
    "Coimbatore, Tamil Nadu",
    "Chennai, Tamil Nadu",
    "Bangalore, Karnataka",
    "Hyderabad, Telangana",
    "Pune, Maharashtra",
    "Other",
  ];

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!date || !formData.name || !formData.email || !formData.phone || !formData.location || !formData.time) {
      setStatus("error");
      return;
    }

    setIsSubmitting(true);

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
          Location: formData.location,
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
          location: "",
          time: "",
        });
        setDate(undefined);

        // Auto-close modal after 2 seconds
        setTimeout(() => {
          onClose();
          setStatus(null);
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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

          {/* Success Box */}
          {status === "success" && (
            <div className="rounded-lg border border-emerald-500 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
              Your demo has been booked successfully! We’ll reach out to confirm shortly.
            </div>
          )}

          {/* Error Box */}
          {status === "error" && (
            <div className="rounded-lg border border-red-500 bg-red-50 px-4 py-3 text-sm text-red-700">
              Please fill all fields correctly or try again later.
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
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 XXXXX XXXXX"
                  className="mt-2"
                  required
                />
              </div>
            </div>
          </div>

          {/* Location Selection */}
          <div>
            <Label htmlFor="location" className="body-regular font-medium">
              Demo Location *
            </Label>
            <Select
              value={formData.location}
              onValueChange={(value) => setFormData({ ...formData, location: value })}
            >
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select your preferred location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(day) => day < new Date()}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <Label htmlFor="time" className="body-regular font-medium">
                Preferred Time *
              </Label>
              <Select
                value={formData.time}
                onValueChange={(value) => setFormData({ ...formData, time: value })}
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
            <Button type="submit" variant="default" className="flex-1" disabled={isSubmitting}>
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
