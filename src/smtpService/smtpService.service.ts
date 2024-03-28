// // import PDFDocument from 'pdfkit'
// // import * as puppeteer from 'puppeteer-core';
// import { Injectable } from '@nestjs/common';
// import { MailerService } from '@nestjs-modules/mailer';
// import * as htmlToPdf from 'html-pdf';
// // import fs from 'fs';
// import { PDFDocument, rgb,PageSizes } from 'pdf-lib';




const columns = [
    { title: 'Division Id', dataIndex: 'division_id' },
    { title: 'Sub Division Id', dataIndex: 'subdivision_id' },
    { title: 'Sub Division Name', dataIndex: 'subdivision_name' },
    { title: 'Section Id', dataIndex: 'section_id' },
    { title: 'Section Name', dataIndex: 'section_name' },
    { title: 'Division Name', dataIndex: 'division_name' },
    { title: 'Area', dataIndex: 'area_name' },
    { title: 'Meter Reader Id', dataIndex: 'mr_id' },
    { title: 'Consumer Count', dataIndex: 'consumer_count' },
    { title: 'Meter Readers', dataIndex: 'mrId_count' },
    { title: 'Meter Reader', dataIndex: 'meter_readers' },
    { title: 'Proper Readings (OK)', dataIndex: 'ok_count' },
    { title: 'OK With Exceptions', dataIndex: 'ok_with_exceptions_count' },
    { title: 'OK Without Exceptions', dataIndex: 'ok_without_exceptions_count' },
    { title: 'Field Issues', dataIndex: 'field_issues' },
    { title: 'Meter Defective (MD)', dataIndex: 'md_count' },
    { title: 'Door Lock (DL)', dataIndex: 'dl_count' },
    { title: 'Date', dataIndex: 'date' },
    { title: 'Time', dataIndex: 'time' },
    { title: 'id', dataIndex: 'id' },
    { title: 'Meter Number', dataIndex: 'meter_number' },
    { title: 'Consumer Number', dataIndex: 'consumer_number' },
    { title: 'Location', dataIndex: 'location' },
    { title: 'Category', dataIndex: 'category' },
    { title: 'Status Code', dataIndex: 'status_code' },
    { title: 'Abnormalities Code', dataIndex: 'abnormalities_code' },
    { title: 'KWH', dataIndex: 'kwh' },
    { title: 'MD', dataIndex: 'MD' },
    { title: 'MR Remarks', dataIndex: 'mr_remarks' },
    { title: 'Exception Code', dataIndex: 'exception_code' },
    { title: 'Ok Without Exception', dataIndex: 'ok_exception_count' },
    { title: 'Incorrect Reading', dataIndex: 'ir_exception_count' },
    { title: 'InCorrect Parameter', dataIndex: 'ip_exception_count' },
    { title: 'Unclear Image', dataIndex: 'uc_exception_count' },
    { title: 'Spoof', dataIndex: 'sp_exception_count' },
    { title: 'Invalid Image', dataIndex: 'im_exception_count' },
    { title: 'Total', dataIndex: 'total' },
    { title: 'Consumer Billed', dataIndex: 'cosumer_billed' },
    { title: 'Mobile Number', dataIndex: 'mr_mobile_no' },
    { title: 'Consumer Count', dataIndex: 'count' },
  ];  
// @Injectable()
// export class SMTPService {
//   constructor(private readonly mailerService: MailerService) {}

//   // async sendPdfMail(email: string, apiData: any, name: string,fromDate:any,toDate:any): Promise<string> {
//   //   try {
//   //     console.log('API Data:', apiData);

//   //     // const htmlContent = await this.generateHtmlContent(apiData, columns,fromDate,toDate,name);
//   //     // const pdfBuffer = await this.generatePdfBuffer(htmlContent);
//   //     const htmlContentWithHello = `<p>Hello,SMTP Service is working fine ${toDate}</p>`;


