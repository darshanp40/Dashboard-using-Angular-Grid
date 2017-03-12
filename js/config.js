/*exported arrTileConfigs, oGridConfig*/

/*
File: config.js
This file containes all the configurations for the components inside the dashboard
*/

// Configuration for the tiles inside the dashboard
// panelType: this property is used to specify the color of the tile (ref: standard bootstrap library)
// tileIcon: this property is used to specify the icon inside the tile (ref: font-awesome icons library)
// tileData: this property is use to assign the data value to be shown inside the tile
// tileFOoter: this property is used to show the KPI measure to be shown on to the tile
var arrTileConfigs = [
    [
        {
            panelType: "panel-primary",
            tileIcon: "fa-comments",
            tileData: "26",
            tileFooter: "New Comments!"
        },
        {
            panelType: "panel-green",
            tileIcon: "fa-tasks",
            tileData: "12",
            tileFooter: "New Tasks!"
        },
        {
            panelType: "panel-yellow",
            tileIcon: "fa-shopping-cart",
            tileData: "124",
            tileFooter: "New Orders!"
        },
        {
            panelType: "panel-red",
            tileIcon: "fa-support",
            tileData: "13",
            tileFooter: "Support Tickets!"
        }
    ]
];

// Configuration for the grid inside the dashboard
// arrColumnConfig: Parameter that specifies the column configurations for angular's standard configurations of ui-grid (ref: angular ui-grid)
// data: JSON data for the angular grid
var oGridConfig = {
    dashboardGrid: {
        arrColumnConfig: [
          { name: 'CashCareLeadId', displayName: 'CashCare LeadId', width: 100, cellTemplate: '<a class="ui-grid-cell-contents" href="#{{row.entity.CashCareLeadId}}">{{row.entity.CashCareLeadId}}</a>' },
          { name: 'OrderId', displayName: 'Order Id', width: 100, pinnedLeft: true },
          { name: 'OrderValue', displayName: 'Order Value', width: 130, pinnedRight: true },
          { name: 'LoanStatus', displayName: 'Loan Status', width: 130 },
          { name: 'DocumentUpload', displayName: 'Document Upload', width: 170 },
          { name: 'DownPayment', displayName: 'Down Payment', width: 150 },
          { name: 'ProcessingFee', displayName: 'Processing Fee', width: 150 },
          { name: 'PaymentCollectedBy', displayName: 'Payment Collected By', width: 130 },
          { name: 'ManagedBy', displayName: 'Managed By', width: 200 },
          { name: 'CreatedBy', displayName: 'Created By', width: 200 }
        ],
        data: [
           {
               "CashCareLeadId": 279973,
               "OrderId": 279973,
               "OrderValue": "18000",
               "LoanStatus": "Pending",
               "DocumentUpload": "No",
               "DownPayment": "NA",
               "ProcessingFee": "NA",
               "PaymentCollectedBy": "NA",
               "ManagedBy": "suraj@cashcare.in",
               "CreatedBy": "suraj@cashcare.in"
           },
           {
               "CashCareLeadId": 279984,
               "OrderId": 279974,
               "OrderValue": "19001",
               "LoanStatus": "Approved",
               "DocumentUpload": "Yes",
               "DownPayment": "NA",
               "ProcessingFee": "NA",
               "PaymentCollectedBy": "NA",
               "ManagedBy": "suraj@cashcare.in",
               "CreatedBy": "suraj@cashcare.in"
           },
           {
               "CashCareLeadId": 279985,
               "OrderId": 279975,
               "OrderValue": "20000",
               "LoanStatus": "Rejected",
               "DocumentUpload": "No",
               "DownPayment": "300",
               "ProcessingFee": "500",
               "PaymentCollectedBy": "CashCare",
               "ManagedBy": "suraj@cashcare.in",
               "CreatedBy": "suraj@cashcare.in"
           },
           {
               "CashCareLeadId": 279986,
               "OrderId": 279976,
               "OrderValue": "48000",
               "LoanStatus": "Pending",
               "DocumentUpload": "No",
               "DownPayment": "NA",
               "ProcessingFee": "NA",
               "PaymentCollectedBy": "NA",
               "ManagedBy": "suraj@cashcare.in",
               "CreatedBy": "suraj@cashcare.in"
           },
           {
               "CashCareLeadId": 279987,
               "OrderId": 279977,
               "OrderValue": "18000",
               "LoanStatus": "Pending",
               "DocumentUpload": "No",
               "DownPayment": "NA",
               "ProcessingFee": "NA",
               "PaymentCollectedBy": "NA",
               "ManagedBy": "suraj@cashcare.in",
               "CreatedBy": "suraj@cashcare.in"
           },
           {
               "CashCareLeadId": 279988,
               "OrderId": 279978,
               "OrderValue": "18000",
               "LoanStatus": "Pending",
               "DocumentUpload": "No",
               "DownPayment": "NA",
               "ProcessingFee": "NA",
               "PaymentCollectedBy": "NA",
               "ManagedBy": "suraj@cashcare.in",
               "CreatedBy": "suraj@cashcare.in"
           },
           {
               "CashCareLeadId": 279989,
               "OrderId": 279979,
               "OrderValue": "18000",
               "LoanStatus": "Pending",
               "DocumentUpload": "No",
               "DownPayment": "NA",
               "ProcessingFee": "NA",
               "PaymentCollectedBy": "NA",
               "ManagedBy": "suraj@cashcare.in",
               "CreatedBy": "suraj@cashcare.in"
           },
           {
               "CashCareLeadId": 279990,
               "OrderId": 279980,
               "OrderValue": "18000",
               "LoanStatus": "Pending",
               "DocumentUpload": "No",
               "DownPayment": "NA",
               "ProcessingFee": "NA",
               "PaymentCollectedBy": "NA",
               "ManagedBy": "suraj@cashcare.in",
               "CreatedBy": "suraj@cashcare.in"
           },
           {
               "CashCareLeadId": 279991,
               "OrderId": 279981,
               "OrderValue": "18000",
               "LoanStatus": "Pending",
               "DocumentUpload": "No",
               "DownPayment": "NA",
               "ProcessingFee": "NA",
               "PaymentCollectedBy": "NA",
               "ManagedBy": "suraj@cashcare.in",
               "CreatedBy": "suraj@cashcare.in"
           },
           {
               "CashCareLeadId": 279992,
               "OrderId": 279982,
               "OrderValue": "18000",
               "LoanStatus": "Pending",
               "DocumentUpload": "No",
               "DownPayment": "NA",
               "ProcessingFee": "NA",
               "PaymentCollectedBy": "NA",
               "ManagedBy": "suraj@cashcare.in",
               "CreatedBy": "suraj@cashcare.in"
           },
           {
               "CashCareLeadId": 279993,
               "OrderId": 279983,
               "OrderValue": "18000",
               "LoanStatus": "Pending",
               "DocumentUpload": "No",
               "DownPayment": "NA",
               "ProcessingFee": "NA",
               "PaymentCollectedBy": "NA",
               "ManagedBy": "suraj@cashcare.in",
               "CreatedBy": "suraj@cashcare.in"
           },
           {
               "CashCareLeadId": 279994,
               "OrderId": 279984,
               "OrderValue": "18000",
               "LoanStatus": "Pending",
               "DocumentUpload": "No",
               "DownPayment": "NA",
               "ProcessingFee": "NA",
               "PaymentCollectedBy": "NA",
               "ManagedBy": "suraj@cashcare.in",
               "CreatedBy": "suraj@cashcare.in"
           },
           {
               "CashCareLeadId": 279995,
               "OrderId": 279995,
               "OrderValue": "18000",
               "LoanStatus": "Pending",
               "DocumentUpload": "No",
               "DownPayment": "NA",
               "ProcessingFee": "NA",
               "PaymentCollectedBy": "NA",
               "ManagedBy": "suraj@cashcare.in",
               "CreatedBy": "suraj@cashcare.in"
           },
           {
               "CashCareLeadId": 279996,
               "OrderId": 279996,
               "OrderValue": "18000",
               "LoanStatus": "Pending",
               "DocumentUpload": "No",
               "DownPayment": "NA",
               "ProcessingFee": "NA",
               "PaymentCollectedBy": "NA",
               "ManagedBy": "suraj@cashcare.in",
               "CreatedBy": "suraj@cashcare.in"
           },
           {
               "CashCareLeadId": 279997,
               "OrderId": 279997,
               "OrderValue": "18000",
               "LoanStatus": "Pending",
               "DocumentUpload": "No",
               "DownPayment": "NA",
               "ProcessingFee": "NA",
               "PaymentCollectedBy": "NA",
               "ManagedBy": "suraj@cashcare.in",
               "CreatedBy": "suraj@cashcare.in"
           },
           {
               "CashCareLeadId": 279998,
               "OrderId": 279998,
               "OrderValue": "18000",
               "LoanStatus": "Pending",
               "DocumentUpload": "No",
               "DownPayment": "NA",
               "ProcessingFee": "NA",
               "PaymentCollectedBy": "NA",
               "ManagedBy": "suraj@cashcare.in",
               "CreatedBy": "suraj@cashcare.in"
           },
           {
               "CashCareLeadId": 279999,
               "OrderId": 279999,
               "OrderValue": "18000",
               "LoanStatus": "Pending",
               "DocumentUpload": "No",
               "DownPayment": "NA",
               "ProcessingFee": "NA",
               "PaymentCollectedBy": "NA",
               "ManagedBy": "suraj@cashcare.in",
               "CreatedBy": "suraj@cashcare.in"
           },
           {
               "CashCareLeadId": 279100,
               "OrderId": 279100,
               "OrderValue": "18000",
               "LoanStatus": "Pending",
               "DocumentUpload": "No",
               "DownPayment": "NA",
               "ProcessingFee": "NA",
               "PaymentCollectedBy": "NA",
               "ManagedBy": "suraj@cashcare.in",
               "CreatedBy": "suraj@cashcare.in"
           },
           {
               "CashCareLeadId": 279101,
               "OrderId": 279101,
               "OrderValue": "18000",
               "LoanStatus": "Pending",
               "DocumentUpload": "No",
               "DownPayment": "NA",
               "ProcessingFee": "NA",
               "PaymentCollectedBy": "NA",
               "ManagedBy": "suraj@cashcare.in",
               "CreatedBy": "suraj@cashcare.in"
           },
           {
               "CashCareLeadId": 279102,
               "OrderId": 279102,
               "OrderValue": "18000",
               "LoanStatus": "Pending",
               "DocumentUpload": "No",
               "DownPayment": "NA",
               "ProcessingFee": "NA",
               "PaymentCollectedBy": "NA",
               "ManagedBy": "suraj@cashcare.in",
               "CreatedBy": "suraj@cashcare.in"
           },
           {
               "CashCareLeadId": 279103,
               "OrderId": 279103,
               "OrderValue": "18000",
               "LoanStatus": "Pending",
               "DocumentUpload": "No",
               "DownPayment": "NA",
               "ProcessingFee": "NA",
               "PaymentCollectedBy": "NA",
               "ManagedBy": "suraj@cashcare.in",
               "CreatedBy": "suraj@cashcare.in"
           },
           {
               "CashCareLeadId": 279104,
               "OrderId": 279104,
               "OrderValue": "18000",
               "LoanStatus": "Pending",
               "DocumentUpload": "No",
               "DownPayment": "NA",
               "ProcessingFee": "NA",
               "PaymentCollectedBy": "NA",
               "ManagedBy": "suraj@cashcare.in",
               "CreatedBy": "suraj@cashcare.in"
           },
           {
               "CashCareLeadId": 279105,
               "OrderId": 279105,
               "OrderValue": "18000",
               "LoanStatus": "Pending",
               "DocumentUpload": "No",
               "DownPayment": "NA",
               "ProcessingFee": "NA",
               "PaymentCollectedBy": "NA",
               "ManagedBy": "suraj@cashcare.in",
               "CreatedBy": "suraj@cashcare.in"
           },
           {
               "CashCareLeadId": 279106,
               "OrderId": 2799106,
               "OrderValue": "18000",
               "LoanStatus": "Pending",
               "DocumentUpload": "No",
               "DownPayment": "NA",
               "ProcessingFee": "NA",
               "PaymentCollectedBy": "NA",
               "ManagedBy": "suraj@cashcare.in",
               "CreatedBy": "suraj@cashcare.in"
           },
           {
               "CashCareLeadId": 2791067,
               "OrderId": 279107,
               "OrderValue": "18000",
               "LoanStatus": "Pending",
               "DocumentUpload": "No",
               "DownPayment": "NA",
               "ProcessingFee": "NA",
               "PaymentCollectedBy": "NA",
               "ManagedBy": "suraj@cashcare.in",
               "CreatedBy": "suraj@cashcare.in"
           }
        ]
    }
};