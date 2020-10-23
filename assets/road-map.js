const planedIcon = './assets/blank.png';
const doneIcon = './assets/done.png';
const config = {
  container: "#map-div",
  connectors: {
      type: 'straight'
  },
  node: {
      HTMLclass: 'node',
  }
};

const chart_config = [config];

// adding node to the tree
const addNode = (newNodeLabel, rootNode, isDone) => {
    const newNode = {
        image: isDone === true ? doneIcon : planedIcon,
        text: {
            name: newNodeLabel
        }
    };
    if (rootNode) {
        newNode.parent = rootNode;
    }
    chart_config.push(newNode);
    return newNode;
}

const addCrudNode = (rootNode, isDone) => {
  const node = addNode('Management' , rootNode, isDone);
  return node;
  // const listNode = addNode('List' , rootNode, isDone);
  // chart_config.push(listNode);
  // const detailsNode = addNode('Details', rootNode, isDone);
  // chart_config.push(detailsNode);
  // const managementNode = addNode('Management', rootNode, isDone);
  // chart_config.push(managementNode);
  // return [listNode, detailsNode, managementNode];
}



const root = addNode('Shamrock Project');

// Feature Framework
const feature_framework = addNode('New System', root);
const feature_framework_user = addNode('User', feature_framework);
const feature_framework_user_profile = addNode('Profile', feature_framework_user);
const feature_framework_user_profile_details = addNode('Details', feature_framework_user_profile);
const feature_framework_user_profile_password = addNode('Password', feature_framework_user_profile);
const feature_framework_user_role = addNode('Roles', feature_framework_user);
const feature_framework_user_auth = addNode('Authentication', feature_framework_user);
const feature_framework_user_management = addNode('Management', feature_framework_user);
addCrudNode(feature_framework_user_management);
const feature_framework_user_logs = addNode('Logs', feature_framework_user);

const feature_framework_product = addNode('Product', feature_framework);
const feature_framework_product_details = addNode('General Details', feature_framework_product);
const feature_framework_product_details_category = addNode('Product Category', feature_framework_product_details);
addCrudNode(feature_framework_product_details_category);
const feature_framework_product_details_packaging = addNode('Packaging', feature_framework_product_details);
addCrudNode(feature_framework_product_details_packaging);
const feature_framework_product_details_label = addNode('Labels', feature_framework_product_details_packaging);
addCrudNode(feature_framework_product_details_label);

const feature_framework_product_accounting = addNode('Account Settings', feature_framework_product_details);
const feature_framework_product_details_profile = addNode('Profile', feature_framework_product_details);
const feature_framework_product_details_specs = addNode('Attributes', feature_framework_product_details);

const feature_framework_product_purchase = addNode('Purchase Details', feature_framework_product);
const feature_framework_product_purchase_measurement = addNode('Measurement', feature_framework_product_purchase);
const feature_framework_product_purchase_supplier = addNode('Supplier', feature_framework_product_purchase);
const feature_framework_product_purchase_supplier_list = addNode('List', feature_framework_product_purchase_supplier);
const feature_framework_product_purchase_supplier_preferred = addNode('Preferred', feature_framework_product_purchase_supplier);
const feature_framework_product_purchase_supplier_suppliercode = addNode('SupplierCode', feature_framework_product_purchase_supplier);
const feature_framework_product_purchase_supplier_supplierprice = addNode('Unit Price', feature_framework_product_purchase_supplier);

const feature_framework_product_sales = addNode('Sales Details', feature_framework_product);
const feature_framework_product_pricing = addNode('Unit Price', feature_framework_product_sales);
const feature_framework_product_pricing_special = addNode('Special Prices', feature_framework_product_sales);

const feature_framework_product_make = addNode('Manufacturing Details', feature_framework_product);
const feature_framework_product_make_waste = addNode('Waste', feature_framework_product_make);
const feature_framework_product_bom = addNode('Bom', feature_framework_product_make);
addCrudNode(feature_framework_product_bom);
const feature_framework_product_steps = addNode('Steps', feature_framework_product_make);
const feature_framework_product_steps_types = addNode('Types', feature_framework_product_steps);
addCrudNode(feature_framework_product_steps_types);