//   //     await this.mailerService.sendMail({
//   //       to: email,
//   //       from: 'electricmeteremdee@gmail.com',
//   //       subject: 'Testing the SMTP service',
//   //       html: htmlContentWithHello,
//   //     });

//   //     return 'Email is Sent Successfully';
//   //   } catch (error) {
//   //     console.error('Error sending email:', error);
//   //     return 'Error sending email';
//   //   }
//   // }


//   // async sendPdfMail(email: string, apiData: any, name: string,fromDate:any,toDate:any): Promise<string> {
//   //   try {
//   //     console.log('API Data:', apiData);

//   //     const htmlContent = await this.generateHtmlContent(apiData, columns,fromDate,toDate,name);
//   //     const pdfBuffer = await this.generatePdfBuffer(htmlContent);

//   //     await this.mailerService.sendMail({
//   //       to: email,
//   //       from: 'electricmeteremdee@gmail.com',
//   //       subject: 'Pdf',
//   //       attachments: [
//   //         {
//   //           filename: `${name}.pdf`,
//   //           content: pdfBuffer.toString('base64'),
//   //           encoding: 'base64',
//   //           contentDisposition: 'attachment',
//   //         },
//   //       ],
//   //     });

//   //     return 'Email is Sent Successfully';
//   //   } catch (error) {
//   //     console.error('Error sending email:', error);
//   //     return 'Error sending email';
//   //   }
//   // }

//   // async generateHtmlContent(apiData: any, columns: any,fromDate:any,toDate:any,name:string): Promise<string> {
   
//   //   const apiDataIndices = [...new Set(apiData.map(item => Object.keys(item)).flat())];
   
//   //   const headers = apiDataIndices
//   // .filter(apiKey => columns.some(column => column.dataIndex === apiKey))
//   // .map(apiKey => {
//   //   const matchingColumn = columns.find(column => column.dataIndex === apiKey);
//   //   return `<th>${matchingColumn?.title || ''}</th>`;
//   // })
//   // .join('');
//   //   // const rows = apiData.map(item =>
//   //   //   columns.map(column => `<td>${item[column.dataIndex]?.toString() || ''}</td>`).join('')
//   //   // );

//   //   const rows = apiData.map(item => {
//   //       const rowData = apiDataIndices
//   //         .filter(apiKey => columns.some(column => column.dataIndex === apiKey))
//   //         .map(apiKey => {
//   //           const matchingColumn = columns.find(column => column.dataIndex === apiKey);
//   //           return `<td>${item[matchingColumn?.dataIndex]?.toString() || ''}</td>`;
//   //         })
//   //         .join('');
//   //       return `<tr>${rowData}</tr>`;
//   //     });


//   //   const htmlContent = `
//   //     <html>
//   //       <head>
//   //         <style>
//   //           table {
//   //             border-collapse: collapse;
//   //             width: 100%;
//   //           }

//   //           th, td {
//   //             border: 1px solid black;
//   //             padding: 5px;
//   //             text-align: left;
//   //           }

//   //           h2{
//   //               text-align:center;
//   //           }
//   //           footer {
//   //               position: fixed;
//   //               bottom: 0;
//   //               left: 0;
//   //               width: 100%;
//   //               text-align: center;
//   //               padding: 5px;
//   //             }
        

//   //             @page {
//   //               counter-increment: page;
//   //               @bottom-center {
//   //                 content: 'Page ' counter(page);
//   //               }
//   //             }
//   //         </style>
//   //       </head>
//   //       <body>
//   //         <table>
//   //           <h2>${name}</h2>
//   //           <div>
//   //             <h4>From Date : ${fromDate}</p>
//   //             <h4>To Date   : ${toDate}</p>
//   //           </div>
//   //           <thead>
//   //             <tr>${headers}</tr>
//   //           </thead>
//   //           <tbody>
//   //             ${rows.map(row => `<tr>${row}</tr>`).join('')}
//   //           </tbody>
//   //         </table>
//   //         <footer id="pageFooter"></footer>

