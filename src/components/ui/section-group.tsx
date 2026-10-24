interface SectionGroupProps {
  children: React.ReactNode;
}

export function SectionGroup({ children }: SectionGroupProps) {
  return (
    <div className="[&>section+section]:border-line/60 [&>section+section]:border-t">
      {children}
    </div>
  );
}
