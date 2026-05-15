"use client";

import * as Accordion from "@radix-ui/react-accordion";
import type { CommandReference } from "@/lib/content/types";

interface CommandAccordionProps {
  commands: CommandReference[];
}

export function CommandAccordion({ commands }: CommandAccordionProps) {
  return (
    <Accordion.Root type="single" collapsible className="w-full">
      {commands.map((cmd) => (
        <Accordion.Item
          key={cmd.command}
          value={cmd.command}
          className="border-b border-terminal-muted/20"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between py-4 font-mono text-left text-sm font-bold text-terminal-green transition hover:text-terminal-text">
              <span className="uppercase">{cmd.command}</span>
              <span className="transition-transform group-data-[state=open]:rotate-180">▼</span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="pb-4 text-terminal-muted">
              {cmd.description}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