//   //         <script type="text/javascript">
//   //           // JavaScript to dynamically update the page number
//   //           let pageNumber = 1;
    
//   //           window.matchMedia('print').addListener(function (mediaQueryListEvent) {
//   //             if (mediaQueryListEvent.matches) {
//   //               updatePageNumber();
//   //             }
//   //           });
    
//   //           function updatePageNumber() {
//   //             document.getElementById('pageFooter').innerHTML = 'Page ' + pageNumber;
//   //             pageNumber++;
//   //           }
//   //         </script>        
//   //       </body>
//   //     </html>
//   //   `;

//   //   return htmlContent;
//   // }

//   // async generatePdfBuffer(htmlContent: string): Promise<Buffer> {
//   //   const browser = await puppeteer.launch({
//   //     executablePath: '/usr/bin/google-chrome',
//   //     args: ['--disable-dev-shm-usage']
//   //   });
//   //   const page = await browser.newPage();

//   //   await page.setContent(htmlContent);
    
//   //   const pdfBuffer = await page.pdf({ format: 'letter' }); // Adjust format as needed

//   //   await browser.close();

//   //   return pdfBuffer;
//   // }


//   async sendPdfMail(email: string, apiData: any, name: string, fromDate: any, toDate: any): Promise<string> {
//     try {

//        const htmlContent = await this.generateHtmlContent(apiData, columns,fromDate,toDate,name);
//       const pdfBuffer = await this.generatePdfBuffer(htmlContent);

//       await this.mailerService.sendMail({
//         to: email,
//         from: 'electricmeteremdee@gmail.com',
//         subject: 'Pdf',
//         attachments: [
//           {
//             filename: `${name}.pdf`,
//             content: pdfBuffer,
//             encoding: 'binary',
//             contentDisposition: 'attachment',
//           },
//         ],
//       });

//       return 'Email is Sent Successfully';
//     } catch (error) {
//       console.error('Error sending email:', error);
//       return 'Error sending email';
//     }
//   }


//   async generateHtmlContent(apiData: any, columns: any,fromDate:any,toDate:any,name:string): Promise<string> {
   
//     const apiDataIndices = [...new Set(apiData.map(item => Object.keys(item)).flat())];
   
//     const headers = apiDataIndices
//   .filter(apiKey => columns.some(column => column.dataIndex === apiKey))
//   .map(apiKey => {
//     const matchingColumn = columns.find(column => column.dataIndex === apiKey);
//     return `<th>${matchingColumn?.title || ''}</th>`;
//   })
//   .join('');
//     // const rows = apiData.map(item =>
//     //   columns.map(column => `<td>${item[column.dataIndex]?.toString() || ''}</td>`).join('')
//     // );

//     const rows = apiData.map(item => {
//         const rowData = apiDataIndices
//           .filter(apiKey => columns.some(column => column.dataIndex === apiKey))
//           .map(apiKey => {
//             const matchingColumn = columns.find(column => column.dataIndex === apiKey);
//             return `<td>${item[matchingColumn?.dataIndex]?.toString() || ''}</td>`;
//           })
//           .join('');
//         return `<tr>${rowData}</tr>`;
//       });


//     const htmlContent = `
//       <html>
//         <head>
//           <style>
//             table {
//               border-collapse: collapse;
//               width: 100%;
//             }

//             th, td {
//               border: 1px solid black;
//               padding: 5px;
//               text-align: left;
//             }

//             h2{
//                 text-align:center;
//             }
//             footer {
//                 position: fixed;
//                 bottom: 0;
//                 left: 0;
//                 width: 100%;
//                 text-align: center;
//                 padding: 5px;
//               }
        

