import React from 'react';
import { Document, Page, View, Text, PDFViewer, Font } from '@react-pdf/renderer';
import './pdfview.css'

Font.register({
  family: 'OpenSans',
  src: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap%22%20rel=%22stylesheet%22"
});

const currentDate = new Date();

const PDFContent = () => (
  <Document>
    <Page size={'A4'}>
      <View>
        <Text className="text">WATER CONSUMPTION BILL</Text>
      </View>
      <View>
        <Text>No: 001HDGTT001F</Text>
      </View>
      <View>
        <Text>Exported date:  {currentDate.toDateString()}</Text>
      </View>
      <View>
        <Text>Customer: Pham Van A</Text>
      </View>
      <View>
        <Text>Add: Tay Ho, Hanoi</Text>
      </View>
      <View>
        <Text>Customer id: KH001HD</Text>
      </View>
      <View>
        <Text>LORA ID: DH1001</Text>
      </View>
      <View>
        <Text>Water consumption: 3000 m3</Text>
      </View>
      <View>
        <Text>Unit: 200 VND</Text>
      </View>
      <View>
        <Text>Total: 300.000 VND</Text>
      </View>
      <View>
        <Text>VAT: 0%</Text>
      </View>
      <View>
        <Text>Total:  300.000 VND</Text>
      </View>
      <View>
        <Text>Thanks for using our services!</Text>
      </View>
    </Page>
  </Document>
);

export default PDFContent;