import { TemplateSection } from "./TemplateSection";

export class SystemMessage extends TemplateSection {
    public constructor(template: string, tokens: number = -1) {
        super(template, 'system', tokens, true, '\n', '');
    }
}