//               @page {
//                 counter-increment: page;
//                 @bottom-center {
//                   content: 'Page ' counter(page);
//                 }
//               }
//           </style>
//         </head>
//         <body>
//           <table>
//             <h2>${name}</h2>
//             <div>
//               <h4>From Date : ${fromDate}</p>
//               <h4>To Date   : ${toDate}</p>
//             </div>
//             <thead>
//               <tr>${headers}</tr>
//             </thead>
//             <tbody>
//               ${rows.map(row => `<tr>${row}</tr>`).join('')}
//             </tbody>
//           </table>
//           <footer id="pageFooter"></footer>

//           <script type="text/javascript">
//             // JavaScript to dynamically update the page number
//             let pageNumber = 1;
    
//             window.matchMedia('print').addListener(function (mediaQueryListEvent) {
//               if (mediaQueryListEvent.matches) {
//                 updatePageNumber();
//               }
//             });
    
//             function updatePageNumber() {
//               document.getElementById('pageFooter').innerHTML = 'Page ' + pageNumber;
//               pageNumber++;
//             }
//           </script>        
//         </body>
//       </html>
//     `;

//     return htmlContent;
//   }

//   async  generatePdfBuffer(htmlContent: string): Promise<Buffer> {
//     try {
//       const pdfBuffer = await new Promise<Buffer>((resolve, reject) => {
//         htmlToPdf.create(htmlContent).toBuffer((err, buffer) => {
//           if (err) {
//             reject(err);
//           } else {
//             resolve(buffer);
//           }
//         });
//       });
  
//       return pdfBuffer;
//     } catch (error) {
//       throw new Error(`Error generating PDF buffer: ${error.message}`);
//     }
//   }
// }

import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

@Injectable()
export class SMTPService {
  constructor(private readonly mailerService: MailerService) {}

  async sendPdfMail(email: string, apiData: any, name: string, fromDate: any, toDate: any): Promise<string> {
    try {
      const pdfBuffer = await this.generatePdfBuffer(apiData, columns, name, fromDate, toDate);

      await this.mailerService.sendMail({
        to: email,
        from: 'electricmeteremdee@gmail.com',
        subject: 'Pdf',
        attachments: [
          {
            filename: `${name}.pdf`,
            content: pdfBuffer,
            encoding: 'binary',
            contentDisposition: 'attachment',
          },
        ],
      });

      return 'Email is Sent Successfully';
    } catch (error) {
      console.error('Error sending email:', error);
      return 'Error sending email';
    }
  }

  async generatePdfBuffer(apiData: any, columns: any[], name: string, fromDate: any, toDate: any): Promise<Buffer> {
    try {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage();
      const { width, height } = page.getSize();
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

      let textY = height - 50; // Initial y position for text

      // Add title
      const title = `${name}\nFrom Date: ${fromDate}\nTo Date: ${toDate}\n\n`;
      page.drawText(title, { x: 50, y: textY, size: 15, font, color: rgb(0, 0, 0) });
      textY -= 15 * 4; // Move down for title and date lines

      // Add table headers
      const headers = columns
      .filter(column => apiData.some(item => item.hasOwnProperty(column.dataIndex)))
      .map(column => column.title)
      .filter(Boolean) // Remove any undefined or null values
      .join(' | ');
      page.drawText(headers, { x: 50, y: textY, size: 12, font, color: rgb(0, 0, 0) });
      textY -= 12; // Move down for table headers

      // Add table rows
      for (const row of apiData) {
        const rowData = columns
          .map(column => row[column.dataIndex]?.toString() || '')
          .filter(Boolean) // Remove any undefined or null values
          .join(' | ');
        page.drawText(rowData, { x: 50, y: textY, size: 10, font, color: rgb(0, 0, 0) });
        textY -= 10; // Move down for each row
      }

      const pdfBytes = await pdfDoc.save();
      const pdfBuffer = Buffer.from(pdfBytes);

      return pdfBuffer;
    } catch (error) {
      throw new Error(`Error generating PDF buffer: ${error.message}`);
    }
  }
}


