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
        <Text className="text">HÓA ĐƠN GTGT</Text>
      </View>
      <View>
        <Text>Số hóa đơn: 001HDGTT001F</Text>
      </View>
      <View>
        <Text>Ngày xuất hóa đơn:  {currentDate.toDateString()}</Text>
      </View>
      <View>
        <Text>Tên khách hàng: Phạm Văn A</Text>
      </View>
      <View>
        <Text>Địa chỉ: Tây Hồ, Hà Nội</Text>
      </View>
      <View>
        <Text>Mã khách hàng: KH001HD</Text>
      </View>
      <View>
        <Text>Mã đồng hồ: DH1001</Text>
      </View>
      <View>
        <Text>Khối lượng tiêu thụ: 1000 m3</Text>
      </View>
      <View>
        <Text>Đơn giá: 200 VND</Text>
      </View>
      <View>
        <Text>Tổng cộng tiền nước: 200.000 VND</Text>
      </View>
      <View>
        <Text>Thuế VAT: 10%</Text>
      </View>
      <View>
        <Text>Tổng cộng thanh toán:  220.000 VND</Text>
      </View>
      <View>
        <Text>Cảm ơn quý khách đã sử dụng dịch vụ của chúng tôi!</Text>
      </View>
    </Page>
  </Document>
);

export default PDFContent;