class Desktop {
  private motherboard: string;
  private processor: string;
  private memory: string;
  private storage: string;
  private graphicCard: string;

  constructor() {
    this.motherboard = "";
    this.processor = "";
    this.memory = "";
    this.storage = "";
    this.graphicCard = "";
  }

  display(): void {
    console.log("Desktop Specifications: ");
    console.log("Motherboard: " + this.motherboard);
    console.log("Processor: " + this.processor);
    console.log("Memory: " + this.memory);
    console.log("Storage: " + this.storage);
    console.log("Graphic Card: " + this.graphicCard);
  }

  getMotherboard(): string {
    return this.motherboard;
  }

  setMotherboard(motherboard: string): void {
    this.motherboard = motherboard;
  }

  getProcessor(): string {
    return this.processor;
  }

  setProcessor(processor: string): void {
    this.processor = processor;
  }

  getMemory(): string {
    return this.memory;
  }

  setMemory(memory: string): void {
    this.memory = memory;
  }

  getStorage(): string {
    return this.storage;
  }

  setStorage(storage: string): void {
    this.storage = storage;
  }

  getGraphicCard(): string {
    return this.graphicCard;
  }

  setGraphicCard(graphicCard: string): void {
    this.graphicCard = graphicCard;
  }
}

abstract class DesktopBuilder {
  protected desktop: Desktop = new Desktop();

  public getDesktop(): Desktop {
    return this.desktop;
  }

  public abstract buildMotherboard(): void;
  public abstract buildProcessor(): void;
  public abstract buildMemory(): void;
  public abstract buildStorage(): void;
  public abstract buildGraphicCard(): void;
}

class DellDesktopBuilder extends DesktopBuilder {
  public buildMotherboard(): void {
    this.desktop.setMotherboard("Dell Motherboard");
  }

  public buildProcessor(): void {
    this.desktop.setProcessor("Dell Processor");
  }

  public buildMemory(): void {
    this.desktop.setMemory("Dell Memory");
  }

  public buildStorage(): void {
    this.desktop.setStorage("Dell Storage");
  }

  public buildGraphicCard(): void {
    this.desktop.setGraphicCard("Dell Graphic Card");
  }
}

class HPDesktopBuilder extends DesktopBuilder {
  public buildMotherboard(): void {
    this.desktop.setMotherboard("HP Motherboard");
  }

  public buildProcessor(): void {
    this.desktop.setProcessor("HP Processor");
  }

  public buildMemory(): void {
    this.desktop.setMemory("HP Memory");
  }

  public buildStorage(): void {
    this.desktop.setStorage("HP Storage");
  }

  public buildGraphicCard(): void {
    this.desktop.setGraphicCard("HP Graphic Card");
  }
}

class DesktopDirector {
  buildDesktop(builder: DesktopBuilder): Desktop {
    builder.buildMotherboard();
    builder.buildProcessor();
    builder.buildMemory();
    builder.buildStorage();
    builder.buildGraphicCard();

    return builder.getDesktop();
  }
}

const director: DesktopDirector = new DesktopDirector();

const dellDesktopBuilder: DellDesktopBuilder = new DellDesktopBuilder();
const dellDesktop: Desktop = director.buildDesktop(dellDesktopBuilder);
dellDesktop.display();

const hpDesktopBuilder: HPDesktopBuilder = new HPDesktopBuilder();
const hpDesktop: Desktop = director.buildDesktop(hpDesktopBuilder);
hpDesktop.display();
