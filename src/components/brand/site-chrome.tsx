import { useState } from "react";
import { ArrowUpRight, Mail, Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteContent, type NavigationItem } from "@/lib/site-content";
import { useContactModal } from "@/components/brand/contact-modal-context";

export function BrandIdentity() {
  return (
    <img
      src="/EVCodelabs%20secondary%20logo%28horizontal%29.png"
      alt="EVCodelabs — Your Digital Growth Partner"
      className="block h-[42px] w-[150px] object-contain sm:h-[48px] sm:w-[170px] lg:h-[55px] lg:w-[190px]"
    />
  );
}

type NavigationProps = {
  items: readonly NavigationItem[];
};

function ProjectAction({ href }: { href?: string | undefined }) {
  const { open } = useContactModal();

  return (
    <Button onClick={open}>
      Discuss a Project
      <ArrowUpRight aria-hidden="true" />
    </Button>
  );
}

export function MobileNavigation({ items }: NavigationProps) {
  const [open, setOpen] = useState(false);
  const { open: openModal } = useContactModal();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Open navigation"
          title="Open navigation"
        >
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetTitle className="mt-12">EVCodelabs</SheetTitle>
        <SheetDescription>Navigation</SheetDescription>

        <nav
          aria-label="Mobile navigation"
          className="mt-8 flex flex-col gap-3"
        >
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-8">
          <Button
            onClick={() => {
              setOpen(false);
              openModal();
            }}
            className="w-full"
          >
            Discuss a Project
            <ArrowUpRight aria-hidden="true" />
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function SiteHeader({ items }: NavigationProps) {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="content-width header-inner">
        <a href="#main-content" aria-label="EVCodelabs — back to top">
          <BrandIdentity />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          <nav
            aria-label="Main navigation"
            className="flex items-center gap-6"
          >
            {items.map((item) => (
              <a key={item.href} className="nav-link" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <ProjectAction />
        </div>

        <div className="lg:hidden">
          <MobileNavigation items={items} />
        </div>
      </div>
    </header>
  );
}

export function SiteFooter({
  items,
  emailHref,
  whatsappHref,
}: {
  items: readonly NavigationItem[];
  emailHref?: string | undefined;
  whatsappHref?: string | undefined;
}) {
  return (
    <footer className="border-t border-border py-10">
      <div className="content-width">
        <div className="footer-grid">
          <div>
            <BrandIdentity />
            <p className="mt-3 text-muted-foreground">
              Your Digital Growth Partner
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-col items-start"
          >
            {items.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-start gap-2">
            {emailHref ? (
              <Button asChild variant="link">
                <a href={emailHref}>
                  <Mail aria-hidden="true" />
                  Email
                </a>
              </Button>
            ) : (
              <span className="caption text-muted-foreground">
                {siteContent.email}
              </span>
            )}

            {whatsappHref ? (
              <Button asChild variant="link">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle aria-hidden="true" />
                  WhatsApp
                </a>
              </Button>
            ) : (
              <span className="caption text-muted-foreground">
                WhatsApp — not configured
              </span>
            )}
          </div>
        </div>

        <p className="caption mt-8 border-t border-border pt-5 text-muted-foreground">
          © {new Date().getFullYear()} EVCodelabs.
        </p>
      </div>
    </footer>
  );
}