const feature_framework_product_steps_list = addNode('List', feature_framework_product_steps);
const feature_framework_product_steps_details = addNode('Details', feature_framework_product_steps);
const feature_framework_product_steps_details_form = addNode('Form', feature_framework_product_steps_details);
const feature_framework_product_steps_details_form_fiels = addNode('Fields', feature_framework_product_steps_details_form);
const feature_framework_product_steps_management = addNode('Management', feature_framework_product_steps);

const feature_framework_inventory = addNode('Inventory', feature_framework_product);
const feature_framework_inventory_logs = addNode('Logs', feature_framework_inventory);
const feature_framework_inventory_location = addNode('Location', feature_framework_inventory);
const feature_framework_inventory_location_preferred = addNode('Preferred', feature_framework_inventory_location);
const feature_framework_inventory_location_logs = addNode('Logs', feature_framework_inventory_location);
const feature_framework_inventory_location_transfer = addNode('Transfer', feature_framework_inventory_location);
const feature_framework_inventory_location_movement = addNode('Movement', feature_framework_inventory_location_transfer);
addCrudNode(feature_framework_inventory_location);
const feature_framework_inventory_stocktake = addNode('Stocktake', feature_framework_inventory);
addCrudNode(feature_framework_inventory_stocktake);

const feature_framework_product_logs = addNode('Logs', feature_framework_product);


const feature_framework_salesorder = addNode('SalesOrder', feature_framework);
addCrudNode(feature_framework_salesorder);
const feature_framework_salesorder_customer = addNode('Customer', feature_framework_salesorder);
addCrudNode(feature_framework_salesorder_customer);

const feature_framework_job_insufficient_orders = addNode('Insufficient Orders', feature_framework_salesorder);

const feature_framework_salesorder_customer_address = addNode('Address', feature_framework_salesorder_customer);
addCrudNode(feature_framework_salesorder_customer_address);

const feature_framework_salesorder_invoice = addNode('Invoice', feature_framework_salesorder);
addCrudNode(feature_framework_salesorder_invoice);

const feature_framework_salesorder_invoice_creditnote = addNode('CreditNote', feature_framework_salesorder_invoice);
addCrudNode(feature_framework_salesorder_invoice_creditnote);
const feature_framework_salesorder_invoice_creditnote_payment = addNode('Payment', feature_framework_salesorder_invoice_creditnote);
addCrudNode(feature_framework_salesorder_invoice_creditnote_payment);

const feature_framework_salesorder_shipping = addNode('Shipment', feature_framework_salesorder_invoice);
addCrudNode(feature_framework_salesorder_shipping);
const feature_framework_salesorder_shipping_types = addNode('Types', feature_framework_salesorder_shipping);
addCrudNode(feature_framework_salesorder_shipping_types);
const feature_framework_salesorder_shipping_couries = addNode('Couriers', feature_framework_salesorder_shipping);
addCrudNode(feature_framework_salesorder_shipping_couries);

const feature_framework_salesorder_payment = addNode('Payment', feature_framework_salesorder_invoice);
addCrudNode(feature_framework_salesorder_payment);

const feature_framework_salesorder_statusflow = addNode('Status Flow', feature_framework_salesorder);

const feature_framework_purchaseorder = addNode('PurchaseOrder', feature_framework);
addCrudNode(feature_framework_purchaseorder);
const feature_framework_purchaseorder_statusflow = addNode('Status Flow', feature_framework_purchaseorder);

const feature_framework_purchaseorder_supplier = addNode('supplier', feature_framework_purchaseorder);
addCrudNode(feature_framework_purchaseorder_supplier);
const feature_framework_purchaseorder_receiving = addNode('Receiving', feature_framework_purchaseorder);
const feature_framework_purchaseorder_supplier_invoice = addNode('Supplier Bill', feature_framework_purchaseorder_receiving);
addCrudNode(feature_framework_purchaseorder_supplier_invoice);
addCrudNode(feature_framework_purchaseorder_receiving);


