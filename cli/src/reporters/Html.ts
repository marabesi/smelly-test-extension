import Handlebars from "handlebars";
import { Smell, SupportedLanguages } from "..";
import { HtmlOutput } from './Output';
import { ReadHtml } from './Input';

export interface SmellsList {
  language: SupportedLanguages;
  fileName: string;
  smells: Smell[];
}

interface AgreggatorSmellls {
  build: () => Promise<void>
}

export interface ExportOptions {
  to: string
}

export class SmellsAggreagtor implements AgreggatorSmellls {
  constructor(
    private smellLists: SmellsList[],
    private exportOptions: ExportOptions
  ) { }

  async build(): Promise<void> {
    try {
      const read = new ReadHtml();
      const data = await read.readTeamplate();

      const template = Handlebars.compile(data);
      const totalSmells = this.smellLists.reduce((previous, current) => previous + current.smells.length, 0);
      const html = template({ data: this.smellLists, totalSmells});

      const output = new HtmlOutput();
      await output.writeTo(html, this.exportOptions);
    } catch (err) {
      console.log(err);
    }
  }
}