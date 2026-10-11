"use client";

import { useEffect } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useContactModal } from "@/components/brand/contact-modal-context";

const contactSchema = z.object({
  name: z.string().min(1, siteContent.contactModal.validation.nameRequired),
  email: z
    .string()
    .min(1, siteContent.contactModal.validation.emailRequired)
    .email(siteContent.contactModal.validation.emailInvalid),
  message: z.string().min(1, siteContent.contactModal.validation.messageRequired),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactModal() {
  const { isOpen, close } = useContactModal();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: siteContent.contactModal.messagePlaceholder,
    },
  });

  useEffect(() => {
    form.reset();
  }, [isOpen, form]);

  const handleClose = () => {
    close();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="max-w-md" onPointerDown={handleBackdropClick}>
        <DialogHeader>
          <DialogTitle>{siteContent.contactModal.title}</DialogTitle>
          <DialogDescription>{siteContent.contactModal.description}</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{siteContent.contactModal.nameLabel}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={siteContent.contactModal.namePlaceholder}
                      {...field}
                      aria-invalid={form.formState.errors.name ? "true" : "false"}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{siteContent.contactModal.emailLabel}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={siteContent.contactModal.emailPlaceholder}
                      {...field}
                      aria-invalid={form.formState.errors.email ? "true" : "false"}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{siteContent.contactModal.messageLabel}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={siteContent.contactModal.messagePlaceholder}
                      {...field}
                      rows={5}
                      aria-invalid={form.formState.errors.message ? "true" : "false"}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="space-y-2 sm:space-y-0 sm:space-x-2">
              <Button
                type="button"
                variant="link"
                onClick={() => {
                  const values = form.getValues();
                  const subject = "Business Inquiry — EVCodelabs";
                  const body = `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`;
                  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                    "evcodelabs01@gmail.com",
                  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  window.open(url, "_blank", "noopener,noreferrer");
                }}
                className="w-full sm:w-auto"
              >
                <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                {siteContent.contactModal.mailtoFallback}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