const feature_framework_job = addNode('Job', feature_framework);
addCrudNode(feature_framework_job);
const feature_framework_job_statusflow = addNode('Status Flow', feature_framework_job);
const feature_framework_job_shift = addNode('Shift', feature_framework_job);
const feature_framework_job_qa = addNode('QC', feature_framework_job_statusflow);
const feature_framework_job_label_printing = addNode('Labels', feature_framework_job_qa);
const feature_framework_job_logs = addNode('Logs', feature_framework_job);
addCrudNode(feature_framework_job_shift);



const feature_framework_settings = addNode('Settings', feature_framework);
const feature_framework_settings_machines = addNode('Machines', feature_framework_settings);
const feature_framework_settings_machines_lost_time = addNode('LostTime', feature_framework_settings_machines);
addCrudNode(feature_framework_settings_machines_lost_time);
const feature_framework_settings_machines_steps = addNode('Steps', feature_framework_settings_machines);
addCrudNode(feature_framework_settings_machines_steps);
addCrudNode(feature_framework_settings_machines);
const feature_framework_settings_machines_steps_types = addNode('Types', feature_framework_settings_machines_steps);
addCrudNode(feature_framework_settings_machines_steps_types);
const feature_framework_settings_tax = addNode('Tax', feature_framework_settings);

const feature_framework_report = addNode('Report', feature_framework);
const feature_framework_dashboard = addNode('Dashboard', feature_framework_report);
const feature_framework_report_sales = addNode('Sales', feature_framework_report);
const feature_framework_report_purchase = addNode('Purchase', feature_framework_report);

const feature_framework_myob = addNode('MyOB upload', feature_framework);
const feature_framework_myob_sales = addNode('Sales orders', feature_framework_myob);
const feature_framework_myob_sales_details = addNode('details', feature_framework_myob_sales);
const feature_framework_myob_sales_payments = addNode('payments', feature_framework_myob_sales);
const feature_framework_myob_bills = addNode('Supplier Bills', feature_framework_myob);


// Feature Datrix Sync
const feature_datrix_sync = addNode('Datrix Sync', root);

const feature_datrix_sync_order_download = addNode('Orders download', feature_datrix_sync);
const feature_datrix_sync_order_download_orders = addNode('Orders', feature_datrix_sync_order_download);
const feature_datrix_sync_order_download_customer = addNode('Customers', feature_datrix_sync_order_download);
const feature_datrix_sync_order_download_delivery = addNode('Deliveries', feature_datrix_sync_order_download);

const feature_datrix_sync_product_download = addNode('Products download', feature_datrix_sync);
const feature_datrix_sync_product_download_products = addNode('Products', feature_datrix_sync_product_download);
const feature_datrix_sync_product_download_specs = addNode('Specs', feature_datrix_sync_product_download);
const feature_datrix_sync_product_download_machines = addNode('Machines', feature_datrix_sync_product_download);
const feature_datrix_sync_product_download_categories = addNode('Categories', feature_datrix_sync_product_download);
const feature_datrix_sync_product_download_bom = addNode('BOM', feature_datrix_sync_product_download);
const feature_datrix_sync_product_download_bom_bom = addNode('BOM details', feature_datrix_sync_product_download_bom);
const feature_datrix_sync_product_download_bom_items = addNode('BOM line item', feature_datrix_sync_product_download_bom);

const feature_datrix_sync_po_download = addNode('PurchaseOrders download', feature_datrix_sync);
const feature_datrix_sync_po_download_po = addNode('PO details', feature_datrix_sync_po_download);
const feature_datrix_sync_po_download_suppliers = addNode('Suppliers', feature_datrix_sync_po_download);


const feature_datrix_sync_job_download = addNode('Jobs Sync', feature_datrix_sync);
const feature_datrix_sync_job_download_details = addNode('Sync Job Details', feature_datrix_sync_job_download);
const feature_datrix_sync_job_download_losttime = addNode('Sync Lost Time', feature_datrix_sync_job_download);


const feature_datrix_sync_inventory_upload = addNode('Inventory Sync', feature_datrix_sync);
const feature_datrix_sync_inventory_upload_stocktake = addNode('Stocktake upload', feature_datrix_sync_inventory_upload);

