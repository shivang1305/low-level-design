interface Analytics {
  analyse(data: any): void;
}

// ADAPTEE: 3rd party tool
class AnalyticsLibraryTool {
  analyseData(jsonData: any) {
    console.log("Data is analysed from JSON format");
  }
}

// ADAPTER
class XMLToJSONAdapter implements Analytics {
  // Adapter has an object of adaptee inside it
  // HAS-A relation (aggregation) -> Object based Adapter Design Pattern
  constructor(private analyticsLibraryTool: AnalyticsLibraryTool) {}

  private xmlToJsonConverter(data: XMLDocument) {
    // simplified conversion (mock)
    return {
      stock: {
        price: 100,
      },
    };
  }

  analyse(data: any): void {
    const jsonData = this.xmlToJsonConverter(data);
    this.analyticsLibraryTool.analyseData(jsonData);
  }
}

const XMLData = `<?xml version="1.0" encoding="UTF-8"?>
<catalog>
  <book id="bk101">
    <author>Gambardella, Matthew</author>
    <title>XML Developer's Guide</title>
    <price>44.95</price>
  </book>
</catalog>`;

const analytics = new XMLToJSONAdapter(new AnalyticsLibraryTool());

analytics.analyse(XMLData);
