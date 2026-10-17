import { profile } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { ButtonLink } from "./ButtonLink";
import { EmailButton } from "./EmailButton";
import { DownloadIcon } from "./Icons";

type Props = {
  locale: Locale;
  t: Pick<Dictionary, "contactMe" | "emailCopied" | "emailSubject" | "downloadCv">;
};

export function ContactActions({ locale, t }: Props) {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <EmailButton
        email={profile.email}
        subject={t.emailSubject}
        label={t.contactMe}
        copiedLabel={t.emailCopied}
      />
      <ButtonLink
        href={profile.cv[locale]}
        download
        variant="ghost"
        icon={<DownloadIcon className="size-4" />}
      >
        {t.downloadCv}
      </ButtonLink>
    </div>
  );
}
