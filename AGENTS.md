<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## EVCodelabs architecture
- Retain React, TypeScript, TanStack Start, and Tailwind; use existing Radix/shadcn controls rather than adding dependencies for standard interactions.
- Define shared visual roles and responsive typography in `src/styles.css`; this keeps brand updates consistent across reusable controls.
- Keep owner-supplied content in `src/lib/site-content.ts` and prop-driven brand components in `src/components/brand`; this separates business wording from presentation.
- Keep a single main landmark around the root Outlet; shared header and footer live outside it for consistent page semantics.
- Compose the single scrolling homepage in the brand homepage module and render shared navigation/footer around the root Outlet; this preserves approved section ordering without duplicate chrome or main landmarks.
- Supply contact destinations to presentation controls explicitly; missing destinations render inactive controls rather than fabricated actions.

- Production origin and WhatsApp number are configured only in `src/lib/site-content.ts` (`siteUrl`, `whatsapp`); canonical, og:url, and WhatsApp links derive from them so nothing is published before it is verified.
