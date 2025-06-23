import PageLayout from '@/components/ui/page-layout';

export default function ResellerLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  return (
    <PageLayout variant="reseller" resellerSlug={params.slug}>
      {children}
    </PageLayout>
  );
}